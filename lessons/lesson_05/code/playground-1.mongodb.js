/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'zoo_db';

// Create a new database.
use(database);



// db.animals.insertMany([
//     {kind: "lion", weight: 300, name: "Leva", age: 5, climate: "savanna", predatory: true},
//     {kind: "elephant", weight: 2000, name: "Bengamin", age: 60, climate: "savanna", predatory: false},
//     {kind: "crocodile", weight: 400, name: "Gena", age: 24, climate: "savanna", predatory: false},
//     {kind: "lemure", weight: 3, name: "Cheburashka", age: 6, climate: "tropical", predatory: false},
//     {kind: "zebra", weight: 350, name: "Tsue", age: 12, climate: "savanna", predatory: false},
//     {kind: "polar bear", weight: 500, name: "Nanuk", age: 10, climate: "arctic", predatory: true},
//     {kind: "bear", weight: 400, name: "Stich", age: 15, climate: "continental", predatory: true}
// ]);

// db.animals.find();

// Как мы можем изменять документы:
// операторы - $set
// Как изменить значение поля хищный у всех крокодилов

// db.animals.updateMany({kind: "crocodile"}, {$set: {predatory: true}});

// db.animals.findOne({kind: "crocodile"});

// Новый год в зоопарке
// Хочу все животные набрали пару кило веса) 3кг
// если хотим увеличить на какую-то величину $inc
// увеличение на 3 кг каждого
// db.animals.updateMany({}, {$inc: {weight: 3}});

// увеличение на 2 процента всех
// db.animals.updateMany({}, { $mul: { weight: 1.02 } });

// Львы поправились на 5% 
// $mul умножать
// db.animals.updateMany({kind: "lion"}, { $mul: { weight: 0.95 } });

// Как переименовать поле?
// Не значение, а само название поля
// $rename

// переименовать поле name в nick 
// db.animals.updateMany({}, {$rename: {name: "nick"}});

// Допустим у нас есть поле с массивом внутри
// db.animals.updateMany({kind: "lion"}, {$set: {foods: ["rabbit", "elphant", "zebra"]}});

// $push - добавление в массив
// db.animals.updateMany({kind: "lion"}, {$push: {foods: "crocodile"}});

// $pull - достать из массива

// db.animals.updateMany({kind: "lion"}, {$pull: {foods: "elphant"}});

// Как изменить один конкретный документ?
// db.animals.updateOne({_id: ObjectId("68b7246a5fd2083bbb4548e7")}, {$inc: {age: 1}});

// Как удалить по id?
// db.animals.deleteOne({_id: ObjectId("68b7246a5fd2083bbb4548e8")});

// Как удалить многих?
// Динозавров - к нам попало несколько

// db.animals.insertMany([
//      {kind: "t-rex", weight: 4000, name: "Rex", age: 1, climate: "jungle", predatory: true},
//      {kind: "t-rex", weight: 3500, name: "Rex Mini", age: 1, climate: "jungle", predatory: true},
// ]);

// Но у динозавров не было иммунитета от современных вирусов

// db.animals.deleteMany({kind: "t-rex"});


// Агрегация 

// Aggregation framework
// фильтрация
// посмотрим всех хищных
// $match - указываем поисковый запрос - query
// db.animals.aggregate([
//     {$match: {
//       predatory: true
//     }}
// ]);

// $sort - сортировка
// выбрали хищных --> отсортировали их по возрастанию веса
// db.animals.aggregate([
//     {$match: {
//       predatory: true
//     }},
//     {$sort: {
//       weight: 1
//     }}
// ]);

// Как выбрать двух самых тяжелых травоядных

// db.animals.aggregate([
//     {$match: {
//       predatory: false
//     }},
//     {$sort: {
//       weight: -1
//     }},
//     {$limit: 2}
// ]);

// Второе по весу травоядное
// $skip 
// db.animals.aggregate([
//     {$match: {
//       predatory: false
//     }},
//     {$sort: {
//       weight: -1
//     }},
//     {$skip: 1},
//     {$limit: 1}
// ]);

// Вывести только имена двух самых тяжелых хищников
// db.animals.aggregate([
//     {$match: {
//       predatory: true
//     }},
//     {$sort: {
//         weight: -1
//     }},
//     {$limit: 2},
//     {$project: {
//       nick: 1,
//       _id: 0
//     }}
// ]);


// Как нам вывести сколько у нас животных тяжелее 200 кг
// $count
// db.animals.aggregate([
//     {$match: {
//       weight: {$gt: 200}
//     }},
//     {$count: "number_of_heavy_animals"}
// ]);


// $sample - случайный образец 
// - выдаст один случаный 
// два случайных тяжелых животных

// db.animals.aggregate([
//     {$match: {
//       weight: {$gt: 200}
//     }},
//    {$sample: {
//      size: 2
//    }}
// ]);


// $lookup
// С помощью этой операции мы можем взять информацию из одной коллекции и дополнить информацией из
// другой

// подготовимся
// db.posts.insertOne({
//     likes: 12,
//     text: "We learn to code"
// })

// 68b73d62984899ca28f14447 
// Добавили комментарии к посту
// db.comments.insertMany([
//     {
//         email: "zaveryaev@gmail.com",
//         message: "But not that fast",
//         post_id: ObjectId("68b73d62984899ca28f14447")
//     },
//     {
//         email: "smokotnin@gmail.com",
//         message: "Let repeat the lesson",
//         post_id: ObjectId("68b73d62984899ca28f14447")
//     },
//     {
//         email: "dmitry@gmail.com",
//         message: "I am in Spain right now",
//         post_id: ObjectId("68b73d62984899ca28f14447")
//     }
// ]);


// lookup
// db.comments.aggregate([
//     {$lookup: {
//       from: "posts",
//       localField: "post_id",
//       foreignField: "_id",
//       as: "post_info"
//     }}
// ]);