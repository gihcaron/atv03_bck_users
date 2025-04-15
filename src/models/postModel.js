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

const updatePost = async (id, autor, likes, comentarios, salvamentos, compartilhamentos, imagem) => {
    const result = await pool.query(
        `UPDATE posts 
         SET autor = $1, likes = $2, comentarios = $3, salvamentos = $4, compartilhamentos = $5, imagem = $6 
         WHERE id = $7 RETURNING *`,
        [autor, likes, comentarios, salvamentos, compartilhamentos, imagem, id]
    );
    return result.rows[0];
};

const deletePost = async (id) => { 
    const result = await pool.query("DELETE FROM posts WHERE id = $1 RETURNING *", [id]);
    return { massage: "Post deletado com sucesso!"};
};

module.exports = { getAllPosts, getPostById, addPost, updatePost, deletePost };
