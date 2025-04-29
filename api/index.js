import express from 'express';
import dotenv from 'dotenv'; // importar as variaveis de ambiente

dotenv.config(); // configurar as variaveis de ambiente

const app = express();
app.use(express.json()); // middleware para interpretar JSON

app.get('/', (req, res) => {   
    res.send({message:'Hello World!'});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}/`);
    });
