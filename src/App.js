import TotalCostProvider from './JavaScript/Provider/TotalCostProvider.jsx';
import Header from './JavaScript/components/Header/Header.jsx';
import MainContent from './JavaScript/components/Main/MainContent.jsx';
import MainListFood from './JavaScript/components/Main/MainListFood.jsx';

function App() {
  return (
    <TotalCostProvider>
    <Header/>
    <MainContent/>
    <MainListFood/>
    </TotalCostProvider>
  );
}

export default App;
