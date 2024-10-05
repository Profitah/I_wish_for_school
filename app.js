import express from 'express';
const app = express();
import { ticketMaker } from './controllers/ticketController.js';

app.get('/', ticketMaker );
