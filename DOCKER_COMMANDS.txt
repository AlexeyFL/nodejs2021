docker build . --tag node-app (build image with tag)
docker build ./database --tag postgres-app (build image with tag)

docker scan node-app

docker ps - running containers

docker run --name node-server-app -p 4000:4000 -d node-app (run image with name & tag on port 4000:4000 without console display(-d))


docker stop node-server-app -t 0 (stop image by name)
docker exec -it node-server-app bash -> (ls)

docker run --name postgres-db -e POSTGRES_PASSWORD=docker -p 5433:5433 -d postgres (run database image)


docker-compose up -d --build (build & run compose docker(multiple container))

docker-compose down -v (stop docker compose)