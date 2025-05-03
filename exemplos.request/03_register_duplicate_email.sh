curl -X POST http://localhost:3000/users/register \
  -H 'Content-Type: application/json' \
  -d '{
    "username": "repetido",
    "email": "usuario_ok@example.com",
    "password": "Senha123"
}'
