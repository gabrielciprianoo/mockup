import { CheckIcon, ArrowPathIcon } from '@heroicons/react/20/solid'
import { comandos, insignias } from '../../data/mockData'
import type { ActividadItem, Perfil } from '../../types'
import styles from './ActividadReciente.module.css'

interface Props {
  actividad: ActividadItem[]
  perfil: Perfil
}

export function ActividadReciente({ actividad, perfil }: Props) {
  const visible = actividad.filter(
    (a) => !a.soloInsignia || perfil.insignias.includes(a.soloInsignia)
  )

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Actividad reciente</h4>
      <ul className={styles.list}>
        {visible.map((item) => {
          const cmd = comandos.find((c) => c.id === item.comando)
          const insConfig = cmd ? insignias[cmd.insignia] : null
          const isProgreso = item.estado === 'progreso'

          return (
            <li key={item.id} className={styles.item}>
              <div
                className={`${styles.status} ${isProgreso ? styles.statusProgreso : styles.statusDone}`}
              >
                {isProgreso ? (
                  <ArrowPathIcon className={styles.statusIcon} />
                ) : (
                  <CheckIcon className={styles.statusIcon} />
                )}
              </div>
              <div className={styles.info}>
                <div className={styles.top}>
                  <span
                    className={styles.cmdLabel}
                    style={{ color: insConfig?.color }}
                  >
                    {cmd?.label ?? item.comando}
                  </span>
                  <span className={styles.hora}>{item.hora}</span>
                </div>
                <span className={styles.contexto}>{item.contexto}</span>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
