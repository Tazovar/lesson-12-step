import { Injectable } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators,Validator } from "@angular/forms";
import { appbannedWords } from "../errors/bannedwords";


@Injectable({
    providedIn:"root"
})

export class FormService{
    constructor(private formBuilder:FormBuilder){}

    createJob(){
        return this.formBuilder.group({
            companyName:['',[Validators.required, appbannedWords(['tazo','luka','giorgi','saba']),Validators.pattern(/[0-9]{2}/)]],
            companyWebsite:['', [Validators.required]],
            positions:this.formBuilder.array([]),
            Password:this.formBuilder.group({

            })
        })
    }


    createPositions(){
        return this.formBuilder.group({
            positionName:['',[Validators.required]],
            positionDescription:['', [Validators.required]],
            startDate:['', [Validators.required]],
            endDate:['', [Validators.required]],
        })
    }


    getJobGroup(Form:FormGroup){
return Form.get('jobs') as FormArray
    }

    getPositions(jobGroup:FormGroup | any){
        return jobGroup.get('positions') as FormArray
    }


    addJob(Form:FormGroup){
        this.getJobGroup(Form).push(this.createJob())
    }

    deleteJob(Form:FormGroup,jobIndex:number){
this.getJobGroup(Form).removeAt(jobIndex)
    }

    addPosition(jobGroup:FormGroup){
     this.getPositions(jobGroup).push(this.createPositions())
    }
    deletePosition(jobGroup:FormGroup,positionIndex:number){
        this.getPositions(jobGroup).removeAt(positionIndex)
    }
}