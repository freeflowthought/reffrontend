
import { makeAutoObservable } from 'mobx';
export class SettingService {
    theme: "light" | "dark" = "light"
    constructor (arg?: Partial<SettingService>) {
        if (arg !== undefined && arg !== null) {
            Object.assign(this, arg)
        }
        makeAutoObservable(this)
    }
    changeTheme (theme: "light" | "dark") {
        if (theme) {
            this.theme = theme
        } else {
            this.theme = this.theme === "light" ? "dark" : "light"
        }
    }
}