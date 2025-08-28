/* global use, db */

use("school_db");

// добавить студента
// db.students.insertOne({name: "Alisher"});

// school_db - в ней есть коллекции
// collection - это похоже на таблицу в постгрес
// document - похоже на строку в базе данных постгрес - это как бы один объект

// добавить студента
// db.students.insertOne({name: "Andrey", age: 15});

// получить всех студентов
// db.students.find();

// db.students.insertOne(
//     {
//         name: "Dace",
//         adress: {city: "Goh", street: "Fridrichstr"}
//     }
// );

// метод insertMany - если хотим добавить за раз несколько документов

// db.students.insertMany(
//     [
//         {name: "Fred", age: 29},
//         {name: "Ben", age: 45}
//     ]
// );

// Как посмотреть какие есть документы студенты?
// db.students.find();

// db.students.insertOne({
//     name: "Sveta",
//     hobbies: ["development","guitar", "cooking", "diving"]
// });

// bson

// Как мы можем получить первые три записи? с помощью метода лимит
// db.students.find().limit(3);

// sort - позволяет получать информацию в отсортированном виде

// в алфавитном порядке по имени
// db.students.find().sort({name: 1});

// в обратном алфавитном порядке по имени
// db.students.find().sort({name: -1});

// сортировки по нескольким параметрам
// db.students.insertOne({name: "Andrey", age: 75});
// 1 - это по возрастанию -1 - это по убыванию

// db.students.find().sort({name: -1, age: -1});

// Как пропустить несколько знаний?
// db.students.find().skip(3).limit(2);

// Как найти человека по имени
// find - возвращает все документа
// db.students.find({name: "Andrey"});
//
// db.students.findOne({name: "Andrey"});

// Операторы сравнения
// $gt - greater than - больше чем
// db.students.find({age: {$gt: 20}});

// $lt - lesser than - меньше чем
// db.students.find({age: {$lt: 20}});

// $gte - greater or equal  >=
// $lte - greater or equal  <=

// $eq - равно
// db.students.find({age: {$eq: 45}});

// $ne - not equal - не равно
// db.students.find({age: {$ne: 45}});

// db.students.insertMany([
//     {name: "Anna"},
//     {name: "Anna", age: 43},
// ]);

// мы можем отображать поля в документах
// этого можно добиться передавая второй параметр
// 1 - не undefined
// 0 - не указано поле
// db.students.find({}, {age: 1});

// Как найти всех студентов,
// с именем не анна и отобразить информацию без адреса

// db.students.find({name: {$ne: "Anna"}}, {adress: 0});

// $and $or $not

// $not  - не что-то там
// возраст не больше чем 20
// db.students.find({age: {$not: {$gt: 20}}});

// $exists 1, 0 или true, false
// db.students.find({age: {$exists: true}});

// возраст не больше чем 20 и не равен undefined
// db.students.find({
//   $and: [
//     { age: { $not: { $gt: 20 } } },
//     { age: { $exists: true } }
// ],
// });

// or - когда хотя бы одно условие выполняется
// db.students.find({
//   $or: [
//     { age: { $gt: 35 }  },
//     { adress: { $exists: true } }
// ],
// });

// Как получить по id

// db.students.findOne({_id: ObjectId("68b09d41cd0460303536a86b")});

// db.users.insertMany([
//     {name: "Dragonfly", salary: 2000, costs: 5000},
//     {name: "Ant", salary: 5000, costs: 2000}
// ]);

// хочу сравнить поля в фильтрации
// Например, все, у кго расходы больше доходов
// $expr
// db.users.find({$expr: {$gt: ["$costs", "$salary"] }});

// Все у кого, зп больше расходов

db.users.find({ $expr: { $gt: ["$salary", "$costs"] } });
