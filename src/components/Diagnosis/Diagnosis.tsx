import { DiagnosisPanel } from './DiagnosisPanel/DiagnosisPanel';
import { WorkList } from './WorkList/WorkList';
import { IntakeForm } from './IntakeForm/IntakeForm';
import { Notifications } from './Notifications/Notifications';
import { VehicleHistory } from './VehicleHistory/VehicleHistory';
import { PhotoUpload } from './PhotoUpload/PhotoUpload';
import { BudgetApproval } from './BudgetApproval/BudgetApproval';
import './Diagnosis.css';

export function Diagnosis() {
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
          <WorkList />
          <div className="diagnosis-bottom-grid">
            <IntakeForm />
            <PhotoUpload />
            <VehicleHistory />
          </div>
        </div>
      </div>
    </div>
  );
}
