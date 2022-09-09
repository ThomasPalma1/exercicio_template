/* importando o express */
const express = require('express')
const app = express();
const port = 5000;

/* importando o modelo */
const modelo = require('./models/modelos');
var Projeto = modelo.Projeto; //Vinculação de tipo
var Profile = modelo.Profile;


/* Configurando a template engine. */
app.set('view engine', 'ejs');
app.set('views', './views');

/* Configurando o diretório que serve arquivos estáticos.*/
app.use(express.static('public'));

app.get('/', listMyInfos); /* roda index contendo as minhas informações pessoais */

app.get('/projects', listProjectHandler); /* rota alternativa contendo as informações dos projetos */

app.listen(port, listenHandler);

function listProjectHandler(req, res) {
    /* Os dados a seguir, em uma aplicação real, deveriam vir de um BD */
    let projeto_1 = new Projeto("pythonCrud-soII", "Python with Flask", 2022, 2022);
    let projeto_2 = new Projeto("Studying-Python", "Python in its purest mode", 2022, 2022);
    let projeto_3 = new Projeto("Bertoti", "Java", 2022, 2022);
    let projetos = [];
    projetos.push(projeto_1);
    projetos.push(projeto_2);
    projetos.push(projeto_3);
    res.render('listar_projetos.ejs', { lista_projetos: projetos });
}

function listMyInfos(req, res) {
    let information_1 = new Profile("Thomas dos Santos Palma", 20, "DevOps | Linux | Ansible | Python Apprentice", "thomas.palma@fatec.sp.gov.br");
    let information = [];
    information.push(information_1);
    res.render('my-infos.ejs', { list_profile: information });
}

function listenHandler() {
    console.log(`Escutando na porta ${port}!`);
}