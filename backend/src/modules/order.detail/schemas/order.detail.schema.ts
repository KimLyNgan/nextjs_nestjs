// import { MenuItemOption } from '@/modules/menu.item.options/schemas/menu.item.option.schema';
// import { MenuItem } from '@/modules/menu.items/schemas/menu.item.schema';
// import { Menu } from '@/modules/menus/schemas/menu.schema';
// import { Order } from '@/modules/orders/schemas/order.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type OrderDetailDocument = HydratedDocument<OrderDetail>;

@Schema({ timestamps: true })
export class OrderDetail {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Order' })
  order: mongoose.Schema.Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Menu' })
  menu: mongoose.Schema.Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' })
  menuItem: mongoose.Schema.Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'MenuItemOption' })
  menuItemOption: mongoose.Schema.Types.ObjectId;
}

export const OrderDetailSchema = SchemaFactory.createForClass(OrderDetail);
