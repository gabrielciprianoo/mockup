import { useState } from 'react';
import { DiagnosisPanel } from './DiagnosisPanel/DiagnosisPanel';
import { WorkList, type Vehicle } from './WorkList/WorkList';
import { IntakeForm } from './IntakeForm/IntakeForm';
import { Notifications } from './Notifications/Notifications';
import { VehicleHistory } from './VehicleHistory/VehicleHistory';
import { PhotoUpload } from './PhotoUpload/PhotoUpload';
import { BudgetApproval } from './BudgetApproval/BudgetApproval';
import { VehicleDetailModal } from './VehicleDetailModal/VehicleDetailModal';
import './Diagnosis.css';

export function Diagnosis() {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  const handleVehicleSelect = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
  };

  const handleCloseModal = () => {
    setSelectedVehicle(null);
  };

  return (
    <div className="diagnosis-container">
      <header className="diagnosis-header">
        <h1>Área de Diagnóstico</h1>
        <span className="badge">En línea</span>
      </header>
      
      <div className="diagnosis-grid">
        <div className="diagnosis-sidebar">
          <DiagnosisPanel />
          <Notifications />
          <BudgetApproval />
        </div>
        
        <div className="diagnosis-main">
          <WorkList onVehicleSelect={handleVehicleSelect} />
          <div className="diagnosis-bottom-grid">
            <IntakeForm />
            <PhotoUpload />
            <VehicleHistory />
          </div>
        </div>
      </div>

      {selectedVehicle && (
        <VehicleDetailModal
          vehicle={selectedVehicle}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}
