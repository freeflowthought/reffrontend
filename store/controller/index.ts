import { makeAutoObservable } from "mobx";
import { Job, JobService } from "store/service/job";

export class IndexController {
  jobs: Job[] = [];
  constructor() {
    makeAutoObservable(this)
  }
  async getJobs() {
    const jobs = await JobService.getJobs();
    this.jobs = jobs;
  }
}
