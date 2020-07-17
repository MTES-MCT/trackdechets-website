import { DefaultTheme } from "styled-components";

const breakpoints = {
  medium: "60rem",
};

export const theme: DefaultTheme = {
  typography: {
    h1: {
      fontSize: "2rem",
      lineHeight: "1.2",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "1.2rem",
      lineHeight: "1.2",
      fontWeight: "bold",
    },
    body1: {
      fontSize: "1.2rem",
      lineHeight: "1.6",
    },
    body2: {
      fontSize: "1rem",
      lineHeight: "1.6",
    },
  },
  colors: {
    common: {
      focus: "#549bfe",
      black: "#060606",
      white: "#fff",
    },
    primary: {
      contrastText: "#fff",
      dark: "#000075",
      main: "#000092",
    },
    secondary: {
      contrastText: "#fff",
      dark: "#cb0005",
      main: "#e20007",
    },
    text: {
      main: "#1E1E1E",
    },
    gray: {
      dark: "#979797",
      main: "#CECECE",
      light: "#F0F0F0",
    },
  },
  spacing: (unit: number) => `${unit * 0.5}rem`,
  breakpoints: {
    up: (size: "medium") => `(min-width: ${breakpoints[size]})`,
  },
};
