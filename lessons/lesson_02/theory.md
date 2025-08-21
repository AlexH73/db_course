## ✅ Примеры связей в PostgreSQL

### 1\. **Один к одному (One-to-One)**

👉 Пример: у **пользователя (User)** есть **один профиль (Profile)**.

```sql
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE profiles (
    profile_id SERIAL PRIMARY KEY,
    user_id INT UNIQUE REFERENCES users(user_id) ON DELETE CASCADE,
    bio TEXT
);
```

-   Таблица `users` — основная сущность.
-   В `profiles.user_id` стоит ограничение **UNIQUE**, поэтому у одного пользователя может быть только **один профиль**.
-   Если пользователь удаляется, его профиль тоже удаляется (`ON DELETE CASCADE`).

___

### 2\. **Один ко многим (One-to-Many)**

👉 Пример: **автор (Author)** может написать **много книг (Books)**, но у каждой книги только один автор.

```sql
CREATE TABLE authors (
    author_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE books (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    author_id INT REFERENCES authors(author_id) ON DELETE SET NULL
);
```

-   `authors` — сторона «один».
-   В `books.author_id` хранятся ссылки → много книг могут ссылаться на одного автора.
-   Если автора удаляют, `author_id` в книгах становится `NULL`.

___

### 3\. **Многие ко многим (Many-to-Many)**

👉 Пример: **студенты (Students)** могут записываться на **много курсов (Courses)**, и каждый **курс** может иметь много студентов. Нужна таблица-связка (**junction table**).

```sql
CREATE TABLE students (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE courses (
    course_id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL
);

CREATE TABLE enrollments (
    student_id INT REFERENCES students(student_id) ON DELETE CASCADE,
    course_id INT REFERENCES courses(course_id) ON DELETE CASCADE,
    PRIMARY KEY (student_id, course_id)
);
```

-   `students` и `courses` существуют независимо.
-   `enrollments` хранит связь «многие-ко-многим».
-   Составной первичный ключ `(student_id, course_id)` не позволяет записывать одинаковые пары.

___

___

## Примеры join

## **Один ко многим**

**Authors ↔ Books**

```sql
SELECT a.author_id, a.name AS author_name, b.title AS book_title
FROM authors a
JOIN books b ON a.author_id = b.author_id;
```

-   Автор может встречаться несколько раз (по количеству книг).
-   Пример результата:

| author\_id | author\_name | book\_title |
| --- | --- | --- |
| 1 | Толкин | Хоббит |
| 1 | Толкин | Властелин |
| 2 | Роулинг | Гарри Поттер |

___

## **Многие ко многим**

**Students ↔ Courses** (через `enrollments`)

```sql
SELECT s.student_id, s.name AS student_name, c.title AS course_title
FROM students s
JOIN enrollments e ON s.student_id = e.student_id
JOIN courses c ON e.course_id = c.course_id;
```

-   Студент может встречаться несколько раз (по количеству курсов).
-   Пример результата:

| student\_id | student\_name | course\_title |
| --- | --- | --- |
| 1 | Алиса | Математика |
| 1 | Алиса | Физика |
| 2 | Боб | Физика |

___
