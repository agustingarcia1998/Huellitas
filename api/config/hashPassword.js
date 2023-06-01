import bcrypt from "bcrypt";

const saltRounds = 10;

export const createHash = (password) => {
  const salt = bcrypt.genSaltSync(saltRounds);
  return bcrypt.hashSync(password, salt);
};

export const isValid = (password, userpass) => {
  return bcrypt.compareSync(password, userpass);
};