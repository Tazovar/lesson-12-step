import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormService } from './services/form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
Form!:FormGroup
constructor(private formBuilder:FormBuilder,public forService:FormService){}

ngOnInit(): void {
this.Form = this.formBuilder.group({
  jobs:this.formBuilder.array([])
})    
}


addNewJob(){
  this.forService.addJob(this.Form)
}

deleteJob(jobIndex:number){
this.forService.deleteJob(this.Form,jobIndex)
}

addPosition(jobGroup:FormGroup | any){
this.forService.addPosition(jobGroup)
}

deletePosition(jobGroup:FormGroup | any, positionIndex:number){
this.forService.deletePosition(jobGroup,positionIndex)
}
}
