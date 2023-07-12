import './App.css';
import AppRouting from './AppRouting';
import { DataProvider } from './context/DataProvider';

function App() {
  return (
    <div className='theme-light'>
      <div className='fixed inset-0 bg-primary overflow-auto'>
        <DataProvider>
          <AppRouting />
        </DataProvider>
      </div>
    </div>
  );
}

export default App;
