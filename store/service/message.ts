


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

export class MessageService {
    messages: Message[] = []
    constructor (arg?: Partial<MessageService>) {
        if (arg !== undefined && arg !== null) {
            Object.assign(this, arg)
        }
        makeAutoObservable(this)
    }
}