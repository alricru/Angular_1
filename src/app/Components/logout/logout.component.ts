import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  public miToken: number;
  public userName: string | null;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  public logout(): void {
    if (localStorage.getItem('personalToken')) {
      localStorage.removeItem('personalToken');
      this.router.navigate(['/login']).then(()=>{window.location.reload();});
    }
  }

}
