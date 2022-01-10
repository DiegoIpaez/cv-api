const { Schema, model } = require("mongoose");

const EducationSchema = new Schema({
  titulo: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  inicio: {
    type: String,
    required: true,
  },
  fin: {
    type: String,
    required: true,
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

EducationSchema.methods.toJSON = function () {
  const { __v, estado, ...data } = this.toObject();

  return data;
};

module.exports = model("Education", EducationSchema);
