CREATE DATABASE
  happy_farm_db;

-- создали таблицу
CREATE TABLE
  farmers (
    id serial primary key,
    name varchar,
    age int,
    height int,
    number_of_children int,
    country varchar
  );

-- заполнили таблицу
INSERT INTO
  farmers (name, age, height, number_of_children, country)
VALUES
  ('Bauer Gurke', 50, 180, 3, 'Germany'),
  ('Ivan', 38, 175, 2, 'Russia'),
  ('Pier', 41, 178, 1, 'France'),
  ('Tom', 26, 189, 0, 'UK'),
  ('Kay', 67, 167, 3, 'Japan');

INSERT INTO
  farmers (name, age, height, number_of_children, country)
VALUES
  ('Ivanka', 50, 185, 1, 'USA');

-- LIKE 
SELECT
  *
FROM
  farmers
WHERE
  name LIKE 'Iv%';

-- % какой-то символ или пустоту, или несколько символов
-- _ один какой символ или знак
-- ILIKE не чувствительный к регистру
SELECT
  *
FROM
  farmers
WHERE
  name ILIKE 'iv%';

-- Tom Rom Lom 9om
SELECT
  *
FROM
  farmers
WHERE
  name ILIKE '_om';

-- Tom Rom Lom 9om, Ryom
SELECT
  *
FROM
  farmers
WHERE
  name ILIKE '%om';

-- IN - оператор - для указания диапазона возможных значений
SELECT
  *
FROM
  farmers
WHERE
  country IN ('USA', 'UK', 'Spain');

-- диапазон чисел - включительно 
SELECT
  *
FROM
  farmers
WHERE
  height BETWEEN 175 AND 180;

-- все не из диапазона
SELECT
  *
FROM
  farmers
WHERE
  height NOT BETWEEN 175 AND 180;

-- сколько фермеров из сша британии и испании?
-- COUNT() - считает сколько было строк получено
SELECT
  COUNT(*)
FROM
  farmers
WHERE
  country IN ('USA', 'UK', 'Spain');

-- AS farmeres_uk_spain_usa - это псевдоним - кастомизировать название под 
-- которым будет выведена информация
SELECT
  COUNT(*) AS farmeres_uk_spain_usa
FROM
  farmers
WHERE
  country IN ('USA', 'UK', 'Spain');

-- посмотреть минимальное значение в столбце
SELECT
  MIN(age)
FROM
  farmers;

-- AVG - среднее
-- MAx - наибольшее
-- Как посотреть средний рост по странам
INSERT INTO
  farmers (name, age, height, number_of_children, country)
VALUES
  ('Günter Der Bauer', 65, 185, 7, 'Germany'),
  ('Casey Johnes', 24, 176, 0, 'USA');

SELECT
  country,
  avg(height) AS average_height
FROM
  farmers
GROUP BY
  country;

-- максимальные возраста по странам
SELECT
  country,
  max(age) AS max_age
FROM
  farmers
GROUP BY
  country;
