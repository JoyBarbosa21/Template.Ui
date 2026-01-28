import { ChangeDetectionStrategy, Component, computed, inject, signal } from "@angular/core";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { LoginDTO } from "../../../../shared/models/login.dto";
import { MatInputModule } from "@angular/material/input";
import { CommonModule } from "@angular/common";
import { toSignal } from "@angular/core/rxjs-interop";
import { AuthService } from "../../services/auth.service";
import { catchError, EMPTY, Subject, switchMap, tap } from "rxjs";

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [
    MatCardModule,
    MatButtonModule, 
    MatInputModule, 
    ReactiveFormsModule
  ],
  templateUrl: './login.page.html',
  styleUrls: ['.././auth.styles.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LoginPage {
  
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);

  private submit$ = new Subject<LoginDTO>();

  readonly loading = signal(false);
  readonly error = signal<string | null>(null);

  readonly login = toSignal(
    this.submit$.pipe(
      tap(() => {
        this.loading.set(true);
        this.error.set(null);
      }),
      switchMap(dto =>
        this.authService.login(dto).pipe(
          catchError(() => {
            this.error.set('Credenciais inválidas');
            return EMPTY;
          })
        )
      ),
      tap(() => this.loading.set(false))
    ),
    { initialValue: null }
  );
  
  readonly form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submit$.next(this.form.getRawValue());
  }
  
}