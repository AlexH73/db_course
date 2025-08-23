# Пошаговая инструкция выполнения задания

## 1. Создание таблицы Employees

```sql
CREATE TABLE Employees (
    employee_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100),
    phone_number VARCHAR(20),
    hire_date DATE,
    job_title VARCHAR(50),
    salary DECIMAL(10, 2),
    manager_id INT,
    department_id INT
);
```

## 2. Вставка данных в таблицу

```sql
INSERT INTO Employees (employee_id, first_name, last_name, email, phone_number, hire_date, job_title, salary, manager_id, department_id) VALUES
(1, 'John', 'Smith', 'john.smith@example.com', '123-456-7890', '2018-01-15', 'Software Engineer', 6000.00, 3, 1),
(2, 'Jane', 'Doe', 'jane.doe@example.com', '987-654-3210', '2019-03-22', 'Project Manager', 7500.00, 3, 2),
(3, 'Emily', 'Jones', 'emily.jones@example.com', '555-555-5555', '2017-05-30', 'Director', 12000.00, NULL, 1),
(4, 'Michael', 'Brown', 'michael.brown@example.com', '111-222-3333', '2020-07-19', 'Business Analyst', 5500.00, 2, 3),
(5, 'Chris', 'Davis', 'chris.davis@example.com', '444-333-2222', '2016-11-10', 'Data Scientist', 7000.00, 2, 1),
(6, 'Patricia', 'Garcia', 'patricia.garcia@example.com', '333-444-5555', '2019-09-05', 'HR Specialist', 4800.00, 3, 2),
(7, 'Robert', 'Wilson', 'robert.wilson@example.com', '666-777-8888', '2021-04-25', 'Software Engineer', 6500.00, 1, 1),
(8, 'Linda', 'Martinez', 'linda.martinez@example.com', '999-000-1111', '2018-06-13', 'Software Engineer', 6200.00, 1, 3),
(9, 'Daniel', 'Taylor', 'daniel.taylor@example.com', '222-333-4444', '2015-08-30', 'Project Manager', 7800.00, 2, 3),
(10, 'Sophia', 'Anderson', 'sophia.anderson@example.com', '555-666-7777', '2020-02-18', 'Director', 12500.00, NULL, 2);
```

## 3. Выполнение запросов

### Задача 1: Вывести все записи из таблицы employees
```sql
SELECT * FROM Employees;
```

### Задача 2: Вывести только имена и фамилии сотрудников
```sql
SELECT first_name, last_name FROM Employees;
```

### Задача 3: Вывести всех сотрудников отдела 5
```sql
SELECT * FROM Employees WHERE department_id = 5;
```

### Задача 4: Вывести уникальные должности
```sql
SELECT DISTINCT job_title FROM Employees;
```

### Задача 5: Вывести сотрудников с зарплатой > 5000
```sql
SELECT * FROM Employees WHERE salary > 5000;
```

### Задача 6: Вывести сотрудников с фамилией на 'S'
```sql
SELECT * FROM Employees WHERE last_name LIKE 'S%';
```

### Задача 7: Вывести сотрудников, нанятых после 01.01.2020
```sql
SELECT * FROM Employees WHERE hire_date > '2020-01-01';
```

### Задача 8: Вывести объединенные имена и зарплаты
```sql
SELECT first_name || ' ' || last_name AS full_name, salary FROM Employees;
```

### Задача 9: Вывести сотрудников с фамилией, содержащей 'son'
```sql
SELECT * FROM Employees WHERE last_name LIKE '%son%';
```

### Задача 10: Количество сотрудников по отделам
```sql
SELECT department_id, COUNT(*) AS employee_count 
FROM Employees 
GROUP BY department_id;
```

### Задача 11: Средняя зарплата по отделам
```sql
SELECT department_id, AVG(salary) AS avg_salary 
FROM Employees 
GROUP BY department_id;
```

### Задача 12: Минимальная и максимальная зарплаты
```sql
SELECT MIN(salary) AS min_salary, MAX(salary) AS max_salary FROM Employees;
```

### Задача 13: Сотрудники с зарплатой от 4000 до 6000
```sql
SELECT * FROM Employees WHERE salary BETWEEN 4000 AND 6000;
```

### Задача 14: Сумма зарплат по отделам
```sql
SELECT department_id, SUM(salary) AS total_salary 
FROM Employees 
GROUP BY department_id;
```

### Задача 15: Сотрудники без менеджера
```sql
SELECT * FROM Employees WHERE manager_id IS NULL;
```

### Задача 16: Фамилии в порядке возрастания
```sql
SELECT last_name FROM Employees ORDER BY last_name ASC;
```

### Задача 17: 10 сотрудников с наибольшими зарплатами
```sql
SELECT * FROM Employees ORDER BY salary DESC LIMIT 10;
```

### Задача 18: Сотрудники, нанятые в 2019 году
```sql
SELECT * FROM Employees WHERE EXTRACT(YEAR FROM hire_date) = 2019;
```

### Задача 19: Количество сотрудников по должностям
```sql
SELECT job_title, COUNT(*) AS count 
FROM Employees 
GROUP BY job_title;
```

### Задача 20: Менеджеры и их подчиненные
```sql
SELECT m.first_name AS manager_first, m.last_name AS manager_last,
       e.first_name AS employee_first, e.last_name AS employee_last
FROM Employees e
JOIN Employees m ON e.manager_id = m.employee_id;
```

### Задача 21: Сотрудники отдела 10 (включая несуществующий)
```sql
SELECT first_name, last_name, department_id 
FROM Employees 
WHERE department_id = 10;
```

### Задача 22: Должности с более чем 5 сотрудниками
```sql
SELECT job_title, COUNT(*) AS count 
FROM Employees 
GROUP BY job_title 
HAVING COUNT(*) > 5;
```

### Задача 23: Средняя зарплата под руководством менеджера 3
```sql
SELECT AVG(salary) AS avg_salary 
FROM Employees 
WHERE manager_id = 3;
```

### Задача 24: Средние зарплаты по должностям
```sql
SELECT job_title, AVG(salary) AS avg_salary 
FROM Employees 
GROUP BY job_title;
```

### Задача 25: Сотрудники отделов 1, 3 и 5
```sql
SELECT * FROM Employees 
WHERE department_id IN (1, 3, 5);
```

## Примечания

1. Убедитесь, что вы выполняете каждый SQL-запрос в среде, поддерживающей SQL (например, PostgreSQL, MySQL, SQLite и т.д.)
2. Некоторые запросы могут не возвращать результаты (например, задача 3 и 21), так как в данных нет отдела с ID 5 и 10
3. Для задач, требующих агрегатных функций (COUNT, AVG, SUM), результаты будут отображаться в виде сводных таблиц