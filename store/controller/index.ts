import { makeAutoObservable } from "mobx";
import { Job, JobService } from "store/service/job";

export class IndexController {
  jobs: Job[] = [];
  jobService = JobService.getInstance()
  constructor() {
    makeAutoObservable(this)
  }
  async getJobs() {
    const jobs = await this.jobService.getJobs();
    this.jobs = jobs;
  }
  async seachJobs (condition: Partial<Job>) {
    const jobs = await this.jobService.getJobsByConditions(condition);
    this.jobs = jobs;
  }
  async applyJob (id: number) {
    await this.jobService.applyJob(id);
  }
}
