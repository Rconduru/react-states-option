import { observable, makeObservable, action, computed, get } from 'mobx'

class User {
  detail = {
    name: 'Bicho Papão',
    email: 'bicho.papao@xpto'
  }
  job = null

  constructor(){
    makeObservable(this, {
      detail: observable,
      job: observable,
      changeUserName: action,
      changeUserJob: action,
      grossValue: computed
    })
  }

  get grossValue() {
    let finalValue = 0

    if(this.job){
      finalValue = this.job.liquidValue - this.job.tribute * 100
    }

    return finalValue
  }

  changeUserName(newName){
    this.detail.name = newName
  }

  changeUserJob(newJob){
    this.job = newJob
  }
}

const observableUserStore = new User()
export default observableUserStore