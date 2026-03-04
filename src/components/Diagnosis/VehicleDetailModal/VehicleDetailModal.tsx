import { useState } from 'react';
import './VehicleDetailModal.css';

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

interface Note {
  id: number;
  author: string;
  text: string;
  time: string;
}

interface VehicleDetailModalProps {
  vehicle: Vehicle;
  onClose: () => void;
}

const mockNotes: Note[] = [
  { id: 1, author: 'Carlos M.', text: 'Se detectaron ruidos extraños en la dirección. Requiere revisión del sistema hidráulico.', time: 'Hace 1h' },
  { id: 2, author: 'Ana L.', text: 'Cliente reporta pérdida de potencia al acelerar.', time: 'Hace 2h' },
];

const mockPhotos = ['🔧', '⚙️', '🛠️', '📋'];

const statusLabels: Record<Vehicle['status'], string> = {
  review: 'En Revisión',
  processing: 'En Proceso',
  waiting: 'Esperando Rep.',
  completed: 'Completado',
};

const steps = [
  { key: 'review', label: 'Recepción' },
  { key: 'processing', label: 'Diagnóstico' },
  { key: 'waiting', label: 'Repuestos' },
  { key: 'completed', label: 'Entrega' },
];

export function VehicleDetailModal({ vehicle, onClose }: VehicleDetailModalProps) {
  const [notes, setNotes] = useState<Note[]>(mockNotes);
  const [newNote, setNewNote] = useState('');

  const currentStepIndex = steps.findIndex(s => s.key === vehicle.status);

  const handleAddNote = () => {
    if (newNote.trim()) {
      const note: Note = {
        id: Date.now(),
        author: 'Carlos M.',
        text: newNote,
        time: 'Ahora'
      };
      setNotes([note, ...notes]);
      setNewNote('');
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">{vehicle.plate} - {vehicle.model}</h2>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        
        <div className="modal-body">
          <div className="modal-section">
            <h3 className="section-title">📋 Información del Vehículo</h3>
            <div className="vehicle-detail-grid">
              <div className="detail-item">
                <span className="detail-label">Placa</span>
                <span className="detail-value">{vehicle.plate}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Estado</span>
                <span className={`status-badge ${vehicle.status}`}>{statusLabels[vehicle.status]}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Cliente</span>
                <span className="detail-value">{vehicle.client}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Técnico</span>
                <span className="detail-value">{vehicle.tech}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Año</span>
                <span className="detail-value">{vehicle.year}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Kilometraje</span>
                <span className="detail-value">{vehicle.km}</span>
              </div>
            </div>
          </div>

          <div className="modal-section">
            <h3 className="section-title">📊 Progreso del Diagnóstico</h3>
            <div className="timeline-horizontal">
              {steps.map((step, index) => {
                const isCompleted = index < currentStepIndex;
                const isActive = index === currentStepIndex;
                
                return (
                  <div
                    key={step.key}
                    className={`timeline-step ${isCompleted ? 'completed' : ''} ${isActive ? 'active' : ''}`}
                  >
                    <div className="timeline-dot">
                      {isCompleted ? '✓' : index + 1}
                    </div>
                    <span className="timeline-label">{step.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="modal-section">
            <h3 className="section-title">📝 Notas Técnicas</h3>
            <div className="notes-list">
              {notes.map((note) => (
                <div key={note.id} className="note-item">
                  <div className="note-header">
                    <span className="note-author">{note.author}</span>
                    <span className="note-time">{note.time}</span>
                  </div>
                  <p className="note-text">{note.text}</p>
                </div>
              ))}
            </div>
            <div className="note-input-wrapper">
              <textarea
                className="note-input"
                placeholder="Agregar una nota técnica..."
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
              />
              <button className="note-submit" onClick={handleAddNote}>
                Agregar
              </button>
            </div>
          </div>

          <div className="modal-section">
            <h3 className="section-title">📷 Fotos del Diagnóstico</h3>
            <div className="photo-grid-modal">
              {mockPhotos.map((photo, index) => (
                <div key={index} className="photo-thumb">{photo}</div>
              ))}
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-modal secondary">Ver Presupuesto</button>
          <button className="btn-modal primary">Actualizar Estado</button>
        </div>
      </div>
    </div>
  );
}
