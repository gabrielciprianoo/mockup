import { useState } from 'react'
import { ClipboardDocumentListIcon, BanknotesIcon } from '@heroicons/react/24/outline'
import type { ComponentType } from 'react'
import styles from './InsigniaBadge.module.css'

const OCTAGON = 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'

interface InsigniaVisual {
  label: string
  Icon: ComponentType<{ className?: string }>
  bg: string
  shadow: string
  shimmer: string
  borderLight: string
  borderDark: string
  glowColor: string
}

const VISUAL: Record<string, InsigniaVisual> = {
  RECEPCIONISTA: {
    label: 'Recepcionista',
    Icon: ClipboardDocumentListIcon,
    bg: 'linear-gradient(145deg, #e8584a 0%, #c0392b 60%, #96261b 100%)',
    shadow: 'rgba(192,57,43,0.55)',
    shimmer: 'rgba(255,255,255,0.18)',
    borderLight: 'rgba(255,255,255,0.30)',
    borderDark: 'rgba(100,20,10,0.40)',
    glowColor: 'rgba(232,88,74,0.5)',
  },
  CAJA: {
    label: 'Caja',
    Icon: BanknotesIcon,
    bg: 'linear-gradient(145deg, #f0a500 0%, #c97d00 60%, #9a5e00 100%)',
    shadow: 'rgba(201,125,0,0.55)',
    shimmer: 'rgba(255,255,255,0.20)',
    borderLight: 'rgba(255,240,180,0.35)',
    borderDark: 'rgba(80,40,0,0.35)',
    glowColor: 'rgba(240,165,0,0.5)',
  },
}

const SIZES = {
  sm: { outer: 46, inner: 39, iconSize: 18, fontSize: '0.58rem', gap: 5, showLabel: false },
  md: { outer: 72, inner: 61, iconSize: 28, fontSize: '0.68rem', gap: 9, showLabel: true },
  lg: { outer: 100, inner: 85, iconSize: 38, fontSize: '0.8rem', gap: 13, showLabel: true },
}

interface Props {
  nombre: string
  size?: 'sm' | 'md' | 'lg'
  active?: boolean
}

export function InsigniaBadge({ nombre, size = 'md', active = true }: Props) {
  const visual = VISUAL[nombre]
  if (!visual) return null

  const { outer, inner, iconSize, fontSize, gap, showLabel } = SIZES[size]
  const { Icon } = visual
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={styles.badge}
      style={{
        gap,
        opacity: active ? 1 : 0.35,
        filter: active ? 'none' : 'grayscale(1)',
        cursor: active ? 'pointer' : 'default',
      }}
      onMouseEnter={() => active && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Octagon stack */}
      <div
        className={styles.outerRing}
        style={{
          width: outer,
          height: outer,
          transform: hovered ? 'scale(1.08)' : 'scale(1)',
        }}
      >
        {/* Glow */}
        <div
          className={styles.glow}
          style={{
            background: visual.glowColor,
            opacity: hovered ? 1 : 0.5,
            clipPath: OCTAGON,
          }}
        />

        {/* Bevel border */}
        <div
          className={styles.bevel}
          style={{
            width: outer,
            height: outer,
            background: `linear-gradient(145deg, ${visual.borderLight}, ${visual.borderDark})`,
            clipPath: OCTAGON,
          }}
        />

        {/* Main body */}
        <div
          className={styles.body}
          style={{
            width: inner,
            height: inner,
            background: visual.bg,
            boxShadow: `inset 0 2px 4px ${visual.shimmer}, inset 0 -2px 4px rgba(0,0,0,0.25), 0 6px 20px ${visual.shadow}`,
            clipPath: OCTAGON,
          }}
        >
          {/* Shimmer highlight */}
          <div
            className={styles.shimmer}
            style={{
              background: `linear-gradient(180deg, ${visual.shimmer} 0%, transparent 100%)`,
              clipPath: OCTAGON,
            }}
          />
        </div>

        {/* Icon */}
        <div
          className={styles.iconWrap}
          style={{ width: iconSize, height: iconSize }}
        >
          <Icon className={styles.icon} />
        </div>
      </div>

      {/* Label */}
      {showLabel && (
        <span className={styles.label} style={{ fontSize }}>
          {visual.label}
        </span>
      )}
    </div>
  )
}
