# TODO.md  

## Projeto: Spotify Share Music Generator  

### Etapas de Evolução  

#### 1. Mensageria com Kafka  

- [ ] Configurar Kafka para troca de mensagens entre serviços.  
- [ ] Integrar Schema Registry para validação de mensagens.  
- [ ] Criar tópicos e definir contratos de mensagens.  

#### 2. Transformação em Monorepo  

- [ ] Migrar o projeto Node.js para um monorepo utilizando NestJS.  
- [ ] Criar serviço Spotify no monorepo.  
- [ ] Adicionar um frontend ao monorepo.  
- [x] Configurar ferramentas de build e lint para o monorepo.  

#### 3. Serviço de Vídeo como Lambda AWS  

- [ ] Refatorar o serviço de vídeo para ser executado como uma Lambda AWS.  
- [ ] Configurar deploy automatizado da Lambda.  
- [ ] Testar integração com outros serviços.  

#### 4. Infraestrutura com Terraform  

- [ ] Criar scripts Terraform para provisionar recursos na AWS.  
- [ ] Configurar VPC, subnets e segurança.  
- [ ] Provisionar recursos necessários para Kafka, Lambda e EKS.  

#### 5. Kubernetes com EKS  

- [ ] Configurar cluster Kubernetes no EKS.  
- [ ] Criar deployments e services para os serviços do projeto.  
- [ ] Configurar auto-scaling e monitoramento.  
- [ ] Testar integração entre serviços no cluster.  

### Extras  

- [x] Documentar todas as etapas e decisões tomadas.  
- [ ] Configurar CI/CD para o projeto.  
- [ ] Garantir cobertura de testes em todos os serviços.  

#### 6. CI/CD com GitHub Actions  

- [ ] Configurar workflows no GitHub Actions para build e deploy.  
- [ ] Criar pipeline para deploy automatizado na AWS.  
- [ ] Testar integração do CI/CD com os serviços provisionados.  

#### 7. Lint e Pré-Commit com Husky  

- [x] Configurar Husky para executar lint antes de cada commit.
- [x] Integrar ferramentas de lint como ESLint e Prettier.
- [x] Garantir que todos os commits passem pelas verificações de lint.
