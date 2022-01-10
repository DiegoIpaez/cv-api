const { Schema, model } = require("mongoose");

const SocialNetSchema = new Schema({
  url: {
    type: String,
    require: [true, "El url es obligatorio"],
  },
  usuario: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },
  estado: {
    type: Boolean,
    default: true,
    required: true,
  },
});

SocialNetSchema.methods.toJSON = function () {
  const { __v, estado, ...data } = this.toObject();

  return data;
};

module.exports = model("SocialNet", SocialNetSchema);
