# 🔐 Angular UI – Auth + JWT

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)

Projeto de interface (UI) desenvolvido em **Angular**, com foco em **arquitetura limpa**, **autenticação JWT automática**, uso de **HttpInterceptor**, **Guards** e **Angular Material**.

Este projeto serve como base escalável para aplicações que exigem login, proteção de rotas e comunicação segura com API.

---

## 🚀 Tecnologias Utilizadas

- **Angular**
- **TypeScript**
- **Angular Material**
- **RxJS**
- **JWT (JSON Web Token)**
- **HttpInterceptor**
- **Route Guards**
- **Reactive Forms**

---

## 📁 Estrutura de Pastas

```text
app/
 ├─ core/
 │   ├─ api/
 │   │   └─ api.service.ts
 │   ├─ auth/
 │   │   ├─ auth-api.service.ts
 │   │   └─ token.service.ts
 │   ├─ guards/
 │   │   └─ auth.guard.ts
 │   ├─ interceptors/
 │   │   └─ auth.interceptor.ts
 │
 ├─ features/
 │   ├─ auth/
 │   │   ├─ pages/
 │   │   │   ├─ login/
 │   │   │   │   ├─ login.page.ts
 │   │   │   │   └─ login.page.html
 │   │   │   ├─ register.page.ts
 │   │   │   └─ auth.styles.css
 │   │   ├─ services/
 │   │   │   └─ auth.service.ts
 │   │   └─ auth.routes.ts
 │
 ├─ shared/
 │   └─ models/
 │       ├─ auth-response.ts
 │       └─ login.dto.ts
 │
 ├─ app.config.ts
 ├─ app.routes.ts
 ├─ app.ts
 ├─ app.html
 └─ app.css
