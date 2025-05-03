curl -X POST https://atividade-avaliativa-iv-v1-five.vercel.app/users/login \
  -H 'Content-Type: application/json' \
  -d '{
    "email": "email_invalido",
    "password": "Senha123"
}'
