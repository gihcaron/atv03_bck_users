CREATE DATABASE post;

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
('Amanda Mechi', 'amandinha123@gmail.com', 37)
('Lucas Oliveira', 'lucas@gmail.com', 25),
('João Otavio', 'joaoOtavio@gmail.com', 30),
('João Sila', 'joaos@gmail.com', 30),
('João Fernando', 'joaof@gmail.com', 30),
('João Luis', 'joaol@gmail.com', 30),
('João Henrique', 'joaoH@gmail.com', 30),
('Ana Silva', 'ana@gmail.com', 30),
('Maria Clara', 'maria.clara@gmail.com', 25),
('Carlos Eduardo', 'carlos.edu@gmail.com', 28),
('Fernanda Lima', 'fernanda.lima@gmail.com', 32),
('Paulo Ricardo', 'paulo.ricardo@gmail.com', 27),
('Beatriz Souza', 'beatriz.souza@gmail.com', 29),
('Gabriel Santos', 'gabriel.santos@gmail.com', 31),
('Juliana Alves', 'juliana.alves@gmail.com', 26),
('Ricardo Pereira', 'ricardo.pereira@gmail.com', 33),
('Larissa Costa', 'larissa.costa@gmail.com', 24),
('Thiago Martins', 'thiago.martins@gmail.com', 30),
('Camila Rocha', 'camila.rocha@gmail.com', 28),
('Felipe Oliveira', 'felipe.oliveira@gmail.com', 29),
('Patricia Mendes', 'patricia.mendes@gmail.com', 27),
('Rafael Lima', 'rafael.lima@gmail.com', 31),
('Vanessa Ribeiro', 'vanessa.ribeiro@gmail.com', 26),
('Leonardo Silva', 'leonardo.silva@gmail.com', 32),
('Isabela Torres', 'isabela.torres@gmail.com', 25),
('Bruno Almeida', 'bruno.almeida@gmail.com', 28),
('Carolina Nunes', 'carolina.nunes@gmail.com', 30),
('Eduardo Costa', 'eduardo.costa@gmail.com', 29),
('Sofia Ferreira', 'sofia.ferreira@gmail.com', 24),
('Marcos Vinicius', 'marcos.vinicius@gmail.com', 33),
('Aline Santos', 'aline.santos@gmail.com', 27),
('Pedro Henrique', 'pedro.henrique@gmail.com', 31),
('Tatiana Lopes', 'tatiana.lopes@gmail.com', 26),
('Gustavo Ramos', 'gustavo.ramos@gmail.com', 30),
('Renata Barros', 'renata.barros@gmail.com', 28),
('André Luiz', 'andre.luiz@gmail.com', 29),
('Claudia Souza', 'claudia.souza@gmail.com', 27),
('Diego Moreira', 'diego.moreira@gmail.com', 31),
('Helena Castro', 'helena.castro@gmail.com', 25),
('Lucas Almeida', 'lucas.almeida@gmail.com', 32),
('Mariana Duarte', 'mariana.duarte@gmail.com', 24),
('Rodrigo Silva', 'rodrigo.silva@gmail.com', 30),
('Ana Paula', 'ana.paula@gmail.com', 28),
('Vinicius Mendes', 'vinicius.mendes@gmail.com', 29),
('Luana Oliveira', 'luana.oliveira@gmail.com', 27),
('Daniel Ferreira', 'daniel.ferreira@gmail.com', 31),
('Carla Martins', 'carla.martins@gmail.com', 26),
('João Pedro', 'joao.pedro@gmail.com', 30),
('Fernanda Souza', 'fernanda.souza@gmail.com', 28),
('Rafael Santos', 'rafael.santos@gmail.com', 29),
('Juliana Costa', 'juliana.costa@gmail.com', 27),
('Marcelo Lima', 'marcelo.lima@gmail.com', 31),
('Bianca Rocha', 'bianca.rocha@gmail.com', 25);



INSERT INTO posts (user_id, autor, likes, comentarios, salvamentos, compartilhamentos, imagem) VALUES
(1, 'João Silva', 10, 5, 2, 3, 'imagem1.jpg'),
(2, 'Flavia Mendes', 20, 10, 5, 8, 'imagem2.jpg'),
(3, 'Amanda Mechi', 15, 7, 3, 4, 'imagem3.jpg');


-- -- Remover a restrição de chave estrangeira existente
-- ALTER TABLE posts DROP CONSTRAINT posts_user_id_fkey;

-- -- Adicionar a restrição de chave estrangeira com ON DELETE CASCADE
-- ALTER TABLE posts
-- ADD CONSTRAINT posts_user_id_fkey
-- FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;