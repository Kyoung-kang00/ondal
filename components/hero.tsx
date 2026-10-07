import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { TrustConsole } from '@/components/trust-console'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-16 md:pt-24 lg:grid-cols-12 lg:gap-8">
        <div className="flex flex-col gap-8 lg:col-span-6">
          <p className="inline-flex w-fit animate-in fade-in slide-in-from-bottom-2 items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground duration-700">
            <span className="size-1.5 rounded-full bg-signal" aria-hidden="true" />
            Trusted AI for Enterprise
          </p>

          <h1 className="animate-in fade-in slide-in-from-bottom-4 fill-mode-both text-4xl font-black leading-tight tracking-tight text-balance delay-100 duration-700 md:text-6xl md:leading-[1.1]">
            AI가 일하는 시대,
            <br />
            <span className="text-primary">신뢰</span>를 설계합니다.
          </h1>

          <p className="max-w-lg animate-in fade-in slide-in-from-bottom-4 fill-mode-both text-base leading-relaxed text-muted-foreground text-pretty delay-200 duration-700 md:text-lg">
            시큐러스는 기업이 AI를 더 빠르게, 그리고 더 안전하게 쓸 수 있도록 돕습니다. 데이터 보호부터 AI
            에이전트 구축까지, 실제 업무에서 작동하는 AI를 만듭니다.
          </p>

          <div className="flex animate-in fade-in slide-in-from-bottom-4 fill-mode-both flex-wrap items-center gap-3 delay-300 duration-700">
            <a
              href="#contact"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              도입 상담 받기
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#business"
              className="inline-flex h-12 items-center rounded-full border border-border bg-card px-6 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              사업분야 보기
            </a>
          </div>
        </div>

        <div className="relative animate-in fade-in zoom-in-95 fill-mode-both delay-200 duration-1000 lg:col-span-6">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-muted sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/images/hero.png"
              alt="푸른 빛이 흐르는 유리 소재의 AI 프로세서 칩"
              fill
              priority
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-x-4 bottom-4 sm:inset-x-auto sm:-left-8 sm:bottom-8 sm:w-80">
            <TrustConsole />
          </div>
        </div>
      </div>
    </section>
  )
}
