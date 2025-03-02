const { v4: uuidV4 } = require('uuid');
class Post {
    constructor(autor, likes, comentarios, salvamentos, compartilhamentos, imagens) {
        this.id = Date.now().toString();
        this.autor = autor;
        this.likes = likes;
        this.comentarios = comentarios;
        this.salvamentos = salvamentos;
        this.compartilhamentos = compartilhamentos;
        this.imagens = imagens;
    }
}

module.exports = Post;