import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import type { UserType } from "../../lib/definitions";
import { ReactNode, useRef } from "react";

export default function RegisterPage() {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserType>();

  const passwordRef = useRef({});
  passwordRef.current = watch("password", "");

  const formSubmit = async (data) => {
    const { confirmpassword, ...rest } = data;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(rest),
        },
      );

      const responseData = await response.json();

      if (response.ok) {
        toast.success(responseData.message);
      } else {
        toast.error(responseData.message);
      }
    } catch (error) {
      toast.error("Impossible de se connecter au serveur.");
    }
  };
  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl  text-gray-900 mb-6 text-center">
          Créer un compte
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit(formSubmit)}>
          <div>
            <label
              htmlFor="nom"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nom
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              {...register("nom", { required: "Le nom est obligatoire" })}
            />
            {errors.nom && (
              <p className="text-red-500 text-sm mt-1">{errors.nom.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="nom scientifique"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Prénom
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              {...register("prenom", {
                required: "Le prénom est obligatoire",
              })}
            />
            {errors.prenom && (
              <p className="text-red-500 text-sm mt-1">
                {errors.prenom.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              {...register("email", {
                required: "L'email est obligatoire",
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Mot de passe
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              placeholder="••••••••"
              {...register("password", {
                required: "Le mot de passe est obligatoire",
                pattern: {
                  value:
                    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/,
                  message:
                    "Le mot de passe doit contenir entre 8 et 16 caractères, au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial",
                },
              })}
            />

            {errors.password && (
              <p role="alert" className="text-red-500 text-sm mt-2">
                {errors.password.message as ReactNode}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="confirmpassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Confirmer le mot de passe
            </label>
            <input
              type="confirmpassword"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              placeholder="••••••••"
              {...register("confirmpassword", {
                required: "La confirmation du mot de passe est obligatoire",
                validate: (value) =>
                  value === passwordRef.current ||
                  "Les mots de passe ne correspondent pas",
              })}
            />
            {errors.confirmpassword && (
              <p role="alert" className="text-red-500 text-sm mt-2">
                {errors.confirmpassword.message as ReactNode}
              </p>
            )}
          </div>

          <button
            className="w-full bg-green-700 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors"
            type="submit"
          >
            Valider
          </button>
        </form>
      </div>
    </section>
  );
}
