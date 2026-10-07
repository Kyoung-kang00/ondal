const lines = [
  { tag: 'SCAN', text: '프롬프트 입력 검사', status: 'OK' },
  { tag: 'MASK', text: '개인정보 3건 비식별화', status: 'OK' },
  { tag: 'GUARD', text: '탈옥 시도 차단', status: 'BLOCK' },
  { tag: 'AUDIT', text: '응답 근거 검증 완료', status: 'OK' },
]

export function TrustConsole() {
  return (
    <div
      role="img"
      aria-label="시큐러스 AI 가드 실시간 보호 로그 예시"
      className="rounded-2xl bg-ink p-4 text-ink-foreground shadow-2xl shadow-primary/20"
    >
      <div className="flex items-center justify-between border-b border-ink-foreground/10 pb-3">
        <span className="font-mono text-xs tracking-wider text-ink-foreground/60">SECURUS GUARD</span>
        <span className="flex items-center gap-1.5 font-mono text-xs text-signal">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-signal opacity-75" />
            <span className="relative inline-flex size-1.5 rounded-full bg-signal" />
          </span>
          LIVE
        </span>
      </div>
      <ul className="flex flex-col gap-2.5 pt-3">
        {lines.map((line, i) => (
          <li
            key={line.tag}
            className="flex items-center gap-3 text-xs opacity-0"
            style={{ animation: `console-line 0.5s ease-out ${0.8 + i * 0.35}s forwards` }}
          >
            <span className="w-12 font-mono text-ink-foreground/50">{line.tag}</span>
            <span className="flex-1 truncate">{line.text}</span>
            <span className={line.status === 'BLOCK' ? 'font-mono text-signal' : 'font-mono text-primary-foreground/80'}>
              {line.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
