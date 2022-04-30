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


---
## Todos
---
- [ ] Aws infra:
    - [ ] Cloudformation
        - [ ] S3 Bucket
        - [ ] SQS/SNS 
    - [ ] Localstack
- [ ] Refactoring
    - [ ] Remove RabbitMQ
    - [ ] Upload videos to S3 local bucket
    - [ ] Pub/Sub messages to local SQS/SNS