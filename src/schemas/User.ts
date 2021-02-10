import mongoose, { Schema, Document } from "mongoose";
import isEmail from "validator";
export interface IUser extends Document {
  email: string;
  fullname: string;
  password: string;
  confirmed: boolean;
  confirm_hash: string;
  avatar: string;
  last_active: string;
}
const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: "Email address is required",
      unique: true,
      // validate: [isEmail, "Invalid email"],
    },
    fullname: { type: String, required: "Fullname adress is required" },
    password: { type: String, required: "Password adress is required" },
    confirmed: { type: Boolean, default: false },
    confirm_hash: { type: String, default: null },
    avatar: { type: String, default: null },
    last_active: { type: String, default: null },
  },
  { timestamps: true }
);

const UserModel = mongoose.model<IUser>("User", UserSchema);

export default UserModel;
