---
title: "30 Dias de Vibe Coding - Dia 21 - ChatRooms"
description: "Uma app de salas de chat anónimas em tempo real com Firebase, reações, partilha de ficheiros e indicadores de presença."
summary: "Uma app de salas de chat anónimas em tempo real com Firebase, reações, partilha de ficheiros e indicadores de presença."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-21", "react", "nextjs", "typescript", "firebase", "realtime"]
series: ["30 Days of Vibe Coding"]
series_order: 21
seriesOpened: false
date: 2026-04-26
draft: false
#type: "hidden"
---

Dia 21. Queria construir algo que parecesse vivo. Algo onde se conseguisse ver outras pessoas a fazer coisas em tempo real. Por isso, hoje são salas de chat anónimas.

## O Prompt

> "Constrói uma app de salas de chat em tempo real. Autenticação anónima com nomes personalizados, criação de salas, mensagens ao vivo, reações, partilha de ficheiros, indicadores de escrita e presença online."

{{< alert icon="fire">}}
Experimenta tu mesmo [aqui](https://vibe30-day21-chatrooms.vercel.app)
{{< /alert >}}

## Como Foi Construído

Este passou por 7 tarefas do [Watchfire](https://watchfire.io), e a ordem fez bastante sentido para uma app em tempo real como esta:

1. **Firebase Realtime Database.** A base. Configurar autenticação anónima, regras da base de dados e o modelo de dados para salas, mensagens e utilizadores. Isto é a canalização de que tudo o resto depende.
2. **Criação de salas.** A capacidade de criar novas salas e navegar pelas existentes. Uma barra lateral com nomes de salas, contagem de participantes e pré-visualizações da última mensagem.
3. **Mensagens em tempo real.** A funcionalidade principal. As mensagens aparecem instantaneamente para todos na sala. Os listeners do Firebase tratam da sincronização, por isso não há polling, nem botão de atualizar. Escreves, envias, toda a gente vê.
4. **Reações.** Toca numa mensagem para reagir. Uma funcionalidade pequena, mas faz o chat parecer mais interativo do que apenas paredes de texto.
5. **Partilha de ficheiros.** Faz upload e partilha ficheiros dentro de uma sala de chat. Mais uma camada de utilidade para além de mensagens de texto simples.
6. **Presença e indicadores de escrita.** Vê quem está online, vê quem está a escrever. São estes detalhes que fazem uma app de chat parecer uma app de chat a sério em vez de um fórum de mensagens.
7. **Polimento mobile.** Ajustes de layout responsivo, alvos de toque, garantir que toda a experiência funciona bem num ecrã de telemóvel.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## O Que Obtive

![Ecrã de boas-vindas](images/screenshot-01.png)

**Onboarding simples como tudo.** Chegas à app, escolhes um nome e já estás dentro. Sem email, sem password, sem fluxo de OAuth. O Firebase Anonymous Auth trata da identidade nos bastidores. Escreves um nome e carregas em "Let's go."

![Lista de salas e estado de boas-vindas](images/screenshot-03.png)

**Um browser de salas limpo.** A barra lateral esquerda mostra todas as salas disponíveis com contagem de participantes. Há um botão "Create Room" no topo e uma barra de pesquisa para filtrar salas. O estado predefinido mostra uma mensagem de boas-vindas a pedir para selecionar uma sala ou criar uma nova.

![Sala de chat com mensagens](images/screenshot-04.png)

**Mensagens em tempo real que simplesmente funcionam.** As mensagens aparecem instantaneamente. Cada mensagem mostra o nome do remetente com um avatar colorido, um timestamp e o conteúdo da mensagem. A parte inferior do ecrã mostra quem está atualmente na sala e um campo de mensagem com botão de enviar. A contagem de utilizadores online aparece no canto superior direito.

![Conversa ativa](images/screenshot-05.png)

**Indicadores de escrita e presença.** Consegues ver quem está online e quem está ativamente a escrever. Estes pequenos toques são o que separa uma app de chat de uma secção de comentários. A coisa toda parece responsiva e viva.

**O tema escuro fica ótimo.** O fundo azul-escuro com acentos roxos dá-lhe um aspeto de app de chat moderna. Não parece um projeto de escola. A tipografia é limpa, o espaçamento está certo e a codificação por cores para diferentes utilizadores torna as conversas fáceis de seguir.

## Os Bug Reports

Apps de tempo real com Firebase tendem a ter uma categoria de bugs que só aparecem com múltiplos utilizadores ou na reconexão. Para este projeto, as tarefas do Watchfire geriram a progressão de forma suficientemente limpa para que não tenha encontrado nenhum problema grave. O sistema de presença e os indicadores de escrita funcionaram logo no primeiro deploy, o que honestamente me surpreendeu. Essas funcionalidades normalmente precisam de algumas rondas de debugging em torno de edge cases como trocar de separador e quedas de rede.

## Os Números

- **7 tarefas Watchfire** desde configuração da base de dados até polimento mobile
- **Firebase Realtime Database** para sincronização de mensagens com latência zero
- **Autenticação anónima** para onboarding sem fricção
- **Reações, partilha de ficheiros, indicadores de escrita, presença** tudo adicionado incrementalmente

## Experimenta

{{< github repo="nunocoracao/Vibe30-day21-chatrooms" showThumbnail=true >}}

**[Abrir ChatRooms](https://vibe30-day21-chatrooms.vercel.app)**

Escolhe um nome e começa a conversar. Cria uma sala ou junta-te a uma existente.

## Veredito do Dia 21

Tempo real é difícil. Ou pelo menos, costumava ser. Configurar conexões WebSocket, gerir estado de conexão, lidar com reconexões, sincronizar dados entre clientes, lidar com condições de corrida. Isso é muita infraestrutura antes sequer de chegar às funcionalidades de chat propriamente ditas.

O Firebase abstrai a maior parte disso, e a IA sabia exatamente como o usar. A progressão de "a base de dados existe" para "as pessoas estão a conversar com reações e indicadores de escrita" aconteceu ao longo de 7 tarefas sem eu ter de pensar em gestão de conexões de todo.

O que acho interessante neste projeto é que a autenticação anónima foi a decisão certa. Para uma app de chat casual, obrigar as pessoas a criar contas é um assassino de conversão. Escolhes um nome e vais. O Firebase trata da identidade, o utilizador nunca tem de pensar nisso. É uma decisão de produto que a IA tomou corretamente sem eu a especificar.

Vinte e um dias feitos. Estamos na reta final e os projetos continuam a ficar cada vez mais interativos.

---

*Este é o dia 21 de [30 Dias de Vibe Coding](/series/30-days-of-vibe-coding/). Acompanha enquanto lanço 30 projetos em 30 dias usando programação assistida por IA.*
