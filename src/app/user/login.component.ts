import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
    templateUrl: './login.component.html',
    styles: [`
        em {
            float: right;
            color: #E05C65;
            padding-left: 10px;
        }
    `]
})

export class LoginComponent implements OnInit {
    userName?: string
    password?: string 
    mouseoverLogin?: boolean

    constructor(private authService: AuthService, private router: Router){
        
    }
    login(formValues: any){
       this.authService.loginUser(formValues.userName, formValues.password)
       this.router.navigate(['events'])
    }
    cancel(){
        this.router.navigate(['events'])
    }
    ngOnInit() { }
}