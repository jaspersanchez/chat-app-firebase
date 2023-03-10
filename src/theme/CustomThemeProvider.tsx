import React from "react";
import { useSelector } from "react-redux";

import { AppState } from "../state/store/store";

import { createTheme, ThemeProvider } from "@mui/material";

interface IProps {
  children: React.ReactNode;
}

const CustomThemeProvider = ({ children }: IProps) => {
  const darkThemeEnabled = useSelector(
    (state: AppState) => state.darkThemeEnabled
  );

  const defaultTheme = createTheme({});

  const theme = createTheme({
    palette: {
      mode: darkThemeEnabled ? "dark" : "light",
    },

    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            whiteSpace: "nowrap",
          },

          "*::-webkit-scrollbar": {
            width: "10px",
          },

          "*::-webkit-scrollbar-track": {
            backgroundColor: "transparent",
          },

          "*::-webkit-scrollbar-thumb": {
            backgroundColor: defaultTheme.palette.action.disabled,
            borderRadius: "20px",
            width: "10px",
          },

          [defaultTheme.breakpoints.down("sm")]: {
            "*::-webkit-scrollbar": {
              width: "0px",
            },
          },
        },
      },
      MuiListItemIcon: {
        styleOverrides: {
          root: {
            minWidth: 0,
            marginRight: defaultTheme.spacing(1.5),
          },
        },
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
