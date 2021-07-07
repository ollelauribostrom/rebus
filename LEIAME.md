Contruibir para um projeto Open Source pela primeira vez pode ser uma coisa assustadora. O objetivo desse repositório é ajudar você no seu primeiro passo como um contruibudor open source desenvolvendo um  desenvolvendo um jogo de rebus simples (mas espero que divertido) juntos.💖

Experimente a versão ao vivo do jogo: https://ollelauribostrom.github.io/rebus/
Quem pode contribuir?
Todos podem! (e eu quero dizer todos) 💫

💻 Você não precisa contribuir programando. Adicione um novo rebus, corrija um erro de digitação, relate um bug, adicione alguma documentação, faça um novo design ou adicione uma tradução. Esse projeto, assim como a maioria dos projetos Open Source, precisa de todos os tipos de contribuições diferentes. Não apenas código.

🌟 Você é bom o suficiente. Comece com facilidade corrigindo algo pequeno (como adicionar um novo rebus). Isso ajudará você a se orientar no projeto e aumentar sua confiança e experiência. Ninguém irá julgá-lo se você cometer um erro, e você não pode quebrar nada! Peça algumas dicas se você ficar travado. Você consegue!

➡️ Dê uma olhada nas questões abertas para ver o que precisa ser feito neste projeto.


A única coisa necessária para começar é o git. Verifique se você o instalou no seu computador executando git --version no seu terminal. Se você não possui o git instalado, instale-o.
Se você é um desenvolvedor experiente, consulte o arquivo CONTRIBUTING para ver como você pode contribuir.

Por que contribuir para o Open Source?
Quando você contribui para o Open Source, participa do esforço colaborativo de uma vasta comunidade de desenvolvedores e colaboradores apaixonados! O software Open Source permite que você veja, use, a mais importante, modifique o código. Contribuir com o código-fonte aberto é uma ótima maneira de desenvolver um entendimento mais profundo do software, e a melhor parte é poder aprender e ensinar junto a uma comunidade de colaboradores.

Como contribuir
Siga este guia passo a passo para fazer sua primeira contribuição de código aberto. As etapas que você executará neste guia são um fluxo de trabalho, algo padrão, que você encontrará na maioria dos projetos: Fork -> Clone -> Install dependencies -> Make your changes -> Run tests -> Commit -> PR

1. Fork
O primeiro passo é criar um Fork deste repositório. Faça isso clicando no botão Fork na parte superior desta página. Um Fork é basicamente sua própria cópia de trabalho deste repositório.


2. Clone
O próximo passo é clonar o repositório bifurcado em sua máquina.

Vá para os repositórios do GitHub e abra o repositório bifurcado chamado Rebus (bifurcado em ollelauribostrom / rebus). Clique no botão "Clonar ou baixar" e, em seguida, clique no ícone copiar para a área de transferência para obter sua URL.



Então rode o comando git em seu terminal:

git clone "aqui vai url que você copiou"
Por exemplo:

git clone https://github.com/username/rebus.git
3. RRegistrar o repositório
Você criou um clone local no seu computador. Este clone apontará para o seu repositório bifurcado. Também é útil ter o repositório upstream (a fonte que você bifurcou) registrada para poder manter-se atualizado com as alterações mais recentes.

Se você ainda não o fez, comece alterando seu diretório para o repositório rebus que foi criado quando você executou o git clone:

cd rebus
Então adicione ollelauribostrom/rebus como um upstream remoto:

git remote add upstream https://github.com/ollelauribostrom/rebus.git
4. Crie uma branch
É prática comum criar uma nova brach para cada novo recurso ou correção de bug em que você estiver trabalhando. Vamos em frente e criar um!

Primeiro, vamos verificar se temos a versão mais recente do repositório upstream executando (faça isso antes de cada vez que você criar uma nova ramificação):

git fetch upstream
Cria sua nova branch executando:

git checkout -b <nome-da-sua-branch> upstream/master
Nota: Renomeie <nome-da-sua-branch> com algo que descreve as alterações que você está prestes a fazer

Por exemplo:

git checkout -b add-new-rebus upstream/master
Nota: Ao especificar upstream / master, estamos dizendo que nosso novo ramo deve ser criado a partir da versão mais recente do upstream

5. Instale as dependências
Antes de começarmos a fazer nossas alterações, vamos instalar as dependências do projeto:

npm install
6. Faça suas mudanÇas
Agora é a vez de fazer suas mudanças. Vamos adicionar um novo rebus para o jogo.

Abra o arquivo src/js/rebuses.js no seu editor preferido (é preferível o VSCode 😉).
Adicione um novo objeto de rebus ao final da matriz de rebuses.
Salve o arquivo quando terminar.
7. Execute o jogo localmente
Se desejar, você pode executar o jogo localmente para testar suas alterações:

npm start
8. Execute os testes
Antes de confirmar suas alterações, execute os testes para garantir que você não quebrou nada:

npm run test:all

9. Commit suas mudanças
Execute git status para ver as mudanças que você fez. Isso será algo como:

Git status

Adicione essas alterações ao seu próximo commit executando:

git add src/js/rebuses.js
E então confirme-os executando:

git commit -m "Sua mensagem"
Por exemplo:

git commit -m "Adicionando um novo rebus"
10. Envie suas alterações para o Github
Envie suas alterações para o GitHub executando:

git push origin <nome-da-sua-branch>
Nota: Renomeie <nome-da-sua-branch> com o nome da sua branch

11. Abrir uma solicitação de recebimento
Vá para o seu repositório no GitHub e clique no botão verde "Compare and pull request".

Compare and pull request

Descreva suas mudança e submeta o pull request

Submit pull request

O que vem agora?
🎉 Parabéns 🎉

Você acabou de dar seu primeiro passo como colaborador de código aberto. Sua solicitação de recebimento será analisada o mais rápido possível. Junte-se a nós no gitter se tiver dúvidas ou precisar de ajuda. Se você quiser, dê uma estrela a este repositório ⭐.

Se você quiser algo mais para trabalhar, observe as questões em aberto para se inspirar. Além disso, consulte a seção Further Reading para obter mais recursos de aprendizado excelentes.

FAQ
Resolvendo os Merge Conflicts
Depois que as alterações forem confirmadas e preparadas, é hora de gerenciar conflitos executando:

git pull upstream master
Volte para o seu editor de código favorito e revise quaisquer conflitos. Geralmente, as alterações atuais serão destacadas em uma cor e as alterações recebidas serão destacadas em uma cor diferente. Aceite as alterações atuais ou recebidas.

Commit suas mudanças novamente conforme descrito nas etapas 9 e 10 acima ou executando:

git add -A
git commit -m "Sua mensagem"
git push origin <nome-da-sua-branch>
Quebra de linha
É importante observar que os sistemas operacionais Windows e Linux lidam com terminações de linhas de maneira diferente. Se você estiver recebendo um erro em que o programa espera quebras de linha sejam "lf", mas encontre estilos de quebra de linha "crlf",

Terminal linebreak error

então você pode executar o seguinte comando no seu terminal:

npm run lint -- --fix 
TPara evitar esse problema no futuro, você pode alterar seu editor para usar uma sequência de final de linha de 'lf'. Para fazer isso no Visual Studio Code, basta clicar no botão lf / crlf no canto inferior direito e selecione 'lf' no menu suspenso exibido.

Visual Studio Code linebreaks

Further Reading
GitHub Open Source Guide
Resource To learn Git
Git Tutorial Part 1: What is Version Control?
Git Tutorial Part 2: Vocab (Repo, Staging, Commit, Push, Pull)
Git Tutorial Part 3: Installation, Command-line & Clone
Git Tutorial Part 4: GitHub (Pushing to a Server)
Git & GitHub Crash Course For Beginners
Git Magic
Friendly Beginner Repos
GitHub Endorsed Beginning Contributer Repos
Sourcetree - Git GUI for macOS and Windows
VS Code - extensible code editor
GitHub Atom - Hackable Text Editor for the 21st Century
Support
Abra um problema para obter suporte ou junte-se a nós no gitter.
Código de conduto
Este projeto segue o Código de Conduta da JS Foundation. Leia o texto completo para entender quais ações serão e não serão toleradas.

License
Licenciado sob a MIT License.
