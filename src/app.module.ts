import { AppController } from '@@/app.controller'
import { AppService } from '@@/app.service'
import { PrismaModule } from '@@/prisma/prisma.module'
import { Module } from '@nestjs/common'
import { ThrottlerModule } from '@nestjs/throttler'

@Module({
  imports: [
    ThrottlerModule.forRoot([
      {
        ttl: 10 * 1000,
        limit: 8,
      },
    ]),
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
