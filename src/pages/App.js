
import gitLogo from'../assets/25231.png'
import {Container} from './styles';
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import { useState } from 'react';
import Button from '../components/Button'
import {api} from '../services/api';

function App() {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);
  
  const handleSearchRepo = async () => {
    try{
      
      const {data} = await api.get(`repos/${currentRepo}`)
      if(data.id){
        const alredyExist = repos.some(repo => repo.id === data.id);
        if(!alredyExist){
         setRepos(prev => [...prev, data]);
         setCurrentRepo('');
        }else{
          alert('Já adicionado;')
        }
      }
    }catch(erro){
      alert('Repositório Não encontrado;');
    }
  }

  const handleRemoveRepo = (id) => {
    console.log('Removendo registro', id);
    setRepos(prev => prev.filter(repo => repo.id !== id));
    // utilizar filter.
  }

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt='logo GitHub'/>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
      <Button onClick={handleSearchRepo}/>
      {repos.map(repo =>  <ItemRepo 
          key={repo.id} 
          repo={repo} 
          handleRemoveRepo={handleRemoveRepo} // Certifique-se de passar a função corretamente
        />)}
      
    </Container>
  );
}

export default App;
