import { insignias } from '../../data/mockData'
import { COMMAND_ICONS } from '../../lib/iconMap'
import type { Comando } from '../../types'
import styles from './ComandoCard.module.css'

interface Props {
  comando: Comando
  onEjecutar: (comandoId: string) => void
}

export function ComandoCard({ comando, onEjecutar }: Props) {
  const config = insignias[comando.insignia]
  const Icon = COMMAND_ICONS[comando.id]

  const iconBg = config?.color ? `${config.color}18` : 'var(--ink-100)'
  const iconColor = config?.color ?? 'var(--text-secondary)'

  return (
    <button
      className={styles.card}
      onClick={() => onEjecutar(comando.id)}
      title={comando.label}
    >
      <div
        className={styles.iconWrap}
        style={{ backgroundColor: iconBg, color: iconColor }}
      >
        {Icon && <Icon className={styles.icon} />}
      </div>

      <span className={styles.nombre}>{comando.label}</span>

      <span className={styles.pasos}>
        {comando.acciones.length} {comando.acciones.length === 1 ? 'paso' : 'pasos'}
      </span>
    </button>
  )
}
