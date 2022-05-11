import './App.css'
import CompC from './components/CompC';
import { UserProvider } from './components/userContext';


function App() {
  return (
    <div className='App'>
      <UserProvider value="Shivani">
        <CompC />
      </UserProvider>
    </div>
  );
}

export default App
