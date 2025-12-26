# Simple Express Server

Простий сервер на Node.js + Express. Проект використовує базові мідлвари для логування, аутентифікації, валідації, доступу до статей і обробки помилок у невеликій MVC-структурі (routes/controllers/middlewares).

## Встановлення

1. Встановіть залежності:
   ```bash
   npm install
   ```
2. Запуск у звичайному режимі:
   ```bash
   npm start
   ```
3. Запуск у режимі з авто-перезапуском (nodemon):
   ```bash
   npm run start-local
   ```

Сервер слухає порт `3000` (можна змінити через `PORT` у середовищі).

## Маршрути та мідлвари

- `/` — застосовується мідлвар логування; відповідь: текст із лічильником переглядів сесії.
- `/users` та `/users/:userId` — застосовуються мідлвари аутентифікації (`Authorization` хедер обов'язковий) і валідації даних для запитів із тілом (`username`, `email`).
- `/articles` та `/articles/:articleId` — застосовується мідлвар перевірки доступу (хедер `x-article-role` має бути `editor`).

Усі відповіді текстові. Обробник помилок повертає `500 Internal server error` у разі непередбачених помилок.

## Структура

```
server.js
src/
  controllers/
    homeController.js
    usersController.js
    articlesController.js
  middlewares/
    logRequests.js
    auth.js
    validateUserData.js
    checkArticleAccess.js
    errorHandler.js
  routes/
    homeRoutes.js
    userRoutes.js
    articleRoutes.js
```

## Приклади запитів

- `GET /` — логування + лічильник сесії.
- `GET /users` з хедером `Authorization: demo`.
- `POST /users` з хедером `Authorization: demo` і тілом `{ "username": "john", "email": "john@example.com" }`.
- `GET /articles` з хедером `x-article-role: editor`.
