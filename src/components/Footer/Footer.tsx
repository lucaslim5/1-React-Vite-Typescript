
import Card from 'react-bootstrap/Card'


const Footer = () => {
    /* const navigate=useNavigate(); */

    return(
        <>
        <footer>
            <Card>
                <Card.Header>Footer asi nomas</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                    <p>
                        {' '}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                        posuere erat a ante.{' '}
                    </p>
                    <footer className="blockquote-footer">
                        Someone famous in <cite title="Source Title">Source Title</cite>
                    </footer>
                    </blockquote>
                </Card.Body>
            </Card>
            </footer>
        </>
    );
}
export default Footer;