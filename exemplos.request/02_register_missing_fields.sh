curl -X POST http://localhost:3000/users/register \
  -H 'Content-Type: application/json' \
  -d '{
    "email": "faltou_username@example.com",
    "password": "Senha123"
}'
