import {
  Box,
  Center,
  Flex,
  ChakraProps,
  Card,
  CardBody,
  Text
} from "@chakra-ui/react";
import { JobList } from "components/job/JobList";
import { Layout } from "components/layout";
import { Search } from "components/search";
import { observer } from "mobx-react-lite";
import { useDidMount } from "rooks";
import { useStore } from "store";
import { User } from "store/service/user";
interface PersonalSummaryProps extends ChakraProps {}

const PersonalSummary = observer(({ ...restProps }: PersonalSummaryProps) => {
  const { profileController } = useStore();
  return (
    <Flex flexDir={"column"} {...restProps}>
      <Card variant={"outline"}>
        <CardBody>
          <Text>{profileController.myProfile?.name}</Text>
        </CardBody>
      </Card>
    </Flex>
  );
})

const Profile = observer(() => {
  const { profileController } = useStore();
  useDidMount(() => {
    profileController.getProfile();
  });

  return (
    <Flex p="24px">
      <JobList flex={1} jobs={profileController.currentUserJobs || []}></JobList>
      <PersonalSummary flexBasis={"200px"}></PersonalSummary>
    </Flex>
  );
});

// @ts-ignore
Profile.Layout = Layout;

export default Profile;
