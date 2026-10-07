const partners = ['한빛금융', 'NOVA MOTORS', '세림헬스케어', 'K-LOGIS', '오름에너지', 'PIXELBANK', '대한유통', 'BLUEWAVE']

export function Partners() {
  return (
    <section aria-label="함께하는 파트너" className="border-y border-border bg-card py-8">
      <p className="mb-6 text-center text-xs font-medium text-muted-foreground">
        금융·제조·의료·유통 분야의 리더들이 시큐러스와 함께합니다
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <ul className="flex w-max animate-marquee items-center gap-16">
          {[...partners, ...partners].map((name, i) => (
            <li
              key={`${name}-${i}`}
              aria-hidden={i >= partners.length}
              className="whitespace-nowrap text-lg font-bold tracking-tight text-muted-foreground/60"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
