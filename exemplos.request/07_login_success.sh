curl -X POST http://localhost:3000/users/login \
  -H 'Content-Type: application/json' \
  -d '{
    "email": "usuario_ok@example.com",
    "password": "Senha123"
}'
