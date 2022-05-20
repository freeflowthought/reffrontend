import { Stack } from "@chakra-ui/react"
import { observer } from "mobx-react-lite"
import { useStore } from "store"
import { JobCard } from "./JobCard"

export const JobList = observer(() => {
    const { jobManager } = useStore()
    return (
        <Stack direction={"row"} >
            {jobManager.jobs.map(job => (
                <JobCard key={job.id} job={job}></JobCard>
            ))}
        </Stack>
    )
})