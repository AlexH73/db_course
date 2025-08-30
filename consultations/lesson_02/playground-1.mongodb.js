const database = "shop";
const collection = "products";

// 1. Создание базы данных
use(database);

// 2. Создание коллекции
// db.createCollection(collection);

// 3. Добавление одного документа
// db.products.insertOne({
//   name: "Laptop",
//   price: 1200,
//   category: "Electronics",
// });

// 4. Добавление нескольких документов
// db.products.insertMany([
//   { name: "Phone", price: 800, category: "Electronics" },
//   { name: "Tablet", price: 400, category: "Electronics" },
//   { name: "Book", price: 20, category: "Education" },
// ]);

// 5. Вывод всех товаров
//db.products.find({});

// 6. Поиск товара по названию
//db.products.find({ name: "Phone" });

// 7. Фильтрация товаров по цене
//db.products.find({ price: { $gt: 600 } });

// 8. Обновление данных товара
// db.products.updateOne({ name: "Laptop" }, { $set: { price: 1300 } });

// 9. Удаление одного товара
//db.products.deleteOne({ name: "Tablet" });

// 10. Удаление товаров по условию
//db.products.deleteMany({ price: { $lt: 600 } });

// 11. Создание индекса
//db.products.createIndex({ name: 1 });

// 12. Подсчет количества товаров
//db.products.countDocuments();

// 13. Поиск товаров в ценовом диапазоне
// db.products.find({ price: { $gte: 600, $lte: 1000 } });

// 14. Фильтрация по категории
//db.products.find({ category: "Electronics" });

// 15. Добавление нового поля ко всем товарам
//db.products.updateMany({}, { $set: { stock: 50 } });

// 16. Добавление товара с вложенным документом
// db.products.insertOne({
//   name: "Camera",
//   price: 900,
//   category: "Electronics",
//   details: {
//     brand: "Canon",
//     model: "EOS R5",
//   },
// });

// 17. Поиск товаров с определенным полем
//db.products.find({ details: { $exists: true } });

// 18. Массовое обновление цен
//db.products.updateMany({}, { $mul: { price: 1.1 } });

// 19. Добавление массива в товары
// db.products.updateMany(
//   {},
//   { $set: { reviews: [{ user: "John", rating: 5 }] } }
// );

// 20. Добавление отзыва в массив
// db.products.updateOne(
//   { name: "Laptop" },
//   { $push: { reviews: { user: "Alice", rating: 4 } } }
// );

// 21. Поиск товаров с определенным рейтингом
//db.products.find({ "reviews.rating": 5 });

// 22. Удаление вложенных данных
// db.products.updateOne({ name: "Laptop" }, { $unset: { reviews: "" } });

// 23. Создание коллекции заказов
// db.orders.insertOne({
//   user: "Alex",
//   products: ["Laptop", "Phone"],
//   total: 2100,
//   status: "Pending",
// });

// 24. Обновление статуса заказа
// db.orders.updateOne({ status: "Pending" }, { $set: { status: "Shipped" } });

// 25. Подсчет заказов по статусу
// db.orders.countDocuments({ status: "Shipped" });

// 26. Удаление заказов с определенными товарами
// db.orders.deleteMany({ products: "Phone" });

// 27. Создание связи между коллекциями
// Добавляем пользователя
// db.users.insertOne({ name: "Alex", email: "alex@example.com" });

// Обновляем заказы
// db.orders.updateMany(
//   { user: "Alex" },
//   { $set: { user_id: ObjectId("68b33ad964e6ec104c2d77d1") } }
// );

// 28. Объединение данных через агрегацию
// db.orders.aggregate([
//   {
//     $lookup: {
//       from: "users",
//       localField: "user_id",
//       foreignField: "_id",
//       as: "user_info",
//     },
//   },
// ]);

// 29. Сортировка товаров по цене
// db.products.find({ price: { $gt: 1000 } }).sort({ price: -1 });

// 30. Создание уникального индекса
// db.customers.createIndex({ email: 1 }, { unique: true });
