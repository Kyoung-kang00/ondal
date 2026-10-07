const steps = [
  { step: '01', title: '진단', desc: '업무와 데이터를 살펴보고, AI가 가장 큰 가치를 낼 지점을 찾습니다.' },
  { step: '02', title: '설계', desc: '보안 정책과 규제 요건을 반영한 AI 아키텍처를 설계합니다.' },
  { step: '03', title: '구축', desc: '2주 단위의 빠른 실험으로 실제 현업에서 검증하며 만듭니다.' },
  { step: '04', title: '운영', desc: '도입 이후에도 성능과 위험을 지속적으로 모니터링합니다.' },
]

const metrics = [
  { value: '120+', label: '엔터프라이즈 고객사' },
  { value: '99.98%', label: '위협 탐지 정확도' },
  { value: '6주', label: '평균 PoC 완료 기간' },
]

export function Approach() {
  return (
    <section id="approach" className="scroll-mt-16 bg-ink py-24 text-ink-foreground md:py-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6">
        <div className="flex flex-col gap-5">
          <p className="font-mono text-xs font-medium tracking-widest text-signal">HOW WE WORK</p>
          <h2 className="max-w-2xl text-3xl font-bold leading-snug tracking-tight text-balance md:text-4xl">
            작게 시작해서, 확실하게 확장합니다.
          </h2>
        </div>

        <ol className="grid gap-px overflow-hidden rounded-3xl bg-ink-foreground/10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.step} className="flex flex-col gap-6 bg-ink p-8">
              <span className="font-mono text-sm text-ink-foreground/40">{s.step}</span>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-bold">{s.title}</h3>
                <p className="text-sm leading-relaxed text-ink-foreground/65">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        <dl className="grid gap-10 border-t border-ink-foreground/10 pt-12 sm:grid-cols-3">
          {metrics.map((m) => (
            <div key={m.label} className="flex flex-col gap-2">
              <dt className="order-2 text-sm text-ink-foreground/60">{m.label}</dt>
              <dd className="order-1 text-4xl font-black tracking-tight md:text-5xl">{m.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
