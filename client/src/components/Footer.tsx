import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer>
        <nav className="bg-green-200 py-8 text-white flex justify-around">
          <ul className="flex gap-4 ">
            <li className="hover:underline hover:underline-offset-4 text-black">
              <NavLink to={"/"}>Facebook</NavLink>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
}
