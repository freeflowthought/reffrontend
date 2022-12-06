import { makeAutoObservable } from "mobx";
import { User, UserService } from "store/service/user";
import { JobService, Job } from '../service/job';

export class ProfileController{
   myProfile: User = new User()
   userService = UserService.getInstance()
   jobService = JobService.getInstance()
   currentUserJobs: Job [] = []
    constructor(){
        makeAutoObservable(this)
    }
    

    async getProfile () {
        const [user, jobs] = await Promise.all([this.userService.getCurrentUser(), this.jobService.getJobsByUser(this.userService.currentUser?.id || 0)])
        this.myProfile = user
        this.currentUserJobs = jobs
    }
}