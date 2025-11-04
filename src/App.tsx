import './App.css'
import UserList from './components/UserList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">User Dashboard</h1>
        <UserList />
      </div>
    </div>
  );
}

export default App
