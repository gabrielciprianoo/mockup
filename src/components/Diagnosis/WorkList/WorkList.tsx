import { useState, useMemo } from 'react';
import './WorkList.css';

export interface Vehicle {
  id: number;
  plate: string;
  model: string;
  client: string;
  tech: string;
  techInitials: string;
  status: 'review' | 'processing' | 'waiting' | 'completed';
  entryTime: string;
  km?: string;
  year?: number;
}

const mockVehicles: Vehicle[] = [
  { id: 1, plate: 'ABC-1234', model: 'Toyota Corolla 2022', client: 'Juan Pérez', tech: 'Carlos M.', techInitials: 'CM', status: 'processing', entryTime: '2h 15m' },
  { id: 2, plate: 'XYZ-9876', model: 'Honda Civic 2021', client: 'María García', tech: 'Ana L.', techInitials: 'AL', status: 'review', entryTime: '45m' },
  { id: 3, plate: 'DEF-4567', model: 'Ford Focus 2020', client: 'Roberto Sánchez', tech: 'Miguel R.', techInitials: 'MR', status: 'waiting', entryTime: '1d 3h' },
  { id: 4, plate: 'GHI-2345', model: 'Nissan Sentra 2023', client: 'Laura Torres', tech: 'Carlos M.', techInitials: 'CM', status: 'processing', entryTime: '3h 20m' },
  { id: 5, plate: 'JKL-8765', model: 'Chevrolet Spark 2019', client: 'Pedro Ramírez', tech: 'Ana L.', techInitials: 'AL', status: 'completed', entryTime: '4h' },
  { id: 6, plate: 'MNO-3456', model: 'Hyundai Tucson 2022', client: 'Sofia Hernández', tech: 'Miguel R.', techInitials: 'MR', status: 'review', entryTime: '20m' },
  { id: 7, plate: 'PQR-7890', model: 'Mazda 3 2021', client: 'Diego López', tech: 'Carlos M.', techInitials: 'CM', status: 'waiting', entryTime: '6h' },
  { id: 8, plate: 'STU-1122', model: 'Kia Sportage 2023', client: 'Carmen Ruiz', tech: 'Ana L.', techInitials: 'AL', status: 'processing', entryTime: '1h 10m' },
];

const statusLabels: Record<Vehicle['status'], string> = {
  review: 'En Revisión',
  processing: 'En Proceso',
  waiting: 'Esperando Rep.',
  completed: 'Completado',
};

const technicians = ['Todos', 'Carlos M.', 'Ana L.', 'Miguel R.'];
const statuses = ['Todos', 'review', 'processing', 'waiting', 'completed'];

interface WorkListProps {
  onVehicleSelect?: (vehicle: Vehicle) => void;
}

export function WorkList({ onVehicleSelect }: WorkListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('Todos');
  const [techFilter, setTechFilter] = useState('Todos');

  const filteredVehicles = useMemo(() => {
    return mockVehicles.filter((vehicle) => {
      const matchesSearch = 
        vehicle.plate.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vehicle.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vehicle.model.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesStatus = statusFilter === 'Todos' || vehicle.status === statusFilter;
      const matchesTech = techFilter === 'Todos' || vehicle.tech === techFilter;
      
      return matchesSearch && matchesStatus && matchesTech;
    });
  }, [searchTerm, statusFilter, techFilter]);

  const handleVehicleClick = (vehicle: Vehicle) => {
    if (onVehicleSelect) {
      onVehicleSelect(vehicle);
    }
  };

  return (
    <div className="worklist-container">
      <div className="worklist-header">
        <h3 className="worklist-title">Vehículos en Diagnóstico</h3>
        <span className="worklist-count">{mockVehicles.length} vehículos</span>
      </div>
      
      <div className="worklist-filters">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-input"
            placeholder="Buscar por placa, cliente o modelo..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          className="filter-select"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          {statuses.map((status) => (
            <option key={status} value={status}>
              {status === 'Todos' ? 'Todos los estados' : statusLabels[status as Vehicle['status']]}
            </option>
          ))}
        </select>
        <select
          className="filter-select"
          value={techFilter}
          onChange={(e) => setTechFilter(e.target.value)}
        >
          {technicians.map((tech) => (
            <option key={tech} value={tech}>
              {tech === 'Todos' ? 'Todos los técnicos' : tech}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-results">
        Mostrando {filteredVehicles.length} de {mockVehicles.length} vehículos
      </div>

      <div className="vehicle-list">
        {filteredVehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            className="vehicle-card"
            onClick={() => handleVehicleClick(vehicle)}
          >
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
              <span className="status-text">{statusLabels[vehicle.status]}</span>
              <span className="status-time">{vehicle.entryTime}</span>
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
