// validation data for the api 
const Joi = require('joi');

// validation for the user
const userValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        email: Joi.string().min(3).required(),
        password: Joi.string().min(3).required()
    });
    return schema.validate(data);
};

// validation for the product
const productValidation = (data) => {
    const schema = Joi.object({
        title: Joi.string().min(3).required(),
        description: Joi.string().min(3).required(),
        price: Joi.number().required(),
        category: Joi.string().required(),
        image: Joi.string().required()
    });
    return schema.validate(data);
};

module.exports = {
    userValidation,
    productValidation
};
