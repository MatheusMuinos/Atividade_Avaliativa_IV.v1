curl -X POST http://localhost:3000/users/register \
  -H 'Content-Type: application/json' \
  -d '{
    "username": "senha_fraca",
    "email": "fraca@example.com",
    "password": "1234"
}'
