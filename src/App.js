import './App.css';
import{ Amplify } from 'aws-amplify';
import awsExports from './aws-exports'
import { Flex, withAuthenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Card, ButtonGroup, Samplecard2 } from './ui-components';

Amplify.configure(awsExports);

function App() {
  return (
    <div className="App">
      <Flex direction={"column"}>
          <Card />
          <Samplecard2 />
      </Flex>   
    </div>
  );
}
q
export default App;
