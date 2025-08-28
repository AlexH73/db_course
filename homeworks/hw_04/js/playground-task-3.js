const database = "drink_menu_db";

// The current database to use.
use(database);

// 3. Топ-3 самых дешёвых напитка
// Отсортируем по возрастанию цены и ограничим вывод тремя документами:

db.drinks.find().sort({ price: 1 }).limit(3);
