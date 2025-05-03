curl -X POST https://atividade-avaliativa-iv-v1-five.vercel.app/users/register \
  -H 'Content-Type: application/json' \
  -d '{
    "username": "malformatado",
    "email": "mal@formatado.com"
    "password": "Senha123"
}'
