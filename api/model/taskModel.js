const mongoose = require("mongoose");

const taskShema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please type a name"],
    },
    completed: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskShema);
module.exports = Task;
