import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import Hero from './components/Hero';


function App() {
  return (
    <div className='App'>
      <ErrorBoundary>
        <Hero heroName='Iron Man'/>
        <Hero heroName='Thor'/>
        <Hero heroName='Thanos'/>
      </ErrorBoundary>
    </div>
  );
}

export default App;
