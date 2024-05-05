import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as authActions from './store/auth.action';
import { selectLoggedInDetails } from './store/auth.selector';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  identifier: string = '';
  password: string = ' ';
  errorMessage: string = '';
  private destroy$ = new Subject<void>();
  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit(): void {
    this.store
      .select(selectLoggedInDetails)
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        if (res && res.jwt) {
          // navigate
          this.router.navigate(['/']);
        }
      });
  }

  onSubmit(): void {
    this.store.dispatch(
      new authActions.Login({
        identifier: this.identifier,
        password: this.password,
      })
    );
    this.resetForm();
  }
  resetForm() {
    this.identifier = '';
    this.password = '';
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
