---
title: "Docker Desktop 4.23"
summary: "O Docker Desktop 4.23 está agora disponível e inclui inúmeras melhorias, incluindo suporte ASP.NET Core no Docker Init, Verificação de Integridade de Configuração para alertar sobre quaisquer alterações de configuração que requerem atenção, e gestão de identidade cross-domain."
categories: ["Externo"]
tags: ["docker","blog","release"]
externalUrl: "https://www.docker.com/blog/docker-desktop-4-23/"
date: 2023-09-12
draft: false
# series: ["The Complete PM"]
# series\_order: 1
---

O Docker Desktop 4.23 está agora disponível e inclui inúmeras melhorias, incluindo suporte ASP.NET Core no Docker Init, Verificação de Integridade de Configuração para alertar sobre quaisquer alterações de configuração que requerem atenção, e gestão de identidade cross-domain. Este lançamento também melhora a Pesquisa Rápida, permitindo pesquisar em containers, apps, Docker Hub, Docs e qualquer volume, e executar ações rápidas (iniciar/parar/eliminar). O VirtioFS está agora definido por defeito para proporcionar ganhos de desempenho para utilizadores Mac. Com o lançamento do Docker Desktop 4.23, os utilizadores Mac também verão um aumento no desempenho de rede usando conexões de rede tradicionais.

Neste post, exploramos as novidades e atualizações no último lançamento do Docker Desktop.

## ASP.NET Core com Docker Init
Estamos entusiasmados em anunciar o suporte adicionado para ASP.NET Core. Quer sejas novo no Docker ou um profissional experiente, o Docker Init agora simplifica a Dockerização para os teus projetos ASP.NET Core. Com um simples comando docker init na pasta do teu projeto e a última versão do Docker Desktop, observa como o Docker Init gera Dockerfiles personalizados, ficheiros Compose e ficheiros .dockerignore à medida.

Especificamente para ASP.NET Core, também melhorámos o suporte e comentários no Dockerfile para builds multi-arquitetura. Este avanço ajudará os utilizadores a gerir a partilha das suas imagens entre diferentes arquiteturas de CPU e simplificar deployments em fornecedores cloud como Azure, AWS e GCP. Cria imagens que se adaptam a várias arquiteturas, aumentando a flexibilidade e eficiência em deployments cloud.

Começa por garantir que tens a última versão do Docker Desktop. Depois, executa docker init no diretório do teu projeto através da linha de comandos. Deixa o Docker Init fazer o trabalho pesado, permitindo-te concentrar na tua tarefa principal — criar aplicações excecionais!

## Verificação de Integridade de Configuração
Garante que o Docker Desktop funciona sem problemas com a nossa nova Verificação de Integridade de Configuração. Isto permite-te continuar a usar múltiplas aplicações e ferramentas locais, tornando por vezes as alterações de configuração sem complicações. Esta atualização deteta automaticamente e alerta para quaisquer alterações de configuração, solicitando um simples clique para restabelecer as configurações do Docker Desktop e garantir desenvolvimento ininterrupto.


## Gestão de identidade cross-domain
A gestão de acesso de utilizadores para Docker tornou-se mais poderosa. O SCIM ajuda a provisionar ou desprovisionar utilizadores automaticamente, e o mapeamento de funções de grupo é agora suportado para que possas organizar as tuas equipas e o seu acesso adequadamente:

Podes atribuir funções a membros na tua organização no IdP. Para configurar uma função, podes usar atributos opcionais ao nível do utilizador para a pessoa a quem queres atribuir uma função.
Também podes definir uma organização e equipa para substituir os valores de provisionamento predefinidos definidos pela conexão SSO.
A tabela seguinte lista os atributos opcionais ao nível do utilizador suportados.

## Melhorias na Pesquisa Rápida
Capacitando os programadores com acesso contínuo a recursos essenciais sempre que precisam, a nossa renovada funcionalidade de Pesquisa Rápida recebeu atualizações significativas. Agora, os utilizadores podem localizar facilmente:

Containers e apps Compose: Localiza facilmente qualquer container ou app Compose residente no teu sistema local. Adicionalmente, obtém acesso rápido a variáveis de ambiente e executa ações essenciais como iniciá-los, pará-los ou eliminá-los.
Imagens Docker Hub: Quer sejam imagens Docker Hub públicas, locais ou de repositórios remotos, a Pesquisa Rápida fornecerá resultados rápidos e relevantes.
Extensões: Descobre mais sobre extensões específicas e simplifica a instalação com um único clique.
Volumes: Navega facilmente pelos teus volumes e obtém informações sobre os containers associados.
Documentação: Acede instantaneamente a assistência inestimável da documentação oficial do Docker, tudo diretamente do Docker Desktop.
A Pesquisa Rápida melhorada é a tua ferramenta definitiva para descoberta e gestão de recursos, oferecendo conveniência incomparável para programadores.

## Standardização de partilha de ficheiros de alto desempenho com VirtioFS para utilizadores Mac
O Docker Desktop 4.23 agora usa por defeito o VirtioFS no macOS 12.5+ como padrão para proporcionar ganhos de desempenho substanciais ao partilhar ficheiros com containers através de docker run -v ou bind mounts em Compose YAML. O VirtioFS minimiza a sobrecarga de transferência de ficheiros permitindo aos containers aceder a ficheiros sem montagens de volumes ou partilhas de rede.

Saltar protocolos de transferência de ficheiros de rede também leva a transferências de ficheiros mais rápidas. Medimos melhorias de desempenho, diminuindo o tempo de transferência de ficheiros de 7:13.21s para 1:4.4s — um aumento de velocidade de 85,15%. Queremos notar que a melhoria medida depende do tamanho do ficheiro, de que outras apps estão a correr, e do hardware do computador.

## Melhorias de velocidade de rede do Docker Desktop para utilizadores Mac
O Docker Desktop 4.23 vem com desempenho de rede melhorado para utilizadores Mac. Agora, quando um container requer uma conexão de rede tradicional, os utilizadores experienciarão desempenho de rede aumentado destas formas:

Acesso a portas expostas ~10x mais rápido
Transmission Control Protocol (TCP) ~1,5x – 2x mais rápido
Não é necessária nenhuma ação do utilizador para experienciar estes benefícios — todos os utilizadores Mac atualizados para 4.23 terão agora rede mais rápida!

## Conclusão
Atualiza agora para explorar as novidades no lançamento 4.23 do Docker Desktop. Tens feedback? Deixa feedback no nosso roadmap público do GitHub e diz-nos o que mais gostarias de ver nos próximos lançamentos.

Saber mais
Lê as Notas de Lançamento do Docker Desktop.
Obtém o último lançamento do Docker Desktop.
Tens perguntas? A comunidade Docker está aqui para ajudar.
Novo no Docker? Começa.


{{< alert >}}
**Nota:** este post foi originalmente publicado externamente, por favor vai ao [blog do Docker](https://www.docker.com/blog/docker-desktop-4-23/) para ler o post completo
{{< /alert >}}

