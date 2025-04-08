CREATE DATABASE post_db;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) UNIQUE NOT NULL,
    email VARCHAR(100) NOT NULL,
    age INTEGER
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    autor VARCHAR(150) NOT NULL,
    likes INTEGER NOT NULL,
    comentarios INTEGER NOT NULL,
    salvamentos INTEGER NOT NULL,
    compartilhamentos INTEGER NOT NULL,
    imagem VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);



INSERT INTO users (name, email, age) VALUES 
('João Silva', 'joao@gmail.com', 30),
('Flavia Mendes', 'fmendes@gmail.com', 17),
('Amanda Mechi', 'amandinha123@gmail.com', 37);

INSERT INTO posts (user_id, autor, likes, comentarios, salvamentos, compartilhamentos, imagem) VALUES
('João Silva', 10, 5, 2, 3, 'imagem1.jpg'),
('Flavia Mendes', 20, 10, 5, 8, 'imagem2.jpg'),
(3, 'Amanda Mechi', 15, 7, 3, 4, 'imagem3.jpg');

INSERT INTO posts (user_id, autor, likes, comentarios, salvamentos, compartilhamentos, imagem) VALUES
(1, 'João Silva', 10, 5, 2, 3, 'imagem1.jpg'),
(2, 'Flavia Mendes', 20, 10, 5, 8, 'imagem2.jpg'),
(3, 'Amanda Mechi', 15, 7, 3, 4, 'imagem3.jpg');
