const connectDB = require("../database/product_database");
let sql = "",id = "";
const data = (product) => {
  return {
    name: product.name,
    price: product.price,
    quantity: product.quantity,
    color: product.color,
  };
};
const ProductController = {
  index: (req, res) => {
    sql = "SELECT * from products ORDER by id DESC";
    connectDB.query(sql, (error, data) => {
      if (error) throw error;
      res.status(200).json({
        record: data,
        message: "Get product list from database",
      });
    });
  },
  create: (req, res) => {
    sql = "INSERT into products SET ?";
    connectDB.query(sql, data(req.body), (error) => {
      if (error) throw error;
      res.status(200).json("Post new product in database");
    });
  },
  update: (req, res) => {
    sql = "UPDATE products SET ? WHERE id=?";
    id = req.params.id;
    connectDB.query(sql, [data(req.body), id], (error) => {
      if (error) throw error;
      res.status(200).json("Update product from database");
    });
  },
  deletes: (req, res) => {
    sql = "DELETE from products WHERE id=?";
    id = req.params.id;
    connectDB.query(sql, id, (error) => {
      if (error) throw error;
      res.status(200).json("Delete product from database");
    });
  },
};
module.exports = ProductController;
