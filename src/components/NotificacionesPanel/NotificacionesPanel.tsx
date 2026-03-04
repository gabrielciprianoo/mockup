import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { NotificacionCard } from '../NotificacionCard/NotificacionCard'
import type { Notificacion, Perfil } from '../../types'
import styles from './NotificacionesPanel.module.css'

interface Props {
  perfil: Perfil
  notificaciones: Notificacion[]
  onEjecutar: (comandoId: string) => void
  onDismiss: (id: string) => void
}

export function NotificacionesPanel({ perfil, notificaciones, onEjecutar, onDismiss }: Props) {
  return (
    <aside className={styles.panel}>
      <div className={styles.titleRow}>
        <span className={styles.title}>Notificaciones</span>
        {notificaciones.length > 0 && (
          <span className={styles.badge}>{notificaciones.length}</span>
        )}
      </div>

      {notificaciones.length === 0 ? (
        <div className={styles.empty}>
          <div className={styles.emptyIconWrap}>
            <CheckCircleIcon className={styles.emptyIcon} />
          </div>
          <p className={styles.emptyText}>Todo al día, {perfil.nombre.split(' ')[0]}</p>
        </div>
      ) : (
        <div className={styles.list}>
          {notificaciones.map((n) => (
            <NotificacionCard
              key={n.id}
              notificacion={n}
              onEjecutar={onEjecutar}
              onDismiss={onDismiss}
            />
          ))}
        </div>
      )}
    </aside>
  )
}
