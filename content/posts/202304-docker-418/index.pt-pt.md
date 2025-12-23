---
title: "Docker Desktop 4.18"
summary: "Estamos sempre à procura de formas de melhorar a tua experiência com o Docker, quer estejas a usar uma integração, extensão ou diretamente no produto. O Docker Desktop 4.18 foca-se em melhorias na linha de comandos e no Docker Desktop."
categories: ["Externo"]
tags: ["docker","blog","release"]
externalUrl: "https://www.docker.com/blog/docker-desktop-4-18/"
date: 2023-04-05
draft: false
# series: ["The Complete PM"]
# series\_order: 1
---

Estamos sempre à procura de formas de melhorar a tua experiência com o Docker, quer estejas a usar uma integração, extensão ou diretamente no produto. O Docker Desktop 4.18 foca-se em melhorias na linha de comandos e no Docker Desktop.

Continua a ler para saber sobre novas funcionalidades CLI no Docker Scout, e descobre o Docker init, uma funcionalidade CLI Beta empolgante para te ajudar a adicionar rapidamente Docker a qualquer projeto. Também revemos novas funcionalidades para te ajudar a começar com o Docker mais rapidamente: Container File Explorer, instalação macOS sem admin e uma nova funcionalidade experimental no Docker Compose.

## Docker Scout CLI
No Docker Desktop 4.17, introduzimos o Docker Scout, uma ferramenta que fornece visibilidade sobre vulnerabilidades de imagens e recomendações para remediação rápida. Temos o prazer de anunciar o lançamento de várias novas funcionalidades na linha de comandos do Docker Scout, que vem com o Docker Desktop 4.18. Estas atualizações chegam após recebermos uma quantidade esmagadora de feedback da comunidade.

O lançamento 4.18 do Docker Scout inclui uma vista rápida de vulnerabilidades, recomendações de imagens diretamente na linha de comandos, orientação de remediação melhorada com utilização de SBOM do BuildKit e uma funcionalidade de pré-visualização comparando imagens (imagina usar diff, mas para imagens container).

## Quickview
Supõe que criaste uma nova imagem container e gostarias de avaliar a sua postura de segurança. Agora podes executar docker scout quickview para uma visão de segurança instantânea e de alto nível da tua imagem. Se forem encontrados problemas, o Docker Scout irá guiar-te sobre o que fazer a seguir.

## Recomendações por linha de comandos
Se usaste anteriormente docker scout cves para entender que CVEs existem nas tuas imagens, podes ter-te perguntado que curso de ação tomar a seguir. Com o novo comando docker scout recommendations, recebes uma lista de recomendações que sugerem diretamente atualizações disponíveis para a imagem base.

O comando docker scout recommendations analisa a imagem e mostra recomendações para atualizar a imagem base, juntamente com uma lista de benefícios, incluindo oportunidades para reduzir vulnerabilidades ou como alcançar tamanhos de imagem mais pequenos.

## Proveniência BuildKit e atestações SBOM
Em janeiro de 2023, o BuildKit foi estendido para suportar a construção de imagens com atestações. Estas imagens podem agora usar a linha de comandos docker scout para processar esta informação e determinar os próximos passos relevantes. Podemos suportar isto porque a ferramenta de linha de comandos docker scout sabe exatamente com que imagem base construíste e pode fornecer recomendações mais precisas.

Se uma imagem foi construída e enviada com uma atestação SBOM anexada, o docker scout lê a informação do pacote da atestação SBOM em vez de criar um novo SBOM local.

Para aprender como construir imagens com atestações usando BuildKit, lê "Generating SBOMs for Your Image with BuildKit."

## Comparar imagens
Nota: Esta é uma funcionalidade experimental do Docker Scout e pode mudar e evoluir ao longo do tempo.

Documentar retrospetivamente as alterações feitas para resolver um problema de segurança após completar uma remediação de vulnerabilidade é considerada uma boa prática. O Docker Desktop 4.18 introduz uma pré-visualização antecipada de comparação de imagens.

Esta funcionalidade destaca as diferenças de vulnerabilidades entre duas imagens e como os pacotes se comparam. Estes detalhes incluem a versão do pacote, variáveis de ambiente em cada imagem e mais. Adicionalmente, a saída da linha de comandos pode ser configurada em formato markdown. Esta informação pode então ser usada para gerar pré-visualizações diff em pull requests através de GitHub Actions.

Gostaríamos de saber que cenários podes imaginar usando esta funcionalidade diff. Podes fazê-lo abrindo o Docker Desktop, navegando para o separador Images e selecionando "Dar feedback".

Lê a documentação para saber mais sobre estas funcionalidades.

## Container File Explorer
Outra funcionalidade que temos prazer em anunciar é o lançamento GA do Container File Explorer. Quando precisas de verificar ou substituir rapidamente ficheiros dentro de um container, o Container File Explorer vai ajudar-te a fazer isso — e muito mais — diretamente da interface do Docker Desktop.

Não vais precisar de lembrar longos comandos CLI, mexer com longos parâmetros de caminho no comando docker cp, ou ficar frustrado porque o teu container não tem shell para verificar os ficheiros. O Container File Explorer fornece uma interface simples que te permite:

- Verificar um sistema de ficheiros container
- Copiar ficheiros e pastas entre host e containers
- Arrastar e largar facilmente ficheiros para um container
- Editar rapidamente ficheiros com destaque de sintaxe
- Eliminar ficheiros

Com o Container File Explorer, podes ver os ficheiros dos teus containers em qualquer estado (parado/a correr/pausado/…) e para qualquer tipo de container, incluindo slim-containers/slim-images (containers sem shell). Abre o dashboard, vai ao separador Containers, abre o menu de ações do container e verifica os teus ficheiros:

## Instalação sem admin no macOS
Ajustámos o nosso fluxo de instalação macOS para tornar super fácil para os programadores instalarem o Docker Desktop sem lhes conceder privilégios de admin. Alguns programadores trabalham em ambientes com requisitos de segurança elevados onde o acesso admin local pode ser proibido nas suas máquinas. Queríamos garantir que os utilizadores nestes ambientes possam optar por não usar funcionalidades do Docker Desktop que requerem privilégios de admin.

O fluxo de instalação padrão no macOS ainda vai pedir privilégios de admin, pois acreditamos que isto nos permite fornecer uma experiência otimizada para a grande maioria dos casos de uso dos programadores. Após conceder privilégios de admin, o Docker Desktop instala automaticamente as ferramentas CLI do Docker, permitindo que bibliotecas de terceiros se integrem perfeitamente com o Docker (ativando o socket Docker padrão) e permitindo aos utilizadores fazer bind a portas privilegiadas entre 1 e 1024.

Se quiseres alterar as configurações que configuraste na instalação, podes fazê-lo facilmente no separador Avançado das Definições do Docker Desktop.

## Docker init (Beta)
Outra funcionalidade empolgante que estamos a lançar em Beta é o docker init. Este é um novo comando CLI que te permite adicionar rapidamente Docker ao teu projeto criando automaticamente os recursos necessários: Dockerfiles, ficheiros Compose e .dockerignore. Usando esta funcionalidade, podes facilmente atualizar projetos existentes para correr usando containers ou configurar novos projetos mesmo que não estejas familiarizado com o Docker.

Podes experimentar o docker init atualizando para a versão mais recente do Docker Desktop (4.18.0) e digitando docker init na linha de comandos enquanto estás dentro de uma pasta de projeto alvo. O docker init irá criar todos os ficheiros necessários para correr o teu projeto no Docker.

Consulta a documentação do docker init para saber mais.

A versão Beta do docker init vem com suporte Go, e a equipa Docker já está a trabalhar para adicionar mais linguagens e frameworks, incluindo Node.js, Python, Java, Rust e .Net, mais outras funcionalidades nos próximos meses. Se há uma linguagem ou framework específica que gostarias que suportássemos, diz-nos. Submete outros comentários e sugestões no nosso roadmap público.

Nota: Por favor tem em atenção que docker init não deve ser confundido com o executável docker-init usado internamente, que é invocado pelo Docker quando se utiliza o flag –init com o comando docker run. Consulta a documentação para saber mais.

## Docker Compose File Watch (Experimental)
O Docker Compose tem um novo truque! O Docker Compose File Watch está disponível agora como funcionalidade Experimental para manter automaticamente todos os teus containers de serviço atualizados enquanto trabalhas.

(...)

Uma vez configurado, o novo comando docker compose alpha watch começará a monitorizar edições de ficheiros no teu projeto:

Numa alteração a ./web/App.jsx, por exemplo, o Compose irá sincronizá-lo automaticamente para /src/web/App.jsx dentro do container.
Entretanto, se modificares package.json (como ao instalar um novo pacote npm), o Compose irá reconstruir a imagem e substituir o serviço existente por uma versão atualizada.
O modo Compose File Watch é apenas o início. Com quase 100 commits desde o último lançamento do Docker Compose, corrigimos bugs e fizemos muitas melhorias de qualidade de vida. (Um agradecimento especial a todos os nossos recentes contribuidores de primeira vez!)

Estamos entusiasmados com o Docker Compose File Watch e estamos a trabalhar ativamente na mecânica subjacente e formato de configuração.

## Conclusão
Isso é tudo para a nossa atualização Docker Desktop 4.18. Este lançamento inclui muitas funcionalidades novas e fixes, incluindo algumas que podes ajudar a moldar! Também atualizámos o Docker Engine para resolver alguns CVEs. Como sempre, adoramos ouvir o teu feedback. Por favor deixa qualquer feedback no nosso roadmap GitHub público e diz-nos o que mais gostarias de ver.

Consulta as notas de lançamento para uma análise completa das novidades no Docker Desktop 4.18.



{{< alert >}}
**Nota:** este post foi originalmente publicado externamente, por favor vai ao [blog do Docker](https://www.docker.com/blog/docker-desktop-4-18/) para ler o post completo
{{< /alert >}}
