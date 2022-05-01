const { category } = require("../models/category")

const create = async(params, req, res) => {
    const { name, description, imageURL } = params;
    try {
        const newCategory = {
            name: name,
            description: description,
            imageURL: imageURL
        }
        const createCategory = await category.create(newCategory);
        //write category to DB
        return res.status(200).json({ status: "true", message: "Category create successfull", data: createCategory });
    } catch (error) {
        return res.status(400).json({ status: "false", message: error });
    }
}
const findAllCategory = async(req, res) => {
    try {
        const findCategory = await category.find({});
        return res.status(200).json({ status: "true", message: "All categories data", data: findCategory });
    } catch (error) {
        return res.status(400).json({ status: "false", message: error });
    }
}
const findById = async(params, req, res) => {
    const { id } = params;
    try {
        const findById = await category.findOne({
            id
        });
        if (!findById) {
            throw "Category not found";
        } else {
            return res.status(200).json({ status: "true", message: "Category found", data: findById });
        }
    } catch (error) {
        return res.status(400).json({ status: "false", message: error });
    }
}
const update = async(params, req, res) => {
    const { _id, name, description, imageURL } = params;
    try {
        await category.findByIdAndUpdate(_id, {
            name: name,
            description: description,
            imageURL: imageURL
        });
        return res.status(200).json({ status: "true", message: "Update category succesfully" });
    } catch (error) {
        return res.status(400).json({ status: "false", error: error })
    }
}

const remove = async(params, req, res) => {
    const { name } = params;

    try {
        const findById = await category.findOne({
            name
        });
        if (!findById) {
            throw "Category not found";
        } else {
            await category.deleteOne({ name: name });
            return res.status(200).json({ status: "true", message: "Delete category succesfully" });
        }
    } catch (error) {
        return res.status(400).json({ status: "false", error: error })
    }
}

module.exports = {
    create,
    findAllCategory,
    findById,
    update,
    remove
}