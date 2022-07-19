import { Component, OnInit } from '@angular/core';
import { AuthService } from '../serviceAuth/auth.service';

@Component({
  selector: 'app-component-login',
  templateUrl: './component-login.component.html',
  styleUrls: ['./component-login.component.css']
})
export class ComponentLoginComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void { }

}
