import { XMarkIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { comandos, insignias } from '../../data/mockData'
import { NOTIF_ICONS, COMMAND_ICONS } from '../../lib/iconMap'
import type { Notificacion } from '../../types'
import styles from './NotificacionCard.module.css'

interface Props {
  notificacion: Notificacion
  onEjecutar: (comandoId: string) => void
  onDismiss: (id: string) => void
}

export function NotificacionCard({ notificacion, onEjecutar, onDismiss }: Props) {
  const cmd = notificacion.comando
    ? comandos.find((c) => c.id === notificacion.comando)
    : null
  const insConfig = cmd ? insignias[cmd.insignia] : null
  const NotifIcon = NOTIF_ICONS[notificacion.tipo] ?? NOTIF_ICONS['cita']
  const CmdIcon = cmd ? COMMAND_ICONS[cmd.id] : null

  return (
    <div className={`${styles.card} ${notificacion.urgente ? styles.urgente : ''}`}>
      <div className={styles.top}>
        <div className={`${styles.iconWrap} ${notificacion.urgente ? styles.iconWrapUrgent : ''}`}>
          <NotifIcon className={styles.icon} />
        </div>
        <p className={styles.mensaje}>{notificacion.mensaje}</p>
        <button
          className={styles.dismissBtn}
          onClick={() => onDismiss(notificacion.id)}
          title="Descartar"
        >
          <XMarkIcon className={styles.dismissIcon} />
        </button>
      </div>

      {cmd && (
        <button
          className={styles.accionBtn}
          style={{
            color: insConfig?.color,
            borderColor: insConfig ? `${insConfig.color}30` : undefined,
            backgroundColor: insConfig?.fondo,
          }}
          onClick={() => onEjecutar(cmd.id)}
        >
          {CmdIcon && <CmdIcon className={styles.accionIcon} />}
          <span>{cmd.label}</span>
          <ChevronRightIcon className={styles.accionArrow} />
        </button>
      )}
    </div>
  )
}
