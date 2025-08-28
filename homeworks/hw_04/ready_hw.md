# Пошаговая инструкция выполнения заданий из файла [tasks.md](tasks.md)

## 0. **Создадим базу данных `drink_menu_db` и коллекцию `drinks`**
```javascript
// Create a new database.
use(drink_menu_db);

// Create a new collection.
db.createCollection(drinks);
```
### Вывод:
![Скриншот результата выполнения запроса](../../others/resources/images/Screenshot%202025-08-28%20234446.png)

## 1. **Добавление напитков в коллекцию `drinks`**
Вставьте документы в коллекцию (если она не существует, MongoDB создаст её автоматически). Пример документов:
```javascript
db.drinks.insertMany([
    // Алкогольные напитки
    {name: "Виски", price: 2500, strength: 40, type: "крепкий", color: "янтарный", taste: "дымный", temp: "room"},
    {name: "Водка", price: 800, strength: 40, type: "крепкий", color: "прозрачный", taste: "нейтральный", temp: "chilled"},
    {name: "Ром", price: 1200, strength: 35, type: "крепкий", color: "золотой", taste: "сладкий", temp: "room"},
    {name: "Джин", price: 1500, strength: 37.5, type: "крепкий", color: "прозрачный", taste: "хвойный", temp: "chilled"},
    {name: "Текила", price: 1800, strength: 38, type: "крепкий", color: "прозрачный", taste: "травяной", temp: "room"},
    {name: "Коньяк", price: 3200, strength: 40, type: "крепкий", color: "коричневый", taste: "фруктовый", temp: "room"},
    
    // Вина
    {name: "Красное вино Мерло", price: 1200, strength: 13, type: "вино", color: "красное", taste: "фруктовый", temp: "room"},
    {name: "Белое вино Шардоне", price: 1300, strength: 12.5, type: "вино", color: "белое", taste: "цитрусовый", temp: "chilled"},
    {name: "Розовое вино", price: 1100, strength: 12, type: "вино", color: "розовое", taste: "ягодный", temp: "chilled"},
    {name: "Игристое вино", price: 1700, strength: 11.5, type: "игристое", color: "золотистое", taste: "сладкий", temp: "chilled"},
    
    // Пиво
    {name: "Светлое пиво", price: 200, strength: 4.5, type: "пиво", color: "светлое", taste: "хмельной", temp: "cold"},
    {name: "Темное пиво", price: 250, strength: 5.5, type: "пиво", color: "темное", taste: "горький", temp: "cold"},
    {name: "Пшеничное пиво", price: 280, strength: 5, type: "пиво", color: "мутное", taste: "пряный", temp: "cold"},
    {name: "Крафтовое IPA", price: 350, strength: 6.5, type: "пиво", color: "янтарное", taste: "горький", temp: "cold"},
    
    // Ликеры и коктейли
    {name: "Бейлис", price: 1600, strength: 17, type: "ликер", color: "коричневый", taste: "сливочный", temp: "chilled"},
    {name: "Кампари", price: 1100, strength: 25, type: "ликер", color: "красный", taste: "горький", temp: "chilled"},
    {name: "Мохито", price: 400, strength: 10, type: "коктейль", color: "прозрачный", taste: "мятный", temp: "cold"},
    {name: "Маргарита", price: 450, strength: 15, type: "коктейль", color: "зеленый", taste: "кислый", temp: "cold"},
    
    // Безалкогольные
    {name: "Кола", price: 100, strength: 0, type: "газировка", color: "коричневый", taste: "сладкий", temp: "cold"},
    {name: "Лимонад", price: 150, strength: 0, type: "газировка", color: "желтый", taste: "кислый", temp: "cold"},
    {name: "Апельсиновый сок", price: 200, strength: 0, type: "сок", color: "оранжевый", taste: "сладкий", temp: "cold"},
    {name: "Чай зеленый", price: 50, strength: 0, type: "чай", color: "зеленый", taste: "терпкий", temp: "hot"},
    {name: "Кофе эспрессо", price: 120, strength: 0, type: "кофе", color: "коричневый", taste: "горький", temp: "hot"},
    {name: "Горячий шоколад", price: 180, strength: 0, type: "шоколад", color: "коричневый", taste: "сладкий", temp: "hot"},
    {name: "Молочный коктейль", price: 220, strength: 0, type: "коктейль", color: "розовый", taste: "сладкий", temp: "cold"},
    
    // Экзотические напитки
    {name: "Саке", price: 1900, strength: 15, type: "рисовое вино", color: "прозрачный", taste: "сладкий", temp: "hot"},
    {name: "Абсент", price: 2800, strength: 70, type: "крепкий", color: "зеленый", taste: "анисовый", temp: "room"},
    {name: "Мескаль", price: 2100, strength: 40, type: "крепкий", color: "прозрачный", taste: "дымный", temp: "room"},
    {name: "Писко", price: 1700, strength: 38, type: "крепкий", color: "прозрачный", taste: "фруктовый", temp: "chilled"}
])
```
### Вывод:
![Скриншот результата выполнения запроса](../../others/resources/images/Screenshot%202025-08-28%20235013.png)

---

## 2. **Самый дорогой напиток**
Используйте сортировку по убыванию цены и ограничение вывода одним документом:
```javascript
db.drinks.find().sort({ price: -1 }).limit(1)
```
### Вывод:
![Скриншот результата выполнения запроса](../../others/resources/images/Screenshot%202025-08-29%20000048.png)

---

## 3. **Топ-3 самых дешёвых напитка**
Отсортируйте по возрастанию цены и ограничьте вывод тремя документами:
```javascript
db.drinks.find().sort({ price: 1 }).limit(3)
```
### Вывод:
![Скриншот результата выполнения запроса](../../others/resources/images/Screenshot%202025-08-29%20000652.png)

---

## 4. **Самый крепкий напиток**
Отсортируйте по убыванию крепости и выведите название:
```javascript
db.drinks.find({}, { name: 1, _id: 0 }).sort({ strength: -1 }).limit(1)
```
### Вывод:
![Скриншот результата выполнения запроса](../../others/resources/images/Screenshot%202025-08-29%20001036.png)
---

#### Все операции в формате 'js' [тут](./js)
#### Расширенный вариант выполнения запросов [тут](extension_hw.md)