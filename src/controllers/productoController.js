
const Producto = require("../models/productoModel");

// Obtener todos los productos
exports.getAllProductos = async (req, res) => {
  try {
    const products = await Producto.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los productos' });
  }
};

// Crear un nuevo producto
exports.createProducto = async (req, res) => {
  try {
    const newProducto = await Producto.create(req.body);
    res.status(201).json(newProducto);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el producto' + error });
  }
};

// Obtener un producto por su ID
exports.getProductoById = async (req, res) => {
  try {
    const product = await Producto.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Productoo no encontrado' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el producto' });
  }
};

// Actualizar un producto por su ID
exports.updateProductoById = async (req, res) => {
  try {
    const updatedProducto = await Producto.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProducto) {
      return res.status(404).json({ error: 'Productoo no encontrado' });
    }
    res.status(200).json(updatedProducto);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el producto' });
  }
};

// Eliminar un producto por su ID
exports.deleteProductoById = async (req, res) => {
  try {
    const deletedProducto = await Producto.findByIdAndDelete(req.params.id);
    if (!deletedProducto) {
      return res.status(404).json({ error: 'Productoo no encontrado' });
    }
    res.status(200).json(deletedProducto);
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el producto' });
  }
};
