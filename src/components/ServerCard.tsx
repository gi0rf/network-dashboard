// src/components/ServerCard.tsx
import type { ServerData } from '../types/types';

export function ServerCard({ name, isOnline, ping }: Omit<ServerData, 'id'>) {

  return (
    <div className="card" style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem 0', borderRadius: '8px' }}>
      <h2>{name}</h2>
      <p>Estado: {isOnline ? "🟢 En línea" : "🔴 Caído"}</p>
      <p>Latencia: {ping} ms</p>
    </div>
  );
}