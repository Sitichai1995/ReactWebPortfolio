import React from 'react'
import styled from 'styled-components';
import Contact from './Contact';

const Section = styled.div`
    display: flex;
    justify-content: center;

    @media only screen and (max-width: 768px) {
      width: 100%;

    }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  @media only screen and (max-width: 768px) {
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }
`;

const Icon = styled.img`
  width: 40px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #00d1ff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

function Navbar() {
  return (
    <Section>
      <Container>
        <Icons>
        <a href='https://github.com/Sitichai1995'>
            <Icon src="./images/github.png"/>
        </a>
        <a href='https://www.linkedin.com/in/%E0%B8%AA%E0%B8%B4%E0%B8%97%E0%B8%98%E0%B8%B4%E0%B8%8A%E0%B8%B1%E0%B8%A2-%E0%B8%A0%E0%B8%B2%E0%B8%A9%E0%B8%B5%E0%B8%AA%E0%B8%A7%E0%B8%B1%E0%B8%AA%E0%B8%94%E0%B8%B4%E0%B9%8C-442b041b7/'>
            <Icon src="./images/linkedin.png" />
        </a>
        <Button onClick={()=>{window.location.href='https://drive.google.com/file/d/159AEcJVIFZOPzpWE0hhKVIsq0BPbC3s1/view?usp=sharing'}}>Resume</Button>
      </Icons>
      </Container>
    </Section>
  )
}

export default Navbar
