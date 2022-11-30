import { makeAutoObservable } from "mobx";
import { User, UserService } from "store/service/user";

export class ProfileController{
   myProfile: User = new User()
    constructor(){
        makeAutoObservable(this)
    }

    async getProfile () {
        const user = await UserService.getCurrentUser()
        this.myProfile = user
    }
}