import { Schema, model } from "mongoose";
import Joi from "joi";

import handleMongooseError from "../helpers/handleMongooseError.js";

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const subscriptionsList = ["starter", "pro", "business"];

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
      match: emailRegexp,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: String,
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

export const registerSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": `"name" must be exist`,
  }),
  email: Joi.string().pattern(emailRegexp).required().messages({
    "any.required": `"email" must be exist`,
  }),
  password: Joi.string().min(6).required().messages({
    "any.required": `"password" must be exist`,
  }),
  subscription: Joi.string()
    .valid(...subscriptionsList)
    .required()
    .messages({
      "any.required": `"subscription" must be exist`,
    }),
});

export const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required().messages({
    "any.required": `"email" must be exist`,
  }),
  password: Joi.string().min(6).required().messages({
    "any.required": `"password" must be exist`,
  }),
});

export const User = model("user", userSchema);
