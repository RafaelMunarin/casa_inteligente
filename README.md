# Casa Inteligente
**Trabalho 01 - Programação Orientada a Eventos**

## Descrição do Projeto
Este projeto tem como objetivo simular uma casa inteligente, onde dispositivos em diferentes cômodos podem ser controlados remotamente por meio de uma interface web. A comunicação em tempo real é feita através de WebSocket, permitindo que alterações no estado dos dispositivos sejam refletidas em múltiplos clientes simultaneamente.

**Grupo:**  
- [@RafaelMunarin](https://github.com/RafaelMunarin)
- [@danieljovenir](https://github.com/danieljovenir)

## Estrutura do Projeto
O projeto está organizado em três pastas principais dentro de `smart-home`:
1. **smart-home-backend**: Gerencia o back-end da aplicação.
2. **smart-home-frontend**: Responsável pelo front-end.
3. **smart-home-shared**: Contém o arquivo `types.js`, compartilhado entre o back-end e o front-end.

> **Nota:** Apenas as pastas `smart-home-backend` e `smart-home-frontend` serão utilizadas para rodar o projeto.

## Como Iniciar o Projeto

### Passo 1: Abrir o Projeto no VS Code
Abra o Visual Studio Code em duas janelas:
- Em uma janela, abra a pasta do **front-end**.
- Na outra janela, abra a pasta do **back-end**.

### Passo 2: Configurar o Front-End
No terminal da janela do front-end, execute os seguintes comandos para instalar as dependências:

```bash
npm install -g typescript
```
```bash
npm install express socket.io cors typescript ts-node-dev @types/node @types/express @types/socket.io
```
```bash
npx tsc --init
```

### Passo 3: Configurar o Back-End
No terminal da janela do back-end, execute os comandos a seguir:

```bash
npm install nodemon
```
```bash
npm install socket.io-cliente
```
```bash
npm install @types/socket.io-client --save-dev
```

### Passo 4: Iniciar o Projeto
Após a configuração, use o comando `npm start` em ambas as janelas para iniciar os servidores do front-end e back-end.

Ao iniciar, o navegador será aberto automaticamente com a interface visual do projeto.