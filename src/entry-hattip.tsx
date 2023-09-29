import { createRequestHandler } from "rakkasjs";
import { cookie } from "@hattip/cookie";

export default createRequestHandler({
  middleware: {
    // HatTip middleware to be injected
    // before the page routes handler.
    beforePages: [cookie()],
    // HatTip middleware to be injected
    // after the page routes handler but
    // before the API routes handler
    beforeApiRoutes: [],
    // HatTip middleware to be injected
    // after the API routes handler but
    // before the 404 handler
    beforeNotFound: [],
  },

  createPageHooks(ctx) {
    return {
      emitBeforeSsrChunk() {
        // Return a string to emit into React's
        // SSR stream just before React emits a
        // chunk of the page.
        return "";
      },

      emitToDocumentHead() {
        // Return a string or ReactElement to emit
        // some HTML into the document's head.
        const cookie_theme = ctx?.cookie?.theme;
        return `
      <script>
      (function() {
        document.documentElement.setAttribute("data-theme", "${cookie_theme}");
      })();
     </script>`;
      },

      extendPageContext(pageContext) {
        // Add properties to the page context,
        // especially to pageContext.locals.
        // Extensions added here will only be
        // available on the server-side.
      },

      wrapApp(app) {
        // Wrap the Rakkas application in some provider
        // component (only on the server).
        // return <SomeProvider>{app}</SomeProvider>;
        return app;
      },

      //   wrapSsrStream(stream) {
      //     const { readable, writable } = new TransformStream({
      //       transform(chunk, controller) {
      //         // You can transform the chunks of the
      //         // React SSR stream here.
      //         controller.enqueue(chunk);
      //       },
      //     });
      // // @ts-expect-error
      //     stream.pipeThrough(writable);

      //     return readable;
      //   },
    };
  },
});
