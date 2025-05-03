curl -X POST http://localhost:3000/users/login \
  -H 'Content-Type: application/json' \
  -d '{
    "email": "email_invalido",
    "password": "Senha123"
}'
