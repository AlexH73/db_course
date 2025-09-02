/* global use, db */
// MongoDB Playground

const database = "car_shop";

// Create a new database.
use(database);

// Создание коллекции и добавление данных

// db.cars.insertMany([
//   {
//     brand: "BMW",
//     price: 20000,
//     model: "X5",
//     year: 2015,
//     horsepower: 300
//   },
//   {
//     brand: "BMW",
//     price: 35000,
//     model: "X7",
//     year: 2020,
//     horsepower: 335
//   },
//   {
//     brand: "Audi",
//     price: 25000,
//     model: "A4",
//     year: 2018,
//     horsepower: 248
//   },
//   {
//     brand: "Audi",
//     price: 45000,
//     model: "Q7",
//     year: 2021,
//     horsepower: 335
//   },
//   {
//     brand: "Mercedes",
//     price: 30000,
//     model: "C-Class",
//     year: 2019,
//     horsepower: 255
//   },
//   {
//     brand: "Mercedes",
//     price: 55000,
//     model: "S-Class",
//     year: 2022,
//     horsepower: 429
//   },
//   {
//     brand: "Toyota",
//     price: 15000,
//     model: "Camry",
//     year: 2016,
//     horsepower: 178
//   },
//   {
//     brand: "Toyota",
//     price: 28000,
//     model: "RAV4",
//     year: 2020,
//     horsepower: 203
//   },
//   {
//     brand: "Honda",
//     price: 18000,
//     model: "Accord",
//     year: 2017,
//     horsepower: 192
//   },
//   {
//     brand: "Honda",
//     price: 27000,
//     model: "CR-V",
//     year: 2021,
//     horsepower: 190
//   },
//   {
//     brand: "Ford",
//     price: 22000,
//     model: "Mustang",
//     year: 2018,
//     horsepower: 310
//   },
//   {
//     brand: "Ford",
//     price: 32000,
//     model: "Explorer",
//     year: 2020,
//     horsepower: 300
//   },
//   {
//     brand: "BMW",
//     price: 42000,
//     model: "M3",
//     year: 2021,
//     horsepower: 473
//   },
//   {
//     brand: "Audi",
//     price: 38000,
//     model: "A6",
//     year: 2019,
//     horsepower: 248
//   },
//   {
//     brand: "Toyota",
//     price: 22000,
//     model: "Highlander",
//     year: 2018,
//     horsepower: 185
//   }
// ]);

//db.cars.find();

// 1. Средняя цена по брендам
// db.cars.aggregate([
//   {
//     $group: {
//       _id: "$brand",
//       avgPrice: { $avg: "$price" },
//     },
//   },
// ]);

// 2. Средняя цена по годам
// db.cars.aggregate([
//   {
//     $group: {
//       _id: "$year",
//       avgPrice: { $avg: "$price" },
//     },
//   },
// ]);

// 3. Максимальная мощность по брендам
// db.cars.aggregate([
//   {
//     $group: {
//       _id: "$brand",
//       maxHorsepower: { $max: "$horsepower" },
//     },
//   },
// ]);

// 4. 3 самых дешевые машины
// db.cars.find().sort({ price: 1 }).limit(3);

// 5. 3 самых дорогие машины определенного бренда (например, BMW)
// db.cars.find({ brand: "BMW" }).sort({ price: -1 }).limit(3);

// 6. Случайный автомобиль марки BMW
db.cars.aggregate([{ $match: { brand: "BMW" } }, { $sample: { size: 1 } }]);
