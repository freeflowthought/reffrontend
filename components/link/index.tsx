import { chakra, Link as ChakraLink, ChakraProps } from "@chakra-ui/react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { forwardRef, ForwardedRef } from "react";

export interface LinkProps extends NextLinkProps {
  nativeProps?: ChakraProps;
  children: React.ReactNode;
  variant?: string;
}

export const Link = (props: LinkProps) => {
  const { nativeProps, children, variant, ...restProps } = props;
  const variantProps =
    variant === "default"
      ? {
          color: "inherit !important",
          _hover: {
            color: "brand !important",
          },
        }
      : {};
  return (
    <NextLink {...restProps}>
      <ChakraLink {...variantProps} {...nativeProps}>
        {children}
      </ChakraLink>
    </NextLink>
  );
};
