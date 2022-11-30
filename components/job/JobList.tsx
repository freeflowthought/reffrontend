import { ChakraProps, SimpleGrid, Stack } from "@chakra-ui/react"
import { observer } from "mobx-react-lite"
import { useStore } from "store"
import { JobCard } from "./JobCard"
import { Job } from 'store/service/job';


interface Props extends ChakraProps{
    jobs: Job[]
}

export const JobList = observer(({jobs, ...restProps}: Props) => {
    return (
        <SimpleGrid columns={[4,3,2]} {...restProps}>
            {jobs.map(job => (
                <JobCard key={job.id} job={job}></JobCard>
            ))}
        </SimpleGrid>
    )
})