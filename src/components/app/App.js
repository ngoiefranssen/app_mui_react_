import { CssBaseline } from '@mui/material';
import Header from '../Header';
import SideMenu from '../SideMenu';
import './App.css';

function App() {
  return (
    <>
      <SideMenu />
      <div
        style={{
          paddingLeft: "270px",
          width: "100%",
          position: "fixed",
        }}
      >
        <Header />
      </div>
      <CssBaseline />
    </>
  );
}

export default App;
