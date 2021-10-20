import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ask } from 'src/app/shared/classes/ask';
import { AskService } from 'src/app/shared/services/ask.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css']
})
export class AskComponent implements OnInit {
  public Ask: Ask
  constructor(private AskService: AskService, private router: Router) {
    this.Ask = new Ask();
 
}
  ngOnInit(): void {
  }
  public submit(): void{
    this.AskService.ask(this.Ask).subscribe(
      (data: number) => {
        localStorage.setItem('userName', this.Ask.name)
        localStorage.setItem('personalToken2',`${data}`);
        Swal.fire('Su pregunta se ha enviado correctamente')
      },
      (error: Error) => {
        console.error("Error al realizar la pregunta")
      }
    )
  }
}