# TravelTrucks

**TravelTrucks** — це фронтенд-додаток для компанії, яка займається орендою кемперів. Додаток дозволяє користувачам переглядати транспортні засоби, фільтрувати їх за різними критеріями, переглядати деталі кемпера, залишати заявки на бронювання та додавати кемпери в обране.

## Demo

**Live site:** [https://traveltrucks-five.vercel.app/](https://traveltrucks-five.vercel.app/)  
**GitHub repository:** [https://github.com/oksanaliu/TravelTrucks](https://github.com/oksanaliu/TravelTrucks)

---

## Функціональність

- **Головна сторінка** з банером і кнопкою переходу до каталогу.
- **Сторінка каталогу** з фільтрами:
  - Локація (текстовий пошук)
  - Тип кузова (Van, Alcove, Fully Integrated)
  - Додаткові опції: Kitchen, AC, TV, Bathroom.
- **Картки кемперів** з рейтингом, описом, ціною та кнопкою “Show more”.
- **Сторінка деталей кемпера** з:
  - Галереєю
  - Повним описом
  - Табами "Features" і "Reviews"
  - Формою бронювання
- **Форма бронювання** з валідацією, повідомленням про успішну відправку, перевіркою унікального email.
- **Список обраного** зберігається у `localStorage`, не зникає при оновленні.
- **Завантаження додаткових карток** по кнопці “Load more”.
- **Лоудери** при асинхронних запитах.
- **404 / Camper not found** обробка.

---

## Технології

- **React + Vite**
- **Redux Toolkit**
- **React Router**
- **Axios**
- **Formik + Yup**
- **CSS Modules**
- **React DatePicker**
- **React Toastify**

---

## API

Дані беруться з публічного API:  
[https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers](https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers)

### Ендпоінти:

- `GET /campers` — всі кемпери
- `GET /campers/:id` — деталі кемпера

---

## Запуск проєкту локально

```bash
git clone https://github.com/oksanaliu/TravelTrucks.git
cd TravelTrucks
npm install
npm run dev
```
