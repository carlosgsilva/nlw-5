import express, { response } from "express";

const app = express();

/**
 * GET = Buscar
 * POST = Criação
 * PUT = Alteração
 * DELETE = Deletar
 * PATCH = Alterar uma informação específica
 */

app.get('/', (request, response) => {
    return response.json({ message: 'Olá nlw 05!' });
});

app.post('/', (request, response) => {
    return response.json({ message: 'Cadastro realizado com sucesso!' })
})

app.listen(3333, () => console.log("Server is running on port 3333"));