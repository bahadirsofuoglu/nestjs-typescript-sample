import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoModule } from './todo/todo.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [ConfigModule.forRoot(),MongooseModule.forRoot(process.env.DB_URI), TodoModule,UserModule],
})
export class AppModule {}



