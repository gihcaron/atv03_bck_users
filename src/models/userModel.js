const pool = require("../../config/database.js");

const userModel = {
    getAllUsers: async () => {
        const query = "SELECT * FROM users";
        const result = await pool.query(query);
        return result.rows;
    },

    getUserById: async (id) => {
        const query = "SELECT * FROM users WHERE id = $1";
        const result = await pool.query(query, [id]);
        return result.rows[0];
    },

    addUser: async (name, email, age) => {
        const query = "INSERT INTO users (name, email, age) VALUES ($1, $2, $3) RETURNING *";
        const result = await pool.query(query, [name, email, age]);
        return result.rows[0];
    },

    updateUser: async (id, name, email, age) => {
        const query = "UPDATE users SET name = $1, email = $2, age = $3 WHERE id = $4 RETURNING *";
        const result = await pool.query(query, [name, email, age, id]);
        return result.rows[0];
    },

    deleteUser: async (id) => {
        const query = "DELETE FROM users WHERE id = $1 RETURNING *";
        const result = await pool.query(query, [id]);
        return result.rows[0];
    },
};

module.exports = userModel;