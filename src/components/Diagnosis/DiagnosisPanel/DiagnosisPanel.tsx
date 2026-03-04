import './DiagnosisPanel.css';

const mockStats = {
  inProgress: 8,
  completedToday: 12,
  avgTime: '2.4h',
  waitingParts: 3,
};

export function DiagnosisPanel() {
  return (
    <div className="panel-container">
      <h3 className="panel-title">Métricas de Diagnóstico</h3>
      <div className="stats-grid">
        <div className="stat-card primary">
          <div className="stat-value">{mockStats.inProgress}</div>
          <div className="stat-label">En Proceso</div>
        </div>
        <div className="stat-card success">
          <div className="stat-value">{mockStats.completedToday}</div>
          <div className="stat-label">Completados Hoy</div>
        </div>
        <div className="stat-card warning">
          <div className="stat-value">{mockStats.avgTime}</div>
          <div className="stat-label">Tiempo Promedio</div>
        </div>
        <div className="stat-card info">
          <div className="stat-value">{mockStats.waitingParts}</div>
          <div className="stat-label">Esperando Repuestos</div>
        </div>
      </div>
    </div>
  );
}
