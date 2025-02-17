CREATE TABLE role (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  label VARCHAR(100) NOT NULL
);

CREATE TABLE user (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100) NOT NULL,
    prenom VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role_id INT NOT NULL,
    FOREIGN KEY (role_id) REFERENCES role(id)
);

CREATE TABLE plante (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nom VARCHAR(255) NOT NULL,
  nom_scientifique VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  description_courte TEXT NOT NULL,
  exposition VARCHAR(150) NOT NULL,
  description_exposition TEXT NOT NULL,
  arrosage VARCHAR(150) NOT NULL,
  description_arrosage TEXT NOT NULL,
  entretien VARCHAR(150) NOT NULL,
  description_entretien TEXT NOT NULL,
  image_url VARCHAR(255)
);

CREATE TABLE favoris (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    plante_id INT NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES User(id),
    FOREIGN KEY (plante_id) REFERENCES Plante(id)
);