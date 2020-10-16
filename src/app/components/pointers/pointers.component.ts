import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pointers',
  templateUrl: './pointers.component.html',
  styleUrls: ['./pointers.component.scss']
})
export class PointersComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  redirectLogros(){
    this.router.navigate(['/pointer']);
  }
  redirectHome() {
    this.router.navigate(['/home']);
  }
}
