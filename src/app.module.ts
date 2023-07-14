import 'dotenv/config.js'
import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { MongooseModule } from '@nestjs/mongoose'

const { MONGODB_HOST, MONGODB_PORT, MONGODB_DATABASE } = process.env
@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb://${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_DATABASE}`,
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
