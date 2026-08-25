import StatCard from '@/components/ui/StatCard'
import LabelBadge from '@/components/ui/LabelBadge'

interface Stat {
  value: string
  label: string
}

interface StatsBarProps {
  stats?: Stat[]
  label?: string
}

const DEFAULT_STATS: Stat[] = [
  { value: '50+', label: 'Performances' },
  { value: '9', label: 'Albums & EPs' },
  { value: '150+', label: 'Tracks' },
  { value: '40+', label: 'Music Videos' },
]

export default function StatsBar({ stats, label }: StatsBarProps) {
  const display = stats?.length ? stats : DEFAULT_STATS

  return (
    <section
      style={{
        background: 'var(--bg)',
        padding: '80px 0',
      }}
    >
      <div className="section-container">
        {label && (
          <div style={{ marginBottom: 32, textAlign: 'center' }}>
            <LabelBadge>Get Ready</LabelBadge>
          </div>
        )}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${display.length}, 1fr)`,
            gap: 2,
          }}
        >
          {display.map((s) => (
            <StatCard key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  )
}
