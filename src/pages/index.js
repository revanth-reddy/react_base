import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Home = () => {
	return (    
		<Container fluid style={{ padding: "5vw" }}>
			<Card className="text-center">
				<Card.Header>TCCS</Card.Header>
				<Card.Body>
					<Card.Title>Intro</Card.Title>
					<Card.Text>
						It supports compressiona and decompression of data
					</Card.Text>
					<Button variant="primary" href='/tccs'>Check it</Button>
				</Card.Body>
				<Card.Footer className="text-muted">Site last updated: 2 days ago</Card.Footer>
			</Card>
	  	</Container>
	);
  };
  
  export default Home;