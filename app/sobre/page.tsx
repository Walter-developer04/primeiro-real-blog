import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Conheça a proposta do Primeiro Real: educação financeira clara para quem está começando.",
};

export default function Sobre() {
  return (
    <div className="artigo">
      <h1 className="titulo-pagina">Sobre o Primeiro Real</h1>
      <p>
        O Primeiro Real é um blog de educação financeira para quem está começando do zero. A ideia é
        simples: explicar investimentos com linguagem clara, exemplos práticos e sem promessas de
        dinheiro fácil.
      </p>
      <h2>Como produzimos o conteúdo</h2>
      <ul>
        <li>Cada artigo explica os termos técnicos no próprio texto.</li>
        <li>Regras, taxas e impostos são checados em fontes oficiais antes da publicação.</li>
        <li>Artigos podem ser atualizados quando as regras mudarem, e a data de publicação é sempre exibida.</li>
      </ul>
      <h2>Aviso importante</h2>
      <p>
        Todo o conteúdo é educacional e não constitui recomendação de investimento, consultoria ou
        oferta de qualquer produto financeiro. Antes de investir, avalie sua situação e, se
        necessário, procure um profissional autorizado.
      </p>
    </div>
  );
}
