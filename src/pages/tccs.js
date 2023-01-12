import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const tccs = () => {
    return (    
		<Container fluid style={{ padding: "5vw" }}>
			<Card className="text-center">
				<Card.Header><b><h2>TCCS</h2></b></Card.Header>
				<Card.Body>
                    <Row className="justify-content-md-center">
                        <Col sm lg="5">
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>Please upload an input File (we accept only .nc file)</Form.Label>
                                <Form.Control type="file" />
                            </Form.Group>
                        </Col>
                    </Row>
					<Card.Title>Select the Data Flags</Card.Title>
					<Card.Text>
						It supports compressiona and decompression of data
					</Card.Text>
					<Button variant="primary">Check it</Button>
				</Card.Body>
				<Card.Footer className="text-muted">Site last updated: 2 days ago</Card.Footer>
			</Card>
	  	</Container>
	);
};

export default tccs;
