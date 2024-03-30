import { Injectable } from '@angular/core';
import { NgForm, NgModelGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from 'src/app/core/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
usersArray:Array<Register | any> = JSON.parse(localStorage.getItem('users') || '[]')
 

constructor(private router:Router){}
Register(form:NgForm){
let findUserInDataBase = this.usersArray.find((user) => {
  return user?.username == form.value.username
})
if(findUserInDataBase){
  alert('user already exists')
}else{
  let userArrayLengthBeforePush:number = this.usersArray.length;
  this.usersArray.push(form.value);
  localStorage.setItem('users',  JSON.stringify(this.usersArray))
  if(userArrayLengthBeforePush == this.usersArray.length){
    alert("user register error pelase try again")
  }else{
    alert("user registered successfully")
  }
}
}


setTokenInLocaStorage(){
  localStorage.setItem('token',JSON.stringify("SAIFGYASasfjgaushg9HSUHGAIsg0asgasigh"))
}


removeTokenFromLocaStorage(){
  localStorage.removeItem('token')
  this.router.navigate(['/auth/login'])
}


login(form:NgForm | any){

  
  let findUser = this.usersArray.find((user) => {
    return user.username == form.value.username && user.Password.password == form.value.password
  })

  if(findUser){
    this.router.navigate(['/main'])
    this.setTokenInLocaStorage();
  }else{
alert("invalid username or password")
  }
}


isAuth():boolean{
  let token   = localStorage.getItem('token')
  
  if(token){
    return true
  }else {
    return false;
  }
   
}
}
