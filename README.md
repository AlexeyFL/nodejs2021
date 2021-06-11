## Build image

```
docker build . --tag node-app  
docker build ./database --tag postgres-app
```

## Run container

```
docker run --name node-server-app -p 4000:4000 -d node-app
```
## Stop container

```
docker stop node-server-app
```
## Build docker compose

```
docker-compose up --build
```
## Stop docker compose

```
docker-compose down
```