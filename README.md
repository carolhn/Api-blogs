## Projeto API de Blogs!

## Contexto do projeto:
Neste projeto foi desenvolvido uma API e um banco de dados para a produção de conteúdo para um blog! 
- Foi criado uma aplicação em `Node.js` usando o pacote `sequelize` para fazer um `CRUD` de posts.
- Foi desenvolvido endpoints que estarão conectados ao seu banco de dados seguindo os princípios do REST;
- Para fazer um post é necessário usuário e login, portanto foi trabalhada a **relação entre** `user` e `post`; 
- Foi necessária a utilização de categorias para os posts, trabalhando, assim, a **relação de** `posts` para `categories` e de `categories` para `posts`.

## Instalação Local:
Para rodar a aplicação em sua maquina.

1. Clone o repositorio. Use o comando:</br>
  <code>git clone git@github.com:carolhn/Api-blogs.git</code></br>
  
2. Entre na pasta do repositório que você acabou de clonar:</br>
<code>cd Api-blogs</code>

3. Instale as dependências</br>
<code>npm install</code>

4. Comando para executar o app</br>
<code>npm start</code>


## Instalação com Docker:
1. Rode o serviço `node` e `db` com o comando `docker-compose up -d --build`.
  - Esse serviço irá inicializar um container chamado `blogs_api` e outro chamado `blogs_api_db`;
  - A partir daqui você pode rodar o container `blogs_api` via CLI ou abri-lo no VS Code.

2. Use o comando `docker exec -it blogs_api bash`.
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

3. Instale as dependências [**Caso existam**] com `npm install`

4. Execute a aplicação com `npm start` ou `npm run dev`

## Contato:
[![Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/caroline-nunes-devfullstack/)
[![Instagran](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/caarolhn/)
[![Whatsapp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/48988037114)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:nunescaroline905@gmail.com)
