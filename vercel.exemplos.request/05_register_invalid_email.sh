curl -X POST https://atividade-avaliativa-iv-v1-five.vercel.app/users/register \
  -H 'Content-Type: application/json' \
  -d '{
    "username": "email_ruim",
    "email": "invalido_email",
    "password": "Senha123"
}'
