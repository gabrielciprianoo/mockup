import {
  BellIcon,
  ArrowsRightLeftIcon,
} from '@heroicons/react/24/outline'
import type { Perfil } from '../../types'
import styles from './DashboardHeader.module.css'

interface Props {
  perfil: Perfil
  notificacionCount: number
  notifOpen: boolean
  onCambiarPerfil: () => void
  onOpenNotificaciones: () => void
}

export function DashboardHeader({ notificacionCount, notifOpen, onCambiarPerfil, onOpenNotificaciones }: Props) {
  return (
    <header className={styles.header}>
      <span className={styles.brand}>Papersheet</span>

      <div className={styles.actions}>
        <button
          className={`${styles.bellBtn} ${notifOpen ? styles.bellBtnActive : ''}`}
          onClick={onOpenNotificaciones}
          title="Notificaciones"
        >
          <BellIcon className={styles.bellIcon} />
          {notificacionCount > 0 && (
            <span className={styles.bellCount}>{notificacionCount}</span>
          )}
        </button>

        <button
          className={styles.switchBtn}
          onClick={onCambiarPerfil}
          title="Cambiar usuario"
        >
          <ArrowsRightLeftIcon className={styles.switchIcon} />
          <span>Cambiar usuario</span>
        </button>
      </div>
    </header>
  )
}
