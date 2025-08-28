const database = "drink_menu_db";

// The current database to use.
use(database);

// 2. Самый дорогой напиток
// Используем сортировку по убыванию цены и ограничение вывода одним документом:

db.drinks.find().sort({ price: -1 }).limit(1);
