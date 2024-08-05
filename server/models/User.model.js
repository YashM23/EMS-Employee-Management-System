import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String },
    fathername: { type: String },
    email: { type: String },
    phone: { type: String },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("USER", UserSchema);
export default UserModel;
