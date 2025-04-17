const pool = require("../config/database");

const getAllPosts = async () => {
    const result = await pool.query("SELECT * FROM posts");
    return result.rows;
};

const getPostById = async (id) => {
    const result = await pool.query("SELECT * FROM posts WHERE id = $1", [id]);
    return result.rows[0];
};

const addPost = async (user_id, autor, likes, comentarios, salvamentos, compartilhamentos, imagem, photo) => {
    const result = await pool.query(
        `INSERT INTO posts (user_id, autor, likes, comentarios, salvamentos, compartilhamentos, imagem, photo) 
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
        [user_id, autor, likes, comentarios, salvamentos, compartilhamentos, imagem, photo]
    );
    return result.rows[0];
};

const updatePost = async ( user_id, autor, likes, comentarios, salvamentos, compartilhamentos, imagem, photo) => {
    const result = await pool.query(
        `UPDATE posts 
         SET user_id = $1, autor = $2, likes = $3, comentarios = $4, salvamentos = $5, compartilhamentos = $6, imagem = $7, photo = $8 
         RETURNING *`,
        [user_id, autor, likes, comentarios, salvamentos, compartilhamentos, imagem, photo,]
    );
    return result.rows[0];
};

const deletePost = async (id) => { 
    const result = await pool.query("DELETE FROM posts WHERE id = $1 RETURNING *", [id]);
    return { massage: "Post deletado com sucesso!"};
};

module.exports = { getAllPosts, getPostById, addPost, updatePost, deletePost};
