exports.paginaInicial = (req, res) => {
    res.render('index')};

    exports.trataPost = (req, res) => {
        res.send("hey sou sua nova rota de post");
    };