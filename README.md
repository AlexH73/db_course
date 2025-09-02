# 🗄️ Учебный курс по базам данных

[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-17-blue?logo=postgresql)](https://www.postgresql.org/download/)
[![Docker](https://img.shields.io/badge/Docker-✓-blue?logo=docker)](https://www.docker.com/get-started)
[![Beekeeper Studio](https://img.shields.io/badge/Beekeeper_Studio-✓-yellow?logo=beekeeperstudio)](https://www.beekeeperstudio.io/)
[![Mongo Compass](https://img.shields.io/badge/Mongo_Compass-✓-green?logo=mongodb)](https://www.mongodb.com/products/compass)
[![SQL](https://img.shields.io/badge/SQL-✓-orange?logo=sql)](https://en.wikipedia.org/wiki/SQL)
[![NoSQL](https://img.shields.io/badge/NoSQL-✓-purple?logo=nosql)](https://en.wikipedia.org/wiki/NoSQL)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

Структурированные материалы для изучения основ работы с базами данных, PostgreSQL и инструментами разработки.

## 📚 Структура курса

### 🗂️ Папка [lessons](/lessons/)
Теоретические материалы и практические задания по урокам.

### 🏠 Папка [homeworks](/homeworks/)
Практические задания для закрепления материала.

### 💬 Папка [consultations](/consultations/)
Дополнительные материалы и ответы на вопросы.

### 📁 Папка [others](/others/)
Дополнительные материалы и ресурсы.

## 🛠️ Технологии и инструменты
- **PostgreSQL 17** - реляционная СУБД
- **Docker** - контейнеризация БД
- **Beekeeper Studio** - GUI для работы с базами данных
- **MongoDB Compass** - GUI для работы с MongoDB
- **SQL** - язык запросов

## 🚀 Быстрый старт

### Установка необходимых инструментов
1. **Установите Docker**: [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/)
2. **Установите Beekeeper Studio**: [https://www.beekeeperstudio.io/](https://www.beekeeperstudio.io/)
3. **(Опционально) Установите MongoDB Compass**: [https://www.mongodb.com/products/compass](https://www.mongodb.com/products/compass)

### Запуск PostgreSQL в Docker
```bash
# Создайте сеть для контейнеров
docker network create db-network

# Запустите PostgreSQL контейнер
docker run --name postgres-db \
  -e POSTGRES_USER=admin \
  -e POSTGRES_PASSWORD=password \
  -e POSTGRES_DB=testdb \
  -p 5432:5432 \
  --network db-network \
  -d postgres:17
```
  ---
### Подключение в Beekeeper Studio

1.  Откройте Beekeeper Studio
    
2.  Нажмите "New connection"
    
3.  Выберите PostgreSQL
    
4.  Заполните параметры:
    
    -   Host: localhost
        
    -   Port: 5432
        
    -   User: admin
        
    -   Password: password
        
    -   Database: testdb
        

## 📖 Темы уроков

1. Запуск PostgreSQL через Docker
2. БД и СУБД
3. Таблица, строки, столбцы, primary key, нормализация в общих словах
4. SQL запросы - практика
5. Типы ключей, связи между таблицами
6. Проектирование БД при помощи https://drawsql.app/
7. JOIN-операции
8. Операторы LIKE, JOIN, GROUP BY и др.
9. Constraints
10. Индексы и оптимизация запросов (общее описание)
11. Введение в NoSQL, типы NoSQL-баз данных,примеры
12. Сценарии использования NoSQL
13. Установка MongoDB compass
14. Основы работы с MongoDB
15. Базовые структуры данных
16. MongoDB Atlas - подключение
17. Aggregation


## 🔧 Полезные команды Docker

```shell
# Проверить статус контейнера
docker ps

# Остановить контейнер
docker stop postgres-db

# Запустить контейнер
docker start postgres-db

# Просмотреть логи
docker logs postgres-db

# Подключиться к контейнеру
docker exec -it postgres-db psql -U admin -d testdb
```

## 🤝 Как работать с репозиторием

1.  Клонируйте репозиторий:
```bash
git clone https://github.com/AlexH73/db_course.git
```

2.  Переходите в соответствующие папки уроков
    
3.  Следуйте инструкциям каждого урока
    
4.  Выполняйте домашние задания

5.  Создавайте [Issues](https://github.com/AlexH73/db_course/issues) для вопросов

## 📝 Лицензия

Этот учебный проект распространяется под лицензией MIT. Подробнее см. в файле [LICENSE](LICENSE).

___

_Обновлено: 2025_ | [AlexH73](https://github.com/AlexH73) | Учебный курс по базам данных