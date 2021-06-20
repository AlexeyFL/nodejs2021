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
## Downloading

```
git clone {repository URL}
```

## Installing NPM modules

```
npm install
```
## Running application with typescript

```
npm run dev 
```
## Running application

```
npm build
npm start
```

After starting the app on port (4000 as default) you can open
in your browser OpenAPI documentation by typing http://localhost:4000/doc/.
For more information about OpenAPI/Swagger please visit https://swagger.io/.

## Testing

After application running open new terminal and enter:

To run all tests without authorization

```
npm test
```

To run only one of all test suites (users, boards or tasks)

```
npm test <suite name>
```

To run all test with authorization

```
npm run test:auth
```

To run only specific test suite with authorization (users, boards or tasks)

```
npm run test:auth <suite name>
```

## Development

If you're using VSCode, you can get a better developer experience from integration with [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extensions.

### Auto-fix and format

```
npm run lint
```