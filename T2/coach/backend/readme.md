O projeto coach4me faz uso de docker-compose.yml que esta responsabel por tornar disponivel o banco de dados posgrest em docker

O projeto faz uso da estrutra API Rest Full para prover as rotas necessarias ao frontend da aplicacao

Inicialize o servico em docker
```
docker-compose up -d
```

o docker composer tambem sobe o servico de pgadmin para acompanhamento visual do banco de dados

```
Voce pode acessar em: http://localhost:8080/browser/

As credenciais sao de acesso sao: 

login: root@root.com
senha: root
```

apos subir os servicos posgrest e pgadmin em docker, execute o projeto

```
yarn start
```

apos iniciar o projeto voce podera ver o banco populado

