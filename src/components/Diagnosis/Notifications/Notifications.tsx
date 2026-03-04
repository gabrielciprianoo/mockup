import './Notifications.css';

interface Notification {
  id: number;
  type: 'parts' | 'approval' | 'complete' | 'alert';
  message: string;
  time: string;
  unread: boolean;
}

const mockNotifications: Notification[] = [
  { id: 1, type: 'parts', message: 'Repuestos solicitados para ABC-1234 han llegado', time: 'Hace 5 min', unread: true },
  { id: 2, type: 'approval', message: 'Presupuesto #4582 menunggu aprobación para XYZ-9876', time: 'Hace 15 min', unread: true },
  { id: 3, type: 'complete', message: 'Diagnóstico de GHI-2345 completado', time: 'Hace 1 hora', unread: false },
  { id: 4, type: 'alert', message: 'Vehículo JKL-8765 lleva 48h sin actividad', time: 'Hace 2 horas', unread: true },
  { id: 5, type: 'parts', message: 'Falta repuesto para DEF-4567 - Solicitar nuevamente', time: 'Hace 3 horas', unread: false },
];

const typeIcons: Record<Notification['type'], string> = {
  parts: '📦',
  approval: '📋',
  complete: '✅',
  alert: '⚠️',
};

export function Notifications() {
  const unreadCount = mockNotifications.filter(n => n.unread).length;

  return (
    <div className="notifications-container">
      <div className="notifications-header">
        <h3 className="notifications-title">Notificaciones</h3>
        {unreadCount > 0 && <span className="notification-badge">{unreadCount}</span>}
      </div>
      <div className="notifications-list">
        {mockNotifications.map((notification) => (
          <div key={notification.id} className={`notification-item ${notification.unread ? 'unread' : ''}`}>
            <div className={`notification-icon ${notification.type}`}>
              {typeIcons[notification.type]}
            </div>
            <div className="notification-content">
              <p className="notification-text">{notification.message}</p>
              <span className="notification-time">{notification.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
