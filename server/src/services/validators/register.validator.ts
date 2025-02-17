import { z } from "zod";

const schema = z.object({
  nom: z
    .string({
      invalid_type_error: "Le nom doit être une chaîne de caractères",
    })
    .min(3, {
      message: "Le nom doit contenir au minimum 3 caractères.",
    })
    .max(100, {
      message: "Le nom doit contenir au maximum 100 caractères.",
    }),

  prenom: z
    .string({
      invalid_type_error: "Le prénom doit être une chaîne de caractères",
    })
    .min(3, {
      message: "le prénom doit contenir au minimum 3 caractères.",
    })
    .max(100, {
      message: "Le prénom doit contenir au maximum 100 caractères.",
    }),

  email: z
    .string({
      invalid_type_error: "Adresse email invalide",
    })

    .max(150, {
      message: "L'adresse mail doit contenir au maximum 150 caractères.",
    }),

  password: z.string({
    invalid_type_error:
      "Le mot de passe doit contenir entre 8 et 16 caractères, au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial",
  }),
});

type bodyType = {
  nom: string;
  prenom: string;
  email: string;
  password: string;
};

export const validateRegisterSchema = (body: bodyType) => {
  const validData = schema.safeParse(body);

  if (!validData.success) {
    const result = validData.error.issues.reduce(
      (acc: { [key: string]: string }, curr) => {
        acc[curr.path[0]] = curr.message;
        return acc;
      },
      {},
    );

    return {
      success: false,
      errors: result,
    };
  }

  return {
    success: true,
  };
};
