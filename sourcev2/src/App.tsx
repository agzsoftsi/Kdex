import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from './views/Home';
import { Container } from '@chakra-ui/react'
import { color, border } from './styles/styles'


function App() {
  return (
    <Container maxW='800px' minH='500px' bg={color.white} border={border.b3} borderColor={color.black} borderStyle='solid' borderRadius='15px'>
     <BrowserRouter>
      <Routes>

          <Route path="/" element={<Home />} />
          <Route path="comparator" element="comparator" />
          <Route path="game" element="Who's that Pokemon?" />
          <Route path="favorites" element="favorites" />

      </Routes>
    </BrowserRouter>
    </Container>
  );
}

export default App;
