import database from "../../../database/client";
import { ResultSetHeader } from "mysql2";

type Plante = {
  nom: string;
  nom_latin: string;
  description: string;
  description_courte: string;
  exposition: string;
  arrosage: string;
  entretien: string;
  image_url: string;
};

class CatalogRepository {
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
}

export default new CatalogRepository();
