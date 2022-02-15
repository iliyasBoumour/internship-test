const mongoose = require("mongoose");
const connectDb = require("../config/db");
const dotenv = require("dotenv");
const users = require("./users");
const categories = require("./categories");
const products = require("./products");
const userModel = require("../models/user.model");
const productModel = require("../models/product.model");
const categoryModel = require("../models/category.model");

dotenv.config();
connectDb();

const storeData = async () => {
  try {
    await userModel.deleteMany();
    await productModel.deleteMany();
    await categoryModel.deleteMany();
    const admin = await userModel.insertMany(users);
    let cat = await categoryModel.insertMany(categories);
    cat = cat.map((c) => c._id);
    products.forEach((p) => {
      p.category = cat[Math.floor(Math.random() * 4)];
      p.user = admin[0]._id;
    });
    await productModel.insertMany(products);
    console.log("sucess !");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
const removeData = async () => {
  try {
    await userModel.deleteMany();
    await productModel.deleteMany();
    await categoryModel.deleteMany();

    console.log("sucess !");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  removeData();
} else {
  storeData();
}
