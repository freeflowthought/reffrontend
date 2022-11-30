import { Box, Center, Flex } from "@chakra-ui/react";
import { JobList } from "components/job/JobList";
import { Layout } from "components/layout";
import { Search } from "components/search";
import { observer } from "mobx-react-lite";
import { useDidMount } from "rooks";
import { useStore } from "store";

const Applications = observer(() => {
  const { applicationsController } = useStore();
  useDidMount(() => {
    applicationsController.getApplications();
  });

  return (
    <Flex p="24px" align={"center"} flexDir="column">

    </Flex>
  );
});

// @ts-ignore
Applications.Layout = Layout;

export default Applications;
