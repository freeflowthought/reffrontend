import { ChakraProps, SimpleGrid, Stack } from "@chakra-ui/react"
import { observer } from "mobx-react-lite"
import { useStore } from "store"
import { JobCard, JobCardProps } from "./JobCard"
import { Job } from 'store/service/job';


interface Props extends ChakraProps, Omit<JobCardProps, 'job'>{
    jobs: Job[]
}

export const JobList = observer(({jobs, onApply,...restProps}: Props) => {
    return (
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' {...restProps}>
            {jobs.map(job => (
                <JobCard  key={job.id} job={job}></JobCard>
            ))}
        </SimpleGrid>
    )
})