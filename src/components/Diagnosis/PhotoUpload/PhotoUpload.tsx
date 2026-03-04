import './PhotoUpload.css';

const mockPhotos = [
  { id: 1, category: 'motor' },
  { id: 2, category: 'frenos' },
  { id: 3, category: 'suspension' },
];

const categories = ['Todos', 'Motor', 'Frenos', 'Suspensión', 'Carrocería', 'Interior'];

export function PhotoUpload() {
  return (
    <div className="photo-container">
      <h3 className="photo-title">Fotos del Diagnóstico</h3>
      <div className="photo-upload-area">
        <div className="upload-icon">📷</div>
        <p className="upload-text"><span>Haz clic para subir</span> o arrastra archivos</p>
        <p className="upload-hint">JPG, PNG hasta 10MB</p>
      </div>
      <div className="photo-grid">
        {mockPhotos.map((photo) => (
          <div key={photo.id} className="photo-item">
            <span className="photo-placeholder">🖼️</span>
            <button className="photo-delete">✕</button>
          </div>
        ))}
        <div className="photo-item">
          <span className="photo-placeholder">+</span>
        </div>
      </div>
      <div className="photo-categories">
        {categories.map((cat) => (
          <span key={cat} className={`category-tag ${cat === 'Todos' ? 'active' : ''}`}>
            {cat}
          </span>
        ))}
      </div>
    </div>
  );
}
