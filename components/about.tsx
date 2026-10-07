import Image from 'next/image'

const values = [
  { title: 'Secure by Design', desc: '보안은 나중에 붙이는 기능이 아니라, 설계의 첫 줄입니다.' },
  { title: 'Built to Work', desc: '데모가 아닌, 현업의 하루를 바꾸는 AI를 만듭니다.' },
  { title: 'Move Fast, Together', desc: '고객의 팀과 한 팀처럼, 빠르게 실험하고 함께 성장합니다.' },
]

export function About() {
  return (
    <section id="about" className="scroll-mt-16 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:gap-20">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-muted lg:aspect-auto">
          <Image
            src="/images/team.png"
            alt="밝은 사무실에서 함께 회의하는 시큐러스 팀"
            fill
            sizes="(min-width: 1024px) 540px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <p className="font-mono text-xs font-medium tracking-widest text-primary">ABOUT US</p>
            <h2 className="text-3xl font-bold leading-snug tracking-tight text-balance md:text-4xl">
              기술은 빠르게, 신뢰는 단단하게.
            </h2>
            <p className="leading-relaxed text-muted-foreground text-pretty">
              시큐러스(Securus)는 라틴어로 {"'"}안심할 수 있는{"'"}이라는 뜻입니다. 우리는 AI가 기업의 핵심 업무에
              들어가는 순간, 가장 중요한 것은 성능만큼이나 신뢰라고 믿습니다. 보안 엔지니어와 AI 연구자가 한 팀으로
              일하며, 기업이 안심하고 쓸 수 있는 AI를 만듭니다.
            </p>
          </div>

          <dl className="flex flex-col divide-y divide-border border-y border-border">
            {values.map((v) => (
              <div key={v.title} className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-6">
                <dt className="w-48 shrink-0 font-bold">{v.title}</dt>
                <dd className="text-sm leading-relaxed text-muted-foreground">{v.desc}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
