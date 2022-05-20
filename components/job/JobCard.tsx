import { Button, Tag, Text, Stack } from "@chakra-ui/react";
import { Card, CardHeader } from "components/card/Card";
import { Job } from "store/job";
import { CardBody, CardFooter } from "../card/Card";

interface JobCardProps {
  job: Job;
}

export const JobCard = ({ job }: JobCardProps) => {
  return (
    <Card>
      <CardHeader>{job.title}</CardHeader>
      <CardBody>
        <>
          <Stack direction={"row"}>
            {job.tags?.map((tag) => (
              <Tag colorScheme={"teal"} size="md" key={tag}>
                {tag}
              </Tag>
            ))}
          </Stack>
          <Text mt="12px">{job.description}</Text>
        </>
      </CardBody>
      <CardFooter>
        <Button
          flex={1}
          fontSize={"sm"}
          rounded={"full"}
          _focus={{
            bg: "gray.200",
          }}
        >
          Message
        </Button>
        <Button
          flex={1}
          fontSize={"sm"}
          rounded={"full"}
          bg={"blue.400"}
          color={"white"}
          boxShadow={
            "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
          }
          _hover={{
            bg: "blue.500",
          }}
          _focus={{
            bg: "blue.500",
          }}
        >
          Follow
        </Button>
      </CardFooter>
    </Card>
  );
};
