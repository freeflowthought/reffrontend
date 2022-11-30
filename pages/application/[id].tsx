import { Box, Center, Flex } from "@chakra-ui/react";
import { JobList } from "components/job/JobList";
import { Layout } from "components/layout";
import { Search } from "components/search";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import { useDidMount } from "rooks";
import { useStore } from "store";

const Application = observer(() => {
  const { applicationController } = useStore();
  const { pathname } = useRouter()
  useDidMount(() => {
    applicationController.getApplicationById(Number(pathname));
  });

  return (
    <Flex p="24px" align={"center"} flexDir="column">

    </Flex>
  );
});

// @ts-ignore
Application.Layout = Layout;

export default Application;
