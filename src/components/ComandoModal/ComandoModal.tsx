import { useState } from 'react'
import { XMarkIcon, CheckIcon } from '@heroicons/react/20/solid'
import { comandos, insignias } from '../../data/mockData'
import { COMMAND_ICONS } from '../../lib/iconMap'
import styles from './ComandoModal.module.css'

interface Props {
  comandoId: string
  onClose: () => void
  onFinalizar: (comandoId: string) => void
}

export function ComandoModal({ comandoId, onClose, onFinalizar }: Props) {
  const comando = comandos.find((c) => c.id === comandoId)
  const [checked, setChecked] = useState<boolean[]>(
    () => (comando ? new Array(comando.acciones.length).fill(false) : [])
  )

  if (!comando) return null

  const config = insignias[comando.insignia]
  const allDone = checked.every(Boolean)
  const completedCount = checked.filter(Boolean).length
  const Icon = COMMAND_ICONS[comando.id]

  function toggle(i: number) {
    setChecked((prev) => prev.map((v, idx) => (idx === i ? !v : v)))
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <div className={styles.headerLeft}>
            <div
              className={styles.iconWrap}
              style={{ backgroundColor: config ? `${config.color}15` : undefined, color: config?.color }}
            >
              {Icon && <Icon className={styles.icon} />}
            </div>
            <div>
              <h3 className={styles.title}>{comando.label}</h3>
              <span
                className={styles.insigniaTag}
                style={{ color: config?.color, backgroundColor: config ? `${config.color}12` : undefined, borderColor: config ? `${config.color}25` : undefined }}
              >
                {comando.insignia}
              </span>
            </div>
          </div>
          <button className={styles.closeBtn} onClick={onClose}>
            <XMarkIcon className={styles.closeIcon} />
          </button>
        </div>

        <div className={styles.body}>
          <div className={styles.progress}>
            <div className={styles.progressInfo}>
              <span className={styles.progressLabel}>Progreso</span>
              <span className={styles.progressCount}>
                {completedCount} / {checked.length}
              </span>
            </div>
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{
                  width: `${(completedCount / checked.length) * 100}%`,
                  backgroundColor: config?.color,
                }}
              />
            </div>
          </div>

          <ul className={styles.acciones}>
            {comando.acciones.map((accion, i) => (
              <li
                key={i}
                className={`${styles.accion} ${checked[i] ? styles.accionDone : ''}`}
                onClick={() => toggle(i)}
              >
                <div
                  className={`${styles.checkbox} ${checked[i] ? styles.checkboxChecked : ''}`}
                  style={checked[i]
                    ? { backgroundColor: config?.color, borderColor: config?.color }
                    : { borderColor: 'var(--border-strong)' }
                  }
                >
                  {checked[i] && <CheckIcon className={styles.checkIcon} />}
                </div>
                <span className={styles.accionLabel}>{accion}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.footer}>
          <button className={styles.cancelBtn} onClick={onClose}>
            Cancelar
          </button>
          <button
            className={`${styles.finalizarBtn} ${allDone ? styles.finalizarActive : ''}`}
            style={allDone ? { backgroundColor: config?.color, borderColor: config?.color } : {}}
            onClick={() => allDone && onFinalizar(comandoId)}
            disabled={!allDone}
          >
            {allDone ? 'Finalizar' : `${checked.length - completedCount} pendientes`}
          </button>
        </div>
      </div>
    </div>
  )
}
