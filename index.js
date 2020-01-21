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
    const { id } = req.params;
    const { title } = req.body;
    
    const project = projects.find(x => x.id === id);

    project.title = title;

    return res.json(project);
});

// Rota que irá deletar o projeto pelo id
app.delete('/projects/:id', (req, res) => {
    const { id } = req.params;
    const projectIndex = projects.findIndex(x => x.id == id);
    projects.splice(projectIndex, 1);
    return res.json({ message: `Projeto de id ${id} foi apagado.` });
});

app.listen(3000);
