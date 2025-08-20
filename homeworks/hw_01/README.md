# Домашнее задание - Выполнение SQL-запросов по заданию из [hw_01](task.md)

## Таблицы БД:

- DORF (dorfnr, name, haeuptling)
- BEWOHNER (bewohnernr, name, dorfnr, geschlecht, beruf, gold, status)
- GEGENSTAND (gegenstand, besitzer)

## Команды SQL:
```sql
-- Запрос для получения всех данных из таблицы DORF
SELECT * FROM dorf;

-- Запрос для получения всех данных из таблицы BEWOHNER
SELECT * FROM bewohner;

-- Запрос для получения всех данных из таблицы GEGENSTAND
SELECT * FROM gegenstand;

-- Запрос для получения всех жителей, чья профессия - 'Metzger'
SELECT * FROM bewohner WHERE beruf = 'Metzger';

-- Запрос для получения всех жителей, чей статус - 'friedlich'
SELECT * FROM bewohner WHERE status ='friedlich';

-- Запрос для получения всех жителей, чей статус - 'friedlich' и профессия - 'Waffenschmied'
SELECT * FROM bewohner WHERE status ='friedlich' AND beruf = 'Waffenschmied';

-- Запрос для получения всех жителей, чей статус - 'friedlich' и профессия с окончанием - 'schmied'
SELECT * FROM bewohner WHERE status ='friedlich' AND beruf LIKE '%schmied';

-- Запрос для добавления нового жителя с неизвестными данными
INSERT INTO bewohner (name, dorfnr, geschlecht, beruf, gold, status) VALUES ('Fremder', 1, '?', '?', 0, '?');

-- Запрос для получения идентификатора нового жителя
SELECT bewohnernr FROM bewohner WHERE name = 'Fremder';

-- Запрос для получения количества золота нового жителя
SELECT gold FROM bewohner WHERE name = 'Fremder';

-- Запрос для получения всех предметов, у которых нет владельца
SELECT * FROM gegenstand WHERE besitzer IS NULL;

-- Запрос для передачи предмета 'Kaffeetasse' новому владельцу
UPDATE gegenstand SET besitzer = 20 WHERE gegenstand = 'Kaffeetasse';

-- Запрос для передачи всех предметов без владельца новому владельцу
UPDATE gegenstand SET besitzer = 20 WHERE besitzer IS NULL;

-- Запрос для получения всех предметов нового владельца
SELECT * FROM gegenstand WHERE besitzer = 20;

-- Запрос для получения всех мирных жителей, которые являются торговцами
SELECT * FROM bewohner WHERE status ='friedlich' AND beruf = 'Haendler' OR beruf = 'Kaufmann';

-- Запрос для передачи предметов 'Ring' и 'Teekanne' новому владельцу
UPDATE gegenstand SET besitzer = 15 WHERE gegenstand IN ('Ring', 'Teekanne');

-- Запрос для изменения имени жителя с идентификатором 20
UPDATE bewohner SET name = 'Alex' WHERE bewohnernr = 20;


-- Запрос для получения всех жителей, чья профессия - 'Bäcker' с сортировкой по золоту
SELECT * FROM bewohner WHERE beruf = 'Bäcker' ORDER BY gold DESC;

-- Запрос для изменения золота жителя с идентификатором 20
UPDATE bewohner SET gold = gold + 100 - 150 WHERE bewohnernr = 20;

-- Запрос для добавления нового предмета 'Schwert' с владельцем 20
INSERT INTO gegenstand (gegenstand, besitzer) VALUES ('Schwert', 20);

-- Запрос для получения всех жителей, чья профессия - 'Pilot'
SELECT * FROM bewohner WHERE beruf = 'Pilot';

-- Запрос для получения всех деревень, где проживает житель 'Dirty Dieter'
SELECT dorf.name FROM dorf, bewohner WHERE dorf.dorfnr = bewohner.dorfnr AND bewohner.name = 'Dirty Dieter';

-- Запрос для получения имени жителя, который является главой деревни 'Zwiebelhausen'
SELECT bewohner.name
FROM dorf
JOIN bewohner ON dorf.haeuptling = bewohner.bewohnernr
WHERE dorf.name = 'Zwiebelhausen';

-- Запрос для получения количества жителей в деревне 'Zwiebelhausen'
SELECT COUNT(*) FROM bewohner, dorf WHERE dorf.dorfnr = bewohner.dorfnr AND dorf.name = 'Zwiebelhausen';

-- Запрос для получения количества женщин в деревне 'Zwiebelhausen'
SELECT COUNT(*) FROM bewohner, dorf WHERE dorf.dorfnr = bewohner.dorfnr AND dorf.name = 'Zwiebelhausen' AND bewohner.geschlecht = 'w';

-- Запрос для получения имен женщин в деревне 'Zwiebelhausen'
SELECT bewohner.name FROM bewohner, dorf WHERE dorf.dorfnr = bewohner.dorfnr AND dorf.name = 'Zwiebelhausen' AND bewohner.geschlecht = 'w';

-- Запрос для получения количества золота в деревне 'Gurkendorf'
SELECT SUM(bewohner.gold) FROM bewohner, dorf WHERE dorf.dorfnr = bewohner.dorfnr AND dorf.name = 'Gurkendorf';

-- Запрос для получения количества золота у жителей, которые являются торговцами, купцами или пекарями
SELECT SUM(gold) FROM bewohner WHERE beruf IN ('Haendler', 'Kaufmann', 'Baecker');

-- Запрос для получения суммы и среднего количества золота у жителей по профессиям
SELECT beruf, SUM(bewohner.gold), AVG(bewohner.gold) FROM bewohner GROUP BY beruf ORDER BY AVG(bewohner.gold);

-- Запрос для получения среднего количества золота у жителей по статусам
SELECT status, AVG(bewohner.gold) FROM bewohner GROUP BY status ORDER BY AVG(bewohner.gold);

-- Запрос для удаления жителя с именем 'Dirty Dieter'
DELETE FROM bewohner WHERE name = 'Dirty Dieter';

-- Запрос для удаления жителя с именем 'Dirty Doerthe'
DELETE FROM bewohner WHERE name = 'Dirty Doerthe';

-- Запрос для изменения статуса жителя с идентификатором 8 - освобождение пилота
UPDATE bewohner SET status = 'friedlich' WHERE bewohnernr = 8;

-- Запрос для изменения статуса жителя с идентификатором 20 - летим домой 😁
UPDATE bewohner SET status = 'ausgewandert' WHERE bewohnernr = 20;

```