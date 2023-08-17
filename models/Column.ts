import mongoose from 'mongoose';

const { Schema } = mongoose;

const columnSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    columns: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.models.Column || mongoose.model('Column', columnSchema);
