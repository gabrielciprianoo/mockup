import { DiagnosisPanel } from './DiagnosisPanel/DiagnosisPanel';
import { WorkList } from './WorkList/WorkList';
import { IntakeForm } from './IntakeForm/IntakeForm';
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
          <IntakeForm />
        </div>
        <WorkList />
      </div>
    </div>
  );
}
