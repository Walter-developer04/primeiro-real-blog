import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description: "Como o Primeiro Real trata dados, cookies e anúncios.",
};

const contato = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

export default function Privacidade() {
  return (
    <div className="artigo">
      <h1 className="titulo-pagina">Política de privacidade</h1>
      <p>
        Esta página explica quais informações podem ser coletadas quando você visita o Primeiro Real e
        como elas são usadas, de acordo com a Lei Geral de Proteção de Dados (LGPD).
      </p>
      <h2>Dados coletados</h2>
      <p>
        O site não exige cadastro e não coleta dados pessoais diretamente. Informações técnicas de
        navegação (como endereço IP, tipo de navegador e páginas acessadas) podem ser registradas pela
        hospedagem e por serviços de terceiros.
      </p>
      <h2>Cookies e anúncios</h2>
      <p>
        O site pode exibir anúncios do Google AdSense. O Google e seus parceiros usam cookies para
        exibir anúncios com base nas suas visitas a este e a outros sites. Você pode gerenciar ou
        desativar anúncios personalizados em{" "}
        <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">
          adssettings.google.com
        </a>
        .
      </p>
      <h2>Links externos</h2>
      <p>
        Os artigos podem conter links para outros sites. Não somos responsáveis pelo conteúdo ou pelas
        práticas de privacidade desses sites.
      </p>
      <h2>Seus direitos</h2>
      <p>
        Conforme a LGPD, você pode solicitar informações sobre o tratamento dos seus dados, correção ou
        exclusão.
      </p>
      {contato ? (
        <p>
          Contato: <a href={`mailto:${contato}`}>{contato}</a>
        </p>
      ) : null}
    </div>
  );
}
