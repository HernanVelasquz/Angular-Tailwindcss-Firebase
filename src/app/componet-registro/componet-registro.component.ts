import { Component, OnInit } from '@angular/core';
import { AuthService } from '../serviceAuth/auth.service';

@Component({
  selector: 'app-componet-registro',
  templateUrl: './componet-registro.component.html',
  styleUrls: ['./componet-registro.component.css']
})
export class ComponetRegistroComponent implements OnInit {

  constructor(public authService: AuthService) {}

  ngOnInit(): void {}

}
