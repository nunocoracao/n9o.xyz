---
title: "Docker Desktop 4.23"
summary: "O Docker Desktop 4.23 já está disponível e inclui vários aprimoramentos, incluindo suporte ASP.NET Core no Docker Init, verificação de integridade de configuração para alertar sobre quaisquer alterações de configuração que exijam atenção e gerenciamento de identidade entre domínios."
categories: ["Externo"]
tags: ["docker","blog","lançamento"]
externalUrl: "https://www.docker.com/blog/docker-desktop-4-23/"
date: 2023-09-12
draft: false
showauthor: false
authors:
  - nunocoracao
# series: ["The Complete PM"]
# series\_order: 1

---
Docker Desktop 4.23 já está disponível e inclui vários aprimoramentos, incluindo suporte ASP.NET Core no Docker Init, verificação de integridade de configuração para alertar sobre quaisquer alterações de configuração que exijam atenção e gerenciamento de identidade entre domínios. Esta versão também melhora a Pesquisa Rápida, permitindo pesquisar contêineres, aplicativos, Docker Hub, Docs e qualquer volume, além de executar ações rápidas (iniciar/parar/excluir). VirtioFS agora está definido como padrão para fornecer ganhos de desempenho para usuários de Mac. Com a versão Docker Desktop 4.23, os usuários de Mac também verão um desempenho de rede melhorado usando conexões de rede tradicionais.

Nesta postagem, mergulhamos nas novidades e atualizações da versão mais recente do Docker Desktop.

## ASP.NET Core com inicialização do Docker
Temos o prazer de anunciar suporte adicional para ASP.NET Core. Quer você seja novo no Docker ou um profissional experiente, o Docker Init agora simplifica a Dockerização para seus projetos ASP.NET Core. Com um simples comando docker init na pasta do seu projeto e a versão mais recente do Docker Desktop, observe como o Docker Init gera Dockerfiles, arquivos Compose e arquivos .dockerignore personalizados.

Específico para o ASP.NET Core, também melhoramos o suporte e os comentários no DockerFile para compilações multiarquiteturas. Esse avanço ajudará os usuários a gerenciar o compartilhamento de suas imagens em diferentes arquiteturas de CPU e a simplificar as implantações em provedores de nuvem como Azure, AWS e GCP. Crie imagens que se adaptam a diversas arquiteturas, aumentando a flexibilidade e a eficiência nas implantações em nuvem.

Comece garantindo que você tenha a versão mais recente do Docker Desktop. Em seguida, execute docker init no diretório do seu projeto por meio da linha de comando. Deixe o Docker Init cuidar do trabalho pesado, permitindo que você se concentre em sua tarefa principal: criar aplicativos excelentes!

## Verificação de integridade da configuração
Garanta que o Docker Desktop funcione perfeitamente com nossa nova verificação de integridade de configuração. Isso permite que você continue usando vários aplicativos e ferramentas locais, às vezes facilitando as alterações de configuração. Esta atualização detecta e alerta automaticamente sobre quaisquer alterações de configuração, solicitando um simples clique e restabelecendo as configurações do Docker Desktop para rastrear e garantir o desenvolvimento ininterrupto.


## Gerenciamento de identidade entre domínios
O gerenciamento de acesso de usuário para Docker ficou ainda mais poderoso. O SCIM ajuda a provisionar ou desprovisionar automaticamente usuários, e o mapeamento de funções de grupo agora é compatível para que você possa organizar suas equipes e seu acesso de acordo:

Você pode atribuir funções aos membros da sua organização no IdP. Para configurar uma função, você pode usar atributos opcionais de nível de usuário para a pessoa à qual deseja atribuir uma função.
Você também pode definir uma organização e uma equipe para substituir os valores de provisionamento padrão definidos pela conexão SSO.
A tabela a seguir lista os atributos opcionais de nível de usuário suportados.

## Melhorias na pesquisa rápida
Capacitando os desenvolvedores com acesso contínuo a recursos essenciais sempre que necessário, nosso recurso renovado de Pesquisa Rápida recebeu atualizações significativas. Agora, os usuários podem localizar facilmente:

Contêineres e aplicativos Compose: identifique facilmente qualquer contêiner ou aplicativo Compose residente em seu sistema local. Além disso, obtenha acesso rápido às variáveis ​​de ambiente e execute ações essenciais, como iniciá-las, interrompê-las ou excluí-las.
Imagens Docker Hub: sejam imagens públicas do Docker Hub, locais ou de repositórios remotos, a Pesquisa Rápida fornecerá resultados rápidos e relevantes.
Extensões: descubra mais sobre extensões específicas e simplifique a instalação com um único clique.
Volumes: navegue facilmente pelos seus volumes e obtenha insights sobre os contêineres associados.
Documentação: acesse instantaneamente assistência inestimável da documentação oficial do Docker, tudo diretamente do Docker Desktop.
A Pesquisa rápida aprimorada é sua ferramenta definitiva para descoberta e gerenciamento de recursos, oferecendo conveniência incomparável para desenvolvedores.

## Padronizando compartilhamento de arquivos de alto desempenho com VirtioFS para usuários de Mac
O Docker Desktop 4.23 agora usa VirtioFS no macOS 12.5+ como padrão para fornecer ganhos substanciais de desempenho ao compartilhar arquivos com contêineres por meio de docker run -v ou montagens de ligação no Compose YAML. VirtioFS minimiza a sobrecarga de transferência de arquivos, permitindo que contêineres acessem arquivos sem montagens de volume ou compartilhamentos de rede.

Ignorar os protocolos de transferência de arquivos em rede também leva a transferências de arquivos mais rápidas. Medimos melhorias de desempenho, diminuindo o tempo de transferência de arquivos de 7:13,21s para 1:4,4s – um aumento de 85,15% na velocidade. Queremos observar que a melhoria medida depende do tamanho do arquivo, dos outros aplicativos que estão sendo executados e do hardware do computador.

## Melhorias na velocidade da rede Docker Desktop para usuários de Mac
Docker Desktop 4.23 vem com desempenho de rede aprimorado para usuários de Mac. Agora, quando um contêiner exigir uma conexão de rede tradicional, os usuários experimentarão um aumento no desempenho da rede das seguintes maneiras:

Acessando portas expostas cerca de 10 vezes mais rápido
Protocolo de controle de transmissão (TCP) ~1,5x – 2x mais rápido
Nenhuma ação do usuário é necessária para experimentar esses benefícios – todos os usuários de Mac atualizados para 4.23 agora se conectarão mais rapidamente!

## Conclusão
Atualize agora para explorar as novidades da versão 4.23 do Docker Desktop. Você tem feedback? Deixe comentários sobre nosso roteiro público do GitHub e diga-nos o que mais você gostaria de ver nos próximos lançamentos.

Saber mais
Leia as notas de versão do Docker Desktop.
Obtenha a versão mais recente do Docker Desktop.
Tem perguntas? A comunidade Docker está aqui para ajudar.
Novo no Docker? Iniciar.


{{< alerta >}}
**Observação:** esta postagem foi postada originalmente externamente, acesse o [blog do Docker](https://www.docker.com/blog/docker-desktop-4-23/) para ler a postagem completa
{{< /alert >}}