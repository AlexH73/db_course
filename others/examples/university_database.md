# 🎓 Пример базы данных "Университет"

## Структура базы данных
```sql
-- Создание базы данных
CREATE DATABASE university;
\c university;

-- Таблица факультетов
CREATE TABLE faculties (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    dean VARCHAR(100),
    building INT
);

-- Таблица студентов
CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    faculty_id INT REFERENCES faculties(id),
    enrollment_year INT,
    scholarship BOOLEAN DEFAULT false
);

-- Таблица преподавателей
CREATE TABLE professors (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    degree VARCHAR(50),
    faculty_id INT REFERENCES faculties(id)
);

-- Таблица курсов
CREATE TABLE courses (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    credits INT CHECK (credits > 0 AND credits <= 6),
    professor_id INT REFERENCES professors(id)
);

-- Таблица оценок
CREATE TABLE grades (
    id SERIAL PRIMARY KEY,
    student_id INT REFERENCES students(id),
    course_id INT REFERENCES courses(id),
    grade INT CHECK (grade >= 2 AND grade <= 5),
    exam_date DATE DEFAULT CURRENT_DATE
);
```

## Пример данных

```sql
-- Заполнение факультетов
INSERT INTO faculties (name, dean, building) VALUES
('Факультет информатики', 'Иванов А.С.', 1),
('Экономический факультет', 'Петрова М.И.', 2),
('Юридический факультет', 'Сидоров В.К.', 3);

-- Заполнение студентов
INSERT INTO students (first_name, last_name, email, faculty_id, enrollment_year, scholarship) VALUES
('Алексей', 'Смирнов', 'alex@mail.ru', 1, 2023, true),
('Екатерина', 'Кузнецова', 'ekaterina@yandex.ru', 2, 2023, false),
('Дмитрий', 'Попов', 'dmitry@gmail.com', 1, 2022, true);

-- Заполнение преподавателей
INSERT INTO professors (first_name, last_name, degree, faculty_id) VALUES
('Сергей', 'Васильев', 'д.т.н.', 1),
('Ольга', 'Новикова', 'к.э.н.', 2),
('Андрей', 'Морозов', 'д.ю.н.', 3);

-- Заполнение курсов
INSERT INTO courses (title, description, credits, professor_id) VALUES
('Базы данных', 'Основы проектирования и работы с БД', 5, 1),
('Эконометрика', 'Статистические методы в экономике', 4, 2),
('Гражданское право', 'Основы гражданского законодательства', 3, 3);

-- Заполнение оценок
INSERT INTO grades (student_id, course_id, grade, exam_date) VALUES
(1, 1, 5, '2024-01-15'),
(2, 2, 4, '2024-01-16'),
(3, 1, 5, '2024-01-17');
```

## Примеры запросов
```sql
-- Все студенты с их факультетами
SELECT s.first_name, s.last_name, f.name as faculty
FROM students s
JOIN faculties f ON s.faculty_id = f.id;

-- Средняя оценка по каждому курсу
SELECT c.title, AVG(g.grade) as average_grade
FROM courses c
JOIN grades g ON c.id = g.course_id
GROUP BY c.title;

-- Студенты, получающие стипендию
SELECT first_name, last_name, enrollment_year
FROM students
WHERE scholarship = true
ORDER BY last_name;

-- Количество студентов на каждом факультете
SELECT f.name, COUNT(s.id) as student_count
FROM faculties f
LEFT JOIN students s ON f.id = s.faculty_id
GROUP BY f.name;
```