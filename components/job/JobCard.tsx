import {
  Button,
  Tag,
  Text,
  Stack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { Job } from "store/service/job";
import { useRouter } from "next/router";
import { useState } from "react";

export interface JobCardProps {
  job: Job;
  onApply?: (id: number) => Promise<void>;
}

export const JobCard = ({ job, onApply }: JobCardProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  return (
    <Card
      _hover={{ boxShadow: "2xl" }}
      variant={"outline"}
      cursor="pointer"
      onClick={() => {
        router.push(`/job/${job.id}`);
      }}
    >
      <CardHeader pb="0">{job.title}</CardHeader>
      <CardBody pt={0}>
        <>
          <Text mt="12px">{job.salary}</Text>
          <Stack mt="12px" direction={"row"}>
            {job.tags?.map((tag) => (
              <Tag size="md" key={tag}>
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
          <Flex justifyContent={"space-between"}>
            <Text mt="12px">{job.location}</Text>
            <Text mt="12px">
              <Tag>{job.type}</Tag>
            </Text>
          </Flex>
        </>
      </CardBody>
      <CardFooter pt={0} justifyContent={"center"}>
        <Button
          w={"full"}
          mt={8}
          // bg={'blue.400'}
          // color={'white'}
          // boxShadow={
          //   '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
          // }
          // _focus={{
          //   bg: 'blue.500',
          // }}
          
                      rounded={"md"}
          isLoading={loading}
          onClick={async (e) => {
            e.preventDefault();
            e.stopPropagation();
            setLoading(true);
            try {
              await onApply?.(job.id as number);
            } catch (error) {}
            setLoading(false);
          }}
          // _hover={{
          //   transform: "translateY(-2px)",
          //   boxShadow: "lg",
          //   bg: 'blue.500',
          // }}
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
