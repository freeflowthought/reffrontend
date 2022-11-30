import { Box, Center, Flex } from "@chakra-ui/react";
import { JobList } from "components/job/JobList";
import { Layout } from "components/layout";
import { Search } from "components/search";
import { observer } from "mobx-react-lite";
import { useDidMount } from "rooks";
import { useStore } from "store";

const Profile = observer(() => {
  const { profileController } = useStore();
  useDidMount(() => {
    profileController.getProfile();
  });

  return (
    <Flex p="24px" align={"center"} flexDir="column">

    </Flex>
  );
});

// @ts-ignore
Profile.Layout = Layout;

export default Profile;
