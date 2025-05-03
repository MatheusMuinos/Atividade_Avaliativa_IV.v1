curl -X POST https://atividade-avaliativa-iv-v1-five.vercel.app/users/login \
  -H 'Content-Type: application/json' \
  -d '{
    "email": "usuario_ok@example.com",
    "password": "senhaErrada"
}'
