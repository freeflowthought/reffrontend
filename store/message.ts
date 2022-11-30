


import { makeAutoObservable } from 'mobx';
export class Message {
    id: string | undefined
    content: string | undefined
    constructor (arg?: Partial<Message>) {
        if (arg !== undefined && arg !== null) {
            Object.assign(this, arg)
        }
        makeAutoObservable(this)
    }
}

export class MessageManager {
    messages: Message[] = []
    constructor (arg?: Partial<MessageManager>) {
        if (arg !== undefined && arg !== null) {
            Object.assign(this, arg)
        }
        makeAutoObservable(this)
    }
}