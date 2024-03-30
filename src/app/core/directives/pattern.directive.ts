import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appPattern]',
  providers:[
    {
      provide:NG_VALIDATORS,
      useExisting: PatternDirective,
      multi:true
    }
  ]
})
export class PatternDirective implements Validator {

  constructor() { }

  BigWordpattern:any = /[A-Z]/;
  smallWordPattern:any = /[a-z]/;
  symbolPattern:any = /[!@#$%^&&*_]/;

  validate(control: AbstractControl<any, any>): ValidationErrors | null {

    if(control.value == ''){
      return null
    }
  if(this.BigWordpattern.test(control.value) && this.smallWordPattern.test(control.value) && this.symbolPattern.test(control.value)){
    return null
  } else{  
    return {appPattern:{erorText:"უნდა შედგებოდეს ერთი დიდი ასოსგან ერთი პატარა ასოსგან და ერთი სიმბოლოსგან"}}
    
  } 
  




  }

}
