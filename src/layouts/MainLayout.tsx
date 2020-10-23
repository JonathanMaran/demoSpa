import React, { useState } from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

// import components
import SignUp from '../components/organisms/SignUp';
import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';

interface Props {}

const MainLayout: React.FC<Props> = props => {

  function handleConnection(): void {
    setIsConnected(true);
  }

  const [ isConnected, setIsConnected ] = useState<boolean>(false);

  return (
    <Container>
      <Header />
      <Switch>
        {isConnected ? (
          <Route path='/' component={() => <h2>HOME</h2>} />
        ):(
          <Route path='/'>
            <SignUp setIsConnected={setIsConnected} />
          </Route>
        )}
      </Switch>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 500px;
  display:flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export default MainLayout;