import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormService } from './services/form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  constructor(private formBuilder:FormBuilder,public formService:FormService){}

  Form!:FormGroup


  ngOnInit():void{
    this.Form = this.formBuilder.group({
      jobs:this.formBuilder.array([])
    })
    this.formService.addNewJob(this.Form)
    let group:FormGroup | any = this.formService.getJobs(this.Form).at(0)
    this.formService.addNewPosition(group)
  }


  addNewJob(){
    this.formService.addNewJob(this.Form)
    let group:FormGroup | any = this.formService.getJobs(this.Form).at(this.formService.getJobs(this.Form).length - 1)
    this.formService.addNewPosition(group)
    
    
    }

  deleteJob(jobIndex:number) {
this.formService.deleteJob(this.Form,jobIndex)
  }

  addNewPosition(jobGroup:FormGroup  | any){
this.formService.addNewPosition(jobGroup)
  }

  deletePosition(jobGroup:FormGroup | any, positionIndex:number){
this.formService.deletePosition(jobGroup,positionIndex)
  }

  save(){
    console.log(this.Form.value)
  }
}
