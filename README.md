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
</div>
<br>

---

## Requirements

---

- `docker`
- `docker-compose`
- `awslocal` ( [Awslocal Instalation](https://github.com/localstack/awscli-local#installation) )
- `collection` ( [Postman collection](https://www.getpostman.com/collections/3d2a09ccfd37219b8a9d) )

---

## Running

---

`Copy de .env file and set values`

```bash
cp .env.default .env
```

`Execution permition in executables files`

```bash
chmod +x modules/**/.docker/*.sh
chmod +x configs/*.sh
```

`Run the docker container`

```bash
docker-compose up
```

`Run the configs`

```bash
./configs/init.sh
```

---

## Todos

---

- [ ] Aws infra:
  - [ ] Cloudformation
    - [x] S3 Bucket
    - [x] SQS/SNS
    - [ ] Queue DLQ
  - [x] Localstack
- [ ] Refactoring
  - [ ] Remove RabbitMQ
  - [ ] Upload videos to S3 local bucket
  - [ ] Subscribe VideoCreateQueue
  - [ ] Publish into VideoCreateTopic
