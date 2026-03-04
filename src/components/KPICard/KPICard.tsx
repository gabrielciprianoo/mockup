import { ExclamationTriangleIcon } from '@heroicons/react/20/solid'
import type { KPI } from '../../types'
import styles from './KPICard.module.css'

interface Props {
  kpi: KPI
}

export function KPICard({ kpi }: Props) {
  return (
    <div className={`${styles.card} ${kpi.alerta ? styles.alerta : ''}`}>
      <span className={styles.valor}>{kpi.valor}</span>
      <span className={styles.label}>{kpi.label}</span>
      {kpi.alerta && (
        <ExclamationTriangleIcon className={styles.alertaIcon} />
      )}
    </div>
  )
}
