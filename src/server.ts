import express from "express";
import dotenv from "dotenv";
import mustache from "mustache-express";
import path from "path";
import mainRoutes from './routes/index';

dotenv.config();

const server = express();

/* Definindo o mustache e o caminho para as views */
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

/* Definindo a pasta public e o caminho para ela */
server.use(express.static(path.join(__dirname, '../public')));

// Rotas
server.use(mainRoutes);

server.use((req, res)=>{
    res.send('página não encontrada');
});

server.listen(4141);