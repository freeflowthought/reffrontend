import { Box, Center, Flex } from "@chakra-ui/react";
import { JobList } from "components/job/JobList";
import { Layout } from "components/layout";
import { Search } from "components/search";
import { observer } from "mobx-react-lite";
import { useDidMount } from "rooks";
import { useStore } from "store";

const Home = observer(() => {
  const { indexController } = useStore();
  useDidMount(() => {
    console.log('-------------')
    indexController.getJobs();
  });

  return (
    <Flex p="24px" align={"center"} flexDir="column">
      <Search></Search>
      <JobList alignSelf="flex-start" jobs={indexController.jobs}></JobList>
    </Flex>
  );
});

// @ts-ignore
Home.Layout = Layout;

export default Home;
