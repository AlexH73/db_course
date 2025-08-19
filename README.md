# 🗄️ Учебный курс по базам данных

![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-blue?logo=postgresql)
![Docker](https://img.shields.io/badge/Docker-✓-blue?logo=docker)
![Beekeeper Studio](https://img.shields.io/badge/Beekeeper_Studio-✓-lightgrey)
![License](https://img.shields.io/badge/License-MIT-green)

Структурированные материалы для изучения основ работы с базами данных, PostgreSQL и инструментами разработки.

## 📚 Структура курса

### 🗂️ Папка [lessons](/lessons/)
Теоретические материалы и практические задания по урокам:
- `lesson_01` - Установка Beekeeper Studio и запуск Postgres через Docker
- `lesson_02` - Основы SQL: CREATE, SELECT, INSERT, UPDATE, DELETE
- `lesson_03` - Нормализация баз данных и связи между таблицами
- `lesson_04` - Сложные запросы: JOIN, агрегатные функции
- `lesson_05` - Индексы, транзакции и оптимизация запросов
- *(будут добавляться по мере прохождения курса)*

### 🏠 Папка [homeworks](/homeworks/)
Практические задания для закрепления материала:
- `hw_01` - Настройка окружения и первые запросы
- `hw_02` - Проектирование простой базы данных
- `hw_03` - Работа со сложными запросами
- *(будут добавляться по мере прохождения курса)*

### 💬 Папка [consultations](/consultations/)
Дополнительные материалы и ответы на вопросы:
- `consultation_01` - Частые ошибки при установке
- `consultation_02` - Best practices работы с PostgreSQL
- *(будут добавляться по мере прохождения курса)*

## 🛠️ Технологии и инструменты
- **PostgreSQL 17** - реляционная СУБД
- **Docker** - контейнеризация БД
- **Beekeeper Studio** - GUI для работы с базами данных
- **SQL** - язык запросов
- **DBeaver** (опционально) - альтернативный GUI

## 🚀 Быстрый старт

### Установка необходимых инструментов
1. **Установите Docker**: [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/)
2. **Установите Beekeeper Studio**: [https://www.beekeeperstudio.io/](https://www.beekeeperstudio.io/)

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

1.  Введение в базы данных и SQL
    
2.  Установка и настройка окружения
    
3.  DDL команды (CREATE, ALTER, DROP)
    
4.  DML команды (SELECT, INSERT, UPDATE, DELETE)
    
5.  Нормализация и проектирование БД
    
6.  Связи между таблицами (JOIN)
    
7.  Индексы и оптимизация запросов
    
8.  Транзакции и ACID
    
9.  Хранимые процедуры и функции
    
10.  Резервное копирование и восстановление
    

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
    
3.  Следуйте инструкциям в README каждого урока
    
4.  Выполняйте домашние задания
    
5.  Создавайте Issues для вопросов
    

## 📝 Лицензия

Этот учебный проект распространяется под лицензией MIT. Подробнее см. в файле [LICENSE](https://license/).

___

_Обновлено: 2025_ | [AlexH73](https://github.com/AlexH73) | Учебный курс по базам данных