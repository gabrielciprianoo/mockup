import { InsigniaGroup } from '../InsigniaGroup/InsigniaGroup'
import { comandos } from '../../data/mockData'
import type { Perfil } from '../../types'
import styles from './ComandosPanel.module.css'

interface Props {
  perfil: Perfil
  onEjecutar: (comandoId: string) => void
}

export function ComandosPanel({ perfil, onEjecutar }: Props) {
  return (
    <aside className={styles.panel}>
      <div className={styles.header}>
        <span className={styles.title}>Comandos</span>
      </div>
      <div className={styles.groups}>
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
      </div>
    </aside>
  )
}
