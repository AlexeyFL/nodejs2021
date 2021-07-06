
## Запуск docker
1. **npm i**
2. **docker-compose up --build**
3. В новом окне терминала **npm run test:auth**
## Запуск приложения
1. **npm i**
2. **npm run start-nest:dev**
3. В новом окне терминала **npm run test:auth**

## Переключение на fastify
В файле .env **USE_FASTIFY=fastify**

## Тесты
**npm run test:performance**

# Express
|                       |              |                       |                                                                      |
|-----------------------|--------------|-----------------------|----------------------------------------------------------------------|
| Scenario counts:      | 381          | 100%                  |                                                                      |
| Mean response/sec     | 20.7         |                       |                                                                      |
| Response time (msec)  |  min: 2      |median: 3              |  max: 64                                                             |   
| p95:                  |   7          |                       |                                                                      |
| p99:                  | 13.4         |                       |                                                                      |
| Status Codes          | 200:381      |                       |                                                                      |

# Fastify
|                       |              |                       |                                                                      |
|-----------------------|--------------|-----------------------|----------------------------------------------------------------------|
| Scenario counts:      | 381          | 100%                  |                                                                      |
| Mean response/sec     | 20.76        |                       |                                                                      |
| Response time (msec)  |  min: 1      |median: 3              |  max: 69                                                             |   
| p95:                  |   15         |                       |                                                                      |
| p99:                  | 33.4         |                       |                                                                      |
| Status Codes          | 200:381      |                       |                                                                      |