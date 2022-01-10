const { Schema, model } = require("mongoose");

const SkillSchema = new Schema({
  habilidad: {
    type: String,
    require: [true, "El nombre es obligatorio"],
  },
  exp: {
    type: Number,
    required: true,
  },
  img: {
    type: String,
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

SkillSchema.methods.toJSON = function () {
  const { __v, estado, ...data } = this.toObject();

  return data;
};

module.exports = model("Skill", SkillSchema);
