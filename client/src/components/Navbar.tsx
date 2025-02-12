import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="bg-green-200 py-8 text-white flex justify-around">
        <ul className=" text-black text-6xl">
          <NavLink to={"/"}>The Green Touch</NavLink>
        </ul>
        <ul className="flex gap-4">
          <li className="hover:underline hover:underline-offset-4 text-black text-2xl">
            <NavLink to={"/"}>Se connecter</NavLink>
          </li>
          <li className="hover:underline hover:underline-offset-4 text-black text-2xl">
            <NavLink to={"/createPlantePage"}>Ajouter une plante</NavLink>
          </li>
        </ul>
      </nav>

      <nav>
        <ul className="flex  bg-orange-300 py-6 gap-5">
          <li className="hover:underline hover:underline-offset-4 text-black text-2xl">
            <NavLink to={"/"}>Acceuil</NavLink>
          </li>
          <li className="hover:underline hover:underline-offset-4 text-black text-2xl">
            <NavLink to={"/"}>La Top Selection</NavLink>
          </li>

          <li className="hover:underline hover:underline-offset-4 text-black text-2xl">
            <NavLink to={"/plantePage"}>Plantes de A à Z</NavLink>
          </li>
        </ul>{" "}
      </nav>
    </>
  );
}
