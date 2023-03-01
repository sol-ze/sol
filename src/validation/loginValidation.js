const Joi = require("joi");

const registerSchema = Joi.object({
  nameInput: Joi.string().min(3).max(255).alphanum().required().trim(),
  emailInput: Joi.string().min(5).max(255).email().required().trim(),
  passwordInput: Joi.string()
    .regex(
      new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+]).{0,}$")
    )
    .min(8)
    .max(255)
    .required()
    .messages({
      "string.pattern.base": "password rules",
    }),
});

const loginSchema = Joi.object({
  emailInput: Joi.string().min(5).max(255).email().required().trim(),
  passwordInput: Joi.string()
    .regex(
      new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+]).{0,}$")
    )
    .min(8)
    .max(255)
    .required()
    .messages({
      "string.pattern.base": "password rules",
    }),
});

const validateRegisterSchema = (userInput) =>
  validate(userInput, registerSchema);

const validateLoginSchema = (userInput) => validate(userInput, loginSchema);

userIdSchema;

module.exports = {
  validateRegisterSchema,
  validateLoginSchema,
};
