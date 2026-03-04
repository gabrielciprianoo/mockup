import { useState, useRef, useEffect } from 'react';
import { DiagnosisPanel } from './DiagnosisPanel/DiagnosisPanel';
import { WorkList, type Vehicle } from './WorkList/WorkList';
import { IntakeForm } from './IntakeForm/IntakeForm';
import { PhotoUpload } from './PhotoUpload/PhotoUpload';
import { Notifications } from './Notifications/Notifications';
import { VehicleHistory } from './VehicleHistory/VehicleHistory';
import { BudgetApproval } from './BudgetApproval/BudgetApproval';
import { VehicleDetailModal } from './VehicleDetailModal/VehicleDetailModal';
import './Diagnosis.css';

type PopoverType = 'notifications' | 'history' | 'budget' | null;

export function Diagnosis() {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [activePopover, setActivePopover] = useState<PopoverType>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setActivePopover(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleVehicleSelect = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
  };

  const handleCloseModal = () => {
    setSelectedVehicle(null);
  };

  const togglePopover = (popover: PopoverType) => {
    setActivePopover(activePopover === popover ? null : popover);
  };

  const mockNotificationCount = 3;
  const mockBudgetCount = 2;

  return (
    <div className="diagnosis-container">
      <header className="diagnosis-header">
        <div className="header-left">
          <h1>Área de Diagnóstico</h1>
          <span className="badge">En línea</span>
        </div>
        
        <div className="header-actions" ref={popoverRef}>
          <button 
            className="header-btn" 
            onClick={() => togglePopover('history')}
            title="Historial"
          >
            📜
            <span className="btn-badge">1</span>
          </button>
          
          <button 
            className="header-btn" 
            onClick={() => togglePopover('notifications')}
            title="Notificaciones"
          >
            🔔
            {mockNotificationCount > 0 && <span className="btn-badge">{mockNotificationCount}</span>}
          </button>
          
          <button 
            className="header-btn" 
            onClick={() => togglePopover('budget')}
            title="Presupuestos"
          >
            💰
            {mockBudgetCount > 0 && <span className="btn-badge">{mockBudgetCount}</span>}
          </button>
        </div>

        {activePopover && (
          <div className="popover-overlay">
            <div className={`popover ${activePopover}`}>
              <div className="popover-header">
                <span className="popover-title">
                  {activePopover === 'notifications' && 'Notificaciones'}
                  {activePopover === 'history' && 'Historial del Vehículo'}
                  {activePopover === 'budget' && 'Presupuestos'}
                </span>
                <button className="popover-close" onClick={() => setActivePopover(null)}>✕</button>
              </div>
              <div className="popover-body">
                {activePopover === 'notifications' && <Notifications />}
                {activePopover === 'history' && <VehicleHistory />}
                {activePopover === 'budget' && <BudgetApproval />}
              </div>
            </div>
          </div>
        )}
      </header>
      
      <div className="diagnosis-grid">
        <div className="diagnosis-main">
          <WorkList onVehicleSelect={handleVehicleSelect} />
          <div className="diagnosis-bottom-grid">
            <IntakeForm />
            <PhotoUpload />
          </div>
        </div>
      </div>

      <DiagnosisPanel />

      {selectedVehicle && (
        <VehicleDetailModal
          vehicle={selectedVehicle}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}
