import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Admin extends Document {
  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: false })
  isSuperAdmin: boolean;
}
export const AdminSchema = SchemaFactory.createForClass(Admin);