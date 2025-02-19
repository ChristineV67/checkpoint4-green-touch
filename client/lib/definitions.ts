export type PlanteType = {
  id: number;
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

export type UserType = {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  password: string;
  confirmpassword: string;
};
