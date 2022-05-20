import { equipos, equiposDb } from "../../assets/data";

import Link from "next/link";

export const getStaticProps = async ({ params }) => {
  const equipo = equipos.filter((equipo) => equipo.id === params.id);
  return {
    props: {
      equipo: equipo[0],
    },
  };
};

export const getStaticPaths = async () => {
  const paths = equipos.map((equipo) => ({
    params: {
      id: equipo.id,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export default function Equipo({ equipo }) {
  console.log(equipo);
  return (
    <div className="container">
      <main className="main">
        <h1 className="title">
          Bienvenido a <a href="https://dinipamedical.com/">Dinipa!</a>
        </h1>
        <h1>{equipo.nombre}</h1>
        <h2>{equipo.id}</h2>
        <p>{equipo.descripcion}</p>
      </main>
    </div>
  );
}
