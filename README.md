
## Запуск приложения
1. **npm i**
2. **npm run start-nest:dev**
3. В новом окне терминала **npm run test:auth**

## Запуск docker
1. **npm i**
2. **docker-compose up --build**
3. В новом окне терминала **npm run test:auth**
## Переключение на fastify
В файле .env **USE_FASTIFY=fastify**

## Тесты
**npm run test:performance**

# Express
|                       |                  |                       |                                                                      |
|-----------------------|------------------|-----------------------|----------------------------------------------------------------------|
| Scenario counts:      | 380              | 100%                  |                                                                      |
| Mean response/sec     | 130.2            |                       |                                                                      |
| Scenarios launched:   |  380             |                       |                                                                      |   
| Scenarios completed:  |  380             |                       |                                                                      |   
| Requests completed:   |  1900            |                       |                                                                      |   
| Response time (msec)  |  min: 2          |median: 529            |  max: 2108                                                           |   
| p95:                  |   1395           |                       |                                                                      |
| p99:                  | 1891.5           |                       |                                                                      |
| Status Codes          |200:1520, 201:380 |                       |                                                                      |

# Fastify
|                       |                  |                       |                                                                      |
|-----------------------|------------------|-----------------------|----------------------------------------------------------------------|
| Scenario counts:      | 380              | 100%                  |                                                                      |
| Mean response/sec     | 103.53           |                       |                                                                      |
| Scenarios launched:   |  380             |                       |                                                                      |   
| Scenarios completed:  |  380             |                       |                                                                      |   
| Requests completed:   |  1900            |                       |                                                                      |   
| Response time (msec)  |  min: 1          |median: 31             |  max: 828                                                            |    
| p95:                  |   440            |                       |                                                                      |
| p99:                  | 639.4            |                       |                                                                      |
| Status Codes          |200:1520, 201:380 |                       |                                                                      |