import { ClockIcon } from '@heroicons/react/24/outline'
import { KPICard } from '../KPICard/KPICard'
import { ActividadReciente } from '../ActividadReciente/ActividadReciente'
import { GraficaProductividad } from '../GraficaProductividad/GraficaProductividad'
import { InsigniaBadge } from '../InsigniaBadge/InsigniaBadge'
import { InsigniaGroup } from '../InsigniaGroup/InsigniaGroup'
import { kpis, comandos } from '../../data/mockData'
import type { ActividadItem, Perfil } from '../../types'
import styles from './EstadisticasPanel.module.css'

interface Props {
  perfil: Perfil
  actividad: ActividadItem[]
  onEjecutar: (comandoId: string) => void
}

function getFirstName(nombre: string) {
  return nombre.split(' ')[0]
}

export function EstadisticasPanel({ perfil, actividad, onEjecutar }: Props) {
  const kpiList = kpis[perfil.id]

  return (
    <div className={styles.panel}>

      {/* ── Greeting ── */}
      <div className={styles.greeting}>
        <div className={styles.greetingLeft}>
          <h1 className={styles.greetingName}>
            Hola, {getFirstName(perfil.nombre)}
          </h1>
          <div className={styles.greetingMeta}>
            <ClockIcon className={styles.metaIcon} />
            <span>Turno {perfil.turno}</span>
            <span className={styles.turnoChip}>En turno</span>
          </div>
        </div>
        <div className={styles.insignias}>
          {perfil.insignias.map((ins) => (
            <InsigniaBadge key={ins} nombre={ins} size="md" />
          ))}
        </div>
      </div>

      {/* ── Commands ── */}
      <section className={styles.comandosSection}>
        {perfil.insignias.map((ins) => {
          const cmds = comandos.filter((c) => c.insignia === ins)
          return (
            <InsigniaGroup
              key={ins}
              insigniaNombre={ins}
              comandosList={cmds}
              onEjecutar={onEjecutar}
            />
          )
        })}
      </section>

      {/* ── Secondary: metrics + chart + activity ── */}
      <div className={styles.secondary}>
        <div className={styles.secLeft}>
          <p className={styles.secLabel}>Métricas del día</p>
          <div className={styles.kpiGrid}>
            {kpiList.map((kpi, i) => (
              <KPICard key={i} kpi={kpi} />
            ))}
          </div>
          <div className={styles.chartCard}>
            <GraficaProductividad />
          </div>
        </div>

        <div className={styles.secRight}>
          <p className={styles.secLabel}>Actividad reciente</p>
          <div className={styles.activityCard}>
            <ActividadReciente actividad={actividad} perfil={perfil} />
          </div>
        </div>
      </div>

    </div>
  )
}
