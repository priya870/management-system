import { Box } from '@chakra-ui/react';
import './App.css';
import Nav from './Components/Navbar/Navbar';
import AllRoutes from './Routes/AllRoutes';


function App() {
  return (
    <Box>
      <Nav />
      <AllRoutes />
    </Box>
  );
}

export default App;
