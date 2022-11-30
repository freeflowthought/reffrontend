import { Button, Tag, Text, Stack } from "@chakra-ui/react";
import { Card, CardHeader, CardFooter, CardBody } from "components/card";
import { Job } from "store/service/job";
import { useRouter } from 'next/router';

interface JobCardProps {
  job: Job;
}

export const JobCard = ({ job }: JobCardProps) => {
  const router = useRouter()
  return (
    <Card onClick={() => {
       router.push(`/job/${job.id}`)
    }}>
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
          <Text
            mt="12px"
            overflow="hidden"
            webkit-box-orient="vertical"
            webkit-line-clamp="2"
            wordBreak={"break-word"}
            opacity={0.6}
          >
            {job.description}
          </Text>
          <Text mt="12px">{job.location}</Text>
        </>
      </CardBody>
      <CardFooter>
        <Button
          maxW={"50%"}
          flex={1}
          fontSize={"sm"}
          rounded={"full"}
          _focus={{
            bg: "gray.200",
          }}
        >
          Apply
        </Button>
        {/* <Button
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
        </Button> */}
      </CardFooter>
    </Card>
  );
};
