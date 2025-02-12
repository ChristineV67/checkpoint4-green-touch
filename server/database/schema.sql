CREATE TABLE Plante (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(255) NOT NULL,
    nom_scientifique VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    description_courte TEXT NOT NULL,
    exposition VARCHAR(150) NOT NULL,
    description_exposition TEXT NOT NULl,
    arrosage VARCHAR(150) NOT NULL,
    description_arrosage TEXT NOT NULl,
    entretien VARCHAR(150) NOT NULL,
    description_entretien TEXT NOT NULl,
    image_url VARCHAR(255)
);

CREATE TABLE User (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
   nom VARCHAR(100) NOT NULL,
   prenom VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE Favoris (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  plante_id INT NOT NULL,
  user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES User(id),
    FOREIGN KEY (plante_id) REFERENCES Plante(id)
);

