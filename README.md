# Ecoleta - Next Level Week ♻
Repositório destinado ao projeto, proposto pela Rocketseat, que foi desenvolvido durante o evento "Next Level Week" dentro da modalidade "Booster", ministrada pelo Diego Fernandes.

A aplicação trata-se de um marketplace de coleta de resíduos que integra estabelecimentos que oferecem este serviço às pessoas que precisam de uma solução de descarte segura, limpa e eficiente.

# O projeto consite em quatro partes 📦
- Servidor(API).
- Database.
- Versão Web.
- Versão Mobile.

# Servidor(API) 🔋
Desenvolvido utilizando Express. Responsavel por gerir as regras de negocio da aplicação, são elas: cadastrar marketplaces, obter informações do banco de dados(estabelecimentos cadastrados e suas informações), autenticar os dados de cadastro e servir os arquivos estáticos.

Libs relevantes utilizadas:
- Express: responsavel por fornecer toda a estrutura de confecção do servidor e api.
- Celebrate/Joi: responsaveis pela autenticação de dados ao cadastrar marketplaces.
- Multer: responsavel por ajudar o servidor a gerir informações cadastradas de maneira "multipart".

Para desenvolvedores:
- A inicialização do servidor é essencial para o funcionamento da aplicação, para isso, dentro da pasta "server", execute o comando: npm run dev.

# Database 🧮
Construido com a lib Knex.JS, que dá todo o background para a implantação de bancos de dados relacionais, ajudando na criação de tabelas, gerencia de dados, e facilidades para desenvolvimento oferecida por sua abordagem com as "migrations". Utilizou-se o SQlite3 como banco de dados neste projeto, vide a facilidade e agilidade que o mesmo disponibilizaria para o formato do evento, por não ser necessário instalar softwares de terceiros dentro das máquinas dos alunos e também por permitir a facilidade em compartilhar informações através de somente um arquivo com extensão .sqlite.

Libs relevantes utilizadas:
- Knex.js: fornece o background para implantação de banco de dados relacionais.

Para desenvolvedores:
- Após inicializar o servidor, executar, na pasta "server", o comando: npm knex:migrate.
- Após executar o comando anterior, na mesma pasta "server" executar o comando: npm knex:seed.


# Versão Web 🖥
Foi desenvolvida sob o framework React, com o objetivo de fazer os marketplaces se cadastrarem dentro da plataforma. Para efetuar o cadastro, devem ser informandos: nome, opções de contato(email, whatsapp), endereço(incluindo cidade e estado) e os itens aceitos para descarte.

Libs relevantes utilizadas:
- Axios: realizar requisições HTTP.
- Leaflet: renderização de um mapa, open source, usado para os marketplaces cadastrarem seus endereços.
- React-dropzone: possibilita o upload de imagem referente ao marketplace, tanto de forma convencional, ao escolher um arquivo de um    diretório, quanto de forma interativa através de drag n' drop ao arrastar o arquivo de imagem para dentro da dropzone.

Para desenvolvedores:
- Após iniciar o servidor, solicitar as migrations e ativar o database, executar, na pasta "web", o comando: "npm start" para inicializar o projeto

# Versão Mobile 📱
Desenvolvida com React-Native, auxiliada pela lib Expo. Tem como objetivo fazer os clientes encontrarem os marketplaces mais próximos que oferecem o serviço de coleta de resíduos, a partir disso, podem entrar em contato e identificar o endereço para visita.

Libs relevantes utilizadas:
- Expo: organiza o ambiente de desenvolvimento mobile, fazendo com que a aplicação seja executada em um dispositivo móvel, fazendo assim, com que o desenvolvedor consiga acompanhar as mudanças e alterações na interface do app que está sendo construido.

Para desenvolvedores:
- Após iniciar o servidor, solicitar as migrations e ativar o database, executar, na pasta "mobile", o comando: "npm start" ou "expo start" para inicializar o expo e gerar o QRcode para ser lido pelo aplicativo Expo instalado no dispositivo móvel utilizado para assistir o desenvolvimento da aplicação.

# Linguagens utilizadas no projeto 📚:
- Javascript
- Typescript


