import type { Perfil, InsigniaConfig, Comando, Notificacion, KPI, ActividadItem, ProductividadDia } from '../types'

export const perfiles: Perfil[] = [
  {
    id: 'A',
    nombre: 'Ana González',
    rolBase: 'USUARIO',
    turno: '08:00 – 14:00',
    insignias: ['RECEPCIONISTA'],
  },
  {
    id: 'B',
    nombre: 'Carlos Mendoza',
    rolBase: 'USUARIO',
    turno: '08:00 – 14:00',
    insignias: ['RECEPCIONISTA', 'CAJA'],
  },
]

export const insignias: Record<string, InsigniaConfig> = {
  RECEPCIONISTA: {
    color: '#f44315',
    fondo: '#ffeee9',
    label: 'RECEPCIONISTA',
  },
  CAJA: {
    color: '#e07b00',
    fondo: '#fff3e0',
    label: 'CAJA',
  },
}

export const comandos: Comando[] = [
  {
    id: 'AGENDAR_CITA',
    label: 'Agendar Cita',
    insignia: 'RECEPCIONISTA',
    icono: '📅',
    acciones: [
      'Verificar agenda',
      'Registrar cita al cliente',
      'Confirmar asistencia con el cliente',
    ],
  },
  {
    id: 'REGISTRAR_CLIENTE',
    label: 'Registrar Cliente',
    insignia: 'RECEPCIONISTA',
    icono: '👤',
    acciones: [
      'Escuchar solicitud del cliente',
      'Evaluar capacidad de atención',
      'Registrar datos del cliente',
      'Derivar con Coordinador de Taller',
    ],
  },
  {
    id: 'CREAR_ORDEN_SERVICIO',
    label: 'Crear Orden de Servicio',
    insignia: 'RECEPCIONISTA',
    icono: '📄',
    acciones: [
      'Hacer inventario físico del vehículo',
      'Crear Orden de Servicio',
      'Entregar copia al cliente y Coordinador',
    ],
  },
  {
    id: 'CERRAR_SERVICIO',
    label: 'Cerrar Servicio',
    insignia: 'RECEPCIONISTA',
    icono: '🚗',
    acciones: [
      'Informar al cliente la situación del vehículo',
      'Entregar vehículo al cliente',
    ],
  },
  {
    id: 'RECIBIR_INSTRUCCIONES',
    label: 'Recibir Instrucciones',
    insignia: 'RECEPCIONISTA',
    icono: '📥',
    acciones: [
      'Seleccionar el trabajo',
      'Recibir retroalimentación del Coordinador',
    ],
  },
  {
    id: 'ENVIAR_INFORME_COORDINADOR',
    label: 'Enviar Informe',
    insignia: 'RECEPCIONISTA',
    icono: '📤',
    acciones: [
      'Seleccionar el trabajo',
      'Enviar informe al Coordinador de Taller',
      'Recibir retroalimentación',
    ],
  },
  {
    id: 'SOLICITAR_ANTICIPO',
    label: 'Solicitar Anticipo',
    insignia: 'CAJA',
    icono: '💰',
    acciones: [
      'Registrar información de cobro de anticipo',
      'Guardar registro de cobro',
      'Cobrar y generar recibo',
    ],
  },
  {
    id: 'GENERAR_CORTE_DIARIO',
    label: 'Generar Corte Diario',
    insignia: 'CAJA',
    icono: '📊',
    acciones: [
      'Generar reporte',
      'Registrar ingresos',
      'Registrar gastos',
      'Generar facturas',
    ],
  },
]

export const notificaciones: Record<'A' | 'B', Notificacion[]> = {
  A: [
    { id: 'n1', tipo: 'cita', mensaje: 'Cita en 30 min · Sr. Díaz · Nissan Sentra', comando: null },
    { id: 'n2', tipo: 'entrega', mensaje: 'O.S. #0039 aprobada · lista para entrega', comando: 'CERRAR_SERVICIO' },
    { id: 'n3', tipo: 'os', mensaje: 'O.S. #0041 sin inventario registrado', comando: 'CREAR_ORDEN_SERVICIO' },
  ],
  B: [
    { id: 'n1', tipo: 'cita', mensaje: 'Cita en 30 min · Sr. Díaz · Nissan Sentra', comando: null },
    { id: 'n2', tipo: 'entrega', mensaje: 'O.S. #0039 aprobada · lista para entrega', comando: 'CERRAR_SERVICIO' },
    { id: 'n3', tipo: 'os', mensaje: 'O.S. #0041 sin inventario registrado', comando: 'CREAR_ORDEN_SERVICIO' },
    { id: 'n4', tipo: 'anticipo', mensaje: 'O.S. #0041 sin anticipo registrado', comando: 'SOLICITAR_ANTICIPO', urgente: true },
    { id: 'n5', tipo: 'corte', mensaje: 'Corte diario pendiente · vence 14:00', comando: 'GENERAR_CORTE_DIARIO', urgente: true },
  ],
}

export const kpis: Record<'A' | 'B', KPI[]> = {
  A: [
    { label: 'Citas agendadas', valor: 6, icono: 'calendar' },
    { label: 'Clientes atendidos', valor: 4, icono: 'users' },
    { label: 'Órdenes abiertas', valor: 3, icono: 'clipboard' },
    { label: 'Vehículos entregados', valor: 1, icono: 'truck' },
  ],
  B: [
    { label: 'Citas agendadas', valor: 6, icono: 'calendar' },
    { label: 'Clientes atendidos', valor: 4, icono: 'users' },
    { label: 'Órdenes abiertas', valor: 3, icono: 'clipboard' },
    { label: 'Vehículos entregados', valor: 1, icono: 'truck' },
    { label: 'Anticipos cobrados', valor: '$2,400', icono: 'banknotes' },
    { label: 'Cortes generados', valor: 0, icono: 'chart', alerta: true },
  ],
}

export const actividadInicial: ActividadItem[] = [
  { id: 'a1', hora: '09:15', estado: 'completado', comando: 'AGENDAR_CITA', contexto: 'Cliente: López Martínez' },
  { id: 'a2', hora: '09:42', estado: 'completado', comando: 'REGISTRAR_CLIENTE', contexto: 'Cliente: Ramírez Soto' },
  { id: 'a3', hora: '10:05', estado: 'completado', comando: 'CREAR_ORDEN_SERVICIO', contexto: 'O.S. #0042 · Nissan Sentra' },
  { id: 'a4', hora: '10:30', estado: 'completado', comando: 'SOLICITAR_ANTICIPO', contexto: 'O.S. #0042 · $800', soloInsignia: 'CAJA' },
  { id: 'a5', hora: '11:00', estado: 'progreso', comando: 'REGISTRAR_CLIENTE', contexto: 'En progreso...' },
]

export const productividadData: ProductividadDia[] = [
  { dia: 'Lun', comandos: 12 },
  { dia: 'Mar', comandos: 8 },
  { dia: 'Mié', comandos: 15 },
  { dia: 'Jue', comandos: 10 },
  { dia: 'Vie', comandos: 7 },
]
