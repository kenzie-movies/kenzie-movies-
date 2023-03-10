import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validations";
import { MoviesContext } from "../../../providers/MoviesContext";
import { iGetEditMovie } from "../../../providers/MoviesContext/@types";
import { UserContext } from "../../../providers/UserContext";
import { motion } from "framer-motion";

export const FormModalAddMovie = () => {
  const { setModalMovie, addMovie } = useContext(MoviesContext);
  const { user } = useContext(UserContext);
  const userId = user?.id;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<iGetEditMovie>({
    resolver: yupResolver(schema),
  });

  const submit = (data: iGetEditMovie) => {
    const movieData = { ...data, userId: userId, verified: false };
    addMovie(movieData);
    reset();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="modal">
      <div className="titleForm">
        <h4>Adicione seu filme favorito</h4>
        <span onClick={() => setModalMovie(false)}>X</span>
      </div>
      <div className="boxForm">
        <form onSubmit={handleSubmit(submit)}>
          <label htmlFor="name">Nome do filme</label>
          {errors.name?.message}
          <input
            id="name"
            type="text"
            placeholder="Digite o nome do filme "
            {...register("name")}
          />

          <label htmlFor="name">Categoria</label>
          {errors.genre?.message}
          <input
            id="genre"
            type="text"
            placeholder="Digite a categoria do filme "
            {...register("genre")}
          />

          <label htmlFor="name">Data de lançamento</label>
          {errors.release?.message}
          <input
            id="release"
            type="text"
            placeholder="Digite a categoria do filme "
            {...register("release")}
          />

          <label htmlFor="name">Duração</label>
          {errors.duration?.message}
          <input
            id="duration"
            type="text"
            placeholder="Digite o tempo de duração "
            {...register("duration")}
          />

          <label htmlFor="name">Capa</label>
          {errors.cover?.message}
          <input
            id="cover"
            type="text"
            placeholder="Insira a url da capa "
            {...register("cover")}
          />

          <label htmlFor="name">Classificação</label>
          {errors.classification?.message}
          <input
            id="synopsis"
            placeholder="Insira a  faixa etária"
            {...register("classification")}
          />

          <label htmlFor="name">Sinopse</label>
          {errors.synopsis?.message}
          <textarea
            id="synopsis"
            placeholder="Insira a descrição do filme "
            {...register("synopsis")}
          />

          <p>
            Obs.: Sua solicitação passará por uma avaliação antes de ser
            pulblicada.
          </p>

          <button type="submit">Solicitar filme</button>
        </form>
      </div>
    </motion.div>
  );
};
