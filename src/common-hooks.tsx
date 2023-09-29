import { CommonHooks } from "rakkasjs";
import { MantineColorsTuple, MantineProvider, createTheme } from "@mantine/core";

const BrownColor: MantineColorsTuple = [
  "#f7f3f2",
  "#e7e5e5",
  "#d2c9c6",
  "#bdaaa4",
  "#ab9087",
  "#a17f75",
  "#9d766b",
  "#896459",
  "#7b584e",
  "#6d4b40",
];
const theme = createTheme({
  /** Put your mantine theme override here */
  colors: {
    brown:BrownColor,
  },
  primaryColor: "brown",
 
});

export default {
  wrapApp(app) {
    return <MantineProvider theme={theme}>{app}</MantineProvider>;
  },
} satisfies CommonHooks;
