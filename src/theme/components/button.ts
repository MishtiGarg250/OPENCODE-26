import { StyleFunctionProps } from "@chakra-ui/theme-tools";

export const buttonStyles = {
  components: {
    Button: {
      baseStyle: {
        borderRadius: "9999px",
        fontFamily: "var(--f-body), sans-serif",
<<<<<<< HEAD
        fontWeight: "500",
        transition: "transform .2s ease, background .2s ease, box-shadow .2s ease",
=======
        fontWeight: "600",
        transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
>>>>>>> 41a2e192442375ced406f4735c79bbc839efac21
        boxSizing: "border-box",
        _focusVisible: {
          outline: "2px solid var(--accent)",
          outlineOffset: "2px",
          boxShadow: "none",
        },
      },
      variants: {
<<<<<<< HEAD
        outline: () => ({
          borderRadius: "9999px",
          borderColor: "var(--line)",
          color: "var(--fg)",
          _hover: {
            bg: "var(--surface-2)",
            transform: "translateY(-1px)",
          },
        }),
        brand: (props: StyleFunctionProps) => ({
          bg: mode("brand.500", "brand.200")(props),
          color: mode("white", "#2a1420")(props),
          borderRadius: "9999px",
          boxShadow: mode("0 12px 36px -10px rgba(192, 74, 103, 0.4)", "0 12px 36px -10px rgba(240, 168, 184, 0.4)")(props),
          _focus: {
            bg: mode("brand.500", "brand.200")(props),
          },
          _active: {
            bg: mode("brand.500", "brand.200")(props),
=======
        solid: {
          bg: "var(--accent)",
          color: "var(--accent-ink)",
          borderRadius: "9999px",
          boxShadow: "0 10px 28px -8px var(--accent)",
          _hover: {
            bg: "var(--accent-hover)",
            transform: "translateY(-1.5px)",
            boxShadow: "0 14px 32px -6px var(--accent)",
            _disabled: {
              bg: "var(--accent)",
              transform: "none",
            },
          },
          _active: {
            transform: "translateY(0)",
>>>>>>> 41a2e192442375ced406f4735c79bbc839efac21
          },
        },
        ghost: {
          borderRadius: "9999px",
          color: "var(--muted)",
          bg: "transparent",
          _hover: {
<<<<<<< HEAD
            bg: mode("brand.600", "brand.100")(props),
            transform: "translateY(-2px)",
          },
        }),
        darkBrand: (props: StyleFunctionProps) => ({
          bg: mode("brand.900", "brand.400")(props),
          color: "white",
          borderRadius: "9999px",
          _focus: {
            bg: mode("brand.900", "brand.400")(props),
=======
            bg: "var(--surface-2)",
            color: "var(--fg)",
            transform: "translateY(-1px)",
>>>>>>> 41a2e192442375ced406f4735c79bbc839efac21
          },
          _active: {
            transform: "translateY(0)",
          },
        },
        outline: {
          borderRadius: "9999px",
          border: "1px solid",
          borderColor: "var(--border)",
          bg: "var(--surface)",
          color: "var(--fg)",
          backdropFilter: "blur(16px)",
          _hover: {
<<<<<<< HEAD
            bg: mode("brand.800", "brand.300")(props),
            transform: "translateY(-1px)",
          },
        }),
        lightBrand: (props: StyleFunctionProps) => ({
          bg: mode("#F2EFFF", "whiteAlpha.100")(props),
          color: mode("brand.500", "white")(props),
          _focus: {
            bg: mode("#F2EFFF", "whiteAlpha.100")(props),
=======
            bg: "var(--accent-soft)",
            borderColor: "var(--accent)",
            color: "var(--accent)",
            transform: "translateY(-1px)",
>>>>>>> 41a2e192442375ced406f4735c79bbc839efac21
          },
          _active: {
            transform: "translateY(0)",
          },
        },
        secondary: {
          bg: "var(--secondary)",
          color: "var(--secondary-ink)",
          borderRadius: "9999px",
          fontWeight: "600",
          boxShadow: "0 8px 24px -6px var(--secondary-soft)",
          _hover: {
            bg: "var(--secondary-hover)",
            transform: "translateY(-1.5px)",
            boxShadow: "0 12px 28px -4px var(--secondary-soft)",
          },
          _active: {
            transform: "translateY(0)",
          },
        },
        brand: {
          bg: "var(--accent)",
          color: "var(--accent-ink)",
          borderRadius: "9999px",
          boxShadow: "0 10px 28px -8px var(--accent)",
          _hover: {
            bg: "var(--accent-hover)",
            transform: "translateY(-1.5px)",
          },
          _active: {
            transform: "translateY(0)",
          },
        },
        darkBrand: {
          bg: "var(--surface-raised)",
          color: "var(--fg)",
          border: "1px solid var(--border)",
          borderRadius: "9999px",
          _hover: {
            bg: "var(--surface-2)",
            borderColor: "var(--border-strong)",
            transform: "translateY(-1px)",
          },
          _active: {
            transform: "translateY(0)",
          },
        },
        lightBrand: {
          bg: "var(--accent-soft)",
          color: "var(--accent)",
          border: "1px solid var(--border-accent)",
          borderRadius: "9999px",
          _hover: {
            bg: "var(--accent)",
            color: "var(--accent-ink)",
            transform: "translateY(-1px)",
          },
          _active: {
            transform: "translateY(0)",
          },
        },
        light: {
          bg: "var(--surface-2)",
          color: "var(--fg)",
          border: "1px solid var(--border)",
          borderRadius: "9999px",
          _hover: {
            bg: "var(--surface-raised)",
            borderColor: "var(--border-strong)",
            transform: "translateY(-1px)",
          },
          _active: {
            transform: "translateY(0)",
          },
        },
        action: {
          borderRadius: "9999px",
          bg: "var(--accent)",
          color: "var(--accent-ink)",
          _hover: {
            bg: "var(--accent-hover)",
            transform: "translateY(-1px)",
          },
        },
        setup: {
          borderRadius: "9999px",
          bg: "var(--surface-2)",
          border: "1px solid var(--border)",
          color: "var(--fg)",
          _hover: {
            bg: "var(--accent-soft)",
            borderColor: "var(--accent)",
            color: "var(--accent)",
            transform: "translateY(-1px)",
          },
        },
      },
    },
  },
};
