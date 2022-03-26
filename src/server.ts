import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRouter from './router'
import { mongoConnect } from './database/mongodb';

mongoConnect();

dotenv.config();

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

server.use(express.urlencoded({extended: true}));

// routes
server.use(mainRouter);

var port_number = server.listen(process.env.PORT || 8080);

server.listen(port_number);