import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public miToken: number;
  public userName: string | null;

  constructor(private router: Router) {
    this.miToken = 0;
    this.userName = "";
  }

  ngOnInit(): void {
    if (localStorage.getItem('personalToken')) {
      this.miToken = +localStorage.getItem('personalToken')!;
    }
    if (localStorage.getItem('userName')) {
      this.userName = localStorage.getItem('userName');
    }
  }
  public logout(): void {
    if (localStorage.getItem('personalToken')) {
      localStorage.removeItem('personalToken');
      this.router.navigate(['/login']);
      Swal.fire({
        title: 'Has cerrado sesión',
        icon: 'success',
        confirmButtonText: ' Confirmar'
        }).then ( respuesta =>{
        if (localStorage.getItem('personalToken')) {
        localStorage.removeItem('personalToken');
        }
        window.location.reload();
        })
       
    }
  }

}


