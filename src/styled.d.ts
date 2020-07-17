import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    typography: {
      h1: {
        fontSize: string;
        lineHeight: string;
        fontWeight: string;
      };
      h2: {
        fontSize: string;
        lineHeight: string;
        fontWeight: string;
      };
      body1: {
        fontSize: string;
        lineHeight: string;
      };
      body2: {
        fontSize: string;
        lineHeight: string;
      };
    };
    colors: {
      common: {
        black: string;
        white: string;
      };
      primary: {
        contrastText: string;
        main: string;
        light: string;
      };
      secondary: {
        contrastText: string;
        main: string;
      };
      text: {
        main: string;
      };
      gray: {
        dark: string;
        main: string;
        light: string;
      };
    };
    spacing: (unit: number) => string;
  }
}
