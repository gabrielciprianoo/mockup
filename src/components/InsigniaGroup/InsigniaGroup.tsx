import { ComandoCard } from '../ComandoCard/ComandoCard'
import { insignias } from '../../data/mockData'
import type { Comando } from '../../types'
import styles from './InsigniaGroup.module.css'

interface Props {
  insigniaNombre: string
  comandosList: Comando[]
  onEjecutar: (comandoId: string) => void
}

export function InsigniaGroup({ insigniaNombre, comandosList, onEjecutar }: Props) {
  const config = insignias[insigniaNombre]
  if (!config) return null

  return (
    <div className={styles.group}>
      <div className={styles.header}>
        <span className={styles.dot} style={{ backgroundColor: config.color }} />
        <span className={styles.nombre} style={{ color: config.color }}>
          {config.label}
        </span>
        <span className={styles.count}>{comandosList.length}</span>
      </div>
      <div className={styles.grid}>
        {comandosList.map((cmd) => (
          <ComandoCard key={cmd.id} comando={cmd} onEjecutar={onEjecutar} />
        ))}
      </div>
    </div>
  )
}
