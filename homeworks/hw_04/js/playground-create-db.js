// Создаем базу данных "drink_menu_db" и коллекцию "drinks"

const database = "drink_menu_db";
const collection = "drinks";

// Create a new database.
use(database);

// Create a new collection.
db.createCollection(collection);
