import './App.css'

// 1. EL CONTRATO (Interface)
// Aquí le decimos a TypeScript qué datos necesita nuestra tarjeta para funcionar.
interface ServerProps {
  name: string;
  isOnline: boolean;
  ping: number;
}

// 2. EL COMPONENTE HIJO (La Tarjeta)
// Recibe los datos (props) y los dibuja en pantalla.
// Nota cómo usamos ": ServerProps" para obligar a que lleguen los datos correctos.
function ServerCard({ name, isOnline, ping }: ServerProps) {
  return (
    <div className="card" style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem 0', borderRadius: '8px' }}>
      <h2>{name}</h2>
      <p>Estado: {isOnline ? "🟢 En línea" : "🔴 Caído"}</p>
      <p>Latencia: {ping} ms</p>
    </div>
  );
}

// 3. EL COMPONENTE PADRE (La Aplicación principal)
// Aquí es donde juntamos todo y le pasamos la información a las tarjetas.
function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Dashboard de Monitoreo</h1>
      
      {/* Reutilizamos el componente ServerCard pasándole datos (props) diferentes */}
      <ServerCard name="Servidor Web Principal" isOnline={true} ping={24} />
      <ServerCard name="Base de Datos" isOnline={false} ping={999} />
      <ServerCard name="Firewall" isOnline={true} ping={5} />
    </div>
  )
}

export default App