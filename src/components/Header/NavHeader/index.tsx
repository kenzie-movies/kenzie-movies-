import { TbMovie } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";
import { MoviesContext } from "../../../providers/MoviesContext";
import { Link, useLocation } from "react-router-dom";

const NavHeader = () => {
  const { userLogOut } = useContext(UserContext);

  const { setModalMovie, setModalUser } = useContext(MoviesContext);

  const location = useLocation();
  const { pathname } = location;

  return (
    <nav>
      {pathname === "/home" ? null : <Link to={"/home"}>Voltar</Link>}
      {pathname === "/admin" || pathname === "/search" ? null : (
        <button className="icon-movie" onClick={() => setModalMovie(true)}>
          <TbMovie />
          Solicitar Filme
        </button>
      )}

      {pathname === "/home" || pathname === "/search" ? (
        <Link to={"/profile"}>Seu Perfil</Link>
      ) : (
        <button className="icon-profile" onClick={() => setModalUser(true)}>
          <CgProfile />
          Editar Perfil
        </button>
      )}
      <button className="icon-getout" onClick={userLogOut}>
        <HiOutlineArrowRightOnRectangle />
        Sair
      </button>
    </nav>
  );
};

export default NavHeader;
