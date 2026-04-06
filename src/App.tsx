// src/App.tsx
import { useState } from 'react';
import './App.css';
import { ServerCard } from './components/ServerCard';
import { AddServerForm } from './components/AddServerForm'; 
import type { ServerData } from './types/types';

function App() {
  const [servers, setServers] = useState<ServerData[]>([
    { id: 'srv-001', name: "Servidor Web Principal", isOnline: true, ping: 24 },
    { id: 'srv-002', name: "Base de Datos", isOnline: false, ping: 999 },
    { id: 'srv-003', name: "Firewall", isOnline: true, ping: 5 }
  ]);

  const toggleServer = (id: string) => {
    const nuevosServidores = servers.map(server => {
      if (server.id === id) {
        return { ...server, isOnline: !server.isOnline };
      }
      return server;
    });
    setServers(nuevosServidores);
  };

  const handleAddServer = (newName: string, newPing: number) => {
    const nuevoServidor: ServerData = {
      
      id: `srv-${Date.now()}`, 
      name: newName,
      isOnline: true, 
      ping: newPing
    };

    setServers([...servers, nuevoServidor]);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Dashboard de Monitoreo</h1>
      

      <AddServerForm onAddServer={handleAddServer} />
      
      <div style={{ display: 'grid', gap: '1rem' }}>
        {servers.map((server) => (
          <div key={server.id} onClick={() => toggleServer(server.id)} style={{ cursor: 'pointer' }}>
            <ServerCard 
              name={server.name} 
              isOnline={server.isOnline} 
              ping={server.ping} 
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default App;