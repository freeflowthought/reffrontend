import { queryApplicationById, queryApplications } from "apis/application"
import { makeAutoObservable } from "mobx"

export class Application {
    id: number | undefined
    jobId: number | undefined
    constructor(arg?: Partial<Application>) {
        if (arg !== undefined && arg !== null) {
            Object.assign(this, arg)
        }
        makeAutoObservable(this)
    }
}


export class ApplicationService {
    static _instance: ApplicationService
    static getInstance() {
        return ApplicationService._instance || new ApplicationService()

    }
    async getApplications() {
        const applications = await queryApplications()
        return applications.map(application => new Application(application))
    }

    async getApplicationById(id: number) {
        const application = await queryApplicationById(id)
        return new Application(application)
    }
}
