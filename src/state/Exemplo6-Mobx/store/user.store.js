import { observable, makeObservable, action, computed } from 'mobx'

class User {
  id = 1
  detail = {
    name: 'Bicho Papão',
    email: 'bicho.papao@xpto.com'
  }
  job = null

  constructor() {
    makeObservable(this, {
      detail: observable,
      changeName: action,
      changeJob: action,
      job: observable,
      grossValue: computed,
    })
  }

  get grossValue(){
    let finalValue = 0
    if(this.job){
      finalValue = this.job.liquidValue - this.job.tribute * 100
    }

    return finalValue
    
  }

  changeName(name){
    this.detail.name = name
  }

  changeJob(job){
    this.job = job
  }
}

const observableUserStore = new User()

export default observableUserStore