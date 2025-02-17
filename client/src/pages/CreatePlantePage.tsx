import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import type { PlanteType } from "../../lib/definitions";

export default function CreatePlantePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PlanteType>();

  const formSubmit = async (data: PlanteType) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/plantes`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      if (response.ok) {
        toast.success("fiche créée avec succès !");
      } else {
        toast.error("Une erreur s'est produite.");
      }
    } catch (error) {
      toast.error("Impossible de se connecter au serveur.");
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl  text-gray-900 mb-6 text-center">
          Ajouter une plante
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit(formSubmit)}>
          <div>
            <label
              htmlFor="nom"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nom de la plante
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
              Nom scientifique
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              {...register("nom_scientifique", {
                required: "Le nom latin est obligatoire",
              })}
            />
            {errors.nom_scientifique && (
              <p className="text-red-500 text-sm mt-1">
                {errors.nom_scientifique.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Description
            </label>
            <textarea
              rows={2}
              className="w-full rounded-lg px-4 py-2 ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none resize-none"
              {...register("description", {
                required: "La description est obligatoire",
              })}
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="description courte"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Description courte
            </label>
            <textarea
              rows={2}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              {...register("description_courte", {
                required: "La description est obligatoire",
              })}
            />
            {errors.description_courte && (
              <p className="text-red-500 text-sm mt-1">
                {errors.description_courte.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="exposition"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Exposition
            </label>
            <select
              {...register("exposition", {
                required: "Veuillez sélectionner une exposition",
              })}
              className="w-full rounded-lg px-4 py-2 ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            >
              <option value="">Sélectionnez...</option>
              <option value="Faible">Faible</option>
              <option value="Moyenne">Moyenne</option>
              <option value="Forte">Forte</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="description exposition"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Description exposition
            </label>
            <textarea
              rows={2}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              {...register("description_exposition", {
                required: "La description est obligatoire",
              })}
            />
            {errors.description_exposition && (
              <p className="text-red-500 text-sm mt-1">
                {errors.description_exposition.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="arrosage"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Arrosage
            </label>
            <select
              {...register("arrosage", {
                required: "Veuillez sélectionner un type d'arrosage",
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
            >
              <option value="">Sélectionnez...</option>
              <option value="Faible">Faible</option>
              <option value="Moyenne">Moyenne</option>
              <option value="Forte">Forte</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="description arrosage"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Description arrosage
            </label>
            <textarea
              rows={2}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              {...register("description_arrosage", {
                required: "La description est obligatoire",
              })}
            />
            {errors.description_arrosage && (
              <p className="text-red-500 text-sm mt-1">
                {errors.description_arrosage.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="entretien"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Entretien
            </label>
            <select
              {...register("entretien", {
                required: "Veuillez sélectionner le niveau d'entretien",
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
            >
              <option value="">Sélectionnez...</option>
              <option value="Débutant">Débutant</option>
              <option value="Intermédiaire">Intermédiaire</option>
              <option value="Expert">Expert</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="description entretien"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Description entretien
            </label>
            <textarea
              rows={2}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              {...register("description_entretien", {
                required: "La description est obligatoire",
              })}
            />
            {errors.description_entretien && (
              <p className="text-red-500 text-sm mt-1">
                {errors.description_entretien.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="image url"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Image (URL)
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              {...register("image_url", {
                required: "L'image est obligatoire",
              })}
            />
            {errors.image_url && (
              <p className="text-red-500 text-sm mt-1">
                {errors.image_url.message}
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
