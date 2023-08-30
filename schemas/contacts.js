import Joi from "joi";

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});

console.log(addSchema);
export default addSchema;