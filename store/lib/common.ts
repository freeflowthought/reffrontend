import { makeAutoObservable } from 'mobx';
export class ValueState<T>{
    value: T | null = null;
    constructor(arg?: Partial<ValueState<T>>) {
        if (arg !== undefined && arg !== null) {
            Object.assign(this, arg)
        }
        makeAutoObservable(this)
    }
    setValue(value: T | null) {
        this.value = value
    }
}

export class AsyncState<T> {
    loading = false
    error: string = ''
    data: T | null = null
    _call: (args?: any) => Promise<T>
    constructor(func: (args?: any) => Promise<T>, options?:  {
        loading?: boolean,
    }) {
        this._call = func
        if (options) {
            Object.assign(this, options)
        }

        makeAutoObservable(this)
    }
    async call(args?: any) {
        this.setLoading(true)
        try {
            const data = await this._call(args)
            this.setData(data)
        } catch (error: any) {
            this.setError(error.message || JSON.stringify(error))
        }
        this.setLoading(false)
        return [this.data, this.error]
    }
    setLoading(loading: boolean) {
        this.loading = loading
    }
    setError(error: string) {
        this.error = error
    }
    setData(data: T | null) {
        this.data = data
    }
}