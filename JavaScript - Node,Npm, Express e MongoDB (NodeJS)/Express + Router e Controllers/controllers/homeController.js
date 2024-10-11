exports.paginaInicial = (req,res) =>{
    
        res.send(`
            <form action="/" method="POST">
                Nome do cliente: <input type="text" name="nome"></input>
                Outro Campo: <input type="text" name="aquioutrocampo"></input>
                <button>Enviar </button>
            </form>
        `);
    
}

exports.trataPost = (req,res)=>{
res.send(`ei, sou sua nova rota de post`);

};

