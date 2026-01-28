import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  standalone: true,
  selector: 'app-register',
  template: `
    <h1>Register</h1>
    <p>Cadastro</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterPage {}