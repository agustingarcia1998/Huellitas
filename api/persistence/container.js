import { createHash } from "../config/hashPassword";

class AuthContainer {
  constructor(model) {
    this.model = model;
  }

  async createUser(
    user,
    pass,
    mail,
  ) {
    try {
      const newUser = {
        user: user,
        pass: createHash(pass),
      };
      const mailExist = await this.model.findOne({
        where: {
          mail: mail,
        },
      });
      const userExist = await this.model.findOne({
        where: {
          user: user,
        },
      });

      if (mailExist || userExist) {
        throw new Error("The user already exists");
      }
      const created = await this.model.create(newUser);
      const newUserCompany = {
        user_fk: created.dataValues.id_user,
        company_type: company_type,
        company_fk: id_company,
      };
      await User_company.create(newUserCompany);
      return newUser;
    } catch (error) {
      return error;
    }
  }
}