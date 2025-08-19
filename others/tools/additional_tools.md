# 🛠️ Дополнительные инструменты для работы с базами данных

## GUI клиенты для PostgreSQL

### 1. DBeaver
- **Сайт**: https://dbeaver.io/
- **Описание**: Универсальный инструмент для работы с различными БД
- **Особенности**:
  - Поддержка множества СУБД
  - Мощный редактор запросов
  - Визуальное построение ER-диаграмм
  - Бесплатная версия с открытым исходным кодом

### 2. pgAdmin
- **Сайт**: https://www.pgadmin.org/
- **Описание**: Официальный GUI для PostgreSQL
- **Особенности**:
  - Полная интеграция с PostgreSQL
  - Мониторинг производительности
  - Отладка хранимых процедур
  - Бесплатный и открытый

### 3. DataGrip (JetBrains)
- **Сайт**: https://www.jetbrains.com/datagrip/
- **Описание**: Профессиональная IDE для работы с базами данных
- **Особенности**:
  - Умное автодополнение кода
  - Рефакторинг баз данных
  - Интеграция с другими инструментами JetBrains
  - Платная (есть бесплатный пробный период)

## Командные утилиты

### 1. psql
- **Описание**: Нативный консольный клиент PostgreSQL
- **Основные команды**:
  ```bash
  # Подключение к БД
  psql -h hostname -U username -d database_name

  # Выполнение SQL файла
  psql -f script.sql

  # Экспорт данных
  pg_dump database_name > backup.sql

  ```

 ### 2. pgcli

Сайт: [https://www.pgcli.com/](https://www.pgcli.com/)

- Описание: Улучшенная версия psql с автодополнением

- Особенности:

  - Подсветка синтаксиса

  - Автодополнение команд и имен таблиц

  - История запросов с поиском

## Инструменты для миграций
1. Flyway

- Сайт: [https://flywaydb.org/](https://flywaydb.org/)
- Описание: Система управления миграциями баз данных
- Особенности:

  - Версионирование схемы БД

  - Поддержка SQL и Java-based миграций

  - Интеграция с CI/CD

2. Liquibase

- Сайт: [https://www.liquibase.org/](https://www.liquibase.org/)

- Описание: Альтернативная система миграций

- Особенности:

  - Поддержка различных форматов (XML, YAML, JSON, SQL)

  - Откат изменений (rollback)

  - Интеграция с популярными фреймворками

## Мониторинг и анализ
1. pgBadger
- Сайт: [https://pgbadger.darold.net/](https://pgbadger.darold.net/)
- Описание: Анализатор логов PostgreSQL
- Особенности:
  - Создание подробных отчетов
  - Визуализация производительности
  - Выявление медленных запросов

2. explain.dalibo.com
- Сайт: [https://explain.dalibo.com/](https://explain.dalibo.com/)
- Описание: Визуализатор планов запросов
- Особенности:
  - Загрузка и анализ планов выполнения
  - Визуальное представление стоимости запросов
  - Бесплатный онлайн-инструмент

Docker образы для разработки
1. Официальный образ PostgreSQL

```bash
docker run --name postgres \
  -e POSTGRES_PASSWORD=mysecretpassword \
  -d postgres:16
  ```
2. PostgreSQL с расширениями
```bash
docker run --name postgres \
  -e POSTGRES_PASSWORD=mysecretpassword \
  -d postgres:16-with-extensions
  ```
3. pgAdmin в Docker
```bash 
docker run --name pgadmin \
  -e PGADMIN_DEFAULT_EMAIL=admin@example.com \
  -e PGADMIN_DEFAULT_PASSWORD=secret \
  -d dpage/pgadmin4
  ```
