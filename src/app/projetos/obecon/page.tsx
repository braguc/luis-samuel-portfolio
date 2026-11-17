
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, FileText } from "lucide-react";

export default function ObeconPage() {
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
            OBECON · Phase B · Economics & Business
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Market Competition
            <span className="text-[#EA1D2C]"> & Merger Analysis.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#777777]">
            Uma análise econômica dos possíveis efeitos de uma fusão
            empresarial sobre a concentração de mercado, a competitividade
            e o bem-estar dos consumidores.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {["Economics", "Market Structure", "HHI", "Antitrust", "Excel"].map((tag) => (
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

      {/* Project overview */}
      <section className="bg-white px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[1fr_2fr]">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#EA1D2C]">
              01 — Contexto
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              The challenge.
            </h2>
          </div>

          <div>
            
<p className="text-base leading-relaxed text-[#666666]">
  O case, desenvolvido e elaborado pela organização da OBECON,
  apresentou um cenário fictício envolvendo uma proposta de fusão
  empresarial. A partir desse contexto, os participantes deveriam
  avaliar os possíveis impactos da operação sobre a estrutura
  competitiva do mercado, os preços e o bem-estar dos consumidores.
</p>

<p className="mt-5 text-base leading-relaxed text-[#666666]">
  O desafio consistiu em construir uma análise econômica fundamentada,
  utilizando indicadores de concentração de mercado, comparações
  entre diferentes cidades e projeções de mercado, para formular
  uma recomendação sobre a aprovação ou o bloqueio da fusão proposta.
</p>

          </div>

        </div>
      </section>

      
{/* Methodology */}
<section className="px-6 py-20 md:px-12 md:py-24">
  <div className="mx-auto max-w-5xl">

    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#EA1D2C]">
      02 — Metodologia
    </p>

    <h2 className="mt-4 text-3xl font-semibold tracking-tight">
     Medindo a concentração de mercado.
    </h2>

    <p className="mt-6 max-w-3xl leading-relaxed text-[#777777]">
      Para avaliar os efeitos potenciais da fusão, o estudo utilizou
      o Índice Herfindahl-Hirschman (HHI), uma medida econômica
      amplamente utilizada para analisar o nível de concentração
      de um mercado.
    </p>

    {/* HHI Explanation */}
    <div className="mt-10 rounded-2xl bg-white p-8 sm:p-10">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#EA1D2C]">
        Entendo o HHI
      </p>

      <h3 className="mt-4 text-2xl font-semibold tracking-tight">
       Mas afinal, o que é o Herfindahl-Hirschman Index?
      </h3>

      <p className="mt-5 leading-relaxed text-[#777777]">
        O HHI é calculado pela soma dos quadrados das participações
        de mercado de todas as empresas que atuam em determinado
        setor. Dessa forma, o indicador considera tanto o número
        de concorrentes quanto a distribuição de suas participações.
      </p>

      <div className="mt-8 rounded-xl bg-[#F5F2EF] p-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#888888]">
          Fórmula
        </p>

        <p className="mt-3 text-2xl font-semibold tracking-tight">
          HHI = Σ (Market Shareᵢ)²
        </p>

        <p className="mt-3 text-sm leading-relaxed text-[#777777]">
          Cada participação de mercado é elevada ao quadrado e,
          em seguida, os resultados são somados.
        </p>
      </div>

      <p className="mt-6 leading-relaxed text-[#777777]">
        Quanto maior o HHI, maior tende a ser a concentração
        do mercado. Por isso, o indicador é especialmente útil
        para avaliar como fusões e aquisições podem alterar
        a estrutura competitiva de um setor.
      </p>
    </div>

    {/* Application */}
    <div className="mt-12">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#EA1D2C]">
        Application to the case
      </p>

      <h3 className="mt-4 text-2xl font-semibold tracking-tight">
        Measuring the impact of the proposed merger.
      </h3>

      <p className="mt-5 max-w-3xl leading-relaxed text-[#777777]">
        No cenário fictício desenvolvido pela OBECON, o HHI foi
        utilizado para comparar a concentração do mercado antes
        e depois da fusão proposta. Os resultados apontaram um
        aumento expressivo no indicador.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">

        <div className="rounded-2xl bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#888888]">
            Pre-merger HHI
          </p>
          <p className="mt-4 text-5xl font-semibold tracking-tight">
            1,745
          </p>
          <p className="mt-3 text-sm text-[#777777]">
            Concentração estimada antes da operação.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#EA1D2C]">
            Post-merger HHI
          </p>
          <p className="mt-4 text-5xl font-semibold tracking-tight text-[#EA1D2C]">
            2,407
          </p>
         
{/* HHI Comparison Chart */}
<div className="mt-10 rounded-2xl bg-white p-8 sm:p-10">

  <p className="text-xs font-semibold uppercase tracking-widest text-[#EA1D2C]">
    Market concentration comparison
  </p>

  <h3 className="mt-3 text-2xl font-semibold tracking-tight">
    The impact of the proposed merger
  </h3>

  <p className="mt-3 text-sm leading-relaxed text-[#777777]">
    Comparison of market concentration before and after the proposed merger.
    Bars use a common scale of 0 to 2,500 HHI points.
  </p>

  <div className="mt-10 space-y-8">

    {/* Before merger */}
    <div>
      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm font-medium text-[#555555]">
          Before merger
        </span>
        <span className="text-lg font-bold">1,745</span>
      </div>

      <div
        className="h-5 w-full overflow-hidden rounded-full bg-[#F0EDE9]"
        role="img"
        aria-label="HHI before merger: 1745 points out of 2500"
      >
        <div
          className="h-full rounded-full bg-[#A8A29E]"
          style={{ width: "69.8%" }}
        />
      </div>
    </div>

    {/* After merger */}
    <div>
      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm font-medium text-[#555555]">
          After merger
        </span>
        <span className="text-lg font-bold text-[#EA1D2C]">2,407</span>
      </div>

      <div
        className="h-5 w-full overflow-hidden rounded-full bg-[#F0EDE9]"
        role="img"
        aria-label="HHI after merger: 2407 points out of 2500"
      >
        <div
          className="h-full rounded-full bg-[#EA1D2C]"
          style={{ width: "96.28%" }}
        />
      </div>
    </div>

  </div>

  <div className="mt-8 flex justify-between border-t border-[#EEEAE5] pt-4 text-xs text-[#999999]">
    <span>0</span>
    <span>2,500 HHI points</span>
  </div>

</div>

          <p className="mt-3 text-sm text-[#777777]">
            Concentração estimada após a operação.
          </p>
        </div>

      </div>

      <div className="mt-6 rounded-2xl border border-[#EA1D2C]/20 bg-white p-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#EA1D2C]">
          Key observation
        </p>
        <p className="mt-3 text-3xl font-semibold tracking-tight">
          +38%
        </p>
        <p className="mt-2 text-sm leading-relaxed text-[#777777]">
          Aumento aproximado do HHI entre os cenários anterior
          e posterior à fusão proposta.
        </p>
      </div>
    </div>

  </div>
</section>


      {/* Findings */}
      <section className="bg-white px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[1fr_2fr]">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#EA1D2C]">
              03 — Resultados
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              Key findings.
            </h2>
          </div>

          <div className="space-y-8">

            <div>
              <h3 className="text-xl font-semibold">
                Increased market concentration
              </h3>
              <p className="mt-3 leading-relaxed text-[#777777]">
                O HHI projetado aumentou de 1.745 para 2.407 após a fusão,
                indicando uma elevação relevante da concentração de mercado.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Competition and pricing
              </h3>
              <p className="mt-3 leading-relaxed text-[#777777]">
                A análise identificou uma associação entre menor
                competitividade e preços mais elevados em diferentes cidades.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Potential competitive risks
              </h3>
              <p className="mt-3 leading-relaxed text-[#777777]">
                O estudo apontou riscos relacionados ao poder de mercado,
                incluindo possíveis aumentos de preços e práticas
                anticompetitivas.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Recommendation */}
      <section className="px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-5xl">

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#EA1D2C]">
            04 — Recomendação
          </p>

          <div className="mt-6 rounded-2xl bg-[#202020] p-8 text-white sm:p-12">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Protecting market competition.
            </h2>

            <p className="mt-6 max-w-3xl leading-relaxed text-white/70">
              A recomendação apresentada foi bloquear a fusão proposta e
              aplicar medidas antitruste para preservar a competitividade
              dos mercados analisados.
            </p>

            <p className="mt-5 max-w-3xl leading-relaxed text-white/70">
              O trabalho também discutiu medidas estruturais, incluindo
              limites de participação de mercado e a preservação de um
              ambiente com múltiplos concorrentes.
            </p>
          </div>

        </div>
      </section>

      {/* Deliverable */}
      <section className="bg-white px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto flex max-w-5xl flex-col justify-between gap-8 sm:flex-row sm:items-center">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#EA1D2C]">
              05 — Material do projeto
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              Explore the case.
            </h2>

            <p className="mt-3 text-[#777777]">
              Consulte a apresentação completa desenvolvida para o case.
            </p>
          </div>

          <a
            href="/projects/obecon-case.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#EA1D2C] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#c91826]"
          >
            <FileText size={18} />
            View presentation
            <ArrowUpRight size={16} />
          </a>

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
            Back to homepage ↗
          </Link>
        </div>
      </footer>

    </main>
  );
}
