# 🚀 Шпаргалка по основным SQL-командам

## DDL (Data Definition Language)
```sql
-- Создание базы данных
CREATE DATABASE university;

-- Создание таблицы
CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    age INT CHECK (age >= 16),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Изменение таблицы
ALTER TABLE students ADD COLUMN phone VARCHAR(15);
ALTER TABLE students DROP COLUMN phone;
ALTER TABLE students RENAME COLUMN email TO email_address;

-- Удаление таблицы
DROP TABLE students;

-- Удаление базы данных
DROP DATABASE university;
```

## DML (Data Manipulation Language)

```sql
-- Вставка данных
INSERT INTO students (first_name, last_name, email, age)
VALUES 
('Иван', 'Иванов', 'ivan@mail.ru', 20),
('Мария', 'Петрова', 'maria@yandex.ru', 19);

-- Обновление данных
UPDATE students SET age = 21 WHERE first_name = 'Иван';

-- Удаление данных
DELETE FROM students WHERE age > 25;
```

## DQL (Data Query Language)

```sql
-- Выборка всех данных
SELECT * FROM students;

-- Выборка определенных столбцов
SELECT first_name, last_name, age FROM students;

-- Фильтрация
SELECT * FROM students WHERE age > 20;
SELECT * FROM students WHERE last_name LIKE 'И%';

-- Сортировка
SELECT * FROM students ORDER BY age DESC;
SELECT * FROM students ORDER BY last_name ASC, first_name ASC;

-- Агрегатные функции
SELECT COUNT(*) FROM students;
SELECT AVG(age) FROM students;
SELECT MAX(age), MIN(age) FROM students;

-- Группировка
SELECT age, COUNT(*) FROM students GROUP BY age;
```

## Связи между таблицами
```sql
-- Создание связанных таблиц
CREATE TABLE courses (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT
);

CREATE TABLE student_courses (
    student_id INT REFERENCES students(id),
    course_id INT REFERENCES courses(id),
    enrollment_date DATE,
    PRIMARY KEY (student_id, course_id)
);

-- JOIN запросы
SELECT s.first_name, s.last_name, c.title
FROM students s
JOIN student_courses sc ON s.id = sc.student_id
JOIN courses c ON c.id = sc.course_id;
```