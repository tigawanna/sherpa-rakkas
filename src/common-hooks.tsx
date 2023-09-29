import { CommonHooks } from "rakkasjs";

export default {
  wrapApp(app) {
    // return <MantineProvider theme={theme}>{app}</MantineProvider>;
    return app
  },
} satisfies CommonHooks;
