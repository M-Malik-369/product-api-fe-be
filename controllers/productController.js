const Product = require('../models/product')

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().exec()
    res.json(products)
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

exports.searchProducts = async (req, res) => {
  const searchTerm = req.query.q

  if (!searchTerm) {
    return res.status(400).json({ error: 'Search term is required' })
  }

  try {
    const products = await Product.find({
      name: { $regex: searchTerm, $options: 'i' },
    }).exec()

    res.json(products)
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
