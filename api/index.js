import express from 'express';
import dotenv from 'dotenv'; // importar as variaveis de ambiente
import db from './database/configdb.js'; // importar a conexao com o banco de dados
import User from './models/User.js'; // importar o modelo User

dotenv.config(); // configurar as variaveis de ambiente
db.connect(); // conectar ao banco de dados

const app = express();
app.use(express.json()); // middleware para interpretar JSON

app.get('/', (req, res) => {   
    res.send({message:'Hello World!'});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}/`);
    });
