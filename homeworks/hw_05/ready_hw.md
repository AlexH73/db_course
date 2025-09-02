# Решения заданий по MongoDB для коллекции cars [tasks.md](tasks.md)

## 0. **Создадим базу данных `car_shop`**
```m
// Create a new database.
const database = "car_shop";

// Create a new database.
use(database);
```
### Создание коллекции и добавление данных

```m

db.cars.insertMany([
  {
    brand: "BMW",
    price: 20000,
    model: "X5",
    year: 2015,
    horsepower: 300
  },
  {
    brand: "BMW",
    price: 35000,
    model: "X7",
    year: 2020,
    horsepower: 335
  },
  {
    brand: "Audi",
    price: 25000,
    model: "A4",
    year: 2018,
    horsepower: 248
  },
  {
    brand: "Audi",
    price: 45000,
    model: "Q7",
    year: 2021,
    horsepower: 335
  },
  {
    brand: "Mercedes",
    price: 30000,
    model: "C-Class",
    year: 2019,
    horsepower: 255
  },
  {
    brand: "Mercedes",
    price: 55000,
    model: "S-Class",
    year: 2022,
    horsepower: 429
  },
  {
    brand: "Toyota",
    price: 15000,
    model: "Camry",
    year: 2016,
    horsepower: 178
  },
  {
    brand: "Toyota",
    price: 28000,
    model: "RAV4",
    year: 2020,
    horsepower: 203
  },
  {
    brand: "Honda",
    price: 18000,
    model: "Accord",
    year: 2017,
    horsepower: 192
  },
  {
    brand: "Honda",
    price: 27000,
    model: "CR-V",
    year: 2021,
    horsepower: 190
  },
  {
    brand: "Ford",
    price: 22000,
    model: "Mustang",
    year: 2018,
    horsepower: 310
  },
  {
    brand: "Ford",
    price: 32000,
    model: "Explorer",
    year: 2020,
    horsepower: 300
  },
  {
    brand: "BMW",
    price: 42000,
    model: "M3",
    year: 2021,
    horsepower: 473
  },
  {
    brand: "Audi",
    price: 38000,
    model: "A6",
    year: 2019,
    horsepower: 248
  },
  {
    brand: "Toyota",
    price: 22000,
    model: "Highlander",
    year: 2018,
    horsepower: 185
  }
])

```

## 1. **Средняя цена по брендам**
```m
db.cars.aggregate([
  {
    $group: {
      _id: "$brand",
      avgPrice: { $avg: "$price" }
    }
  }
])
```
### Вывод:
![Скриншот результата выполнения запроса](../../others/resources/images/Screenshot%202025-09-02%20231249-1.png)

---

## 2. **Средняя цена по годам**
Используйте сортировку по убыванию цены и ограничение вывода одним документом:
```m

db.cars.aggregate([
  {
    $group: {
      _id: "$year",
      avgPrice: { $avg: "$price" }
    }
  }
])

```
### Вывод:
![Скриншот результата выполнения запроса](../../others/resources/images/Screenshot%202025-09-02%20231452-2.png)

---

## 3. **Максимальная мощность по брендам**

```m
db.cars.aggregate([
  {
    $group: {
      _id: "$brand",
      maxHorsepower: { $max: "$horsepower" }
    }
  }
])
```
### Вывод:
![Скриншот результата выполнения запроса](../../others/resources/images/Screenshot%202025-09-02%20231723-3.png)

---

## 4. **3 самых дешевые машины**

```m
db.cars.find().sort({ price: 1 }).limit(3)
```
### Вывод:
![Скриншот результата выполнения запроса](../../others/resources/images/Screenshot%202025-09-02%20232057-4.png)

---

## 5. **3 самых дорогие машины определенного бренда**

```m
db.cars.find({ brand: "BMW" }).sort({ price: -1 }).limit(3)
```
### Вывод:
![Скриншот результата выполнения запроса](../../others/resources/images/Screenshot%202025-09-02%20232338-5.png)

---

## 6. **Случайный автомобиль марки BMW**

```m
db.cars.aggregate([
  { $match: { brand: "BMW" } },
  { $sample: { size: 1 } }
])
```
### Вывод:
![Скриншот результата выполнения запроса](../../others/resources/images/Screenshot%202025-09-02%20232547-6.png)

---

#### Все операции в формате 'js' [тут](./playground-1.mongodb.js)