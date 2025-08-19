# 🐳 Шпаргалка по Docker для работы с PostgreSQL

## Основные команды Docker
```bash
# Запуск PostgreSQL контейнера
docker run --name postgres-db \
  -e POSTGRES_USER=admin \
  -e POSTGRES_PASSWORD=password \
  -e POSTGRES_DB=testdb \
  -p 5432:5432 \
  -d postgres:17

# Просмотр запущенных контейнеров
docker ps

# Остановка контейнера
docker stop postgres-db

# Запуск остановленного контейнера
docker start postgres-db

# Перезагрузка контейнера
docker restart postgres-db

# Просмотр логов
docker logs postgres-db
docker logs -f postgres-db  # в реальном времени

# Подключение к контейнеру
docker exec -it postgres-db bash

# Выполнение psql внутри контейнера
docker exec -it postgres-db psql -U admin -d testdb

# Удаление контейнера
docker rm postgres-db

# Удаление образа
docker rmi postgres:17
```

## Docker Compose для PostgreSQL
```yaml
version: '3.8'
services:
  postgres:
    image: postgres:17
    container_name: postgres-db
    environment:
      POSTGRES_USER: admin
      POSTGRES_PASSWORD: password
      POSTGRES_DB: testdb
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./init.sql:/docker-entrypoint-initdb.d/init.sql
    networks:
      - db-network

  pgadmin:
    image: dpage/pgadmin4
    container_name: pgadmin
    environment:
      PGADMIN_DEFAULT_EMAIL: admin@example.com
      PGADMIN_DEFAULT_PASSWORD: secret
    ports:
      - "5050:80"
    networks:
      - db-network

volumes:
  postgres_data:

networks:
  db-network:
    driver: bridge
```
## Полезные команды для работы с данными
```bash   
# Создание дампа базы данных
docker exec -t postgres-db pg_dump -U admin testdb > backup.sql

# Восстановление из дампа
docker exec -i postgres-db psql -U admin -d testdb < backup.sql

# Копирование файлов в контейнер
docker cp script.sql postgres-db:/tmp/script.sql

# Выполнение SQL файла в контейнере
docker exec -i postgres-db psql -U admin -d testdb -f /tmp/script.sql
```

## Переменные окружения PostgreSQL
- `POSTGRES_USER` - имя пользователя по умолчанию
- `POSTGRES_PASSWORD` - пароль для пользователя
- `POSTGRES_DB` - имя создаваемой базы данных
- `PGHOST` - хост для подключения к базе данных (по умолчанию `localhost`)
- `PGPORT` - порт для подключения к базе данных (по умолчанию `5432`)
- `POSTGRES_HOST_AUTH_METHOD` - метод аутентификации (например, `trust`, `md5`)
- `PGDATA` - путь к каталогу данных (по умолчанию `/var/lib/postgresql/data`)

## Мониторинг и диагностика
```bash
# Просмотр использования ресурсов
docker stats postgres-db

# Проверка здоровья контейнера
docker inspect --format='{{.State.Health.Status}}' postgres-db

# Просмотр информации о контейнере
docker inspect postgres-db
```