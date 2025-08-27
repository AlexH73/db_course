# Пошаговая инструкция выполнения заданий из файла [tasks.md](tasks.md)

## 🟢 Базовый уровень (операторы, простые выборки)

### 1. Выбери всех фермеров, у которых возраст больше 30
```sql
SELECT * FROM farmers WHERE age > 30;
```
#### Вывод:
![Скриншот результата выполнения запроса](../../others/resources/images/Screenshot%202025-08-27%20022505.png)

### 2. Найди все продукты, название которых начинается на "A"
```sql
-- Сначала создадим таблицу products
CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2)
);

-- Вставим тестовые данные
INSERT INTO products (name, price) VALUES
('Apple', 1.50),
('Banana', 0.75),
('Avocado', 2.00),
('Orange', 1.25),
('Apricot', 1.80);

-- Выполним запрос
SELECT * FROM products WHERE name LIKE 'A%';
```
#### Вывод:
![Скриншот результата выполнения запроса](../../others/resources/images/Screenshot%202025-08-27%20022953.png)

### 3. Получи список заказов, в которых количество товара больше или равно 10
```sql
-- Создадим таблицу orders
CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    product_id INT,
    quantity INT,
    order_date DATE DEFAULT CURRENT_DATE
);

-- Вставим тестовые данные
INSERT INTO orders (product_id, quantity) VALUES
(1, 5),
(2, 12),
(3, 8),
(4, 15),
(5, 10);

-- Выполним запрос
SELECT * FROM orders WHERE quantity >= 10;
```
#### Вывод:
![Скриншот результата выполнения запроса](../../others/resources/images/Screenshot%202025-08-27%20023151.png)

### 4. Найди всех фермеров, у которых возраст находится в диапазоне от 20 до 40 лет
```sql
SELECT * FROM farmers WHERE age BETWEEN 20 AND 40;
```
#### Вывод:
![Скриншот результата выполнения запроса](../../others/resources/images/Screenshot%202025-08-27%20023325.png)

### 5. Выведи всех сотрудников, у которых поле country имеет значение NULL
```sql
-- Добавим запись с NULL country для теста
INSERT INTO farmers (name, age, height, number_of_children, country)
VALUES ('Dummy Farmer', 35, 175, 2, NULL);

-- Выполним запрос
SELECT * FROM farmers WHERE country IS NULL;
```
#### Вывод:
![Скриншот результата выполнения запроса](../../others/resources/images/Screenshot%202025-08-27%20023626.png)

### 6. Получи всех фермеров, чьё имя не начинается на "D"
```sql
SELECT * FROM farmers WHERE name NOT LIKE 'D%';
```
#### Вывод:
![Скриншот результата выполнения запроса](../../others/resources/images/Screenshot%202025-08-27%20023728.png)

## 🟡 Средний уровень (агрегация, группировка, псевдонимы)

### 8. Подсчитай количество строк в таблице farmer
```sql
SELECT COUNT(*) AS total_farmers FROM farmers;
```
#### Вывод:
![Скриншот результата выполнения запроса](../../others/resources/images/Screenshot%202025-08-27%20023841.png)

### 9. Найди среднюю цену всех продуктов
```sql
SELECT AVG(price) AS average_price FROM products;
```
#### Вывод:
![Скриншот результата выполнения запроса](../../others/resources/images/Screenshot%202025-08-27%20023958.png)

### 10. Определи максимальный возраст среди фермеров
```sql
SELECT MAX(age) AS max_age FROM farmers;
```
#### Вывод:
![Скриншот результата выполнения запроса](../../others/resources/images/Screenshot%202025-08-27%20024058.png)

### 11. Получи минимальное количество товаров среди заказов
```sql
SELECT MIN(quantity) AS min_quantity FROM orders;
```
#### Вывод:
![Скриншот результата выполнения запроса](../../others/resources/images/Screenshot%202025-08-27%20024233.png)

### 12. Для каждой страны выведи количество фермеров (GROUP BY)
```sql
SELECT country, COUNT(*) AS farmer_count 
FROM farmers 
GROUP BY country;
```
#### Вывод:
![Скриншот результата выполнения запроса](../../others/resources/images/Screenshot%202025-08-27%20024404.png)

### 13. Получи список стран и количество фермеров в каждой, но только тех стран, где фермеров не меньше 2 (HAVING)
```sql
SELECT country, COUNT(*) AS farmer_count 
FROM farmers 
GROUP BY country 
HAVING COUNT(*) >= 2;
```
#### Вывод:
![Скриншот результата выполнения запроса](../../others/resources/images/Screenshot%202025-08-27%20024547.png)

## 🔴 Продвинутый уровень (ограничения, внешние ключи, индексы)

### 17. Создай таблицу customer
```sql
CREATE TABLE customer (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE
);
```

### 18. Создай таблицу product
```sql
CREATE TABLE product (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) CHECK (price > 0)
);
```

### 19. Добавь в таблицу orders внешний ключ product_no
```sql
-- Сначала добавим столбец product_no
ALTER TABLE orders ADD COLUMN IF NOT EXISTS product_no INT;

-- Добавим внешний ключ
ALTER TABLE orders 
ADD CONSTRAINT fk_orders_product 
FOREIGN KEY (product_no) 
REFERENCES product(id);
```

### 20. Создай таблицу employees
```sql
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    salary DECIMAL(10, 2) CHECK (salary >= 0)
);
```

### 21. Создай таблицу departments
```sql
CREATE TABLE departments (
    employee_id INT,
    department_name VARCHAR(100),
    UNIQUE(employee_id, department_name)
);
```

### 22. Создай таблицу orders с ссылкой на customers
```sql
-- Создадим таблицу заново с правильной структурой
DROP TABLE IF EXISTS orders;

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    customer_id INT,
    product_id INT,
    quantity INT,
    product_no INT,
    order_date DATE DEFAULT CURRENT_DATE,
    CONSTRAINT fk_orders_customers 
        FOREIGN KEY (customer_id) 
        REFERENCES customer(id)
        ON DELETE CASCADE
);
```

### 23. Добавь таблицу order_items
```sql
CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    order_id INT,
    product_id INT,
    quantity INT,
    CONSTRAINT fk_order_items_orders 
        FOREIGN KEY (order_id) 
        REFERENCES orders(id)
        ON DELETE CASCADE,
    CONSTRAINT fk_order_items_products 
        FOREIGN KEY (product_id) 
        REFERENCES product(id)
);
```

### 24. Создай индекс для ускорения поиска фермеров по возрасту
```sql
CREATE INDEX idx_farmers_age ON farmers(age);
```

### 25. Создай индекс для таблицы заказов по полю product_no
```sql
CREATE INDEX idx_orders_product_no ON orders(product_no);
```

## Проверка ограничений

Для проверки работы ограничений можно выполнить тестовые запросы:
```sql
-- Проверка ограничения цены (должно вызвать ошибку)
INSERT INTO product (name, price) VALUES ('Test Product', -10);

-- Проверка уникальности email (должно вызвать ошибку при повторении)
INSERT INTO customer (name, email) VALUES ('Test Customer', 'test@example.com');
INSERT INTO customer (name, email) VALUES ('Another Customer', 'test@example.com');

-- Проверка каскадного удаления
DELETE FROM customer WHERE id = 1; -- Должно удалить связанные заказы
```