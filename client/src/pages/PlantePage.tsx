import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import type { PlanteType } from "../../lib/definitions";

export default function PlantePage() {
  const [dataPlante, setDataPlante] = useState<PlanteType[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/plantes`)
      .then((response) => response.json())
      .then((data: PlanteType[]) => {
        setDataPlante(data);
      });
  }, []);

  return (
    <>
      <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 md:mb-8 p-2 sm:p-4 md:p-6 text-center">
        Les Plantes de A à Z
      </h1>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 p-2">
        {dataPlante?.map((d) => (
          <div
            key={d.id}
            className="border border-primary shadow-md bg-white p-3 md:p-4 rounded-lg"
          >
            <h2 className="font-bold text-lg mb-1 text-center">{d.nom}</h2>
            <p className="text-gray-500 italic text-sm mb-2 text-center">
              {d.nom_scientifique}
            </p>
            <p className="text-gray-600 text-sm text-center">
              {d.description_courte}
            </p>

            <div className="flex justify-center p-2">
              <img
                src={d.image_url}
                alt={d.nom}
                className="w-44 h-44 object-cover rounded-lg shadow-sm"
              />
            </div>

            <div className="text-center mt-2">
              <NavLink
                to={`/${d.id}`}
                className="w-30 bg-green-700 hover:bg-amber-500 text-white font-medium py-2.5 rounded-lg transition-colors text-center"
                type="submit"
              >
                Voir
              </NavLink>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
