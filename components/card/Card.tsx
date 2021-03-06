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
} from "@chakra-ui/react";

export interface CardProps extends CenterProps {}

export function Card({ children, ...restProps }: CardProps) {
  return (
    <Center py={6} {...restProps}>
      <Box
        maxW={"270px"}
        w={"full"}
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

export interface CardFooterProps extends StackProps{

}

export const CardFooter = (props :CardFooterProps) => {
    return (
        <Stack mt={8} direction={'row'} spacing={4} />
    )
}

export interface CardBodyProps extends CenterProps{

}

export const CardBody = (props :CardFooterProps) => {
    return (
        <Center flexDir="column" p="24px" py={6} {...props} />
    )
}


export interface CardHeaderProps extends FlexProps{

}

export const CardHeader = (props :CardHeaderProps) => {
    return (
        <Flex p="12px" fontWeight={500} {...props} />
    )
}