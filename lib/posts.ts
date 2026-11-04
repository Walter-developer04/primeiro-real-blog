import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const pasta = path.join(process.cwd(), "content", "artigos");

export type Artigo = {
  slug: string;
  titulo: string;
  descricao: string;
  categoria: string;
  data: string; // AAAA-MM-DD
  minutos: number;
};

function montar(slug: string, dados: Record<string, unknown>, texto: string): Artigo {
  const palavras = texto.trim().split(/\s+/).length;
  return {
    slug,
    titulo: String(dados.titulo ?? slug),
    descricao: String(dados.descricao ?? ""),
    categoria: String(dados.categoria ?? "Educação financeira"),
    data: String(dados.data ?? ""),
    minutos: Math.max(1, Math.round(palavras / 200)),
  };
}

export function listarArtigos(): Artigo[] {
  if (!fs.existsSync(pasta)) return [];
  return fs
    .readdirSync(pasta)
    .filter((arquivo) => arquivo.endsWith(".md"))
    .map((arquivo) => {
      const slug = arquivo.replace(/\.md$/, "");
      const bruto = fs.readFileSync(path.join(pasta, arquivo), "utf8");
      const { data, content } = matter(bruto);
      return montar(slug, data, content);
    })
    .sort((a, b) => b.data.localeCompare(a.data));
}

export function lerArtigo(slug: string): (Artigo & { html: string }) | null {
  if (!/^[a-z0-9-]+$/.test(slug)) return null;
  const caminho = path.join(pasta, `${slug}.md`);
  if (!fs.existsSync(caminho)) return null;
  const { data, content } = matter(fs.readFileSync(caminho, "utf8"));
  const html = marked.parse(content, { async: false }) as string;
  return { ...montar(slug, data, content), html };
}

export function formatarData(data: string): string {
  const d = new Date(`${data}T12:00:00`);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" });
}
