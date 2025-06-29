# ADR 0001 – Configuração de Release Automatizado com Release Please (Monorepo Python + Node.js)

**Data:** 29/06/2025  

## Contexto

O projeto se tourou um monorepo com múltiplos pacotes (`packages/video` em Python e `packages/spotify` em Node.js). Era necessário implementar versionamento automatizado, changelogs e criação de releases para cada pacote de forma independente, sem duplicar processos.

## Decisão

Foi adotado o `release-please` no modo `manifest`, que permite gerenciar releases separadas para cada pacote dentro do monorepo. Criei o arquivo `.release-please-manifest.json` para mapear cada pacote ao seu tipo (`python` ou `node`) e configurei um workflow GitHub Actions que, a cada push na branch `main`, gera PRs de release para os pacotes alterados, atualiza versões e changelogs, e cria tags no GitHub.

## Impacto

Com essa decisão, as releases passam a ser automáticas e isoladas por pacote, facilitando o controle de versões e changelogs. A manutenção do monorepo fica mais organizada e menos sujeita a erros manuais.
