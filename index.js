import express from 'express';

const porta  = 3000;
const host = '0.0.0.0'; //todas placas de rede do computador herdeiro

var listarUsuarios = [];


const app = express();
//definir as funcionalidadesdo servidor acessiveis por endpoints(rotas)

//Declarara á aplicação express onde está arquivos estáticos
app.use(express.static('./publico'));

app.use('/cadastrarUsuario', (req, resp) =>{
    //extraindo dados do formulario da requisição enviada pelo navegador
    
    const nome = req.query.nome;
    const sobrenome = req.query.sobrenome;
    const usuario = req.query.usuario;
    const cidade = req.query.cidade;
    const estado = req.query.estado;
    const cep = req.query.cep;



    //dados

    //adicionando novo usuario a lista
    //usuario = objeto javascript

    listarUsuarios.push({
        nome: nome,
        sobrenome: sobrenome
    }
    );

    resp.write('<html>');
    resp.write('<head>');
    resp.write('<title>Resultado do cadastro</title>');
    resp.write('<meta charset="utf-8">');
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
    resp.write('</head>');

    resp.write('<body>');

    resp.write('<h1>Cadastro efetuado com sucesso! </h1>');
    resp.write("<br/>");
    resp.write('a href="/">Continuar cadastrando....</a>');
    resp.write('<a href="/listarUsuarios">Listar Usuarios</a>');

    resp.write('</body>');

    resp.write('</html>');
    resp.end();
})

app.use('/listarUsuarios', (req, resp) =>{
  
    resp.write('<html>');
    resp.write('<head>');
    resp.write('<title>Resultado do cadastro</title>');
    resp.write('<meta charset="utf-8">');

    resp.write('</head>');
    resp.write('<body>');

    resp.write('<h1>Cadastro efetuado com sucesso! </h1>');
    resp.write('<table class="table table-striped-columns">');
    resp.write('<tr>');
    resp.write('<th>Nome</th>');
    resp.write('<th>Sobrenome</th>');
    resp.write('<th>Usuario</th>');
    resp.write('<th>Cidade</th>');
    resp.write('<th>Estado</th>');
    resp.write('<th>Cep</th>');
    resp.write('</tr>');

    for(let i=0; i<listarUsuarios.length; i++){

        resp.write('<tr>');
        resp.write(`<td>${listarUsuarios[i].nome}`);
        resp.write(`<td>${listarUsuarios[i].sobrenome}`);
        resp.write(`<td>${listarUsuarios[i].usuario}`);
        resp.write(`<td>${listarUsuarios[i].cidade}`);
        resp.write(`<td>${listarUsuarios[i].estado}`);
        resp.write(`<td>${listarUsuarios[i].cep}`);
        resp.write('</tr>');
    }


    resp.write('</table>');
    resp.write('<a href="/">Voltar</a>');
    resp.write('</body>');
    resp.write('<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>>');
    resp.write('</html>');

})


app.listen(porta, host, () => {

    console.log('Servidor executando naporta http://${host}:${porta}');
})