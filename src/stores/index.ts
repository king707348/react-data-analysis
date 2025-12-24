import { makeAutoObservable } from "mobx";

class DataStore {
    constructor() {
        makeAutoObservable(this)
    }

    async fetchData () {
        try {
            const response = await fetch('/api/info')
            const jsonData = await response.json()
    
            return jsonData
        }catch (err) {
            console.error("err", err)
            return null
        }
    }
}

export const dataStore = new DataStore()