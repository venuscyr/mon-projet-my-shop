
const Cart = require('../models/Cart');
const Product = require('../models/Product');


exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.findAll({ include: Product });
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération du panier' });
  }
};


exports.addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  try {
   
    const product = await Product.findByPk(productId);
    if (!product) return res.status(404).json({ error: 'Produit non trouvé' });

    
    const cartItem = await Cart.create({ productId, quantity });
    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de l\'ajout au panier' });
  }
};


exports.removeFromCart = async (req, res) => {
  const { productId } = req.body;
  try {
    const cartItem = await Cart.findOne({ where: { productId } });
    if (!cartItem) return res.status(404).json({ error: 'Produit non trouvé dans le panier' });
    await cartItem.destroy();
    res.json({ message: 'Produit retiré du panier' });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la suppression du produit du panier' });
  }
};


exports.clearCart = async (req, res) => {
  try {
    await Cart.destroy({ where: {} });
    res.json({ message: 'Panier vidé avec succès' });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors du vidage du panier' });
  }
};