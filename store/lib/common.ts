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
    error: Error | null = null
    data: T | null = null
    _call: () => Promise<T>
    constructor(func: () => Promise<T>, options?:  {
        loading?: boolean,
    }) {
        this._call = func
        if (options) {
            Object.assign(this, options)
        }

        makeAutoObservable(this)
    }
    async call() {
        this.setLoading(true)
        try {
            const data = await this._call()
            this.setData(data)
        } catch (error) {
            this.setError(error as Error)
        }
        this.setLoading(false)
        return [this.data, this.error]
    }
    setLoading(loading: boolean) {
        this.loading = loading
    }
    setError(error: Error | null) {
        this.error = error
    }
    setData(data: T | null) {
        this.data = data
    }
}