# 📋 PLAN DE MOCKUP — DASHBOARD DE USUARIO
> Sistema de Roles · Taller de Transmisiones  
> Dos perfiles de demostración · Área de Recepción

---

## 1. CONCEPTO CENTRAL A DEMOSTRAR

```
ROL BASE (USUARIO)
  └── tiene INSIGNIAS  ←── aquí está la diferencia entre perfiles
        └── habilita COMANDOS
              └── compuestos de ACCIONES
```

> El Rol Base es siempre **USUARIO**.  
> Lo que cambia entre personas es qué insignias tienen asignadas.  
> Las insignias determinan exactamente qué comandos puede ejecutar cada quien.

---

## 2. LOS DOS PERFILES DE DEMOSTRACIÓN

### 👤 PERFIL A — Ana González
| Campo | Valor |
|---|---|
| Rol Base | USUARIO |
| Insignias | 🔴 RECEPCIONISTA |
| Comandos habilitados | 6 comandos |

### 👤 PERFIL B — Carlos Mendoza
| Campo | Valor |
|---|---|
| Rol Base | USUARIO |
| Insignias | 🔴 RECEPCIONISTA · 🟠 CAJA |
| Comandos habilitados | 8 comandos (6 + 2 nuevos) |

> La diferencia visible: Carlos tiene una insignia extra (CAJA)  
> que le habilita 2 comandos adicionales que Ana no puede ejecutar.

---

## 3. INSIGNIAS Y COMANDOS

### 🔴 Insignia: RECEPCIONISTA
> Compartida por ambos usuarios. Habilita los mismos 6 comandos para los dos.

| # | Comando | Acciones |
|---|---|---|
| 1 | `AGENDAR_CITA` | Verificar agenda · Registrar cita al cliente · Confirmar asistencia |
| 2 | `REGISTRAR_CLIENTE` | Escuchar solicitud · Evaluar capacidad · Registrar datos · Derivar con Coordinador |
| 3 | `CREAR_ORDEN_SERVICIO` | Hacer inventario físico · Crear O.S. · Entregar copia al cliente y Coordinador |
| 4 | `CERRAR_SERVICIO` | Informar al cliente situación del vehículo · Entregar vehículo |
| 5 | `RECIBIR_INSTRUCCIONES` | Seleccionar el trabajo · Recibir retroalimentación |
| 6 | `ENVIAR_INFORME_COORDINADOR` | Seleccionar el trabajo · Enviar informe al Coordinador · Recibir retroalimentación |

---

### 🟠 Insignia: CAJA
> Solo la tiene Carlos. Le habilita 2 comandos adicionales.

| # | Comando | Acciones |
|---|---|---|
| 7 | `SOLICITAR_ANTICIPO` | Registrar info de cobro · Guardar registro · Cobrar y generar recibo |
| 8 | `GENERAR_CORTE_DIARIO` | Generar reporte · Registrar ingresos · Registrar gastos · Generar facturas |

---

## 4. DIFERENCIA VISUAL ENTRE PERFILES

```
PERFIL A — Ana (solo RECEPCIONISTA)          PERFIL B — Carlos (RECEPCIONISTA + CAJA)
─────────────────────────────────────        ──────────────────────────────────────────
Insignias:  [🔴 RECEPCIONISTA]               Insignias:  [🔴 RECEPCIONISTA] [🟠 CAJA]

Comandos:                                    Comandos:
  🔴 AGENDAR_CITA              ✅              🔴 AGENDAR_CITA              ✅
  🔴 REGISTRAR_CLIENTE         ✅              🔴 REGISTRAR_CLIENTE         ✅
  🔴 CREAR_ORDEN_SERVICIO      ✅              🔴 CREAR_ORDEN_SERVICIO      ✅
  🔴 CERRAR_SERVICIO           ✅              🔴 CERRAR_SERVICIO           ✅
  🔴 RECIBIR_INSTRUCCIONES     ✅              🔴 RECIBIR_INSTRUCCIONES     ✅
  🔴 ENVIAR_INFORME_COORD      ✅              🔴 ENVIAR_INFORME_COORD      ✅
                                              🟠 SOLICITAR_ANTICIPO        ✅  ← NUEVO
                                              🟠 GENERAR_CORTE_DIARIO      ✅  ← NUEVO
```

---

## 5. LAYOUT DEL DASHBOARD

### Estructura general
```
┌──────────────────────────────────────────────────────────────────┐
│  HEADER: Avatar · Nombre · Rol Base · Insignias · Turno · 🔔     │
│                                              [ ← cambiar usuario ]│
├─────────────────────┬──────────────────────┬─────────────────────┤
│   COL 1             │   COL 2              │   COL 3             │
│   MIS COMANDOS      │   ACTIVIDAD /        │   NOTIFICACIONES    │
│   (por insignia)    │   ESTADÍSTICAS       │                     │
└─────────────────────┴──────────────────────┴─────────────────────┘
```

### Botón de cambio de usuario
- Ubicado en la **esquina superior derecha** del header
- Ícono pequeño de intercambio (⇄) con tooltip "Cambiar usuario"
- Al hacer clic alterna entre Perfil A y Perfil B
- Todo el dashboard se actualiza: header, insignias, comandos visibles, notificaciones y KPIs

---

## 6. DETALLE DE CADA BLOQUE

---

### BLOQUE A — HEADER

**Contenido:**
- Avatar con iniciales del usuario
- Nombre completo
- Chip de Rol Base → `USUARIO`
- Insignias activas como **octágonos** (forma usada en el diagrama)
  - Perfil A: `[🔴 RECEPCIONISTA]`
  - Perfil B: `[🔴 RECEPCIONISTA]` `[🟠 CAJA]`
- Indicador de turno activo
- Campana de notificaciones con contador
- Botón ⇄ pequeño en esquina derecha para cambiar perfil

**Color del header:**
- Tono suave del color de Recepción: `#fad9d5`

---

### BLOQUE B — MIS COMANDOS (columna izquierda)

Organizado por insignia. Cada insignia es un grupo con header de color.

**Perfil A — solo grupo RECEPCIONISTA:**
```
┌─ 🔴 RECEPCIONISTA ──────────────────────────────────┐
│  [AGENDAR CITA]  [REGISTRAR CLIENTE]  [CREAR O.S.]  │
│  [CERRAR SERVICIO]  [RECIBIR INST.]  [ENVIAR INF.]  │
└─────────────────────────────────────────────────────┘
```

**Perfil B — dos grupos:**
```
┌─ 🔴 RECEPCIONISTA ──────────────────────────────────┐
│  [AGENDAR CITA]  [REGISTRAR CLIENTE]  [CREAR O.S.]  │
│  [CERRAR SERVICIO]  [RECIBIR INST.]  [ENVIAR INF.]  │
└─────────────────────────────────────────────────────┘
┌─ 🟠 CAJA ───────────────────────────────────────────┐
│  [SOLICITAR ANTICIPO]  [GENERAR CORTE DIARIO]        │
└─────────────────────────────────────────────────────┘
```

**Cada tarjeta de comando muestra:**
- Nombre del comando
- Número de acciones que lo componen
- Color de la insignia a la que pertenece
- Botón `[ EJECUTAR ]`

**Al hacer clic en EJECUTAR:**
- Se abre un modal con las acciones como checkboxes
- El usuario las marca en orden
- Al completar todas aparece botón `FINALIZAR`
- Se registra en actividad reciente

---

### BLOQUE C — ESTADÍSTICAS (columna central)

**KPIs del día** (tarjetas numéricas):

| KPI | Perfil A | Perfil B |
|---|---|---|
| Citas agendadas | 6 | 6 |
| Clientes atendidos | 4 | 4 |
| Órdenes abiertas | 3 | 3 |
| Vehículos entregados | 1 | 1 |
| Anticipos cobrados | — (no visible) | $2,400 ✅ |
| Cortes generados | — (no visible) | 0 pendiente ⚠️ |

> Los KPIs de Caja solo aparecen en el Perfil B porque son habilitados por la insignia CAJA.

**Actividad reciente** (lista cronológica):
```
09:15  ✅  AGENDAR_CITA           → Cliente: López Martínez
09:42  ✅  REGISTRAR_CLIENTE      → Cliente: Ramírez Soto
10:05  ✅  CREAR_ORDEN_SERVICIO   → O.S. #0042 · Nissan Sentra
10:30  ✅  SOLICITAR_ANTICIPO     → O.S. #0042 · $800   (solo Perfil B)
11:00  🔄  REGISTRAR_CLIENTE      → En progreso...
```

**Gráfica de productividad:**
- Barras por día (Lun–Vie)
- Comandos ejecutados por día
- Usa Recharts (BarChart)

---

### BLOQUE D — NOTIFICACIONES (columna derecha)

| Tipo | Mensaje | Acción | Visible en |
|---|---|---|---|
| 🔔 Cita próxima | "Cita en 30 min · Sr. Díaz" | — | A y B |
| 🚗 Vehículo listo | "O.S. #0039 aprobada · lista para entrega" | `CERRAR_SERVICIO` | A y B |
| 📄 O.S. pendiente | "O.S. #0041 sin inventario" | `CREAR_ORDEN_SERVICIO` | A y B |
| 💰 Anticipo pendiente | "O.S. #0041 sin anticipo" | `SOLICITAR_ANTICIPO` | **Solo B** |
| 📊 Corte pendiente | "Corte diario · vence a las 14:00" | `GENERAR_CORTE_DIARIO` | **Solo B** |

> Las notificaciones de Caja solo aparecen si el usuario tiene la insignia CAJA.  
> Esto refuerza visualmente que las insignias filtran toda la experiencia.

---

## 7. FLUJO DE INTERACCIÓN

```
Usuario abre dashboard (Perfil A por defecto)
        ↓
Ve sus comandos agrupados bajo insignia RECEPCIONISTA
        ↓
Hace clic en un comando o en botón de acción de notificación
        ↓
Modal se abre con:
  · Nombre del comando
  · Insignia de origen (color)
  · Acciones como checkboxes en orden
  · Contexto si aplica (O.S., cliente)
        ↓
Marca cada acción completada
        ↓
Botón FINALIZAR → se cierra modal
        ↓
Actividad reciente se actualiza
Notificación se marca como resuelta
        ↓
Usuario hace clic en ⇄ (esquina derecha)
        ↓
Dashboard cambia a Perfil B (Carlos)
  · Header muestra nueva insignia CAJA
  · Aparece nuevo grupo de comandos CAJA
  · KPIs de Caja ahora visibles
  · Notificaciones de Caja ahora visibles
```

---

## 8. PALETA DE COLORES

| Elemento | Color |
|---|---|
| Header / fondo general Recepción | `#fad9d5` |
| Insignia y comandos RECEPCIONISTA | `#ae4132` (borde) · `#fad9d5` (fondo) |
| Insignia y comandos CAJA | `#d79b00` (borde) · `#ffe6cc` (fondo) |
| Acción completada | `#d5e8d4` |
| Acción en progreso | `#fff2cc` |
| Notificación urgente | `#f8cecc` |
| Chip Rol Base USUARIO | `#f5f5f5` · `#666666` |
| Fondo dashboard | `#f4f4f4` |
| Texto principal | `#333333` |

---

## 9. COMPONENTES REACT

| Componente | Descripción |
|---|---|
| `<DashboardLayout />` | Layout 3 columnas, recibe el perfil activo como prop |
| `<DashboardHeader />` | Avatar, nombre, rol, insignias, turno, botón ⇄ |
| `<InsigniaBadge />` | Octágono de color con nombre de la insignia |
| `<ComandosPanel />` | Columna izquierda, agrupa comandos por insignia |
| `<InsigniaGroup />` | Grupo de comandos bajo una insignia (header + cards) |
| `<ComandoCard />` | Tarjeta: nombre, # acciones, color, botón ejecutar |
| `<ComandoModal />` | Modal con checkboxes de acciones + botón finalizar |
| `<KPICard />` | Tarjeta métrica (solo renderiza si insignia habilitada) |
| `<ActividadReciente />` | Lista cronológica de comandos ejecutados |
| `<GraficaProductividad />` | BarChart semanal con Recharts |
| `<NotificacionCard />` | Tarjeta con mensaje + botón de comando directo |

---

## 10. DATOS MOCK

```js
const perfiles = [
  {
    id: "A",
    nombre: "Ana González",
    rolBase: "USUARIO",
    turno: "08:00 – 14:00",
    insignias: ["RECEPCIONISTA"]
  },
  {
    id: "B",
    nombre: "Carlos Mendoza",
    rolBase: "USUARIO",
    turno: "08:00 – 14:00",
    insignias: ["RECEPCIONISTA", "CAJA"]
  }
]

const insignias = {
  RECEPCIONISTA: {
    color: "#ae4132",
    fondo: "#fad9d5",
    label: "RECEPCIONISTA"
  },
  CAJA: {
    color: "#d79b00",
    fondo: "#ffe6cc",
    label: "CAJA"
  }
}

const comandos = [
  {
    id: "AGENDAR_CITA",
    label: "Agendar Cita",
    insignia: "RECEPCIONISTA",
    icono: "📅",
    acciones: [
      "Verificar agenda",
      "Registrar cita al cliente",
      "Confirmar asistencia con el cliente"
    ]
  },
  {
    id: "REGISTRAR_CLIENTE",
    label: "Registrar Cliente",
    insignia: "RECEPCIONISTA",
    icono: "👤",
    acciones: [
      "Escuchar solicitud del cliente",
      "Evaluar capacidad de atención",
      "Registrar datos del cliente",
      "Derivar con Coordinador de Taller"
    ]
  },
  {
    id: "CREAR_ORDEN_SERVICIO",
    label: "Crear Orden de Servicio",
    insignia: "RECEPCIONISTA",
    icono: "📄",
    acciones: [
      "Hacer inventario físico del vehículo",
      "Crear Orden de Servicio",
      "Entregar copia al cliente y Coordinador"
    ]
  },
  {
    id: "CERRAR_SERVICIO",
    label: "Cerrar Servicio",
    insignia: "RECEPCIONISTA",
    icono: "🚗",
    acciones: [
      "Informar al cliente la situación del vehículo",
      "Entregar vehículo al cliente"
    ]
  },
  {
    id: "RECIBIR_INSTRUCCIONES",
    label: "Recibir Instrucciones",
    insignia: "RECEPCIONISTA",
    icono: "📥",
    acciones: [
      "Seleccionar el trabajo",
      "Recibir retroalimentación del Coordinador"
    ]
  },
  {
    id: "ENVIAR_INFORME_COORDINADOR",
    label: "Enviar Informe a Coordinador",
    insignia: "RECEPCIONISTA",
    icono: "📤",
    acciones: [
      "Seleccionar el trabajo",
      "Enviar informe al Coordinador de Taller",
      "Recibir retroalimentación"
    ]
  },
  {
    id: "SOLICITAR_ANTICIPO",
    label: "Solicitar Anticipo",
    insignia: "CAJA",
    icono: "💰",
    acciones: [
      "Registrar información de cobro de anticipo",
      "Guardar registro de cobro",
      "Cobrar y generar recibo"
    ]
  },
  {
    id: "GENERAR_CORTE_DIARIO",
    label: "Generar Corte Diario",
    insignia: "CAJA",
    icono: "📊",
    acciones: [
      "Generar reporte",
      "Registrar ingresos",
      "Registrar gastos",
      "Generar facturas"
    ]
  }
]

const notificaciones = {
  A: [
    { tipo: "cita", mensaje: "Cita en 30 min · Sr. Díaz · Nissan Sentra", comando: null },
    { tipo: "entrega", mensaje: "O.S. #0039 aprobada · lista para entrega", comando: "CERRAR_SERVICIO" },
    { tipo: "os", mensaje: "O.S. #0041 sin inventario registrado", comando: "CREAR_ORDEN_SERVICIO" }
  ],
  B: [
    { tipo: "cita", mensaje: "Cita en 30 min · Sr. Díaz · Nissan Sentra", comando: null },
    { tipo: "entrega", mensaje: "O.S. #0039 aprobada · lista para entrega", comando: "CERRAR_SERVICIO" },
    { tipo: "os", mensaje: "O.S. #0041 sin inventario registrado", comando: "CREAR_ORDEN_SERVICIO" },
    { tipo: "anticipo", mensaje: "O.S. #0041 sin anticipo registrado", comando: "SOLICITAR_ANTICIPO" },
    { tipo: "corte", mensaje: "Corte diario pendiente · vence 14:00", comando: "GENERAR_CORTE_DIARIO" }
  ]
}

const kpis = {
  A: [
    { label: "Citas agendadas", valor: 6, icono: "📅" },
    { label: "Clientes atendidos", valor: 4, icono: "👤" },
    { label: "Órdenes abiertas", valor: 3, icono: "📄" },
    { label: "Vehículos entregados", valor: 1, icono: "🚗" }
  ],
  B: [
    { label: "Citas agendadas", valor: 6, icono: "📅" },
    { label: "Clientes atendidos", valor: 4, icono: "👤" },
    { label: "Órdenes abiertas", valor: 3, icono: "📄" },
    { label: "Vehículos entregados", valor: 1, icono: "🚗" },
    { label: "Anticipos cobrados", valor: "$2,400", icono: "💰" },
    { label: "Cortes generados", valor: 0, icono: "📊", alerta: true }
  ]
}

const actividadReciente = [
  { hora: "09:15", estado: "completado", comando: "AGENDAR_CITA", contexto: "Cliente: López Martínez" },
  { hora: "09:42", estado: "completado", comando: "REGISTRAR_CLIENTE", contexto: "Cliente: Ramírez Soto" },
  { hora: "10:05", estado: "completado", comando: "CREAR_ORDEN_SERVICIO", contexto: "O.S. #0042 · Nissan Sentra" },
  { hora: "10:30", estado: "completado", comando: "SOLICITAR_ANTICIPO", contexto: "O.S. #0042 · $800", soloInsignia: "CAJA" },
  { hora: "11:00", estado: "progreso", comando: "REGISTRAR_CLIENTE", contexto: "En progreso..." }
]
```

---

## 11. ORDEN DE CONSTRUCCIÓN

1. Datos mock y constantes
2. `<DashboardLayout />` con las 3 columnas y estado del perfil activo
3. `<DashboardHeader />` con botón ⇄ que alterna perfiles
4. `<InsigniaBadge />` — octágono de color
5. `<ComandoCard />` — tarjeta individual de comando
6. `<InsigniaGroup />` — agrupa las cards bajo una insignia
7. `<ComandosPanel />` — renderiza todos los grupos
8. `<ComandoModal />` — checkboxes de acciones
9. `<KPICard />` — métricas filtradas por insignia
10. `<ActividadReciente />` — lista filtrada por insignia
11. `<NotificacionCard />` — con botón de acción directa al modal
12. `<GraficaProductividad />` — BarChart de Recharts
13. Conectar notificaciones → abrir modal con comando preseleccionado