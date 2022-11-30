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
} from "@chakra-ui/react";
import { Card, CardBody, CardFooter, CardProps } from "../card";

export interface UserCardProps extends CardProps {
  avatar?: string;
  bgImg?: string;
  name?: string;
}

export function UserCard({ avatar, bgImg, name, children }: UserCardProps) {
  return (
    <Card>
      <Image
        h={"120px"}
        w={"full"}
        src={bgImg}
        objectFit={"cover"}
        alt="background"
      />
      <Flex justify={"center"} mt={-12}>
        <Avatar
          size={"xl"}
          src={avatar}
          css={{
            border: "2px solid white",
          }}
        />
      </Flex>

      <Box p={6}>
        <Stack spacing={0} align={"center"} mb={5}>
          <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
            {name}
          </Heading>
          <Text color={"gray.500"}>Frontend Developer</Text>
        </Stack>

        <Stack direction={"row"} justify={"center"} spacing={6}>
          <Stack spacing={0} align={"center"}>
            <Text fontWeight={600}>23k</Text>
            <Text fontSize={"sm"} color={"gray.500"}>
              Followers
            </Text>
          </Stack>
          <Stack spacing={0} align={"center"}>
            <Text fontWeight={600}>23k</Text>
            <Text fontSize={"sm"} color={"gray.500"}>
              Followers
            </Text>
          </Stack>
        </Stack>
        <CardBody>
           {children}
        </CardBody>
        <CardFooter>
        <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            _focus={{
              bg: 'gray.200',
            }}>
            Message
          </Button>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}>
            Follow
          </Button>
        </CardFooter>
      </Box>
    </Card>
  );
}
