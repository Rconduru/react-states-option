import { observable, makeObservable, action } from 'mobx'

class Job {
  id = "-"
  data = {
    name: "-",
    liquidValue: 0,
    tribute: 0
  }

  constructor(){
    makeObservable(this, {
      data: observable,
      chooseJob: action
    })
  }

  chooseJob(job){
    this.id = job.id
    this.data.name = job.name
    this.data.liquidValue = job.liquidValue
    this.data.tribute = job.tribute
  }
}

const observableJobStore = new Job()

export default observableJobStore