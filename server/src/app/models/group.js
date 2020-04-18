const mongoose = require("../../database");

const GroupSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  cat_inicio: {
    type: String,
    required: true,
  },
  cat_fim: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
});

const Group = mongoose.model("grupos", GroupSchema);

module.exports = Group;
