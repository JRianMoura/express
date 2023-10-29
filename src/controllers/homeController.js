exports.paginaInicial = (req, res) => {
    res.render('index', {
        titulo: 'Página Inicial',
        numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8]
    });
    return;
};

    exports.trataPost = (req, res) => {
        res.send(req.body);
        return;
    };