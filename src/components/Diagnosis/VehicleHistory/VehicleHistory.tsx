import './VehicleHistory.css';

interface HistoryEntry {
  id: number;
  type: 'maintenance' | 'repair' | 'diagnostic';
  title: string;
  description: string;
  date: string;
  km: string;
}

const mockHistory: HistoryEntry[] = [
  { id: 1, type: 'diagnostic', title: 'Diagnóstico actual', description: 'Revisión sistema de dirección', date: '04/03/2026', km: '45,230 km' },
  { id: 2, type: 'maintenance', title: 'Cambio de aceite', description: 'Aceite synthétique 5W-30', date: '15/01/2026', km: '42,100 km' },
  { id: 3, type: 'repair', title: 'Reemplazo de frenos', description: 'Pastillas y disco Del.', date: '20/11/2025', km: '38,500 km' },
  { id: 4, type: 'maintenance', title: 'Rotación de neumáticos', description: 'Alineación y balanceo', date: '05/09/2025', km: '35,000 km' },
  { id: 5, type: 'diagnostic', title: 'Diagnóstico motor', description: 'Verificación Check Engine', date: '10/07/2025', km: '30,200 km' },
];

export function VehicleHistory() {
  return (
    <div className="history-container">
      <h3 className="history-title">Historial del Vehículo</h3>
      <div className="history-vehicle">
        <div className="vehicle-icon">🚗</div>
        <div className="vehicle-details">
          <h4>ABC-1234</h4>
          <span>Toyota Corolla 2022</span>
        </div>
      </div>
      <div className="history-timeline">
        {mockHistory.map((entry) => (
          <div key={entry.id} className="history-item">
            <div className={`history-dot ${entry.type}`}></div>
            <div className="history-content">
              <h5>{entry.title}</h5>
              <p>{entry.description}</p>
              <span className="history-date">{entry.date} • {entry.km}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
