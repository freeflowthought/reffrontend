import { queryJobs, queryJobById, queryJobsByConditions, applyJob, getJobsByUser } from "apis/job"
import { makeAutoObservable } from "mobx"

export class Job {
    id: number | undefined = undefined
    status: 'completed' | 'pending' = 'pending'
    description = ''
    tags: string[] = []
    title = ''
    type: 'remote' | 'local' = 'remote'
    location = ''
    company = ''
    salary = ''
    constructor(arg?: Partial<Job>) {
        if (arg !== undefined && arg !== null) {
            Object.assign(this, arg)
        }
        makeAutoObservable(this)
    }
    message() {

    }
    follow() {

    }
}

export class JobService {
    static _instance: JobService
    static getInstance() {
        return JobService._instance || new JobService()

    }
    async getJobs() {
        const jobs = await queryJobs()
        return jobs.map(job => new Job(job))
    }
    async getJobById(id: number) {
        const job = await queryJobById(id)
        return new Job(job)
    }
    async getJobsByConditions(job: Partial<Job>) {
        const jobs = await queryJobsByConditions(job)
        return jobs.map(job => new Job(job))
    }
    async applyJob(id: number) {
        await applyJob(id)
    }

    async getJobsByUser (userId: number) {
        const jobs = await getJobsByUser(userId)
        return jobs.map(job => new Job(job))

    }
}