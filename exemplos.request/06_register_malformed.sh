curl -X POST http://localhost:3000/users/register \
  -H 'Content-Type: application/json' \
  -d '{
    "username": "malformatado",
    "email": "mal@formatado.com"
    "password": "Senha123"
}'
