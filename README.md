[![Deploy NestJS to Amazon ECR](https://github.com/Onnion/Spotify-Share-Music-Generator/actions/workflows/deploy-ecr.yaml/badge.svg?branch=feat%2Fnestjs-depoyment)](https://github.com/Onnion/Spotify-Share-Music-Generator/actions/workflows/deploy-ecr.yaml)

<img align="center" src="https://spotiy-share-music-generator.s3.sa-east-1.amazonaws.com/assets/image.psd.jpg">

<h1 align="center">SPOTIFY SHARE MUSIC GERENATOR</h1>
<h2 align="center">Create your own Instagram story with spotify music</h2>
<br/>

<div align="center">
    <img src="https://img.shields.io/static/v1?label=node&message=v14.15.5&color=3c873a&style=for-the-badge&logo=node.js"/>
    <space></space>
    <img src="https://img.shields.io/static/v1?label=rabbitmq&message=3.8&color=f86604&style=for-the-badge&logo=rabbitmq"/>
    <space></space>
    <img src="https://img.shields.io/static/v1?label=python&message=3.8&color=ffd43b&style=for-the-badge&logo=python"/>
    <space></space>
    <img src="https://img.shields.io/static/v1?label=docker&message=20.10.7&color=306998&style=for-the-badge&logo=docker"/>
    <space></space>
    <img src="https://img.shields.io/static/v1?label=docker-compose&message=1.26.0&color=306998&style=for-the-badge&logo=docker"/>
    <space></space>
</div>

<br>

## Pre-Running
`Copy de .env file and set values`
```bash
$ cp .env.default .env
```

`Add execution permition in entrypoint.sh files`
```bash
$ chmod +x modules/**/.docker/*.sh
```

`Get Postman collection`

[Postman collection](https://www.getpostman.com/collections/3d2a09ccfd37219b8a9d)


## Running
```bash
$ docker-compose up -d
```

## How to Use

1. Run the project using above commands
2. Get song url in `share` option in spotify
<img align="left" src="https://spotiy-share-music-generator.s3.sa-east-1.amazonaws.com/assets/Screenshot+from+2021-07-12+19-04-57.jpg">
3. Put the url on the body of request in Postman collection
<img align="left" src="https://spotiy-share-music-generator.s3.sa-east-1.amazonaws.com/assets/Screenshot+from+2021-07-12+19-11-39.jpg">
4. After send request the story is create in folder `modules/video/dist`

## Como rodar o projeto pelo VS Code

### Usando o Debug (launch.json)
- Abra o menu de execução/depuração do VS Code (ícone de play ou `Ctrl+Shift+D`).
- Selecione a configuração **Run package/spotify-nest** e clique em "Iniciar Depuração" para rodar o backend em modo desenvolvimento.

### Usando Tasks (tasks.json)
- Pressione `Ctrl+Shift+B` para abrir o menu de execução de tarefas do VS Code.
- A imagem docker vai ser buildade automáticamente.

Essas opções facilitam rodar e testar o projeto diretamente pelo VS Code, sem precisar digitar comandos no terminal.

## Configurando credenciais AWS (aws configure)

Para que o deploy e integração com recursos AWS funcionem corretamente, configure suas credenciais utilizando o comando abaixo:

```bash
aws configure
```

Você será solicitado a informar:
- AWS Access Key ID
- AWS Secret Access Key
- Default region name (ex: sa-east-1)
- Default output format (ex: json)

Essas credenciais são necessárias para autenticar comandos e automações que utilizam a AWS CLI, como o deploy de imagens Docker no ECR ou execução de scripts Terraform.

