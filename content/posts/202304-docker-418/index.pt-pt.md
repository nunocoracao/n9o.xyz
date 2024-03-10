---
title: "Docker Desktop 4.18"
summary: "Estamos sempre procurando maneiras de aprimorar sua experiência com o Docker, esteja você usando uma integração, extensão ou diretamente no produto. O Docker Desktop 4.18 se concentra em melhorias na linha de comando e no Docker Desktop."
categories: ["Externo"]
tags: ["docker","blog","lançamento"]
externalUrl: "https://www.docker.com/blog/docker-desktop-4-18/"
date: 2023-04-05
draft: false
showauthor: false
authors:
  - nunocoracao
# series: ["The Complete PM"]
# series\_order: 1

---
Estamos sempre procurando maneiras de aprimorar sua experiência com o Docker, seja usando uma integração, uma extensão ou diretamente no produto. Docker Desktop 4.18 concentra-se em melhorias na linha de comando e no Docker Desktop.

Continue lendo para aprender sobre os novos recursos CLI no Docker Scout e descubra sobre o Docker init, um recurso CLI Beta interessante para ajudá-lo a adicionar rapidamente o Docker a qualquer projeto. Também analisamos novos recursos para ajudá-lo a começar a usar o Docker com mais rapidez: Container File Explorer, instalação do macOS sem administrador e um novo recurso experimental no Docker Compose.

## CLI do Docker Scout
No Docker Desktop 4.17, apresentamos o Docker Scout, uma ferramenta que fornece visibilidade sobre vulnerabilidades de imagens e recomendações para correção rápida. Temos o prazer de anunciar o lançamento de vários novos recursos na linha de comando do Docker Scout, que acompanha o Docker Desktop 4.18. Essas atualizações ocorrem após receber uma grande quantidade de feedback da comunidade.

A versão 4.18 do Docker Scout inclui uma visualização rápida de vulnerabilidade, recomendações de imagens diretamente na linha de comando, orientação aprimorada de correção com utilização do BuildKit SBOM e um recurso de visualização comparando imagens (imagine usar diff, mas para imagens de contêiner).

## Olhada rápida
Suponha que você criou uma nova imagem de contêiner e gostaria de avaliar sua postura de segurança. Agora você pode executar o docker scout quickview para obter uma visão instantânea e de alto nível de segurança da sua imagem. Se algum problema for encontrado, o Docker Scout irá orientá-lo sobre o que fazer a seguir.

## Recomendações de linha de comando
Se você já usou o docker scout cves para entender quais CVEs existem em suas imagens, você pode estar se perguntando qual ação tomar a seguir. Com o novo comando docker scout recomendações, você recebe uma lista de recomendações que sugerem diretamente atualizações disponíveis para a imagem base.

O comando docker scout recomendações analisa a imagem e exibe recomendações para atualizar ou atualizar a imagem base, juntamente com uma lista de benefícios, incluindo oportunidades para reduzir vulnerabilidades ou como obter tamanhos de imagem menores.

## Proveniência do BuildKit e atestados SBOM
Em janeiro de 2023, o BuildKit foi estendido para oferecer suporte à construção de imagens com atestados. Essas imagens agora podem usar a linha de comando do docker scout para processar essas informações e determinar as próximas etapas relevantes. Podemos oferecer suporte a isso, pois a ferramenta de linha de comando docker scout sabe exatamente com qual imagem base você construiu e pode fornecer recomendações mais precisas.

Se uma imagem foi criada e enviada com um atestado SBOM anexado, o docker scout lê as informações do pacote do atestado SBOM em vez de criar um novo SBOM local.

Para aprender como construir imagens com atestados usando BuildKit, leia “Gerando SBOMs para sua imagem com BuildKit”.

## Comparar imagens
Observação: este é um recurso experimental do Docker Scout e pode mudar e evoluir com o tempo.

Documentar retrospectivamente as alterações feitas para resolver um problema de segurança após concluir a correção de uma vulnerabilidade é considerado uma boa prática. Docker Desktop 4.18 apresenta uma visualização antecipada de comparação de imagens.

Este recurso destaca as diferenças de vulnerabilidade entre duas imagens e como os pacotes se comparam. Esses detalhes incluem a versão do pacote, variáveis ​​de ambiente em cada imagem e muito mais. Além disso, a saída da linha de comando pode ser configurada em formato markdown. Essas informações podem então ser usadas para gerar visualizações de diferenças em solicitações pull por meio do GitHub Actions.

Adoraríamos saber em quais cenários você poderia imaginar usando esse recurso de comparação. Você pode fazer isso abrindo o Docker Desktop, navegando até a guia Imagens e selecionando Fornecer feedback.

Leia a documentação para saber mais sobre esses recursos.

## Explorador de arquivos de contêiner
Outro recurso que temos o prazer de anunciar é o lançamento GA do Container File Explorer. Quando você precisar verificar ou substituir rapidamente arquivos em um contêiner, o Container File Explorer o ajudará a fazer isso – e muito mais – diretamente da IU do Docker Desktop.

Você não precisará se lembrar de comandos CLI longos, mexer em parâmetros de caminho longo no comando docker cp ou ficar frustrado porque seu contêiner não tem nenhum shell para verificar os arquivos. O Container File Explorer fornece uma interface de usuário simples que permite:

- Verifique um sistema de arquivos contêiner
- Copie arquivos e pastas entre host e contêineres
- Arraste e solte arquivos facilmente em um contêiner
- Edite arquivos rapidamente com destaque de sintaxe
- Deletar arquivos

Com o Container File Explorer, você pode visualizar os arquivos dos seus contêineres em qualquer estado (parado/em execução/pausado/…) e para qualquer tipo de contêiner, incluindo slim-containers/slim-images (contêineres sem shell). Abra o painel, vá para a aba Containers, abra o menu de ação do container e verifique seus arquivos:

## Instalação sem administrador no macOS
Ajustamos nosso fluxo de instalação do macOS para tornar muito fácil para os desenvolvedores instalarem o Docker Desktop sem conceder-lhes privilégios de administrador. Alguns desenvolvedores trabalham em ambientes com requisitos de segurança elevados, onde o acesso do administrador local pode ser proibido em suas máquinas. Queríamos ter certeza de que os usuários nesses ambientes pudessem cancelar a funcionalidade do Docker Desktop que requer privilégios de administrador.

O fluxo de instalação padrão no macOS ainda solicitará privilégios de administrador, pois acreditamos que isso nos permite fornecer uma experiência otimizada para a grande maioria dos casos de uso de desenvolvedores. Ao conceder privilégios de administrador, o Docker Desktop instala automaticamente as ferramentas Docker CLI, permitindo que bibliotecas de terceiros se integrem perfeitamente ao Docker (habilitando o soquete Docker padrão) e permitindo que os usuários se vinculem a portas privilegiadas entre 1 e 1024.

Se quiser alterar as configurações definidas na instalação, você pode fazer isso facilmente na guia Avançado das configurações do Docker Desktop.

## Inicialização do Docker (Beta)
Outro recurso interessante que estamos lançando na versão Beta é o docker init. Este é um novo comando CLI que permite adicionar rapidamente o Docker ao seu projeto, criando automaticamente os ativos necessários: Dockerfiles, arquivos Compose e .dockerignore. Usando esse recurso, você pode atualizar facilmente projetos existentes para execução usando contêineres ou configurar novos projetos, mesmo se não estiver familiarizado com o Docker.

Você pode tentar docker init atualizando para a versão mais recente do Docker Desktop (4.18.0) e digitando docker init na linha de comando enquanto estiver dentro de uma pasta de projeto de destino. docker init criará todos os arquivos necessários para executar seu projeto no Docker.

Consulte a documentação do docker init para saber mais.

A versão beta do docker init vem com suporte para Go, e a equipe do Docker já está trabalhando para adicionar mais linguagens e estruturas, incluindo Node.js, Python, Java, Rust e .Net, além de outros recursos nos próximos meses. Se houver uma linguagem ou estrutura específica que você gostaria que apoiássemos, informe-nos. Envie outros comentários e sugestões em nosso roteiro público.

Nota: Esteja ciente de que docker init não deve ser confundido com o executável docker-init usado internamente, que é invocado pelo Docker ao utilizar o sinalizador –init com o comando docker run. Consulte a documentação para saber mais.

## Docker Compose File Watch (Experimental)
Docker Compose tem um novo truque! Docker Compose File Watch já está disponível como um recurso experimental para manter automaticamente todos os seus contêineres de serviço atualizados enquanto você trabalha.

(...)

Depois de configurado, o novo comando docker compose alpha watch começará a monitorar edições de arquivos em seu projeto:

Em uma alteração para ./web/App.jsx, por exemplo, o Compose irá sincronizá-lo automaticamente para /src/web/App.jsx dentro do contêiner.
Enquanto isso, se você modificar package.json (por exemplo, instalando um novo pacote npm), o Compose reconstruirá a imagem e substituirá o serviço existente por uma versão atualizada.
O modo Compose File Watch é apenas o começo. Com quase 100 commits desde o último lançamento do Docker Compose, eliminamos bugs e fizemos muitas melhorias na qualidade de vida. (Uma mensagem especial a todos os nossos colaboradores recentes pela primeira vez!)

Estamos entusiasmados com o Docker Compose File Watch e trabalhando ativamente na mecânica subjacente e no formato de configuração.

## Conclusão
Isso encerra nossa atualização do Docker Desktop 4.18. Esta versão inclui muitos recursos novos e interessantes, incluindo alguns que você pode ajudar a moldar! Também atualizamos o Docker Engine para resolver alguns CVEs. Como sempre, adoramos ouvir seus comentários. Deixe seus comentários sobre nosso roteiro público do GitHub e diga-nos o que mais você gostaria de ver.

Confira as notas de lançamento para uma análise completa das novidades do Docker Desktop 4.18.



{{< alerta >}}
**Observação:** esta postagem foi postada originalmente externamente, acesse o [blog do Docker](https://www.docker.com/blog/docker-desktop-4-18/) para ler a postagem completa
{{< /alert >}}