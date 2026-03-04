import './BudgetApproval.css';

interface Budget {
  id: number;
  vehicle: string;
  description: string;
  amount: number;
  status: 'pending' | 'approved' | 'rejected';
}

const mockBudgets: Budget[] = [
  { id: 4582, vehicle: 'ABC-1234', description: 'Reemplazo bombines freno', amount: 450, status: 'pending' },
  { id: 4581, vehicle: 'XYZ-9876', description: 'Alineación y balanceo', amount: 120, status: 'approved' },
  { id: 4580, vehicle: 'DEF-4567', description: 'Cambio aceite y filtro', amount: 85, status: 'approved' },
  { id: 4579, vehicle: 'GHI-2345', description: 'Diagnóstico électrique', amount: 150, status: 'rejected' },
];

const statusLabels: Record<Budget['status'], string> = {
  pending: 'Pendiente',
  approved: 'Aprobado',
  rejected: 'Rechazado',
};

export function BudgetApproval() {
  const pending = mockBudgets.filter(b => b.status === 'pending').length;
  const approved = mockBudgets.filter(b => b.status === 'approved').length;
  const total = mockBudgets.reduce((sum, b) => sum + b.amount, 0);

  return (
    <div className="budget-container">
      <h3 className="budget-title">Presupuestos</h3>
      <div className="budget-summary">
        <div className="budget-card pending">
          <div className="budget-value">{pending}</div>
          <div className="budget-label">Pendientes</div>
        </div>
        <div className="budget-card approved">
          <div className="budget-value">{approved}</div>
          <div className="budget-label">Aprobados</div>
        </div>
        <div className="budget-card total">
          <div className="budget-value">${total}</div>
          <div className="budget-label">Total</div>
        </div>
      </div>
      <div className="budget-list">
        {mockBudgets.map((budget) => (
          <div key={budget.id} className="budget-item">
            <span className="budget-id">#{budget.id}</span>
            <div className="budget-info">
              <div className="budget-vehicle">{budget.vehicle}</div>
              <div className="budget-desc">{budget.description}</div>
            </div>
            <span className="budget-amount">${budget.amount}</span>
            <span className={`budget-status ${budget.status}`}>
              {statusLabels[budget.status]}
            </span>
          </div>
        ))}
      </div>
      <div className="budget-actions">
        <button className="btn-budget btn-approve">Aprobar Seleccionado</button>
        <button className="btn-budget btn-reject">Rechazar</button>
      </div>
    </div>
  );
}
