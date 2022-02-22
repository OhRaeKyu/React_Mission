### Challenge Mission

브라우저에서 4000번 포트로 접근했을 때(localhost:4000) 도커 컨테이너 안에서 3000번 포트를 이용해서 실행되고 있는 리액트 앱에 접근 할 수 있게 해주세요. (도커 파일과 그 파일을 이용해서 리액트 앱을 실행하는 명령어를 작성해주세요.)

1. 도커파일 작성

```
FROM node:16-alpine

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY ./ ./

CMD ["npm", "run", "start"]
```

2. 명령어를 이용한 이미지 빌드 및 컨테이너 실행

```
docker build ./
docker run -p 4000:3000 key
ex) docker run -p 4000:3000 d9735
```
