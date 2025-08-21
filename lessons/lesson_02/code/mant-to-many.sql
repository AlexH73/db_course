
-- students уже есть 

CREATE TABLE courses (
    id serial primary key,
  title varchar(80)
);

-- кто записан на какой курс
CREATE TABLE enrollments (
    student_id int REFERENCES students(id) ON DELETE CASCADE,
  course_id int REFERENCES courses(id) ON DELETE CASCADE,
  PRIMARY KEY(student_id, course_id)
);

-- добавим курсы
INSERT INTO courses (title) VALUES 
('databases'), ('java core'), ('frontend');


-- запишем алекса на курс бд
-- посмотреть id Алекса - 2
-- посмотреть id курса бд - 1
INSERT INTO enrollments (student_id, course_id) VALUES 
(2, 1),
(4, 1),
(4, 2),
(4, 3);

-- записал алекса на курс бд
-- а владимира на все существуюшие

SELECT s.name, c.title
FROM students s
JOIN enrollments e ON s.id = e.student_id
JOIN courses c ON e.course_id = c.id;




