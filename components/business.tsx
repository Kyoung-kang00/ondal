import { ShieldCheck, Bot, ScanEye, Compass, ArrowUpRight } from 'lucide-react'

const services = [
  {
    icon: ShieldCheck,
    name: 'Securus Guard',
    title: 'AI 보안 플랫폼',
    desc: '생성형 AI 사용 과정의 개인정보 유출, 프롬프트 공격, 부정확한 응답을 실시간으로 탐지하고 차단합니다.',
    tags: ['데이터 비식별화', '프롬프트 방어', '감사 로그'],
    featured: true,
  },
  {
    icon: Bot,
    name: 'Securus Agent',
    title: '기업용 AI 에이전트',
    desc: '사내 문서와 시스템을 이해하는 AI 에이전트가 반복 업무를 자동화하고, 근거 있는 답변을 제공합니다.',
    tags: ['사내 지식 검색', '업무 자동화'],
  },
  {
    icon: ScanEye,
    name: 'Securus Vision',
    title: '비전 AI 솔루션',
    desc: '영상 속 이상 상황을 스스로 인식해 산업 현장의 안전과 품질을 지킵니다.',
    tags: ['이상 탐지', '품질 검사'],
  },
  {
    icon: Compass,
    name: 'AI Transformation',
    title: 'AI 전환 컨설팅',
    desc: '어디에 AI를 써야 할지부터 함께 고민합니다. 전략 수립부터 거버넌스 설계까지 동행합니다.',
    tags: ['전략 수립', 'AI 거버넌스'],
    wide: true,
  },
]

export function Business() {
  return (
    <section id="business" className="scroll-mt-16 bg-card py-24 md:py-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="flex flex-col gap-5">
            <p className="font-mono text-xs font-medium tracking-widest text-primary">BUSINESS</p>
            <h2 className="text-3xl font-bold leading-snug tracking-tight text-balance md:text-4xl">
              안전한 AI, 그 시작부터 끝까지
            </h2>
          </div>
          <p className="max-w-sm leading-relaxed text-muted-foreground text-pretty">
            보안, 자동화, 비전, 전략까지. 기업의 AI 여정에 필요한 모든 것을 하나의 팀이 책임집니다.
          </p>
        </div>

        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = s.icon
            return (
              <li
                key={s.name}
                className={
                  s.featured
                    ? 'group flex flex-col justify-between gap-10 rounded-3xl bg-primary p-8 text-primary-foreground lg:row-span-2'
                    : `group flex flex-col justify-between gap-10 rounded-3xl border border-border bg-background p-8 transition-colors hover:border-primary/40 ${s.wide ? 'md:col-span-2' : ''}`
                }
              >
                <div className="flex items-start justify-between">
                  <span
                    className={
                      s.featured
                        ? 'flex size-12 items-center justify-center rounded-2xl bg-primary-foreground/15'
                        : 'flex size-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground'
                    }
                  >
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <ArrowUpRight
                    className="size-5 opacity-40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <p
                    className={
                      s.featured
                        ? 'font-mono text-xs tracking-wider text-primary-foreground/70'
                        : 'font-mono text-xs tracking-wider text-muted-foreground'
                    }
                  >
                    {s.name}
                  </p>
                  <h3 className={s.featured ? 'text-3xl font-bold' : 'text-xl font-bold'}>{s.title}</h3>
                  <p
                    className={
                      s.featured
                        ? 'leading-relaxed text-primary-foreground/80'
                        : 'text-sm leading-relaxed text-muted-foreground'
                    }
                  >
                    {s.desc}
                  </p>
                  <ul className="flex flex-wrap gap-2 pt-2">
                    {s.tags.map((t) => (
                      <li
                        key={t}
                        className={
                          s.featured
                            ? 'rounded-full bg-primary-foreground/15 px-3 py-1 text-xs'
                            : 'rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground'
                        }
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
