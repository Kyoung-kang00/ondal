import { cn } from '@/lib/utils'

export function Logo({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <span className={cn('flex items-center gap-2', className)}>
      <span
        aria-hidden="true"
        className="flex size-7 items-center justify-center rounded-lg bg-primary text-primary-foreground"
      >
        <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.4">
          <path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.4 7.5 9.5 4.3-1.1 7.5-4.9 7.5-9.5V6L12 3Z" strokeLinejoin="round" />
          <circle cx="12" cy="11.5" r="2.2" fill="currentColor" stroke="none" />
        </svg>
      </span>
      <span className={cn('text-lg font-bold tracking-tight', inverted ? 'text-ink-foreground' : 'text-foreground')}>
        시큐러스
      </span>
      <span
        className={cn(
          'hidden font-mono text-xs tracking-widest sm:inline',
          inverted ? 'text-ink-foreground/50' : 'text-muted-foreground',
        )}
      >
        SECURUS
      </span>
    </span>
  )
}
