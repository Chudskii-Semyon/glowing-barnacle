import 'reflect-metadata'
import { Container } from 'typedi';
import { createConnection, useContainer } from 'typeorm';
import { createExpressServer, useContainer as routingControllersUseContainer } from 'routing-controllers';
import { AuthController } from './controllers/auth.controller';
// import { AppController } from './controllers/app.controller';

useContainer(Container)
routingControllersUseContainer(Container)

createConnection().then(() => {
  const app = createExpressServer({
    controllers: [AuthController]
    // controllers: [AppController]
  })

  app.listen(3000)
})

