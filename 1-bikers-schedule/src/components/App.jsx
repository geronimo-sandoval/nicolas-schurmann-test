import TableContainer from './TableContainer';
import { Container, Row } from 'react-bootstrap'

const App = () => {
  return (
    <Container className="main-container">
      <Row>
        <TableContainer/>
      </Row>
    </Container>
  );
}

export default App;
