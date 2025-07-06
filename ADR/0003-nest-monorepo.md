# ADR 0003 – Implementação de Projeto NestJS Monorepo

**Data:** 2025-07-05  

## Contexto

Eu precisava de uma arquitetura escalável e organizada para suportar múltiplos serviços no repositório Spotify Share Music Generator. O crescimento do projeto e a necessidade de integração entre diferentes domínios (como Spotify, vídeo, etc.) motivaram a adoção de um monorepo. O objetivo era facilitar o compartilhamento de código, padronizar ferramentas e centralizar a gestão de dependências e configurações.

## Decisão

Implementei um monorepo utilizando o framework NestJS, criando o pacote `packages/spotify-nest` para centralizar a API principal e os módulos de domínio. Estruturei o projeto para permitir a inclusão de múltiplos serviços, bibliotecas compartilhadas e integrações, aproveitando o CLI e as melhores práticas do NestJS. Adaptei a configuração do TypeScript, ESLint, Prettier e scripts de build/teste para funcionar de forma integrada no monorepo.

## Impacto

Com o monorepo NestJS, ganhei maior produtividade, facilidade de manutenção e padronização entre os serviços. O compartilhamento de código ficou mais simples, a integração entre domínios mais eficiente e a automação de testes e builds mais robusta. O projeto está pronto para crescer de forma modular, com governança centralizada e melhor experiência de desenvolvimento.
