const { v4: uuidV4 } = require('uuid');
class User {
    constructor(name, email, age) {
        this.id = uuidV4();
        this.name = name;
        this.email = email;
        this.age = age;
    }
}

module.exports = User;