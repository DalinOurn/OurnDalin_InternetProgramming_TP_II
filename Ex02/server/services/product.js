const { products } = require("../models/product")
const create = async(params, req, res) => {
    const { name, imageURL, shop, item } = params;

    try {
        const newProduct = {
            name: name,
            imageURL: imageURL,
            shop: shop,
            item: item
        }
        const createProduct = await products.create(newProduct);
        return res.status(200).json({ status: "true", message: "Product create successfull", data: createProduct });
    } catch (error) {
        return res.status(400).json({ status: "false", message: error });
    }
}
const findAllProduct = async(req, res) => {
    try {
        const findProduct = await products.find({});
        return res.status(200).json({ status: "true", message: "All products data", data: findProduct });
    } catch (error) {
        return res.status(400).json({ status: "false", message: error });
    }
}
const productInEachItem = async(params, req, res) => {
    const { itemId } = params;
    try {
        const productByItem = await products.find({ item: itemId });
        if (productByItem == "") {
            throw "No data"
        } else {
            return res.status(200).json({ status: "true", message: "Products", data: productByItem });
        }
    } catch (error) {
        return res.status(400).json({ status: "false", message: error });
    }
}

const productById = async(params, req, res) => {
    const { _id } = params;
    try {
        const productById = await products.findById({ _id });
        if (productById) {
            return res.status(200).json({ status: "true", message: "Product", data: productById });
        } else {
            throw "Product's name not found"
        }
    } catch (error) {
        return res.status(400).json({ status: "false", message: error });
    }
}

const removeById = async(params, req, res) => {
    const { _id } = params;
    try {
        await products.findByIdAndDelete({ _id: _id });
        return res.status(200).json({ status: "true", message: "Product delete successful" });
    } catch (error) {
        return res.status(400).json({ status: "false", message: error });
    }
}

const update = async(params, req, res) => {
    const { _id, name, imageURL, shop, item } = params;
    try {
        const productById = await products.findByIdAndUpdate(_id, {
            name: name,
            imageURL: imageURL,
            shop: shop,
            item: item
        });
        if (productById) {
            return res.status(200).json({ status: "true", message: "Product update successful", data: productById });
        } else {
            throw "Product's name not found"
        }
    } catch (error) {
        return res.status(400).json({ status: "false", message: error });
    }
}

module.exports = {
    create,
    findAllProduct,
    productInEachItem,
    productById,
    removeById,
    update
}