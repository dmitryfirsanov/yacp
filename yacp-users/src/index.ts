import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import logixlysia from 'logixlysia'

const app = new Elysia();

app.use(
  swagger({
    path: '/docs',
    documentation: {
      info: {
        title: 'Users API microservice',
        version: '1.0.0',
      }
    }
  })
)

app.use(
  logixlysia({
    config: {
      showStartupMessage: true,
      startupMessageFormat: 'simple',
      timestamp: {
        translateTime: 'dd-mm-yyyy HH:MM:ss'
      },
      ip: true,
      logFilePath: './logs/example.log',
    }
  })
)

app.listen(3000);