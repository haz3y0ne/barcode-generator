import { createTheme } from "@mui/material";

export const bCodeProTheme = createTheme({
  palette: {
    primary: {
      main: "hsla(354, 90%, 44%, 1)",
      light: "hsla(354, 75%, 65%, 1)",
      dark: "hsla(354, 92%, 30%, 1)",
      contrastText: "hsla(0, 0%, 100%, 1)",
    },
    secondary: {
      main: "hsla(14, 100%, 57%, 1)",
      light: "hsla(14, 100%, 70%, 1)",
      dark: "hsla(14, 100%, 38%, 1)",
      contrastText: "hsla(0, 0%, 100%, 1)",
    },
    background: {
      default: "hsla(0, 0%, 95%, 1)",
      paper: "hsla(0, 0%, 100%, 1)",
    },
    text: {
      primary: "hsla(0, 0%, 0%, 1)",
      secondary: "hsla(0, 0%, 40%, 1)",
    },
  },
});

export const customShades = {
  primary: {
    100: "hsla(354, 72%, 94%, 1)",
    200: "hsla(354, 68%, 85%, 1)",
    300: "hsla(354, 66%, 74%, 1)",
    400: "hsla(354, 63%, 63%, 1)",
    500: "hsla(354, 59%, 53%, 1)",
    600: "hsla(354, 90%, 44%, 1)",
    700: "hsla(354, 98%, 40%, 1)",
    800: "hsla(354, 100%, 33%, 1)",
    900: "hsla(354, 100%, 27%, 1)",
  },
};
