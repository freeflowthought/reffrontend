import { queryJobs, queryJobById } from "apis/job"
import { makeAutoObservable } from "mobx"

export class Job {
    id: number | undefined = undefined
    description = ''
    tags: string []  = []
    title = ''
    location = ''
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

export class JobService { 
    static async getJobs () {
       const jobs = await queryJobs()
       return jobs.map(job => new Job(job))
    }
    static async getJobById (id: number) {
        const job = await queryJobById(id)
        return new Job(job)
    }
}