
import { useState } from 'react';


interface FormProps {
  onAddServer: (name: string, ping: number) => void;
}

export function AddServerForm({ onAddServer }: FormProps) {

  const [name, setName] = useState('');
  const [ping, setPing] = useState(0);

 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    if (name.trim() === '') return; 

    onAddServer(name, ping);

    
    setName('');
    setPing(0);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
      <h3>Agregar Nuevo Servidor</h3>
      
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '1rem' }}>
        <div>
          <label style={{ display: 'block', fontSize: '0.8rem' }}>Nombre del Equipo:</label>
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)} 
            placeholder="Ej: Router Principal"
            style={{ padding: '0.5rem' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '0.8rem' }}>Ping Inicial (ms):</label>
          <input 
            type="number" 
            value={ping} 
            onChange={(e) => setPing(Number(e.target.value))} 
            style={{ padding: '0.5rem', width: '80px' }}
          />
        </div>

        <button type="submit" style={{ padding: '0.5rem 1rem', marginTop: '1.2rem', cursor: 'pointer' }}>
           Agregar
        </button>
      </div>
    </form>
  );
}