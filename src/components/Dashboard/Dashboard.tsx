import { useState } from 'react'
import { DashboardHeader } from '../DashboardHeader/DashboardHeader'
import { EstadisticasPanel } from '../EstadisticasPanel/EstadisticasPanel'
import { NotificacionesPanel } from '../NotificacionesPanel/NotificacionesPanel'
import { ComandoModal } from '../ComandoModal/ComandoModal'
import { perfiles, notificaciones, actividadInicial, comandos } from '../../data/mockData'
import type { ActividadItem, Notificacion } from '../../types'
import styles from './Dashboard.module.css'

let nextId = 100

export function Dashboard() {
  const [perfilIdx, setPerfilIdx] = useState(0)
  const [modalComandoId, setModalComandoId] = useState<string | null>(null)
  const [actividad, setActividad] = useState<ActividadItem[]>(actividadInicial)
  const [notifDismissed, setNotifDismissed] = useState<Set<string>>(new Set())
  const [notifOpen, setNotifOpen] = useState(false)

  const perfil = perfiles[perfilIdx]

  const notifActivas: Notificacion[] = notificaciones[perfil.id].filter(
    (n) => !notifDismissed.has(perfil.id + '-' + n.id)
  )

  function handleCambiarPerfil() {
    setPerfilIdx((prev) => (prev === 0 ? 1 : 0))
    setNotifDismissed(new Set())
    setNotifOpen(false)
  }

  function handleEjecutar(comandoId: string) {
    setModalComandoId(comandoId)
    setNotifOpen(false)
  }

  function handleFinalizar(comandoId: string) {
    const cmd = comandos.find((c) => c.id === comandoId)
    if (!cmd) return
    const now = new Date()
    const hora = now.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' })
    const newItem: ActividadItem = {
      id: `new-${nextId++}`,
      hora,
      estado: 'completado',
      comando: comandoId,
      contexto: 'Completado ahora',
      soloInsignia: cmd.insignia !== 'RECEPCIONISTA' ? cmd.insignia : undefined,
    }
    setActividad((prev) => [newItem, ...prev.filter((a) => a.estado !== 'progreso' || a.comando !== comandoId)])
    setModalComandoId(null)
  }

  function handleDismiss(notifId: string) {
    setNotifDismissed((prev) => new Set([...prev, perfil.id + '-' + notifId]))
  }

  return (
    <div className={styles.root}>
      <DashboardHeader
        perfil={perfil}
        notificacionCount={notifActivas.length}
        notifOpen={notifOpen}
        onCambiarPerfil={handleCambiarPerfil}
        onOpenNotificaciones={() => setNotifOpen((v) => !v)}
      />

      <main className={styles.content}>
        <EstadisticasPanel
          perfil={perfil}
          actividad={actividad}
          onEjecutar={handleEjecutar}
        />
      </main>

      {notifOpen && (
        <>
          <div className={styles.notifBackdrop} onClick={() => setNotifOpen(false)} />
          <div className={styles.notifDropdown}>
            <NotificacionesPanel
              perfil={perfil}
              notificaciones={notifActivas}
              onEjecutar={handleEjecutar}
              onDismiss={handleDismiss}
            />
          </div>
        </>
      )}

      {modalComandoId && (
        <ComandoModal
          comandoId={modalComandoId}
          onClose={() => setModalComandoId(null)}
          onFinalizar={handleFinalizar}
        />
      )}
    </div>
  )
}
