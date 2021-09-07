# Google Drive Clone - Semana JS Expert 5.0

<img align="right" src="https://user-images.githubusercontent.com/60162736/132414781-2c5a7d7c-3b04-469c-9679-c9ed854747b5.png" width="45%" alt="Move.it">

## Menu

[Sobre o projeto](#book-sobre-o-projeto)

[Funcionalidades](#pencil-checklist-funcionalidades)

[Tecnologias](#rocket-tecnologias)

[Preview](#eyes-preview)

[Layout](#art-layout)

[FAQ](#bug-FAQ)

[Como contribuir](#gear-como-contribuir)

[Contato](#mailbox-contato)

[Siga-me ](#siga-me)

<br>

# :book: Sobre o projeto
This project is a clone of the Google Drive interface made with Javascript during JS Expert Week #05. This project has a testing setup, logging and listing of downloaded files
<h4 align="center"> :construction: In development :construction:</h4>
 
---

# :pencil: Checklist Funcionalidades
- Web API
    - [x] Deve listar arquivos baixados
    - Deve receber stream de arquivos e salvar em disco 
    - Deve notificar sobre progresso de armazenamento de arquivos em disco 
    - Deve permitir upload de arquivos em formato image, video ou audio
    - Deve atingir 100% de cobertura de código em testes

- Web App 
    - Deve listar arquivos baixados
    - Deve permitir fazer upload de arquivos de qualquer tamanho
    - Deve ter função de upload via botão
    - Deve exibir progresso de upload 
    - Deve ter função de upload via drag and drop
---

# :rocket: Tecnologias
This project was developed with the following technologies:
- [jest](https://jestjs.io/pt-BR/)
- [pino](https://getpino.io/#/?id=documentation)
- [pino-pretty](https://github.com/pinojs/pino-pretty#readme)
- [pretty-bytes](https://www.npmjs.com/package/pretty-bytes)
- [socket.io](https://socket.io)

---

# :eyes: Preview
![](./resources/demo.gif)

# :art: Layout
The layout was adapted from the project by [Leonardo Santo](https://github.com/leoespsanto) available at [codepen](https://codepen.io/leoespsanto/pen/KZMMKG).

---


# :sunrise_over_mountains: Desafios

1. *Backend*: Salvar o arquivo na AWS ou qualquer serviço de storage
     - Nosso projeto hoje armazena arquivos em disco. o desafio é você via Stream, fazer upload para algum serviço na nuvem
     - Como plus, manter 100% de code coverage, ou seja, crie testes para sua nova feature
2. *Frontend*: Adicionar testes no frontend e alcançar 100% de code coverage
    - Você aprendeu como fazer testes no backend. Usar o mesmo processo para criar testes unitários no frontend com Jest 
    - Caso tenha duvidas, acesse o [exemplo](https://github.com/ErickWendel/tdd-frontend-example) e deixe uma estrela!
3. *Infraestrutura*: Publicar aplicação com seu SSL customizado em máquina virtual
    - Você aprendeu a gerar SSL local, o desafio é você criar um certificado (pode ser com o *Let's Encrypt*) e adicionar na sua aplicação

# :bug: FAQ
- `NODE_OPTIONS` não é um comando reconhecido pelo sistema, o que fazer?
    - Se você estiver no Windows, a forma de criar variáveis de ambiente é diferente. Você deve usar a palavra `set` antes do comando. 
    - Ex: `    "test": "set NODE_OPTIONS=--experimental-vm-modules && npx jest --runInBand",`

- Certificado SSL é inválido, o que fazer?
    - Esse erro acontece porque gerei um certificado atrelado ao usuário da minha máquina.
    - Você pode clicar em prosseguir no browser e usar o certificado invalido que o projeto vai continuar funcionando, mas se quiser gerar o seu próprio, escrevi o passo a passo em [./certificates](./certificates)

- Rodei `npm test` mas nada acontece, o que fazer?
    - Verifique a versão do seu Node.js. Estamos usando na versão 16.8. Entre no [site do node.js](https://nodejs.org) e baixe a versão mais recente.



# :gear: Como contribuir
```bash
- Faça um fork desse repositório;
- Crie uma branch com a sua feature: git checkout -b minha-feature;
- Faça commit das suas alterações: git commit -m 'feat: Minha nova feature';
- Faça push para a sua branch: git push origin minha-feature;
```

---

# :mailbox: Contato	
[![Linkedin Badge](https://img.shields.io/badge/-JefersonPinheiro-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://https://www.linkedin.com/in/jeferson-pinheiro/)](https://www.linkedin.com/in/jeferson-pinheiro/)
[![Gmail Badge](https://img.shields.io/badge/-jefersonpinheirodesouza@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:jefersonpinheirodesouza@gmail.com)](mailto:jefersonpinheirodesouza@gmail.com)

# Siga-me 
<p align="center">
<a href="https://dev.to/ojeffoinheiro" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/dev-dot-to.svg" alt="ojeffoinheiro" height="30" width="40" /></a>
<a href="https://codepen.io/ojeffoinheiro" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/codepen.svg" alt="maykbrito" height="30" width="40" /></a>
<a href="https://linkedin.com/in/jeferson-pinheiro" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="maykbrito" height="30" width="40" /></a>
<a href="https://stackoverflow.com/ojeffpinheiro" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/stackoverflow.svg" alt="maykbrito" height="30" width="40" /></a>
<a href="https://codesandbox.io/u/ojeffoinheiro" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/codesandbox.svg" alt="maykbrito" height="30" width="40" /></a>
<a href="https://app.rocketseat.com.br/me/jeferson-pinheiro-de-souza-1580117763" target="blank"><img align="center" src="https://image.flaticon.com/icons/svg/1356/1356604.svg" alt="ojeffoinheiro" height="30" width="40" /></a>
</p>

---

>Este projeto foi desenvolvido com ❤️ por **[Jéferson Pinheiro](https://github.com/ojeffpinheiro01/)**, com o instrutor **[Erick Wendel](https://github.com/ErickWendel)** durante a **[Semana JS Expert 05](https://javascriptexpert.com.br/lc_jse_set21_aulas?blog=2kvfihemb&video=1)**<br> 
Se te ajudou, dá ⭐, vai me ajudar também 😉
