import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { DataService } from '../services/data.service';
import { User } from '../models/User';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  public user: User;
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  constructor(private breakpointObserver: BreakpointObserver, private _formBuilder: FormBuilder, private data: DataService, private router: Router,) { }

  ngOnInit() {
    this.login = this._formBuilder.group({
      username: ['', Validators.required]
    });
  }

  onSubmit(form: NgForm){
    localStorage["PUBLIC_KEY"] = form.value.username;
    this.router.navigate(['/vote']);
  }
}