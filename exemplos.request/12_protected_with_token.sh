TOKEN=$(curl -s -X POST http://localhost:3000/users/login \
  -H 'Content-Type: application/json' \
  -d '{
    "email": "usuario_ok@example.com",
    "password": "Senha123"
}' | jq -r '.token')

curl -X GET http://localhost:3000/protected \
  -H "Authorization: Bearer $TOKEN"
