const milestones = [
  { year: '2026', items: ['Securus Agent 2.0 출시', '일본 도쿄 지사 설립'] },
  { year: '2025', items: ['시리즈 B 투자 유치', 'ISO/IEC 42001 AI 경영시스템 인증 획득'] },
  { year: '2024', items: ['Securus Guard 정식 출시', '국내 주요 금융사 AI 보안 플랫폼 공급'] },
  { year: '2023', items: ['시큐러스 설립', '정부 AI 바우처 공급기업 선정'] },
]

export function History() {
  return (
    <section id="history" className="scroll-mt-16 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-12">
        <div className="flex flex-col gap-5 lg:col-span-4">
          <p className="font-mono text-xs font-medium tracking-widest text-primary">HISTORY</p>
          <h2 className="text-3xl font-bold leading-snug tracking-tight text-balance md:text-4xl">
            짧지만 밀도 있게 걸어왔습니다.
          </h2>
        </div>

        <ol className="flex flex-col lg:col-span-8">
          {milestones.map((m, i) => (
            <li key={m.year} className="grid grid-cols-[5rem_1fr] gap-6 border-t border-border py-8 last:border-b md:grid-cols-[8rem_1fr]">
              <span className={i === 0 ? 'text-2xl font-black text-primary' : 'text-2xl font-black text-foreground/30'}>
                {m.year}
              </span>
              <ul className="flex flex-col gap-2">
                {m.items.map((item) => (
                  <li key={item} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
