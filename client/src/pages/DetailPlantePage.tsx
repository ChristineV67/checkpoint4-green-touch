import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { PlanteType } from "../../lib/definitions";

export default function PlanteDetailPage() {
  const { id } = useParams();
  const [dataPlante, setDataPlante] = useState<PlanteType | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/plantes/${id}`)
      .then((response) => response.json())
      .then((data) => setDataPlante(data));
  }, [id]);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg border-2 border-gray-300 my-3">
      <h1 className="text-3xl font-bold text-center mb-4">{dataPlante?.nom}</h1>
      <p className="text-gray-500 italic text-center">
        {dataPlante?.nom_scientifique}
      </p>
      <img
        src={dataPlante?.image_url}
        alt={dataPlante?.nom}
        className="w-full h-64 object-cover rounded-lg my-4"
      />
      <p className="text-gray-700">
        <h2 className="text-gray-700 font-bold"> Description :</h2>{" "}
        {dataPlante?.description}
      </p>
      <p className="text-gray-700">{dataPlante?.description_courte}</p>
      <p className="text-gray-700">
        <h2 className="text-gray-700 font-bold"> Exposition :</h2>{" "}
        {dataPlante?.description_exposition}
      </p>
      <p className="text-gray-700">
        <h2 className="text-gray-700 font-bold"> Entretien :</h2>{" "}
        {dataPlante?.description_entretien}
      </p>
    </div>
  );
}
