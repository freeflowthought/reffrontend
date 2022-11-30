import { makeAutoObservable } from "mobx";
import { Job, JobService } from "store/service/job";

export class JobController {
  job: Job[] = [];
  constructor() {
    makeAutoObservable(this)
  }
  async getJobs(id: number) {
    const job = await JobService.getJobById(id);
    this.job = job;
  }
}
