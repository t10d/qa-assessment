# Quality Assurance Engineer

O objetivo deste teste é avaliar seu domínio da área de Qualidade.

## Projeto

Neste projeto você encontrará 3 telas.

1. Login (/login)
2. Esqueci minha senha (/forgot-password)
3. Recuperar minha senha (/reset-password/:user-id) Ex: `/reset-password/user@t10.digital`

Para cumprir os objetivos do desafio você deve:

1. Escrever os casos de teste para cada tela.
2. Escrever automações para cada caso de teste.
3. Report de bugs ou comportamento não esperado, se houver.

Para escrever as automações utilize algum framework ou biblioteca JavaScript como Cypress. Não crie um repositório separado para os testes, faça numa pasta separada dentro deste projeto. Para cada arquivo de cenários utilize um padrão como `cenarios_login.md`.

Caso encontre alguma incosistência ou comportamento não esperado, por favor coloque o report dos mesmos dentro do seu projeto como `bug_login.md`. 

Ao finalizar, envie o link do seu repositório para diogo@t10.digital.

#### Observações

Utilize o usuário abaixo para realizar seus testes:

```json
{
  "username": "user@t10.digital",
  "password": "12345678"
}
```

### Rodando o projeto

Para rodar o projeto instale as dependências com:

```
yarn install
```

ou

```
npm install
```

Depois faça:

```
yarn start
```

ou

```
npm start
```

Para rodar. Visite o arquivo `package.json` para mais informações.

