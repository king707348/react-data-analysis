import { makeAutoObservable } from "mobx"

class rootStore {


    constructor() {
        makeAutoObservable(this)
    }
}

export const RootStore = new rootStore()