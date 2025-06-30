# ADR 0002 – Configuração de Lint e Pré-Commit com Husky

**Data:** 2025-06-29  

## Contexto

Eu precisava de uma ferramenta para garantir a qualidade do código e padronizar meus commits, evitando problemas no fluxo automatizado do release-please. Como o projeto é um monorepo com pacotes Node.js e Python, preciso validar ambos os ecossistemas antes de cada commit.

## Decisão

Adotei o Husky para gerenciar hooks de pré-commit. O hook executa o ESLint no pacote Node.js (`packages/spotify`) e o Flake8 no pacote Python (`packages/video`). Se algum dos linters falhar, o commit é bloqueado. Criei scripts auxiliares para facilitar a execução dos linters. Dessa forma, garanto que apenas código validado seja versionado, mantendo a integridade do repositório e facilitando o trabalho do release-please.

## Impacto

Reforço a qualidade do código em todos os pacotes do monorepo, reduzindo erros e inconsistências. O fluxo de releases automatizadas permanece confiável, pois apenas código padronizado e validado é liberado. Recebo feedback imediato sobre problemas de lint, promovendo boas práticas e padronização.
