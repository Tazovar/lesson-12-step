import { Injectable } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";



@Injectable({
    providedIn:'root'
})


export class FormService{
    constructor(private formBuilder:FormBuilder){}


    createJob(){
        return this.formBuilder.group({
            companyname:['',[Validators.required]],
            companyWebsite:['',[Validators.required]],
            companyDescription:['', [Validators.required]],
            positions:this.formBuilder.array([])
        })
    }

    createPosition(){
        return this.formBuilder.group({
            positionTitle:['', [Validators.required]],
            startDate:['',Validators.required],
            endDate:['',Validators.required]
        })
    }


    getJobs(Form:FormGroup){
let jobs =Form.get('jobs') as FormArray
return jobs
    }

    addNewJob(Form:FormGroup){
        this.getJobs(Form).push(this.createJob())
    }

    deleteJob(Form:FormGroup,jobIndex:number){
        this.getJobs(Form).removeAt(jobIndex)
    }


    getPositions(jobGroup:FormGroup | any){
let positions = jobGroup.get('positions') as FormArray
return positions;
    }

    addNewPosition(JobGroup:FormGroup){
        this.getPositions(JobGroup).push(this.createPosition())
    }

    deletePosition(JobGroup:FormGroup,positionIndex:number){
        this.getPositions(JobGroup).removeAt(positionIndex)
    }


}