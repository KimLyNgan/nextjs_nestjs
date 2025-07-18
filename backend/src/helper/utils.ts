import * as bcrypt from 'bcrypt';

const saltRound = 10;

export const hashPasswordHelper = async (plainPassword: string) => {
  try {
    return await bcrypt.hash(plainPassword, saltRound);
  } catch (err) {
    console.log(err);
  }
};
