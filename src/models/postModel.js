const pool = require("../config/database.js");

const getAllPosts = async () => {
    const result = await pool.query("SELECT * FROM houses");
    return result.rows;
};

const getPostById = async (id) => {
    const result = await pool.query("SELECT * FROM houses WHERE id = $1", [id]);
    return result.rows[0];
};

const addPost = async (name, founder) => {
    const result = await pool.query(
        "INSERT INTO houses (name, founder) VALUES ($1, $2) RETURNING *",
        [name, founder]
    );
    return result.rows[0];
}

const updatePost = async (id, name, founder) => {
    const result = await pool.query(
        "UPDATE houses SET name = $1, founder = $2 WHERE id = $3 RETURNING *",
        [name, founder, id]
    );
    return result.rows[0];
}
const deletePost = async (id) => { 
    await pool.query("DELETE FROM houses WHERE id = $1", [id]);
    return { message: "House deletada com sucesso." };
}
module.exports = { getAllPosts, getPostById, addPost, updatePost, deletePost };
