import { Box, Flex } from "@chakra-ui/react";
import { JobList } from "components/job/JobList";
import { Layout } from "components/layout";
import { Search } from "components/search";
import { observer } from "mobx-react-lite";
import { useDidMount } from "rooks";
import { useStore } from "store";

const Home = observer(() => {
  const { jobManager } = useStore();
  useDidMount(() => {
    jobManager.setJobs([{
      id: 1,
      description: "This is a job description",
      tags: ["java", "db", "test"],
      title: "Soft Engineer",
    }])
  });

  return (
    <Flex align={"center"} direction="column">
      <Search></Search>
      <JobList></JobList>
    </Flex>
  );
});

// @ts-ignore
Home.Layout = Layout;

export default Home;
