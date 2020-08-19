import { createContext } from "react";
import { createTheming, createUseStyles } from "react-jss";
import { StyleSheetFactoryOptions } from "jss";
import { Theming } from "theming";

export class AppTheme {
  // begin remove these and use palette colors.
  borderDefault = "1px solid #B7C2C6";
  navDropShadow = "0px 5px 5px #EEEEEE";
  navLogoSize = "36px";
  transitionTime = "250ms";
  // end remove

  // Inter font does not support italics
  font = {
    thin: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "100"
    },
    extraLight: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "200"
    },
    light: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "300"
    },
    regular: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "400"
    },
    medium: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "500"
    },
    semiBold: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "600"
    },
    bold: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "700"
    },
    extraBold: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "800"
    },
    black: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "900"
    }
  };

  /** Colors used in the application, do not add colors without reviewing with feature team leads. */
  palette = {
    white: "#ffffff",
    transparent: "transparent",
    primary: {
      /** Use cases: Primary Actions */
      fsBlue: "#149EC6",
      /** Use cases: Hover */
      fsBluePrimary: "#1487AB",
      /** Use cases: Hover */
      fsBlueSecondary: "#E7F5F9",
      /** Use cases: Navigation BG, Text */
      fsDarkBlue: "#162E3F",
      /** Use cases: Sub-Navigation Menu */
      fsDarkBlueSub: "#2D4253"
    },
    secondary: {
      /** Use cases: Icons */
      turquoise: "#5EBFC0",
      /** Use cases: Icons/Error */
      red: "#C76767",
      /** Use cases: Icons/Status */
      green: "#91C340",
      /** Use cases: Icons/Status */
      yellow: "#EDC53E"
    },
    grays: {
      /** Use cases: Text */
      dark: "#3F4750",
      /** Use cases: Disabled Text Labels */
      neutralWarm: "#A5A9B0",
      /** Use cases: Dividers */
      neutralCool: "#B7C2C6",
      /** Use cases: Product Background */
      light: "#EAECF1",
      /** Use cases: Component Background, Zebra Striping */
      extraLight: "#F6F7FA",
      /** Use cases: SideNav divider */
      neutralCoolTransparent: "rgba(183,194,198,0.3)"
    },
    opacity: {
      // https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4
      alpha60: "99", // 60%
      alpha30: "4D" // 30%
    },
    chart: {
      primary: {
        blue: "#4472C4",
        orange: "#ED7D31",
        gray: "#A5A5A5",
        yellow: "#FFC000",
        purple: "#AA77B4"
      },
      secondary: {
        green: "#70AD47"
      }
    }
  };
  scales = {
    spacing: {
      xsmall: 2,
      small: 4,
      normal: 8,
      medium: 20,
      large: 40
    },
    input: {
      widths: {
        xsmall: 84,
        small: 170,
        medium: 400,
        large: 810
      },
      height: {
        xsmall: 28,
        small: 36,
        medium: 48,
        large: 132
      }
    },
    icon: {
      xxsmall: 12,
      xsmall: 16,
      small: 20,
      medium: 24
    },
    button: {
      widths: {
        small: 134,
        medium: 190
      }
    },
    page: {
      maxWidth: 1280
    },
    tooltip: {
      minWidth: 150
    },
    grid: {
      width: {
        xsmall: 50,
        small: 100
      },
      padding: 20,
      paddingTop: 14,
      paddingBottom: 14
    }
  };
  zIndex = {
    popup: 10,
    overlay: 20,
    overlayContent: 21,
    tooltip: 100
  };
}

const defaultTheme = new AppTheme();

const themeContext = createContext(defaultTheme);
const siteTheming = createTheming(themeContext);
const { ThemeProvider, useTheme } = siteTheming;

const createUseStylesFactory = function <T extends object>(
  theming: Theming<T>
) {
  return function <C extends string>(
    styles: (theme: T) => Record<C, any>,
    options?: {
      index?: number;
      name?: string;
    } & StyleSheetFactoryOptions
  ) {
    return createUseStyles(styles, { ...options, theming: theming as any });
  };
};

var createThemedUseStyles = createUseStylesFactory(siteTheming);

export {
  ThemeProvider,
  useTheme,
  defaultTheme,
  siteTheming as theming,
  createThemedUseStyles
};
