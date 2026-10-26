import { useState, useEffect } from 'react';
import { Row, Container, Card, Badge } from 'react-bootstrap';
import { getTopHeadlines } from '../api/gnews';

function EnglishGeneralPage() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const apiGet = async () => {
    setLoading(true);
    setError('');
    try {
      const articles = await getTopHeadlines('general', 'en');
      setData(articles);
      if (!articles || articles.length === 0) {
        setError('No articles returned (check API key, plan, or CORS).');
      }
    } catch (err) {
      console.error('Failed to load top headlines', err);
      if (err.response) {
        setError(`API error: ${err.response.status} ${err.response.statusText}`);
      } else if (err.request) {
        setError('Network/CORS error or no response from GNews API.');
      } else {
        setError('Unexpected error: ' + err.message);
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    apiGet();
    const interval = setInterval(() => {
      apiGet();
    }, 1000000);
    return () => clearInterval(interval);
  }, []);


  return (
    <>
      <Container fluid className="mt-3">
        <h3 className="mb-3">General News - English</h3>

        {loading && <p className="text-muted">Loading headlines...</p>}
        {error && <p className="text-danger">{error}</p>}

        <Row xs={1} md={3} className="g-4">
          {data.map((value, index) => (
            <Card key={index}>
              <Card.Img variant="top" src={value.image} height="275px" />
              <Card.Body>
                <Card.Title>{value.title}</Card.Title>
                <Card.Text>{value.description}</Card.Text>
                <div className="mb-2">
                  <Badge bg="secondary" className="me-2">
                    {value.source && value.source.name}
                  </Badge>
                  <small className="text-muted">
                    {value.publishedAt && new Date(value.publishedAt).toLocaleString()}
                  </small>
                </div>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-between align-items-center">
                <a href={value.url} target="_blank" rel="noopener noreferrer">
                  Read full article
                </a>
                {value.source && value.source.url && (
                  <a href={value.source.url} target="_blank" rel="noopener noreferrer" className="text-muted small">
                    Visit source
                  </a>
                )}
              </Card.Footer>
            </Card>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default EnglishGeneralPage;
