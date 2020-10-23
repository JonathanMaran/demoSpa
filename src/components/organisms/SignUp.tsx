import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

// import components
import Input  from '../atoms/Input'
import ButtonText from '../atoms/ButtonText';

import { signUp, getAllUsers } from '../../services/campusService';

interface AllUsersCampus {
  nickname: string;
  password: string;
}

interface Props {
  setIsConnected: React.Dispatch<React.SetStateAction<boolean>>;
};

const SignUp: React.FC<Props> = props => {

  async function handleSubmit() {
    const tabName: string[] = allUsers.current.map(user => user.nickname);
    const alreadyExists: boolean = tabName.includes(pseudo);
    if(!alreadyExists){
      await signUp(pseudo, password);
      setIsConnected(true);
    }
  }

  const history = useHistory();
  const [ pseudo, setPseudo ] = useState<string>('');
  const [ password, setPassword ] = useState<string>('');
  const { setIsConnected } = props;
  
  const allUsers: React.MutableRefObject<AllUsersCampus[]> = useRef([]);
  
  // Fonction executé lors du montage du composant
  useEffect(function() {
    async function getUsers() {
      const response = await getAllUsers();
      if(response) {
        allUsers.current = response;
      }
    }
    getUsers();
  }, []);

  return (
    <Container>
      <Input label="Entrez votre pseudo:" value={pseudo} handleChange={setPseudo} />
      <Input label="Entrez votre password:" value={password} handleChange={setPassword} />
      <ButtonText value="submit" handleClick={handleSubmit} />
    </Container>
  );
}

const Container = styled.div`
  width: 60%;
  height: 500px;
  border: 1px blue solid;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default SignUp;