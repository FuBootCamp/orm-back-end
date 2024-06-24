// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreingKey: 'category_id'
});

// Categories have many Products
 Category.hasMany(Product, {
   foreingKey: 'product_id',
   onDelete: 'CASCADE'
 });

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique:false
  },
  as:'tagsofaProduct'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique:false
  },
  as:'sameTagProducts'
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

