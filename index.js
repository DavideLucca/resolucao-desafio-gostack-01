const express = require('express');
const app = express();

const projects = [];

app.use(express.json());

// Rota que irá cadastrar novo projeto
app.post('/projects', (req, res) => {
    const { id, title } = req.body;
    const project = {
        id,
        title,
        tasks: []
    };
    projects.push(project);
    return res.json(projects);

});

// Rota que lista todos projetos e suas tarefas
app.get('/projects', (req, res) => {
    res.json(projects);
});

// Rota que altera o título do projeto
app.put('/projects/:id', (req, res) => {
    const id = req.params.id;
    const title = req.body.title;
    projects[id] = title;

    return res.json(projects);
});

app.listen(3000);
