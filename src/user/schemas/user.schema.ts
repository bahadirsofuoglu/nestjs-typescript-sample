import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  firstname: string;

  @Prop({ required: true })
  lastname?: string;

  @Prop()
  email: string;

  @Prop()
  address:string;
  
  @Prop()
  completedAt?: Date;

  @Prop({ required: true })
  createdAt: Date;

  @Prop()
  deletedAt?: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);