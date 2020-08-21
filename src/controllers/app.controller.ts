import { ChildControllers, ClassOptions, Controller } from '@overnightjs/core';
import { AuthController } from './auth.controller'
import { Container, Service } from 'typedi';
import { APP_CONTROLLER } from '@constants/controllers.constant';

// @Service(APP_CONTROLLER)
// @Controller('/api')
// @ClassOptions({ mergeParams: true })
// @ChildControllers([
//   Container.get(AuthController),
// ])
// export class AppController {}
