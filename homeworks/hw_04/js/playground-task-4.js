const database = "drink_menu_db";

// The current database to use.
use(database);

// 4. Самый крепкий напиток
// Отсортируем по убыванию крепости и выведем название:

db.drinks.find({}, { name: 1, _id: 0 }).sort({ strength: -1 }).limit(1);
