import { makeAutoObservable } from "mobx"

export class Job {
    id: number | undefined
    description: string | undefined
    tags: string [] | undefined
    title: string | undefined
    constructor (arg?: Partial<Job>) {
        if (arg !== undefined && arg !== null) {
            Object.assign(this, arg)
        }
        makeAutoObservable(this)
    }
    message () {

    }
    follow () {
        
    }
}

export class JobManager { 
    jobs: Job[] = []
    constructor (arg?: Partial<JobManager>) {
        if (arg !== undefined && arg !== null) {
            Object.assign(this, arg)
        }
        makeAutoObservable(this)
    }
    setJobs (jobs: Partial<Job>[]) {
       this.jobs = jobs.map(job => new Job(job))
    }
}