
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Image as ImageIcon } from "lucide-react";


const questions = [
  {
    number: "01",
    title: "Bens de Giffen",
    category: "Economia · Teoria do consumidor",
    description:
      "Uma questão sobre o comportamento da demanda e o conceito econômico de bens de Giffen, utilizando o arroz como exemplo.",
    image: "/images/oimc/01-bens-de-giffen.png",
  },
  {
    number: "02",
    title: "Curva de Beveridge",
    category: "Macroeconomia · Mercado de trabalho",
    description:
      "Exploração da relação entre desemprego e vagas disponíveis, conectando indicadores do mercado de trabalho a conceitos macroeconômicos.",
    image: "/images/oimc/02-curva-de-beveridge.png",
  },
  {
    number: "03",
    title: "Economia imobiliária",
    category: "Economia urbana · Mercado imobiliário",
    description:
      "Uma abordagem visual sobre localização, acessibilidade e atratividade de imóveis, contextualizada por uma crise do mercado imobiliário.",
    image: "/images/oimc/03-economia-imobiliaria.png",
  },
  {
    number: "04",
    title: "Cascatas de informação",
    category: "Economia da informação · Comportamento",
    description:
      "Representação de redes de influência e tomada de decisão coletiva, explorando os conceitos de herding e information cascades.",
    image: "/images/oimc/04-cascatas-de-informacao.png",
  },
];

export default function OimcPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#202020]">

      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-6 md:px-12">
        <Link href="/" className="text-xl font-bold tracking-tight">
          luis<span className="text-[#EA1D2C]">.</span>
        </Link>

        <Link
          href="/#projetos"
          className="flex items-center gap-2 text-sm text-[#666666] transition hover:text-[#EA1D2C]"
        >
          <ArrowLeft size={16} />
          Voltar aos projetos
        </Link>
      </nav>

      {/* Hero */}
      <section className="px-6 pb-20 pt-16 md:px-12 md:pb-28 md:pt-24">
        <div className="mx-auto max-w-5xl">

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#EA1D2C]">
            OIMC · International Mathematics & Knowledge Olympiad
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Research, problem design
            <span className="text-[#EA1D2C]"> & visual storytelling.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#777777]">
            Desenvolvimento de questões interdisciplinares para uma
            olimpíada internacional, conectando pesquisa, conceitos
            econômicos e recursos visuais.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {["Economics", "Research", "Question Design", "AI-assisted Visuals"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#DDD8D2] px-4 py-2 text-xs text-[#666666]"
              >
                {tag}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* Overview */}
      <section className="bg-white px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[1fr_2fr]">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#EA1D2C]">
              01 — Sobre a olimpíada
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              Beyond mathematics.
            </h2>
          </div>

          <div>
            <p className="leading-relaxed text-[#666666]">
              A OIMC é uma Olimpíada Internacional de Matemática e
              Conhecimentos que reúne aproximadamente 12 a 15 mil
              participantes de quatro países.
            </p>

            <p className="mt-5 leading-relaxed text-[#666666]">
              A competição envolve pesquisa e investigação de diferentes
              assuntos, incentivando os participantes a explorar conceitos,
              estabelecer conexões entre áreas do conhecimento e resolver
              problemas contextualizados.
            </p>
          </div>

        </div>
      </section>

      {/* My contribution */}
      <section className="px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[1fr_2fr]">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#EA1D2C]">
              02 — Minha contribuição
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              From research to questions.
            </h2>
          </div>

          <div>
            <p className="leading-relaxed text-[#777777]">
              Como integrante de uma equipe de elaboração e revisão de
              problemas, participei do desenvolvimento de 15 questões
              para a primeira fase da competição.
            </p>

            <p className="mt-5 leading-relaxed text-[#777777]">
              O trabalho envolveu pesquisar conceitos e fenômenos,
              transformá-los em problemas contextualizados e desenvolver
              materiais visuais que ajudassem a representar os assuntos
              abordados.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white p-6">
                <p className="text-4xl font-semibold tracking-tight text-[#EA1D2C]">
                  15
                </p>
                <p className="mt-2 text-sm text-[#777777]">
                  Questões desenvolvidas para a primeira fase
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6">
                <p className="text-4xl font-semibold tracking-tight text-[#EA1D2C]">
                  4
                </p>
                <p className="mt-2 text-sm text-[#777777]">
                  Países representados na olimpíada
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Selected questions */}
      <section className="bg-white px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-5xl">

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#EA1D2C]">
            03 — Selected questions
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight">
            Ideas made visual.
          </h2>

          <p className="mt-5 max-w-2xl leading-relaxed text-[#777777]">
            Alguns exemplos de questões desenvolvidas, explorando
            diferentes conceitos econômicos por meio de situações
            contextualizadas e representações visuais.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {questions.map((question) => (
              <article
                key={question.number}
                className="overflow-hidden rounded-2xl bg-[#F5F2EF]"
              >
                <div className="flex items-center justify-center overflow-hidden bg-white p-4">
  <img
    src={question.image}
    alt={`Questão ${question.number}: ${question.title}`}
    className="h-auto w-full object-contain"
    loading="lazy"
  />
</div>
                <div className="p-6 sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#EA1D2C]">
                    Question {question.number}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold tracking-tight">
                    {question.title}
                  </h3>

                  <p className="mt-2 text-xs font-medium text-[#888888]">
                    {question.category}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-[#777777]">
                    {question.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* AI contribution */}
      <section className="px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[1fr_2fr]">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#EA1D2C]">
              04 — Ferramentas
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              AI-assisted visual development.
            </h2>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <ImageIcon size={24} className="text-[#EA1D2C]" />
              <h3 className="text-xl font-semibold">
                Visuals with AI assistance
              </h3>
            </div>

            <p className="mt-5 leading-relaxed text-[#777777]">
              Ferramentas de inteligência artificial foram utilizadas
              como apoio à criação das imagens e dos gráficos presentes
              nas questões. O objetivo foi transformar conceitos
              econômicos abstratos em representações visuais que
              contextualizassem os problemas.
            </p>

            <p className="mt-5 leading-relaxed text-[#777777]">
              A pesquisa dos temas, a construção dos enunciados e a
              definição dos conceitos abordados fizeram parte do
              trabalho de elaboração das questões.
            </p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 md:px-12">
        <div className="mx-auto flex max-w-5xl flex-col justify-between gap-4 border-t border-[#E5E1DC] pt-8 sm:flex-row">
          <p className="text-sm text-[#888888]">
            © 2026 Luis Samuel
          </p>

          <Link
            href="/"
            className="text-sm font-medium transition hover:text-[#EA1D2C]"
          >
            Voltar ao início <ArrowUpRight size={14} className="inline" />
          </Link>
        </div>
      </footer>

    </main>
  );
}
