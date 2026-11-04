import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { listarArtigos, lerArtigo, formatarData } from "@/lib/posts";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return listarArtigos().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const artigo = lerArtigo(slug);
  if (!artigo) return {};
  return {
    title: artigo.titulo,
    description: artigo.descricao,
    openGraph: {
      type: "article",
      title: artigo.titulo,
      description: artigo.descricao,
      publishedTime: artigo.data,
    },
  };
}

export default async function PaginaArtigo({ params }: Props) {
  const { slug } = await params;
  const artigo = lerArtigo(slug);
  if (!artigo) notFound();

  return (
    <article>
      <header className="artigo-topo">
        <div className="container">
          <span className="selo">{artigo.categoria}</span>
          <h1>{artigo.titulo}</h1>
          <p className="meta">
            {formatarData(artigo.data)} · {artigo.minutos} min de leitura
          </p>
        </div>
      </header>
      <div className="artigo" dangerouslySetInnerHTML={{ __html: artigo.html }} />
    </article>
  );
}
