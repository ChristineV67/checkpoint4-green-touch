import database from "../../../database/client";
import type { Rows } from "../../../database/client";
import type { ResultSetHeader } from "mysql2/promise";

type UserType = {
  nom: string;
  prenom: string;
  email: string;
  password: string;
};

class UserRepository {
  async readEmail(email: string) {
    const [rows] = await database.query<Rows>(
      "select (email) from user where email = ?",
      [email],
    );

    return rows[0];
  }

  async create(user: UserType): Promise<number> {
    const { nom, prenom, email, password } = user;

    const [result] = await database.query(
      "INSERT INTO user (nom, prenom, email, password, role_id) VALUES (?,?,?,?,?)",
      [nom, prenom, email, password, 1],
    );

    const returnValue = result as ResultSetHeader;

    return returnValue.insertId;
  }
}

export default new UserRepository();
