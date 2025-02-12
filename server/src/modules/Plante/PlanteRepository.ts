import type { ResultSetHeader } from "mysql2";
import database from "../../../database/client";
import type { Rows } from "../../../database/client";

type Plante = {
  type: number;
  nom: string;
  nom_latin: string;
  description: string;
  description_courte: string;
  exposition: string;
  arrosage: string;
  entretien: string;
  image_url: string;
};

class PlanteRepository {
  async create(newItem: Plante): Promise<number> {
    const {
      nom,
      nom_latin,
      description,
      description_courte,
      exposition,
      arrosage,
      entretien,
      image_url,
    } = newItem;

    const [result] = await database.query<ResultSetHeader>(
      "INSERT INTO plante (nom,nom_latin,description,description_courte,exposition,arrosage,entretien,image_url) VALUES (?,?,?,?,?,?,?,?)",
      [
        nom,
        nom_latin,
        description,
        description_courte,
        exposition,
        arrosage,
        entretien,
        image_url,
      ],
    );
    return result.insertId;
  }

  async readAll() {
    const [rows] = await database.query<Rows>("SELECT * FROM plante");

    return rows as Plante[];
  }
}

export default new PlanteRepository();
