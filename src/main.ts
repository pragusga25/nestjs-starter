import { AppModule } from '@@/app.module'
import fastifyCsrf from '@fastify/csrf-protection'
import helmet from '@fastify/helmet'
import { NestFactory } from '@nestjs/core'
import {
  FastifyAdapter,
  type NestFastifyApplication,
} from '@nestjs/platform-fastify'

declare const module: {
  hot: {
    accept: () => void
    dispose: (cb: () => void) => void
  }
}

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({
      logger: true,
    }),
  )
  await app.register(fastifyCsrf)
  await app.register(helmet)
  await app.listen(3000)

  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => app.close())
  }
}
bootstrap()
