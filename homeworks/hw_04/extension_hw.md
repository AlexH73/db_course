# MongoDB Запросы для Коллекции Напитков

**Продолжение работы с коллекцией напитков созданной в [домашнем задании](ready_hw.md)**
## Подключение к базе данных
```javascript
use drink_menu_db; // Используем базу данных drink_menu_db
db = db.getSiblingDB('drink_menu_db'); // Альтернативный способ подключения
```

## Основные операции поиска

### 1. Простая выборка всех документов
```javascript
db.drinks.find({});
```

### 2. Выборка с проекцией (только определенные поля)
```javascript
db.drinks.find({}, { name: 1, price: 1, _id: 0 });
```

### 3. Фильтрация по одному условию
```javascript
// Алкогольные напитки
db.drinks.find({ strength: { $gt: 0 } });

// Безалкогольные напитки
db.drinks.find({ strength: 0 });

// Напитки определенного типа
db.drinks.find({ type: "вино" });
```

### 4. Фильтрация по нескольким условиям (логические операторы)
```javascript
// Крепкие алкогольные напитки дороже 1000 рублей
db.drinks.find({
  $and: [
    { strength: { $gt: 30 } },
    { price: { $gt: 1000 } }
  ]
});

// Вина или пиво
db.drinks.find({
  $or: [
    { type: "вино" },
    { type: "пиво" }
  ]
});

// Напитки, которые не являются алкогольными
db.drinks.find({
  type: { $not: { $in: ["крепкий", "вино", "пиво", "ликер"] } }
});
```

### 5. Фильтрация по диапазону значений
```javascript
// Напитки в ценовом диапазоне 500-2000 рублей
db.drinks.find({
  price: { $gte: 500, $lte: 2000 }
});

// Слабоалкогольные напитки (до 15%)
db.drinks.find({
  strength: { $gt: 0, $lte: 15 }
});
```

## Операторы агрегации

### 1. Группировка и агрегация
```javascript
// Средняя цена по типам напитков
db.drinks.aggregate([
  {
    $group: {
      _id: "$type",
      avgPrice: { $avg: "$price" },
      maxPrice: { $max: "$price" },
      minPrice: { $min: "$price" },
      count: { $sum: 1 }
    }
  },
  { $sort: { avgPrice: -1 } }
]);

// Самый крепкий напиток каждого типа
db.drinks.aggregate([
  {
    $group: {
      _id: "$type",
      maxStrength: { $max: "$strength" },
      strongestDrink: { $first: "$name" }
    }
  },
  { $sort: { maxStrength: -1 } }
]);
```

### 2. Статистика по напиткам
```javascript
// Общая статистика коллекции
db.drinks.aggregate([
  {
    $group: {
      _id: null,
      totalDrinks: { $sum: 1 },
      avgPrice: { $avg: "$price" },
      avgStrength: { $avg: "$strength" },
      priceRange: { 
        $push: { 
          min: { $min: "$price" }, 
          max: { $max: "$price" } 
        } 
      }
    }
  }
]);
```

### 3. Категоризация напитков
```javascript
// Категоризация по крепости
db.drinks.aggregate([
  {
    $bucket: {
      groupBy: "$strength",
      boundaries: [0, 5, 15, 30, 50, 100],
      default: "Other",
      output: {
        count: { $sum: 1 },
        drinks: { $push: "$name" }
      }
    }
  }
]);
```

## Сложные запросы с несколькими операторами

### 1. Поиск с сортировкой и лимитом
```javascript
// Топ-5 самых дорогих напитков
db.drinks.find({})
  .sort({ price: -1 })
  .limit(5);

// Топ-3 самых крепких напитков с проекцией
db.drinks.find({}, { name: 1, strength: 1, _id: 0 })
  .sort({ strength: -1 })
  .limit(3);
```

### 2. Поиск с пагинацией
```javascript
// Пагинация - вторая страница (пропустить первые 10, показать следующие 10)
db.drinks.find({})
  .skip(10)
  .limit(10)
  .sort({ name: 1 });
```

### 3. Поиск по текстовому содержимому
```javascript
// Создание текстового индекса (выполнить один раз)
db.drinks.createIndex({ name: "text", taste: "text" });

// Поиск напитков с определенными вкусами
db.drinks.find({
  $text: { $search: "сладкий фруктовый" }
});
```

### 4. Агрегация с несколькими стадиями
```javascript
// Анализ напитков по цвету и температуре подачи
db.drinks.aggregate([
  { $match: { strength: { $gt: 0 } } }, // Только алкогольные
  {
    $group: {
      _id: { color: "$color", temp: "$temp" },
      count: { $sum: 1 },
      avgStrength: { $avg: "$strength" },
      examples: { $push: "$name" }
    }
  },
  { $sort: { count: -1 } },
  { $limit: 10 }
]);
```

## Запросы из домашнего задания

### 1. Самый дорогой напиток
```javascript
db.drinks.find().sort({ price: -1 }).limit(1);
```

### 2. Топ три самых дешевых напитка
```javascript
db.drinks.find().sort({ price: 1 }).limit(3);
```

### 3. Самый крепкий напиток
```javascript
db.drinks.find({}, { name: 1, _id: 0 }).sort({ strength: -1 }).limit(1);
```

## Дополнительные полезные запросы

### 1. Поиск дубликатов
```javascript
db.drinks.aggregate([
  {
    $group: {
      _id: "$name",
      count: { $sum: 1 },
      ids: { $push: "$_id" }
    }
  },
  { $match: { count: { $gt: 1 } } }
]);
```

### 2. Обновление документов
```javascript
// Увеличить цену всех алкогольных напитков на 10%
db.drinks.updateMany(
  { strength: { $gt: 0 } },
  { $mul: { price: 1.1 } }
);

// Добавить поле "discount" для напитков дороже 2000 рублей
db.drinks.updateMany(
  { price: { $gt: 2000 } },
  { $set: { discount: 0.15 } }
);
```

### 3. Удаление документов
```javascript
// Удалить все безалкогольные напитки дешевле 50 рублей
db.drinks.deleteMany({
  $and: [
    { strength: 0 },
    { price: { $lt: 50 } }
  ]
});
```

## Индексы для оптимизации запросов
```javascript
// Создание индексов для часто используемых полей
db.drinks.createIndex({ price: 1 });
db.drinks.createIndex({ strength: 1 });
db.drinks.createIndex({ type: 1 });
db.drinks.createIndex({ color: 1 });
db.drinks.createIndex({ temp: 1 });

// Составной индекс для часто используемых комбинаций
db.drinks.createIndex({ type: 1, strength: 1 });
db.drinks.createIndex({ price: 1, strength: 1 });
```