# Классная работа
## Консультация 02 [Practice Mongo Db](https://lms.ait-tr.eu/#/student-cabinet/cohort/123/db/consultation/lesson/8230)

- [Создание кластера Atlas на MongoDB Cloud](https://cloud.mongodb.com/v2/68b0bbcb03fa4360bfbe7a90#/metrics/replicaSet/68b32bece5bdfb48ad48084d/explorer/shop)

- Выполнение заданий [mongo_tasks](mongo_tasks.md):

### 🔹 Простые задания (1–15)

**1. Создание базы данных**  
```mongodb
use(shop)
```

**2. Создание коллекции**  
```mongodb
db.createCollection("products")
```

**3. Добавление одного документа**  
```mongodb
db.products.insertOne({
  name: "Laptop",
  price: 1200,
  category: "Electronics"
})
```

**4. Добавление нескольких документов**  
```mongodb
db.products.insertMany([
  { name: "Phone", price: 800, category: "Electronics" },
  { name: "Tablet", price: 400, category: "Electronics" },
  { name: "Book", price: 20, category: "Education" }
])
```

**5. Вывод всех товаров**  
```mongodb
db.products.find({})
```

**6. Поиск товара по названию**  
```mongodb
db.products.find({ name: "Phone" })
```

**7. Фильтрация товаров по цене**  
```mongodb
db.products.find({ price: { $gt: 600 } })
```

**8. Обновление данных товара**  
```mongodb
db.products.updateOne(
  { name: "Laptop" },
  { $set: { price: 1300 } }
)
```

**9. Удаление одного товара**  
```mongodb
db.products.deleteOne({ name: "Tablet" })
```

**10. Удаление товаров по условию**  
```mongodb
db.products.deleteMany({ price: { $lt: 600 } })
```

**11. Создание индекса**  
```mongodb
db.products.createIndex({ name: 1 })
```

**12. Подсчет количества товаров**  
```mongodb
db.products.countDocuments()
```

**13. Поиск товаров в ценовом диапазоне**  
```mongodb
db.products.find({ price: { $gte: 600, $lte: 1000 } })
```

**14. Фильтрация по категории**  
```mongodb
db.products.find({ category: "Electronics" })
```

**15. Добавление нового поля ко всем товарам**  
```mongodb
db.products.updateMany(
  {},
  { $set: { stock: 50 } }
)
```

---

### 🔸 Средние задания (16–30)

**16. Добавление товара с вложенным документом**  
```mongodb
db.products.insertOne({
  name: "Camera",
  price: 900,
  category: "Electronics",
  details: {
    brand: "Canon",
    model: "EOS R5"
  }
})
```

**17. Поиск товаров с определенным полем**  
```mongodb
db.products.find({ details: { $exists: true } })
```

**18. Массовое обновление цен**  
```mongodb
db.products.updateMany(
  {},
  { $mul: { price: 1.1 } }
)
```

**19. Добавление массива в товары**  
```mongodb
db.products.updateMany(
  {},
  { $set: { reviews: [{ user: "John", rating: 5 }] } }
)
```

**20. Добавление отзыва в массив**  
```mongodb
db.products.updateOne(
  { name: "Laptop" },
  { $push: { reviews: { user: "Alice", rating: 4 } } }
)
```

**21. Поиск товаров с определенным рейтингом**  
```mongodb
db.products.find({ "reviews.rating": 5 })
```

**22. Удаление вложенных данных**  
```mongodb
db.products.updateOne(
  { name: "Laptop" },
  { $unset: { reviews: "" } }
)
```

**23. Создание коллекции заказов**  
```mongodb
db.orders.insertOne({
  user: "Alex",
  products: ["Laptop", "Phone"],
  total: 2100,
  status: "Pending"
})
```

**24. Обновление статуса заказа**  
```mongodb
db.orders.updateOne(
  { status: "Pending" },
  { $set: { status: "Shipped" } }
)
```

**25. Подсчет заказов по статусу**  
```mongodb
db.orders.countDocuments({ status: "Shipped" })
```

**26. Удаление заказов с определенными товарами**  
```mongodb
db.orders.deleteMany({ products: "Phone" })
```

**27. Создание связи между коллекциями**  
```mongodb
// Добавляем пользователя
db.users.insertOne({ name: "Alex", email: "alex@example.com" })

// Обновляем заказы
db.orders.updateMany(
  { user: "Alex" },
  { $set: { user_id: ObjectId("68b33ad964e6ec104c2d77d1") } }
)
```

**28. Объединение данных через агрегацию**  
```mongodb
db.orders.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "user_id",
      foreignField: "_id",
      as: "user_info"
    }
  }
])
```

**29. Сортировка товаров по цене**  
```mongodb
db.products
  .find({ price: { $gt: 1000 } })
  .sort({ price: -1 })
```

**30. Создание уникального индекса**  
```mongodb
db.customers.createIndex({ email: 1 }, { unique: true })
```
- Так же есть все запросы в [js формате](playground-1.mongodb.js)