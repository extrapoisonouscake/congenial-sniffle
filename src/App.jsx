import {
  Routes, Route,
} from 'react-router-dom';
import { Box } from '@chakra-ui/react';
// import Fonts from './Fonts';
import MyInfo from './MyInfo';
// import Header from './Header';
import AboutMe from './AboutMe';
import Projects from './Projects';

function App() {
  return (
    <>
      {/* <Header /> */}
      <Box px={0} w="full" as="main">

        <Routes>
          <Route path="/" element={<MyInfo />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>

      </Box>
    </>
  );
}

export default App;
