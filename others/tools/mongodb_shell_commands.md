# Функции оболочки (Shell) MongoDB

## Основные команды подключения и информации
- **mongo** — запуск оболочки MongoDB
- **connect()** — подключение к MongoDB экземпляру
- **db** — показывает текущую базу данных
- **show dbs** — отображает список всех баз данных
- **use <db>** — переключается на указанную базу данных
- **show collections** — показывает все коллекции в текущей БД
- **show users** — показывает пользователей текущей БД
- **show roles** — показывает роли текущей БД
- **show profile** — показывает последние профайлерные записи

## Команды работы с данными
- **db.collection.find()** — поиск документов в коллекции
- **db.collection.findOne()** — найти один документ
- **db.collection.insert()** — вставить документ(ы)
- **db.collection.update()** — обновить документ(ы)
- **db.collection.remove()** — удалить документ(ы)
- **db.collection.aggregate()** — выполнить агрегационный pipeline
- **db.collection.count()** — подсчет документов
- **db.collection.distinct()** — найти уникальные значения

## Команды управления коллекциями
- **db.createCollection()** — создать новую коллекцию
- **db.collection.drop()** — удалить коллекцию
- **db.collection.renameCollection()** — переименовать коллекцию
- **db.collection.stats()** — статистика коллекции
- **db.collection.storageSize()** — размер хранения коллекции
- **db.collection.totalSize()** — общий размер коллекции
- **db.collection.validate()** — validate коллекцию

## Команды индексации
- **db.collection.createIndex()** — создать индекс
- **db.collection.getIndexes()** — получить список индексов
- **db.collection.dropIndex()** — удалить индекс
- **db.collection.reIndex()** — перестроить индексы
- **db.collection.totalIndexSize()** — размер всех индексов

## Администрирование
- **db.cloneCollection()** — клонировать коллекцию
- **db.copyDatabase()** — скопировать базу данных
- **db.dropDatabase()** — удалить текущую БД
- **db.fsyncLock()** — заблокировать базу для бэкапа
- **db.fsyncUnlock()** — разблокировать базу после бэкапа
- **db.repairDatabase()** — восстановить БД
- **db.shutdownServer()** — остановить сервер
- **db.version()** — версия MongoDB

## Репликация
- **rs.status()** — статус replica set
- **rs.initiate()** — инициализировать replica set
- **rs.conf()** — конфигурация replica set
- **rs.reconfig()** — переконфигурировать replica set
- **rs.add()** — добавить узел в replica set
- **rs.remove()** — удалить узел из replica set
- **rs.stepDown()** — перевести primary в secondary
- **rs.slaveOk()** — разрешить чтение со secondary

## Шардинг
- **sh.status()** — статус шардинга
- **sh.enableSharding()** — включить шардинг для БД
- **sh.shardCollection()** — шардировать коллекцию
- **sh.addShard()** — добавить шард в кластер
- **sh.addShardTag()** — добавить тег шарду
- **sh.addTagRange()** — добавить диапазон тегов

## Безопасность
- **db.auth()** — аутентификация в БД
- **db.createUser()** — создать пользователя
- **db.updateUser()** — обновить пользователя
- **db.dropUser()** — удалить пользователя
- **db.changeUserPassword()** — изменить пароль пользователя
- **db.grantRolesToUser()** — назначить роли пользователю

## Профайлинг и диагностика
- **db.setProfilingLevel()** — установить уровень профайлинга
- **db.currentOp()** — текущие операции
- **db.killOp()** — завершить операцию
- **db.hostInfo()** — информация о хосте
- **db.serverStatus()** — статус сервера

## Утилиты
- **load()** — загрузить и выполнить JavaScript файл
- **sleep()** — приостановить выполнение на指定нное время
- **print()** — вывести строку
- **printjson()** — вывести документ в формате JSON
- **ObjectId()** — создать ObjectId
- **ISODate()** — создать дату в ISO формате
- **UUID()** — создать UUID