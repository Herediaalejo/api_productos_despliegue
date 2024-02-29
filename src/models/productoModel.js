const mongoose = require("mongoose");

require("dotenv").config();

mongoose.connect(process.env.MONGO_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})
.then(() => {
  console.log("Conexión a MongoDB establecida correctamente");
})
.catch((error) => {
  console.error("Error al conectar a MongoDB:", error);
});

const ProductoSchema = new mongoose.Schema(
  {
    nombre: String,
    precio: String,
  },
  { collection: "productos" }
);

const Producto = mongoose.model("Producto", ProductoSchema);

module.exports = Producto;
