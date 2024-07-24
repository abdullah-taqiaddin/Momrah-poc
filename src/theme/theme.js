// theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Tab: {
      flex: "1",
    },
    Tabs: {
      variants: {
        customUnderline: {
          tab: {
            flex: "1",
            textAlign: "center",
            whiteSpace: "nowrap",
            borderBottomWidth: "1px",
            borderColor: "gray.300",
            _selected: {
              fontWeight: "600",
              color: "black",
              borderColor: "#1B8354",
              borderBottomWidth: "2px",
            },
          },
        },
      },
    },
    CustomTab: {
      baseStyle: {
        flex: "1",
        textAlign: "center",
        _selected: {
          svg: {
            path: {
              fill: "#1B8354",
            },
          },
        },
      },
    },
    Button: {
      variants: {
        primary: {
          cursor: "pointer",
          display: "inline-flex",
          height: "44px",
          minHeight: "44px",
          maxHeight: "44px",
          padding: "0 16px",
          justifyContent: "center",
          alignItems: "center",
          gap: "4px",
          flexShrink: 0,
          borderRadius: "4px",
          background: "#1B8354",
          color: "#FFF",
          fontFamily: "IBM Plex Sans",
          fontSize: "16px",
          fontWeight: "500",
          lineHeight: "24px",
          _hover: {
            background: "#104631",
          },
        },
        secondary: {
          cursor: "pointer",
          display: "inline-flex",
          height: "44px",
          minHeight: "44px",
          maxHeight: "44px",
          padding: "0 16px",
          justifyContent: "center",
          alignItems: "center",
          gap: "4px",
          flexShrink: 0,
          borderRadius: "4px",
          background: "transparent",
          color: "black",
          border: "0.1rem solid #D2D6DB",
          fontFamily: "IBM Plex Sans",
          fontSize: "16px",
          fontWeight: "500",
          lineHeight: "24px",
          _hover: {
            background: "#D2D6DB",
            color: "#000",
          },
        },
        ghost: {
          cursor: "pointer",
          display: "inline-flex",
          height: "44px",
          minHeight: "44px",
          maxHeight: "44px",
          padding: "0 16px",
          justifyContent: "center",
          alignItems: "center",
          gap: "4px",
          flexShrink: 0,
          borderRadius: "4px",
          background: "transparent",
          color: "#FFF",
          border: "0.1rem solid #D2D6DB",
          fontFamily: "IBM Plex Sans",
          fontSize: "16px",
          fontWeight: "500",
          lineHeight: "24px",
          _hover: {
            background: "#D2D6DB",
            color: "#000",
          },
        },
      },
    },
  },
});

export default theme;
