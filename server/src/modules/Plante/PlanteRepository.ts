import type { ResultSetHeader } from "mysql2";
import database from "../../../database/client";
import type { Rows } from "../../../database/client";

type Plante = {
  type: number;
  nom: string;
  nom_scientifique: string;
  description: string;
  description_courte: string;
  exposition: string;
  description_exposition: string;
  arrosage: string;
  description_arrosage: string;
  entretien: string;
  description_entretien: string;
  image_url: string;
};

class PlanteRepository {
  async create(newItem: Plante): Promise<number> {
    const {
      nom,
      nom_scientifique,
      description,
      description_courte,
      exposition,
      description_exposition,
      arrosage,
      description_arrosage,
      entretien,
      description_entretien,
      image_url,
    } = newItem;

    const [result] = await database.query<ResultSetHeader>(
      "INSERT INTO plante (nom,nom_scientifique,description,description_courte,exposition,description_exposition,arrosage,description_arrosage,entretien,description_entretien,image_url) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
      [
        nom,
        nom_scientifique,
        description,
        description_courte,
        exposition,
        description_exposition,
        arrosage,
        description_arrosage,
        entretien,
        description_entretien,
        image_url,
      ],
    );
    return result.insertId;
  }

  async readAll() {
    const [rows] = await database.query<Rows>("SELECT * FROM plante");

    return rows as Plante[];
  }

  async read(id: number) {
    const [rows] = await database.query<Rows>(
      "select * from plante where id = ?",
      [id],
    );
    return rows[0] as Plante;
  }

  async readEmail(email: string) {
    const [rows] = await database.query<Rows>(
      "select (email) from user where email = ?",
      [email],
    );
    return rows[0] as Plante;
  }
}

export default new PlanteRepository();
