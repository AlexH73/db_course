 -- создали таблицу юзеров
CREATE TABLE
  users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(80),
    last_name VARCHAR(80),
    password VARCHAR(80)
  );

--
CREATE TABLE
  medical_cards (
    id SERIAL PRIMARY KEY,
    blood_type VARCHAR(80),
    user_id INT UNIQUE REFERENCES users (id) ON DELETE CASCADE
  );

-- UNIQUE - это поле уникальное, в рамках таблицы не повторяется
-- ON DELETE CASCADE - если запись на которую мы ссылаемся будет удалена
-- то и ссылающаяся запись будет удалена
INSERT INTO
  users (first_name, last_name, password)
VALUES
  ('Alex', 'Hermann', 'Qwerty007'),
  ('Wladimir', 'Ilz', 'asdasdasd');

--   добавим карточики
INSERT INTO
  medical_cards (blood_type, user_id)
VALUES
  ('I negative', 2),
  ('III positive', 1);
