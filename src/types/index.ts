export interface Perfil {
  id: 'A' | 'B'
  nombre: string
  rolBase: string
  turno: string
  insignias: string[]
}

export interface InsigniaConfig {
  color: string
  fondo: string
  label: string
}

export interface Comando {
  id: string
  label: string
  insignia: string
  icono: string
  acciones: string[]
}

export interface Notificacion {
  id: string
  tipo: string
  mensaje: string
  comando: string | null
  urgente?: boolean
}

export interface KPI {
  label: string
  valor: number | string
  icono: string
  alerta?: boolean
}

export interface ActividadItem {
  id: string
  hora: string
  estado: 'completado' | 'progreso'
  comando: string
  contexto: string
  soloInsignia?: string
}

export interface ProductividadDia {
  dia: string
  comandos: number
}
