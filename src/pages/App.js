
import gitLogo from'../assets/25231.png'
import {Container} from './styles';
import Input from '../components/Input';


function App() {
  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt='logo GitHub'/>
      <Input />
    </Container>
  );
}

export default App;
