const pool = require("../config/database");


    const getAllUsers = async () => {
        const result = await pool.query("SELECT * FROM users");
        return result.rows;
    };

    const getUserById = async (id) => {
        const result = await pool.query ("SELECT * FROM users WHERE id = $1", [id]);
        return result.rows[0];
    };

    const addUser = async (name, email, age) => {
        const result = await pool.query(
        "INSERT INTO users (name, email, age) VALUES ($1, $2, $3) RETURNING *",
        [name, email, age]
        );
        return result.rows[0];
    };

   const updateUser = async (id, name, email, age) => {
       
       const result = await pool.query("UPDATE users SET name = $1, email = $2, age = $3 WHERE id = $4 RETURNING *",
         [name, email, age, id]
       );
       return result.rows[0];
    
    };

    const deleteUser = async (id) => {
        const result = await pool.query("DELETE FROM users WHERE id = $1 RETURNING *", [id]);
        return { message: "Usuário deletado com sucesso!", user: result.rows[0] };
    };


    module.exports = { getAllUsers , getUserById, addUser, updateUser,  deleteUser}; 