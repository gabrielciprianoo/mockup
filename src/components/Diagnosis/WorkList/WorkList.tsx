import './WorkList.css';

interface Vehicle {
  id: number;
  plate: string;
  model: string;
  client: string;
  tech: string;
  techInitials: string;
  status: 'review' | 'processing' | 'waiting' | 'completed';
}

const mockVehicles: Vehicle[] = [
  { id: 1, plate: 'ABC-1234', model: 'Toyota Corolla 2022', client: 'Juan Pérez', tech: 'Carlos M.', techInitials: 'CM', status: 'processing' },
  { id: 2, plate: 'XYZ-9876', model: 'Honda Civic 2021', client: 'María García', tech: 'Ana L.', techInitials: 'AL', status: 'review' },
  { id: 3, plate: 'DEF-4567', model: 'Ford Focus 2020', client: 'Roberto Sánchez', tech: 'Miguel R.', techInitials: 'MR', status: 'waiting' },
  { id: 4, plate: 'GHI-2345', model: 'Nissan Sentra 2023', client: 'Laura Torres', tech: 'Carlos M.', techInitials: 'CM', status: 'processing' },
  { id: 5, plate: 'JKL-8765', model: 'Chevrolet Spark 2019', client: 'Pedro Ramírez', tech: 'Ana L.', techInitials: 'AL', status: 'completed' },
];

const statusLabels: Record<Vehicle['status'], string> = {
  review: 'En Revisión',
  processing: 'En Proceso',
  waiting: 'Esperando Rep.',
  completed: 'Completado',
};

export function WorkList() {
  return (
    <div className="worklist-container">
      <div className="worklist-header">
        <h3 className="worklist-title">Vehículos en Diagnóstico</h3>
        <span className="worklist-count">{mockVehicles.length} vehículos</span>
      </div>
      <div className="vehicle-list">
        {mockVehicles.map((vehicle) => (
          <div key={vehicle.id} className="vehicle-card">
            <div className="vehicle-info">
              <h4>{vehicle.plate}</h4>
              <span>{vehicle.model}</span>
            </div>
            <div className="vehicle-client">{vehicle.client}</div>
            <div className="vehicle-tech">
              <div className="tech-avatar">{vehicle.techInitials}</div>
              <span className="tech-name">{vehicle.tech}</span>
            </div>
            <span className={`vehicle-status ${vehicle.status}`}>
              {statusLabels[vehicle.status]}
            </span>
            <div className="vehicle-actions">
              <button className="action-btn" title="Ver detalles">👁</button>
              <button className="action-btn" title="Editar">✏</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
