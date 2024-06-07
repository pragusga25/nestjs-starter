import { AppController } from '@@/app.controller'
import { AppService } from '@@/app.service'
import { Module } from '@nestjs/common'
import { ThrottlerModule } from '@nestjs/throttler'
import { PrismaModule } from '@@/prisma/prisma.module'

@Module({
  imports: [
    ThrottlerModule.forRoot([
      {
        ttl: 10 * 1000,
        limit: 8,
      },
    ]),
    PrismaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
