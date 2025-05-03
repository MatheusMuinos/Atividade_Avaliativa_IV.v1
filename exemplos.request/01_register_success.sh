curl -X POST http://localhost:3000/users/register \
  -H 'Content-Type: application/json' \
  -d '{
    "username": "usuario_ok",
    "email": "usuario_ok@example.com",
    "password": "Senha123"
}'
