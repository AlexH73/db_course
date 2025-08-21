-- One-to-Many Один ко многим 1-to-Many

-- создали таблицу для автора
CREATE TABLE authors (
    id serial primary key,
  full_name varchar(120)
);

CREATE TABLE books (
    id serial primary key,
  title varchar(80),
  date_of_publishing date,
  author_id int REFERENCES authors(id) ON DELETE CASCADE
);

-- foreign key - внешний ключ

INSERT INTO authors (full_name) VALUES ('Lev Tolstoy'), 
                                        ('J.R.Tolkien');
                                        
INSERT INTO books (title, date_of_publishing, author_id) VALUES 
('Anna Karenina', '1877-12-01', 1),
('War and Peace', '1869-12-01', 1),
('The Lord of The Rings: Brotherhood of Ring', '1847-12-01', 2),
('The Lord of The Rings: Two Towers', '1848-12-01', 2);

-- inner join 
SELECT a.id, a.full_name, b.title, b.date_of_publishing
FROM authors a
INNER JOIN books b
ON a.id = b.author_id;

