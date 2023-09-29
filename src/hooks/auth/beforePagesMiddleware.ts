import { RequestContext } from "rakkasjs";
import { Auth } from "@auth/core";
import type { Provider } from "@auth/core/providers";
import GitHubProvider from "@auth/core/providers/github";

export async function beforePageAuthJSMiddleware(ctx: RequestContext<unknown>) {
    // Only handle requests to /auth/*
    if (!ctx.url.pathname.match(/^\/auth(\/|$)/)) {
        return;
    }
    const {
        RAKKAS_SERVER_SECRET:SERVER_SECRET,
        RAKKAS_GITHUB_CLIENT_ID:GITHUB_CLIENT_ID,
        RAKKAS_GITHUB_CLIENT_SECRET:GITHUB_CLIENT_SECRET
    } = import.meta.env;

 

    if (!SERVER_SECRET) {
        throw new Error(
            "SERVER_SECRET environment variable is not set. " +
            "You can generate one with 'npm run gen-secret' and put it in a .env file in the root of the project.",
        );
    }

    const providers: Provider[] = [];
    // Authorization callback URL should look like this
    // http://localhost:5173/auth/callback/github
    if (GITHUB_CLIENT_ID && GITHUB_CLIENT_SECRET) {
        providers.push(
            GitHubProvider({
                clientId: GITHUB_CLIENT_ID,
                clientSecret: GITHUB_CLIENT_SECRET,
            }) as any,
        );
    } else {
        console.warn(
            "GitHub client ID and secret not set, GitHub login disabled",
        );
    }



    if (providers.length === 0) {
        throw new Error(
            "No authentication providers configured. " +
            "Set GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET and/or DISCORD_CLIENT_ID and DISCORD_CLIENT_SECRET. " +
            "You can put them in a .env file in the root of the project.",
        );
    }

    return Auth(
        new Request(ctx.url, {
            method: ctx.method,
            headers: ctx.request.headers,
            body: ctx.request.body,
            // @ts-expect-error: Node's fetch now requires this but types haven't been updated yet
            duplex: "half",
        }),
        {
            trustHost: true,
            secret: SERVER_SECRET,
            providers,
        },
    );
}
