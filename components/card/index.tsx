import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
  CenterProps,
  FlexProps,
  StackProps,
  useStyleConfig,
} from "@chakra-ui/react";

export interface CardProps extends CenterProps {}

export function Card({ children, ...restProps }: CardProps) {
  return (
    <Center p={6}  {...restProps}>
      <Box
        maxW={"270px"}
        w={"full"}
        p={6}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        {children}
      </Box>
    </Center>
  );
}

export interface CardFooterProps extends StackProps {}

export const CardFooter = ({children}: CardFooterProps) => {
  return <Stack mt={8} alignItems="center" justifyContent={"center"} direction={"row"} spacing={4}>{children}</Stack>;
};

export interface CardBodyProps extends CenterProps {}

export const CardBody = (props: CardBodyProps) => {
  //@ts-ignore
  const { variant, ...rest } = props;
  const styles = useStyleConfig("CardBody", { variant });

  return <Center _css={styles} flexDir="column" p="24px" py={6} {...rest} />;
};

export interface CardHeaderProps extends FlexProps {}

export const CardHeader = (props: CardHeaderProps) => {
  return <Flex p="12px" fontWeight={500} {...props} />;
};
