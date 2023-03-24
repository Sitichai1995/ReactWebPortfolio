import Hero from './component/Hero';
import Who from './component/Who';
import Work from './component/Work';
import Contact from './component/Contact';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./images/bg-img.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  &::-webkit-scrollbar{
    display: none;
  }
`


function App() {
  return (
    <Container>
      <Hero/>
      <Who/>
      <Work/>
      <Contact/>
    </Container>
  )
}

export default App