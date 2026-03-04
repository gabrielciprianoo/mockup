import './DiagnosisPanel.css';

const mockStats = {
  inProgress: 8,
  completedToday: 12,
  avgTime: '2.4h',
  waitingParts: 3,
};

const weeklyData = [
  { day: 'Lun', value: 65 },
  { day: 'Mar', value: 80 },
  { day: 'Mié', value: 72 },
  { day: 'Jue', value: 90 },
  { day: 'Vie', value: 85 },
];

const maxValue = Math.max(...weeklyData.map(d => d.value));

export function DiagnosisPanel() {
  return (
    <div className="panel-container">
      <h3 className="panel-title">Dashboard</h3>
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
      
      <div className="charts-section">
        <div className="chart-container">
          <h4 className="chart-title">Diagnósticos Semanales</h4>
          <div className="bar-chart">
            {weeklyData.map((data, index) => (
              <div key={index} className="bar-item">
                <div 
                  className={`bar ${['mon', 'tue', 'wed', 'thu', 'fri'][index]}`}
                  style={{ height: `${(data.value / maxValue) * 60}px` }}
                />
                <span className="bar-label">{data.day}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="chart-container">
          <h4 className="chart-title">Estado Actual</h4>
          <div className="pie-chart">
            <div className="pie-visual">
              <div className="pie-center"></div>
            </div>
            <div className="pie-legend">
              <div className="legend-item">
                <span className="legend-color completed"></span>
                <span>Completados: 45%</span>
              </div>
              <div className="legend-item">
                <span className="legend-color processing"></span>
                <span>En Proceso: 22%</span>
              </div>
              <div className="legend-item">
                <span className="legend-color waiting"></span>
                <span>Esperando: 18%</span>
              </div>
              <div className="legend-item">
                <span className="legend-color review"></span>
                <span>En Revisión: 15%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
