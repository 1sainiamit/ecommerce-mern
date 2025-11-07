import mongoose, { Schema } from "mongoose";

const SessionSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Session = mongoose.model("Session", SessionSchema);
