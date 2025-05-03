TOKEN=$(curl -s -X POST https://atividade-avaliativa-iv-v1-five.vercel.app/users/login \
  -H 'Content-Type: application/json' \
  -d '{
    "email": "usuario_ok@example.com",
    "password": "Senha123"
}' | jq -r '.token')

curl -X GET https://atividade-avaliativa-iv-v1-five.vercel.app/protected \
  -H "Authorization: Bearer $TOKEN"
