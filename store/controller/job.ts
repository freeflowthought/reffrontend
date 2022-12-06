import { makeAutoObservable } from "mobx";
import { Job, JobService } from "store/service/job";

export class JobController {
  currentJob: Job  = new Job()
  jobService = JobService.getInstance()
  constructor() {
    makeAutoObservable(this)
  }
  async getJobs(id: number) {
    const job = await this.jobService.getJobById(id);
    this.currentJob = job;
  }
  setCurrentJob (job: Job) {
    this.currentJob = new Job(job)
  }
}
