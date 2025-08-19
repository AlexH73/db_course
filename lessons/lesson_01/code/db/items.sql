-- создали таблицу items
-- по умолчанию задается дата - если не задали явным образом
CREATE TABLE
  items (
    id serial PRIMARY KEY,
    name varchar(240),
    description varchar(300),
    created_at DATE DEFAULT CURRENT_DATE
  );

-- добавили джинсы и футболку
INSERT INTO
  items (name, description)
VALUES
  ('jeans', 'blue jeans by levis'),
  ('t-shirt', 'red t-shirt');

-- добавили носки
INSERT INTO
  items (name, description, created_at)
VALUES
  (
    'socks',
    'cotton white socks, soft to touch',
    '2025-08-18'
  );

--   переименовать поле date в поле created_at
ALTER TABLE
  items
ADD COLUMN
  price DECIMAL;

-- задали цену равную 10 для всех предметов
UPDATE
  items
SET
  price = 10;

--   удалить таблицу
DROP TABLE
  items;

ALTER TABLE
  items
RENAME COLUMN
  date TO created_at;