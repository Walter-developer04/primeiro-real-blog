import Link from "next/link";
import { listarArtigos, formatarData } from "@/lib/posts";

export default function Home() {
  const artigos = listarArtigos();

  return (
    <>
      <section className="hero">
        <div className="container">
          <p className="selo">Educação financeira para iniciantes</p>
          <h1>Seu primeiro real investido começa aqui.</h1>
          <p className="sub">
            Guias claros e sem enrolação para quem quer sair do zero, organizar o dinheiro e investir
            com segurança, mesmo com pouco.
          </p>
        </div>
      </section>

      <section className="container">
        <h2 className="secao">Artigos recentes</h2>
        <div className="grade">
          {artigos.map((a) => (
            <Link key={a.slug} href={`/artigos/${a.slug}`} className="cartao">
              <span className="cat">{a.categoria}</span>
              <h3>{a.titulo}</h3>
              <p>{a.descricao}</p>
              <span className="meta">
                {formatarData(a.data)} · {a.minutos} min de leitura
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
