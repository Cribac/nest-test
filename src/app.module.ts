import 'dotenv/config.js'
import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { MongooseModule } from '@nestjs/mongoose'
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'

// MONOGDB_HOST should be equal to name of mongodb service defined in docker-compose
const { MONGODB_HOST, MONGODB_PORT, MONGODB_DATABASE } = process.env
@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb://${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_DATABASE}`,
    ),
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
