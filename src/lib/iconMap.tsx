import {
  CalendarDaysIcon,
  UserPlusIcon,
  DocumentPlusIcon,
  CheckBadgeIcon,
  InboxArrowDownIcon,
  PaperAirplaneIcon,
  BanknotesIcon,
  CalculatorIcon,
  UsersIcon,
  ClipboardDocumentListIcon,
  TruckIcon,
  ChartBarIcon,
  CalendarIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline'
import type { ComponentType } from 'react'

type IconComponent = ComponentType<{ className?: string }>

export const COMMAND_ICONS: Record<string, IconComponent> = {
  AGENDAR_CITA: CalendarDaysIcon,
  REGISTRAR_CLIENTE: UserPlusIcon,
  CREAR_ORDEN_SERVICIO: DocumentPlusIcon,
  CERRAR_SERVICIO: CheckBadgeIcon,
  RECIBIR_INSTRUCCIONES: InboxArrowDownIcon,
  ENVIAR_INFORME_COORDINADOR: PaperAirplaneIcon,
  SOLICITAR_ANTICIPO: BanknotesIcon,
  GENERAR_CORTE_DIARIO: CalculatorIcon,
}

export const KPI_ICONS: Record<string, IconComponent> = {
  calendar: CalendarDaysIcon,
  users: UsersIcon,
  clipboard: ClipboardDocumentListIcon,
  truck: TruckIcon,
  banknotes: BanknotesIcon,
  chart: ChartBarIcon,
}

export const NOTIF_ICONS: Record<string, IconComponent> = {
  cita: CalendarIcon,
  entrega: TruckIcon,
  os: DocumentTextIcon,
  anticipo: BanknotesIcon,
  corte: CalculatorIcon,
}
