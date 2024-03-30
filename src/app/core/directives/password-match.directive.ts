import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";



@Directive({
    selector:'[appPasswordMatch]',
    providers:[
        {
            provide:NG_VALIDATORS,
            useExisting:PasswordMathcDirective,
            multi:true
        }
    ]
})


export class PasswordMathcDirective implements Validator{


    validate(control: AbstractControl<any, any>): ValidationErrors | null {
        let password = control.get('password')
        let confirmPassword = control.get('Confirmpassword')
        let error = {appPasswordMatch:{mismatch:true}}
        if(confirmPassword?.value == '' || null){
            return null
        }

        if(confirmPassword?.value == password?.value){
            return null
        }


        confirmPassword?.setErrors(error)

        return error;
    }
}