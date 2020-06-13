import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit{
  tearDown$ = new Subject();

  loading: boolean;

  ngOnInit(): void {
    this.loading = false;
  }
  ngOnDestroy(): void {
    this.tearDown$.next();
    this.tearDown$.complete();
  }
}
