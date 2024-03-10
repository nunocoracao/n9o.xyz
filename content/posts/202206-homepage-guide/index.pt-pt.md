---
title: "Como criei minha página inicial (de graça) usando Docker, Hugo e Firebase"
description: "Atualmente, existem diversas soluções para construir e hospedar seu site pessoal. Queria me desafiar para ver se conseguiria fazer isso com o mesmo conjunto de recursos de algumas das soluções pagas e gratuitas. Aqui estão os resultados. "
summary: "Atualmente, existem diversas soluções para construir e hospedar seu site pessoal. Queria me desafiar para ver se conseguiria fazer isso com o mesmo conjunto de recursos de algumas das soluções pagas e gratuitas. Aqui estão os resultados. "
categories: ["Desenvolvimento", "Tutorial"]
tags: ["Hugo", "Congo", "Docker", "VSCode"]
#externalUrl: ""
date: 2022-06-27
draft: false
authors:
  - nunocoracao

---
##TL;DR

Atualmente, existem diversas soluções para construir e hospedar seu site pessoal. Eu queria me desafiar para ver se conseguiria fazer isso com o mesmo conjunto de recursos de algumas das soluções pagas disponíveis e gratuitas. Aqui estão os resultados.

## Por que um PM construiria sua própria página inicial do zero…

Há alguns meses, decidi que queria começar a escrever mais para a) exercitar minhas habilidades de escrita eb) obter feedback sobre algumas de minhas ideias. Com esse objetivo em mente, comecei a pesquisar ferramentas/plataformas que me ajudassem a publicar sem criar muito atrito para mim ou para as pessoas que querem ler o que tenho a dizer, por exemplo. tendo que pagar. Por fim, decidi criar meu próprio site.

Eu tinha alguns motivos para querer tentar isso:

- desafie-me para ver se eu, um ex-estudante de engenharia de software, ainda consigo inventar algo que funcione e me sinta bem por não ter esquecido tudo o que aprendi sobre programação,

- encontrar uma solução gratuita e flexível que me permita iniciar meu site sem investir dinheiro imediatamente nele, ou seja, evitando custos operacionais com plataformas e serviços que me bloqueariam no futuro,

- ter meu conteúdo hospedado em um local que não exija que as pessoas paguem para lê-lo,

- experimente os <a target="_blank" href="https://docs.docker.com/desktop/dev-environments/">ambientes de desenvolvimento do Docker</a> e <a target="_blank" href=" https://github.com/microsoft/vscode-dev-containers">Contêineres de desenvolvedor da Microsoft</a> para me familiarizar com as duas soluções.

## Vamos começar…

Depois de alguma pesquisa, decidi escolher um framework gerador de sites e um serviço de hospedagem gratuito. Para a estrutura do site, escolho <a target="_blank" href="https://gohugo.io">Hugo</a> com <a target="_blank" href="https://github.com/ jpanther/congoand">Congo</a> como tema e para o serviço de hospedagem <a target="_blank" href="https://firebase.google.com">Firebase</a>. E por razões óbvias, decidi configurar meu ambiente de desenvolvimento usando <a target="_blank" href="https://www.docker.com">Docker</a> para me colocar no lugar do usuário para este experimento.

Não fiz uma análise profunda de qual framework era o melhor para o meu problema, pois queria lançar um MVP rapidamente, então analisei algumas opções e escolhi a primeira que gostei. Existem várias outras opções com recursos e abordagens diferentes daquela que escolhi. Se você quiser explorar outras opções, estas são algumas que você pode explorar: <a target="_blank" href="https://docusaurus.io/">Docussaurus</a>, <a target="_blank" href=" https://www.gatsbyjs.com/">Gatsby</a>, <a target="_blank" href="https://jekyllrb.com/">Jekyll</a>, <a target="_blank" " href="https://ghost.org/">Ghost</a> e até mesmo <a target="_blank" href="https://wordpress.com/">WordPress</a>. O mesmo se aplica à parte de hospedagem, embora eu tenha escolhido <a target="_blank" href="https://firebase.google.com/">Firebase</a> existem outras soluções como <a target=" _blank" href="https://pages.cloudflare.com/">Páginas Cloudflare</a>, <a target="_blank" href="https://pages.github.com/">Páginas GitHub</ a>, <a target="_blank" href="https://www.digitalocean.com/">Oceano Digital</a>, <a target="_blank" href="https://www.netlify. com/">Netlify</a>, <a target="_blank" href="https://vercel.com/">Vercel</a> e outros que você pode considerar explorar. Se você tiver alguma sugestão para este guia, fique à vontade para entrar em contato, é sempre um prazer conversar e aprender.


## Ferramentas

Para este guia, utilizarei as seguintes ferramentas, que devem estar instaladas em sua máquina. Aqui está uma pequena explicação sobre a utilização de cada componente e um link para as instruções de instalação.

- **Docker** - Usarei o Docker para configurar um ambiente de desenvolvimento para este projeto para que possamos evitar a necessidade de instalar todo o software necessário para executar Hugo e Firebase CLI, ou seja, cURL, Go, Hugo, Node, NPM, etc. Isso permitirá que você comece a partir de um repositório git, inicie o ambiente e vá direto para a escrita do código, em vez de gastar horas tentando descobrir como instalar um compilador específico para sua arquitetura de CPU. <a target="_blank" href="https://www.docker.com/get-started/">Instalar o Docker</a>

- **Visual Studio Code** - Estou usando o Visual Studio Code como meu editor de código no momento e todo o material do guia pressupõe que é isso que você está usando. Se você tiver uma preferência diferente, precisará adaptar algumas partes deste guia para obter os mesmos resultados. <a target=”_blank” href="https://code.visualstudio.com/">Instalar o código do Visual Studio</a>

## Configure o ambiente de desenvolvimento

Vamos começar configurando seu ambiente de desenvolvimento usando o <a target="_blank" href="https://www.docker.com">Docker</a>. Isso permitirá que você crie um contêiner com todas as ferramentas necessárias sem ter que mexer nas configurações do sistema. Além disso, também será mais fácil excluir o contêiner e reconstruí-lo sempre que precisar, em vez de manter versões antigas de software desnecessário diariamente em sua máquina pessoal.

{{< alerta >}}
Nota: Se você deseja apenas clonar um repositório com o esqueleto final, sinta-se à vontade para clonar <a target="_blank" href="https://github.com/nunocoracao/homepage-hugo-congo">este repositório</a > e pule para a seção de implantação


{{</ alerta >}}

Fornecerei duas maneiras de configurar seu ambiente de desenvolvimento. Fique à vontade para escolher a que preferir ou tente ambas para explorar as diferenças entre elas. Ambas as opções dependem de um `Dockerfile` construído por mim que usa `klakegg/hugo:0.93.2-ubuntu` como imagem base, mesmo que esta não seja a imagem oficial do Hugo (já que não existe uma no momento) é a um <a target="_blank" href="https://gohugo.io/getting-started/installing/#docker">recomendado em seu site,</a>.

### Usando Docker

Para ativar um ambiente de desenvolvimento, basta abrir o Docker Dashboard e selecionar a guia "Ambientes de desenvolvimento" à esquerda. Se você não possui nenhuma configuração de ambiente de desenvolvimento, selecione "Criar novo ambiente", caso contrário, use o botão no canto superior direito "Criar". Prossiga para a etapa de configuração.

<img src="devenvs/step2.png"/>


Escolha aqui a opção "Repositório Git existente" e use o seguinte URL do GitHub:

```
https://github.com/nunocoracao/homepage-kickstart
```

{{< alerta >}}
**Observação:** Se você clonar o repositório localmente, também poderá iniciar a partir da pasta local
{{< /alert >}}

Assim que o contêiner estiver em execução, você deverá ver algo semelhante às imagens abaixo.

<img style="float: left" width="50%" src="devenvs/step4.png"/>
<img style="float: left" width="50%" src="devenvs/step5.png"/>

Em ambas as situações, você poderá ver e clicar no botão “Abrir no VSCode” que abrirá o editor e permitirá que você comece a trabalhar. A partir daí, abra um terminal e prossiga para [criar o esqueleto do site](#create-site-skeleton)

### Usando código do Visual Studio

Comece clonando o repositório GitHub com as configurações do ambiente de desenvolvimento.

```
clone do git https://github.com/nunocoracao/homepage-kickstart
```

Este método requer a instalação de uma extensão VSCode extra para ativar os contêineres. Pesquise **Remote - Containers** e instale a extensão para continuar este guia.

Após instalar a extensão com sucesso, abra sua pasta de origem no VSCode e abra o painel de extensão “Remote - Containers” à esquerda. Selecione "Abrir pasta no contêiner" para criar um contêiner com o ambiente de desenvolvimento.

<img src="setup/extension.png"/>

Aguarde alguns minutos enquanto a imagem é construída. Docker está criando uma imagem com todos os softwares necessários para o desenvolvimento do site. Isso só acontecerá na primeira vez que você girar o ambiente.

<img src="setup/imagebuild.png"/>


Assim que a imagem for construída, o VSCode girará o contêiner e colocará seu ambiente de trabalho dentro dele (informações disponíveis no canto inferior esquerdo da janela). Agora você tem um ambiente de desenvolvimento com Go, Hugo, Firebase CLI e todas as ferramentas necessárias para este guia. Basta abrir um novo terminal e você estará pronto para começar a criar seu site.

<img src="setup/newterminal.png"/>

### ...mas eu realmente quero executar tudo localmente

Se você preferir ou precisar executar seu ambiente localmente, siga os guias abaixo para instalar tudo o que você precisa para sua configuração:

- **Homebrew** - <a target="_blank" href="https://brew.sh/">Instalar o homebrew</a>
- **Hugo** - <a target="_blank" href="https://gohugo.io/getting-started/installing/">Instalar Hugo</a>
- **Node.js e NPM** - <a target="_blank" href="https://nodejs.org/en/download/">Instalar node.js e NPM</a> (mais fácil de instalar o Firebase CLI)
- **CLI do Firebase** - <a target="_blank" href="https://firebase.google.com/docs/cli#install_the_firebase_cli">Instalar CLI do Firebase</a>

## Criar esqueleto do site

Agora que temos um ambiente de desenvolvimento rodando, o primeiro passo é criar a versão base do seu site. Para isso vamos usar **Hugo** para gerar o modelo de pasta e os arquivos de configuração que precisamos executando o seguinte comando (o parâmetro `--force` é necessário para executar o Hugo em um diretório não vazio):

```
hugo novo site. --força
```
Isso deveria ter criado um conjunto de pastas dentro de sua área de trabalho com as quais você não precisa se preocupar por enquanto. O próximo passo é instalar um tema para o Hugo. Eu escolhi <a target="_blank" href="https://github.com/jpanther/congo">Congo</a> porque tinha todos os recursos que eu precisava para meu site e parecia fácil de mudar se Eu sempre preciso disso. Se quiser experimentar um tema diferente existem vários disponíveis na documentação do Hugo, cada um com documentação e exemplos.

Instale o Congo usando submódulos git executando o seguinte comando:

```
submódulo git add -b estável https://github.com/jpanther/congo.git temas/congo
```

Agora precisamos fazer algumas alterações na estrutura de diretórios e arquivos para que o Congo possa funcionar corretamente. Não vou entrar em detalhes sobre o que está acontecendo neste guia (você pode consultar a documentação do Congo se quiser saber mais), a principal conclusão é que estamos criando e configurando uma pasta em <code>config/_default/< /code> que conterá todos os arquivos de configuração importantes para Hugo e Congo.

Execute os seguintes comandos em ordem:

```
mkdir -p configuração/_default
rm configuração.toml
cp temas/congo/config/_default/*.toml config/_default/
echo 'tema = "congo"' | gato - config/_default/config.toml > temp && mv temp config/_default/config.toml
```

Parabéns, você deve ter seu site instalado e funcionando agora. Vamos experimentar executando o servidor de depuração do Hugo:

```
servidor hugo -D
```

Abra seu navegador favorito e navegue até <a target="_blank" href="http://localhost:1313">localhost:1313</a> para ver sua página.

<img src="theme/vanilla.png"/>

Você deverá ver algo semelhante à imagem acima. Não parece tão emocionante, não é? Vamos configurar o tema nas próximas seções e aprender como criar seu primeiro artigo.


## Configurar tema

Agora abordarei como alterar a aparência do seu site, adicionar algumas informações pessoais e ativar o modo escuro (também conhecido como o recurso mais importante em qualquer site atualmente).

{{< alerta >}}
Uma observação: estou abordando uma configuração muito simples para este tema. Verifique a <a target="_blank" href="https://jpanther.github.io/congo/docs/">documentação do tema Congo</a> para entender tudo o que você pode fazer com este tema.
{{< /alert >}}

### Foto do perfil

Vamos começar adicionando uma foto de perfil ao seu site. Crie uma pasta chamada “assets” na raiz do seu projeto. Escolha uma foto de perfil e coloque-a dentro da pasta de ativos. O resto do guia assumirá que a imagem final se chama "profile.jpg", então renomeie sua imagem ou leve isso em consideração ao configurar alguns dos outros arquivos.

<figura>
 <img src="configure/profile.jpg"/>
  <figcaption>Se você ainda precisa tirar uma foto incrível para isso, sinta-se à vontade para fazer o download desta para prosseguir com o tutorial.</figcaption>
</figura>



### Arquivos de configuração

Vamos abrir alguns arquivos de configuração e começar a atualizá-los. Todos os arquivos que vamos alterar estão dentro da pasta <code>config/_default/</code>.

####config.toml

Remova o comentário do parâmetro <code>baseURL</code> e substitua-o pelo domínio final do seu site. Este valor será usado para criar o arquivo robots.txt para que qualquer mecanismo de pesquisa rastreie e indexe seu site com êxito.

<img src="configure/config.png"/>

{{< alerta >}}
Nota: se você deseja configurar o Google Analytics, adicione a seguinte linha com seu ID a este arquivo `googleAnalytics = "G-XXXXXX"`

{{</ alerta >}}

#### idiomas.en.toml

Este arquivo irá conduzir as principais informações do site e do autor da página (você). Substitua o <code>title</code> e <code>description</code> pelos que você deseja para sua página, esses valores irão direcionar o título HTML e as tags de descrição.

Dentro do bloco <code>[author]</code> você pode atualizar os detalhes que deseja destacar em seu perfil. O mínimo seria <code>nome</code>, <code>imagem</code>, <code>título</code> e <code>links</code>. Para o parâmetro <code>links</code> não se esqueça de descomentar a última linha do arquivo, pois este é um array json. Atualize cada entrada com seus links pessoais.

<img src="configure/idiomas.png"/>

#### params.toml

Este arquivo define grande parte do comportamento geral em toda a estrutura. Para este tutorial alterei alguns dos valores gerais e um da página inicial, se quiser saber mais sobre as outras configurações disponíveis consulte <a target="_blank" href="https://jpanther.github.io/congo /docs/">Documentação do tema Congo</a>.

Alterei <code>colorScheme</code> para "ocean", o que altera o tema global da interface do usuário. Congo define uma paleta de três cores que é utilizada em todo o tema. Os valores válidos são congo (padrão), abacate, oceano, fogo e ardósia. Embora estes sejam os esquemas padrão, você também pode criar o seu próprio. Consulte a documentação principal do tema para saber como.

<code>showAppearanceSwitcher</code> ativado para ativar a alternância do modo claro/escuro. <code>enableSearch</code> ativado, que indexa todas as postagens futuras cada vez que você cria o site e fornece um recurso de pesquisa simples. Também alterei o valor de <code>layout</code>, dentro de <code>[homepage]</code>, para "profile", o que altera a forma como a landing page é renderizada. Finalmente, o último valor interessante aqui é <code>showRecent</code>, que quando ativado mostra as postagens recentes na página inicial.

<img src="configure/params.png"/>

### Final

Vamos ver como fica, execute o Hugo novamente:

```
servidor hugo -D
```

E navegue até <a target="_blank" href="http://localhost:1313">localhost:1313</a> você deverá ver algo semelhante à página abaixo.

<img class="thumbnailshadow" src="configure/final.png"/>

Parabéns, está ótimo, vamos aprender como gerar seus primeiros artigos.

## Como gerar artigos

Hugo fornece algumas ferramentas para gerar seus artigos (arquivos <a target="_blank" href="https://www.markdownguide.org/">markdown</a>) com um conjunto básico de tags já neles. Execute o seguinte comando para criar sua primeira postagem

```
hugo novas postagens/my-first-post.md
```

substitua o conteúdo do arquivo pelo seguinte:

```