import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-bottom',
  templateUrl: './nav-bar-bottom.component.html',
  styleUrls: ['./nav-bar-bottom.component.scss']
})
export class NavBarBottomComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  redirectHome() {
    this.router.navigate(['/home']);
  }
  redirectLogros(){
    this.router.navigate(['/pointer']);
  }
}
