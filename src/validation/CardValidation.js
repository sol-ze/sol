import Joi from "joi";

import validate from "./validate";

const idSchema = Joi.object({
  id: Joi.string().hex().length(24).trim().required(),
});

const courseSchema = Joi.object({
  couseName: Joi.string()
    .min(3)
    .max(30)
    .required()
    .trim()
    .messages({ "string.base": "course name Mssing / Invalid filed" }),
  category: Joi.string()
    .min(3)
    .max(30)
    .trim()
    .messages({ "string.base": "category Mssing / Invalid filed" }),
  lecturer: Joi.string()
    .min(3)
    .max(30)
    .trim()
    .messages({ "string.base": "lecturer name Mssing / Invalid filed" }),
  description: Joi.string()
    .min(3)
    .max(300)
    .trim()
    .messages({ "string.base": "description Mssing / Invalid filed" }),
});

const validateIdSchema = (userInputs) => validate(idSchema, userInputs);

const validateEditCourseSchema = (userInputs) =>
  validate(courseSchema, userInputs);

export { validateIdSchema, validateEditCourseSchema };
