import { AppController } from '@@/app.controller'
import { AppService } from '@@/app.service'
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
