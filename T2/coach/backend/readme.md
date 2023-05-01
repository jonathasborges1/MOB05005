O projeto coach4me faz uso de docker-compose.yml que esta responsabel por tornar disponivel o banco de dados posgrest em docker

O projeto faz uso da estrutra API Rest Full para prover as rotas necessarias ao frontend da aplicacao

Inicialize o servico em docker
```
docker-compose up -d
```

![Screenshot 2023-05-01 115955](https://user-images.githubusercontent.com/12356493/235483256-28b9767e-bf1b-43c3-8397-76907cb45096.png)


o docker composer tambem sobe o servico de pgadmin para acompanhamento visual do banco de dados

```
Voce pode acessar em: http://localhost:8080/browser/

As credenciais sao de acesso sao: 

login: root@root.com
senha: root
```

![Screenshot 2023-05-01 115849](https://user-images.githubusercontent.com/12356493/235483135-0f3f0f0a-e157-4a25-974c-8280adb83e28.png)


apos subir os servicos posgrest e pgadmin em docker, execute o projeto
Instale as depencias
```
yarn install
```

execute o projeto
```
yarn start
```


apos iniciar o projeto voce podera ver o banco populado pelo painel do pgadmin 

![Screenshot 2023-05-01 120130](https://user-images.githubusercontent.com/12356493/235483854-6baa72cd-2b7f-42d6-85c8-bc340a0613c8.png)

obs: alguns objetos foram inseridos no codigo para popular o banco no momento da sua execucao

Caso queira desligar o servico em docker, bastas executar o comando
```
docker-compose down
```
