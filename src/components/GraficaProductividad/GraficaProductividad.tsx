import { productividadData } from '../../data/mockData'
import styles from './GraficaProductividad.module.css'

const W = 280
const H = 56
const HOY_INDEX = 2

export function GraficaProductividad() {
  const data = productividadData
  const max = Math.max(...data.map((d) => d.comandos))
  const n = data.length

  const points = data.map((d, i) => ({
    x: (i / (n - 1)) * W,
    y: H - (d.comandos / max) * H,
    value: d.comandos,
    dia: d.dia,
    isHoy: i === HOY_INDEX,
  }))

  const linePoints = points.map((p) => `${p.x},${p.y}`).join(' ')

  const areaPoints = [
    `0,${H}`,
    ...points.map((p) => `${p.x},${p.y}`),
    `${W},${H}`,
  ].join(' ')

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title}>Productividad semanal</span>
        <span className={styles.peak}>{max} máx.</span>
      </div>
      <div className={styles.chart}>
        <svg
          width="100%"
          viewBox={`0 0 ${W} ${H + 28}`}
          preserveAspectRatio="none"
          style={{ overflow: 'visible' }}
        >
          <defs>
            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--recep-color)" stopOpacity="0.12" />
              <stop offset="100%" stopColor="var(--recep-color)" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Area fill */}
          <polygon
            points={areaPoints}
            fill="url(#areaGrad)"
          />

          {/* Line */}
          <polyline
            points={linePoints}
            fill="none"
            stroke="var(--ink-300)"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />

          {/* Dots + labels */}
          {points.map((p, i) => (
            <g key={i}>
              {/* Value label — only today */}
              {p.isHoy && (
                <text
                  x={p.x}
                  y={p.y - 9}
                  textAnchor="middle"
                  fontSize="11"
                  fontWeight="700"
                  fill="var(--recep-color)"
                >
                  {p.value}
                </text>
              )}

              {/* Dot */}
              <circle
                cx={p.x}
                cy={p.y}
                r={p.isHoy ? 5 : 3.5}
                fill={p.isHoy ? 'var(--recep-color)' : 'var(--surface)'}
                stroke={p.isHoy ? 'var(--recep-color)' : 'var(--ink-300)'}
                strokeWidth={p.isHoy ? 0 : 1.5}
              />

              {/* Day label */}
              <text
                x={p.x}
                y={H + 18}
                textAnchor="middle"
                fontSize="11"
                fontWeight={p.isHoy ? '700' : '400'}
                fill={p.isHoy ? 'var(--text-primary)' : 'var(--text-muted)'}
              >
                {p.dia}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  )
}
