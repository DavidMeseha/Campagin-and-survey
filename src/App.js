import './App.css';
import AppRouting from './AppRouting';
import { CreatePagePositionProvider } from './context/CreatePagePositionProvider';
import { DataProvider } from './context/DataProvider';

function App() {
  return (
    <div className='theme-light'>
      <div className='fixed inset-0 bg-primary overflow-auto'>
        <CreatePagePositionProvider>
          <DataProvider>
            <AppRouting />
          </DataProvider>
        </CreatePagePositionProvider>
      </div>
    </div>
  );
}

export default App;
