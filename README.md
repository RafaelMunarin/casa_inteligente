# casa_inteligente
Trabalho 01 - Programação Orientada a Eventos. 

*OBS - Não consegui comitar o projeto por completo (This diff contains a change in line endings from 'LF' to 'CRLF'.), pra resolver logo, compactei todo o projeto e importei o arquivo compactado...

Este projeto tem como objetivo simular uma casa inteligente, na qual os dispositivos podem ser controlados remotamente através de uma interface web. A casa possui diferentes cômodos, cada um com dispositivos conectados que podem ser manipulados pelos usuários. A interação com os dispositivos será feita em tempo real, usando comunicação WebSocket para refletir as alterações de estado em múltiplos clientes simultaneamente.

Grupo: @RafaelMunarin, @danieljovenir

Para iniciar o projeto siga as instruções:

Dentro da pasta "smart-home" terá outras 3 pastas, "smart-home-backend" que irá cuidar do backEnd, "smart-home-frontend", que cuidará do frontEnd e "smart-home-shared" que cuida do arquivo types.js (mesmo arquivo para o back e o front), vamos estar utilizando apenas as duas primeiras pastas citadas.
Abra o VS Code 2 vezes (duas janelas), em uma delas você vai abrir a pasta do frontEnd e na outra janela do VS vai abrir o backEnd.

No FrontEnd vai rodar os seguintes comandos no prompt de comando:
npm install -g typescript
npm install express socket.io cors typescript ts-node-dev @types/node @types/express @types/socket.io npx tsc --init

No BackEnd  vai rodar os seguintes comandos no prompt de comando
npm install nodemon
npm install socket.io-client
npm install @types/socket.io-client --save-dev

Feito isso, vai usar o comando npm start nas duas janelas, isso vai servir para iniciar os servidores do backEnd e do frontEnd, feito isso automaticamente uma janela no navegador vai ser aberta contendo a parte visual do projeto.
