import './IntakeForm.css';

const symptoms = [
  'Ruido extraño',
  'Fuga de aceite',
  'Motor no enciende',
  'Frenos',
  'Dirección',
  'Suspensión',
  'Transmisión',
  'Sistema eléctrico',
  'Sobrecalentamiento',
];

export function IntakeForm() {
  return (
    <div className="intake-container">
      <h3 className="intake-title">Nuevo Diagnóstico</h3>
      <form className="intake-form">
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Placa</label>
            <input type="text" className="form-input" placeholder="ABC-1234" />
          </div>
          <div className="form-group">
            <label className="form-label">Técnico Asignado</label>
            <select className="form-select">
              <option value="">Seleccionar técnico</option>
              <option value="cm">Carlos M.</option>
              <option value="al">Ana L.</option>
              <option value="mr">Miguel R.</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Marca / Modelo</label>
            <input type="text" className="form-input" placeholder="Toyota Corolla 2022" />
          </div>
          <div className="form-group">
            <label className="form-label">Kilometraje</label>
            <input type="number" className="form-input" placeholder="0 km" />
          </div>
        </div>

        <div className="form-group full">
          <label className="form-label">Cliente</label>
          <input type="text" className="form-input" placeholder="Nombre del cliente" />
        </div>

        <div className="form-group full">
          <label className="form-label">Síntomas Reportados</label>
          <div className="symptoms-grid">
            {symptoms.map((symptom) => (
              <label key={symptom} className="symptom-checkbox">
                <input type="checkbox" />
                {symptom}
              </label>
            ))}
          </div>
        </div>

        <div className="form-group full">
          <label className="form-label">Descripción Adicional</label>
          <textarea className="form-textarea" placeholder="Describe los síntomas o problemas observados..." />
        </div>

        <div className="form-actions">
          <button type="button" className="btn btn-secondary">Cancelar</button>
          <button type="button" className="btn btn-primary">Iniciar Diagnóstico</button>
        </div>
      </form>
    </div>
  );
}
