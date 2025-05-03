curl -X POST https://atividade-avaliativa-iv-v1-five.vercel.app/users/register \
  -H 'Content-Type: application/json' \
  -d '{
    "username": "senha_fraca",
    "email": "fraca@example.com",
    "password": "1234"
}'
