
import Image from "next/image";
import { ChartPie, ChartLine, Activity } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Black-Scholes Engine",
    category: "QUANTITATIVE FINANCE",
    description:
      "Modelagem quantitativa e precificação de opções financeiras utilizando o modelo Black-Scholes.",
  },
  {
    number: "02",
    title: "Portfolio Optimization",
    category: "INVESTMENT ANALYSIS",
    description:
      "Estudos de otimização de carteiras, alocação de ativos e análise de risco e retorno.",
  },
  {
    number: "03",
    title: "Economic Data Analysis",
    category: "APPLIED ECONOMICS",
    description:
      "Investigação de fenômenos econômicos utilizando dados, métodos quantitativos e Python.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#202020]">
      
{/* Navigation */}
<header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7 md:px-12">
  <a
    href="#inicio"
    className="text-2xl font-bold tracking-tighter"
  >
    luis<span className="text-[#EA1D2C]">.</span>
  </a>

  <nav className="flex items-center gap-5 sm:gap-9">
   
   <a
  href="#experiencia"
  className="transition-colors hover:text-[#EA1D2C]"
>
  Experiência
  </a>
    <a
      href="#projetos"
      className="text-xs font-medium tracking-wide transition-colors hover:text-[#EA1D2C] sm:text-sm"
    >
      Projetos
    </a>

    <a
      href="#sobre"
      className="text-xs font-medium tracking-wide transition-colors hover:text-[#EA1D2C] sm:text-sm"
    >
      Sobre
    </a>

    <a
      href="#contato"
      className="rounded-full border border-[#EA1D2C] px-4 py-2 text-xs font-semibold text-[#EA1D2C] transition-all hover:bg-[#EA1D2C] hover:text-white sm:px-5 sm:text-sm"
    >
      Contato ↗
    </a>
  </nav>
</header>

      {/* Hero */}
      <section
  id="inicio"
      className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-16 md:grid-cols-[1.15fr_0.85fr] md:px-12 md:pb-36 md:pt-24">
        <div>
          <div className="mb-8 flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#EA1D2C]" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#666666]">
              Economia · Finanças · Tecnologia
            </p>
          </div>

          <h1 className="text-6xl font-semibold leading-[0.98] tracking-[-0.065em] sm:text-7xl lg:text-8xl">
            Olá, eu sou
            <br />
            <span className="text-[#EA1D2C]">Luis Samuel.</span>
          </h1>

          <p className="mt-9 max-w-xl text-lg leading-relaxed text-[#666666] md:text-xl">
            Estudante de Economia interessado em desenvolver soluções
            na interseção entre dados, finanças e tecnologia.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href="#projetos"
              className="rounded-full bg-[#EA1D2C] px-7 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:bg-[#C8102E]"
            >
              Conheça meus projetos ↗
            </a>

            <a
              href="#sobre"
              className="text-sm font-semibold transition-colors hover:text-[#EA1D2C]"
            >
              Mais sobre mim →
            </a>
          </div>

          <div className="mt-16 flex flex-wrap gap-8 border-t border-[#E7E4DF] pt-7">
            <div>
              <p className="text-xs uppercase tracking-wider text-[#888888]">
                Interesse
              </p>
              <p className="mt-2 text-sm font-semibold">
                Quantitative Finance
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-[#888888]">
                Ferramentas
              </p>
              <p className="mt-2 text-sm font-semibold">
                Python · Data · AI
              </p>
            </div>
          </div>
        </div>

        {/* Profile photo */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -right-4 -top-4 h-full w-full rounded-[2rem] border-2 border-[#EA1D2C]" />

          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#EAE5DF]">
            <Image
              src="/images/profile2.jpg"
              alt="Retrato de Luis Samuel"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-center"
            />
          </div>

          <div className="absolute -bottom-5 -left-5 rounded-2xl bg-white px-5 py-4 shadow-lg">
            <p className="text-xs text-[#888888]">BASEADO EM</p>
            <p className="mt-1 text-sm font-bold">São José dos Campos, São Paulo</p>
          </div>
        </div>
      </section>

      

{/* Projects */}
<section
  id="projetos"
  className="bg-white px-6 py-24 md:px-12 md:py-32"
>
  <div className="mx-auto max-w-7xl">

    {/* Section heading */}
    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#EA1D2C]">
          01 — Trabalhos selecionados
        </p>

        <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
          Projetos selecionados<span className="text-[#EA1D2C]">.</span>
        </h2>

        <p className="mt-4 max-w-xl text-base leading-relaxed text-[#777777]">
          Estudos e projetos que exploram a interseção entre economia,
          finanças, dados e tecnologia.
        </p>
      </div>

      <p className="text-sm text-[#999999]">
        05 projetos em destaque
      </p>
    </div>

    
{/* Project grid */}
<ul className="mt-14 grid list-none grid-cols-1 gap-6 p-0 md:grid-cols-2">

  {/* Project 01 — OBECON */}
  <li>
    <article className="group rounded-2xl bg-[#F5F2EF] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7">

      <div className="flex min-h-[270px] items-center justify-center overflow-hidden rounded-xl bg-white p-6 sm:aspect-[16/9]">
        <div className="w-full max-w-md">
          <p className="text-xs font-semibold tracking-widest text-[#EA1D2C]">
            OBECON · PHASE B
          </p>

          <h3 className="mt-4 text-3xl font-bold tracking-tight">
            Market <span className="text-[#EA1D2C]">Competition.</span>
          </h3>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-[#888888]">PRE-MERGER HHI</p>
              <p className="text-2xl font-bold">1,745</p>
            </div>

            <div>
              <p className="text-xs text-[#888888]">POST-MERGER HHI</p>
              <p className="text-2xl font-bold text-[#EA1D2C]">2,407</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between gap-2">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#EA1D2C]">
          Economics & Business
        </p>

        <span className="rounded-full bg-white px-3 py-1 text-xs text-[#666666]">
          Concluído
        </span>
      </div>

      <h3 className="mt-3 text-2xl font-semibold tracking-tight">
        Market Competition & Merger Analysis
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-[#777777]">
        Análise dos efeitos de uma proposta de fusão empresarial sobre
        a concentração de mercado, competitividade e bem-estar social,
        utilizando indicadores econômicos e projeções de mercado.
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {["Economics", "HHI", "Excel", "PowerPoint", "Antitrust"].map((tag) => (
          <span key={tag} className="rounded-full border border-[#DDD8D2] px-3 py-1.5 text-xs text-[#666666]">
            {tag}
          </span>
        ))}
      </div>

      <a
        href="/projetos/obecon"
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#EA1D2C] transition-all hover:gap-3"
      >
        Explorar projeto →
      </a>
    </article>
  </li>

  {/* Project 02 — OIMC */}
  <li>
    <article className="group rounded-2xl bg-[#F5F2EF] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7">

      <div className="flex min-h-[270px] items-center justify-center overflow-hidden rounded-xl bg-white p-6 sm:aspect-[16/9]">
        <div className="w-full max-w-md">
          <p className="text-xs font-semibold tracking-widest text-[#EA1D2C]">
            OIMC · INTERNATIONAL OLYMPIAD
          </p>

          <h3 className="mt-4 text-3xl font-bold tracking-tight">
            Research <span className="text-[#EA1D2C]">& Knowledge.</span>
          </h3>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-[#888888]">QUESTÕES</p>
              <p className="text-2xl font-bold">15</p>
            </div>

            <div>
              <p className="text-xs text-[#888888]">PAÍSES</p>
              <p className="text-2xl font-bold text-[#EA1D2C]">04</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between gap-2">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#EA1D2C]">
          Research & Education
        </p>

        <span className="rounded-full bg-white px-3 py-1 text-xs text-[#666666]">
          Concluído
        </span>
      </div>

      <h3 className="mt-3 text-2xl font-semibold tracking-tight">
        International Mathematics & Knowledge Olympiad
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-[#777777]">
        Participação na equipe de elaboração e revisão de problemas,
        com desenvolvimento de 15 questões para a primeira fase,
        explorando conceitos econômicos e recursos visuais.
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {["Research", "Economics", "Question Design", "AI-assisted Visuals"].map((tag) => (
          <span key={tag} className="rounded-full border border-[#DDD8D2] px-3 py-1.5 text-xs text-[#666666]">
            {tag}
          </span>
        ))}
      </div>

      <a
        href="/projetos/oimc"
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#EA1D2C] transition-all hover:gap-3"
      >
        Explorar projeto →
      </a>
    </article>
  </li>

  {/* Project 03 — Portfolio Optimization */}
  <li>
    <article className="group rounded-2xl bg-[#F5F2EF] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7">

      <div className="flex aspect-[16/9] items-center justify-center overflow-hidden rounded-xl bg-white">
        <div className="text-center transition-transform duration-300 group-hover:scale-105">
          <ChartPie size={64} strokeWidth={1.5} className="text-[#EA1D2C]" />
          <p className="mt-3 text-sm font-semibold tracking-widest text-[#333333]">
            PORTFOLIO ANALYTICS
          </p>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#EA1D2C]">
          Investment Analysis
        </p>
        <span className="rounded-full bg-white px-3 py-1 text-xs text-[#666666]">
          Em desenvolvimento
        </span>
      </div>

      <h3 className="mt-3 text-2xl font-semibold tracking-tight">
        Portfolio Optimization
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-[#777777]">
        Estudos sobre alocação de ativos, diversificação, concentração
        e otimização de carteiras de investimento.
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {["Python", "Pandas", "PyPortfolioOpt", "Statistics"].map((tag) => (
          <span key={tag} className="rounded-full border border-[#DDD8D2] px-3 py-1.5 text-xs text-[#666666]">
            {tag}
          </span>
        ))}
      </div>
    </article>
  </li>

  {/* Project 04 — Economic Data Analysis */}
  <li>
    <article className="group rounded-2xl bg-[#F5F2EF] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7">

      <div className="flex aspect-[16/9] items-center justify-center overflow-hidden rounded-xl bg-white">
        <div className="text-center transition-transform duration-300 group-hover:scale-105">
          <ChartLine size={64} strokeWidth={1.5} className="text-[#EA1D2C]" />
          <p className="mt-3 text-sm font-semibold tracking-widest text-[#333333]">
            ECONOMIC RESEARCH
          </p>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#EA1D2C]">
          Applied Economics
        </p>
        <span className="rounded-full bg-white px-3 py-1 text-xs text-[#666666]">
          Em desenvolvimento
        </span>
      </div>

      <h3 className="mt-3 text-2xl font-semibold tracking-tight">
        Economic Data Analysis
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-[#777777]">
        Investigação de fenômenos econômicos por meio de dados,
        visualizações e métodos quantitativos.
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {["Python", "Pandas", "Eurostat", "Matplotlib"].map((tag) => (
          <span key={tag} className="rounded-full border border-[#DDD8D2] px-3 py-1.5 text-xs text-[#666666]">
            {tag}
          </span>
        ))}
      </div>
    </article>
  </li>

  {/* Project 05 — Sports Analytics */}
  <li>
    <article className="group rounded-2xl bg-[#F5F2EF] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7">

      <div className="flex aspect-[16/9] items-center justify-center overflow-hidden rounded-xl bg-white">
        <div className="text-center transition-transform duration-300 group-hover:scale-105">
          <Activity size={64} strokeWidth={1.5} className="text-[#EA1D2C]" />
          <p className="mt-3 text-sm font-semibold tracking-widest text-[#333333]">
            SPORTS ANALYTICS
          </p>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#EA1D2C]">
          Sports & Data
        </p>
        <span className="rounded-full bg-white px-3 py-1 text-xs text-[#666666]">
          Em desenvolvimento
        </span>
      </div>

      <h3 className="mt-3 text-2xl font-semibold tracking-tight">
        Sports Analytics
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-[#777777]">
        Exploração de dados e indicadores para compreender desempenho
        esportivo e apoiar decisões.
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {["Data Analytics", "Python", "Statistics"].map((tag) => (
          <span key={tag} className="rounded-full border border-[#DDD8D2] px-3 py-1.5 text-xs text-[#666666]">
            {tag}
          </span>
        ))}
      </div>
    </article>
  </li>


</ul>

  </div>

</section>

{/* Experience */}
<section
  id="experiencia"
  className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32"
>
  <div className="grid gap-12 md:grid-cols-[1fr_1.5fr]">

    {/* Section heading */}
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#EA1D2C]">
        03 — Experiência
      </p>

      <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
        Experiências que conectam ideias e impacto.
      </h2>

      <p className="mt-6 max-w-sm text-base leading-relaxed text-[#777777]">
        Participação em iniciativas que combinam tecnologia,
        liderança, análise e empreendedorismo social.
      </p>
    </div>

    {/* Experience entries */}
    <div className="flex flex-col gap-10">

      {/* iFood */}
      <article className="border-b border-[#DDD8D2] pb-10">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#EA1D2C]">
            Tecnologia & Inteligência Artificial
          </p>

          <span className="rounded-full bg-[#F5F2EF] px-3 py-1 text-xs text-[#666666]">
            Imersão
          </span>
        </div>

        <h3 className="mt-5 text-3xl font-semibold tracking-tight">
          iFood
        </h3>

        <p className="mt-2 text-sm font-medium text-[#555555]">
          Participante — Imersão em Inteligência Artificial
        </p>

        <p className="mt-5 text-sm leading-relaxed text-[#777777]">
          Participação em uma experiência prática voltada ao
          aprimoramento de um agente conversacional. Em equipe,
          analisamos mais de 1.000 conversas com potenciais clientes,
          identificando oportunidades de melhoria na qualidade
          das respostas, na apresentação de produtos e na condução
          das interações.
        </p>

        <p className="mt-4 text-sm leading-relaxed text-[#777777]">
          A partir dessa análise, colaboramos no desenvolvimento
          de um prompt de refinamento para tornar as respostas
          do agente mais relevantes, objetivas e alinhadas à
          experiência do cliente.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {[
            "Inteligência Artificial Generativa",
            "Engenharia de Prompts",
            "Análise de Dados",
            "Experiência do Cliente"
          ].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#DDD8D2] px-3 py-1.5 text-xs text-[#666666]"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>

      {/* OBES */}
      <article>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#EA1D2C]">
            Liderança & Empreendedorismo Social
          </p>

          <span className="rounded-full bg-[#F5F2EF] px-3 py-1 text-xs text-[#666666]">
            Olimpíada nacional
          </span>
        </div>

        <h3 className="mt-5 text-3xl font-semibold tracking-tight">
          OBES
        </h3>

        <p className="mt-2 text-sm font-medium text-[#555555]">
          Líder Estudantil e Integrante da Liderança Geral
        </p>

        <p className="mt-5 text-sm leading-relaxed text-[#777777]">
          Atuei como estudante líder e um dos integrantes da
          liderança geral responsáveis pela organização da
          Olimpíada Brasileira de Empreendedorismo Social (OBES),
          iniciativa que alcançou mais de 6.000 pessoas em
          diferentes regiões do Brasil.
        </p>

        <p className="mt-4 text-sm leading-relaxed text-[#777777]">
          A competição contou com o iFood como principal parceiro
          institucional, apoiando a realização e o alcance da
          iniciativa.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-4 rounded-xl bg-[#F5F2EF] p-5">
          <div>
            <p className="text-2xl font-bold">6.000+</p>
            <p className="mt-1 text-xs text-[#777777]">
              Pessoas alcançadas
            </p>
          </div>

          <div>
            <p className="text-lg font-bold">iFood</p>
            <p className="mt-1 text-xs text-[#777777]">
              Principal parceiro
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {[
            "Liderança",
            "Empreendedorismo Social",
            "Organização de Eventos",
            "Parcerias Estratégicas"
          ].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#DDD8D2] px-3 py-1.5 text-xs text-[#666666]"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>

    </div>
  </div>
</section>


{/* About */}

<section
  id="sobre"
  className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32"
>
  <div className="grid gap-12 md:grid-cols-[1fr_1.5fr]">

    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#EA1D2C]">
        02 — Sobre mim
      </p>

      <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
        Entre ideias, dados e iniciativas.
      </h2>
    </div>

    <div>
      <p className="text-lg leading-relaxed text-[#555555]">
        Sou estudante interessado em compreender como a economia
        influencia as decisões individuais e transforma a sociedade.
        Meu interesse se concentra especialmente em economia,
        finanças e análise quantitativa.
      </p>

      <p className="mt-6 text-base leading-relaxed text-[#777777]">
        Gosto de explorar problemas por diferentes perspectivas,
        combinando pesquisa, pensamento analítico e ferramentas
        quantitativas para desenvolver soluções fundamentadas.
      </p>

      <p className="mt-6 text-base leading-relaxed text-[#777777]">
        Fora do ambiente acadêmico, também me envolvo na criação
        e liderança de iniciativas educacionais e sociais. Essas
        experiências reforçaram meu interesse em transformar
        conhecimento em oportunidades e impacto concreto.
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        {[
          "Economics",
          "Finance",
          "Quantitative Research",
          "Social Entrepreneurship",
          "Sports"
        ].map((item) => (
          <span
            key={item}
            className="rounded-full border border-[#DDD8D2] px-4 py-2 text-xs font-medium text-[#666666]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>

  </div>
</section>

     
{/* Contact */}
<footer
  id="contato"
  className="bg-[#202020] px-6 py-20 text-white md:px-12"
>
  <div className="mx-auto max-w-7xl">
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#EA1D2C]">
      03 — Contato
    </p>

    <div className="mt-6 grid gap-12 md:grid-cols-2 md:items-end">
      <div>
        <h2 className="text-5xl font-semibold tracking-tight sm:text-7xl">
          Vamos conversar?
        </h2>

        <p className="mt-6 max-w-md text-base leading-relaxed text-[#AAAAAA]">
          Estou aberto a oportunidades, projetos e novas conexões.
          Entre em contato!
        </p>
      </div>

      <div className="flex flex-col gap-6 md:items-start md:pl-12">
        <a
          href="https://www.linkedin.com/in/luissamuel"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 text-lg transition-colors hover:text-[#EA1D2C]"
        >
          LinkedIn
          <span className="text-sm transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
            ↗
          </span>
        </a>

        <a
          href="mailto:luissamuel.brg@gmail.com"
          className="group flex items-center gap-3 text-lg transition-colors hover:text-[#EA1D2C]"
        >
          Email
          <span className="text-sm transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
            ↗
          </span>
        </a>

        <p className="text-sm text-[#888888]">
          luissamuel.brg@gmail.com
        </p>
      </div>
    </div>

    <div className="mt-20 border-t border-[#444444] pt-7 text-xs text-[#888888]">
      © 2026 Luis Samuel. Todos os direitos reservados.
    </div>
  </div>
</footer>
</main>
);
}
