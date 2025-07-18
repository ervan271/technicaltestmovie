import {useContext} from 'react';
import { WatchlistContext } from '../context/WatchlistContext';
import {Button, Card, Col, Container, Image, Row} from 'react-bootstrap';
import batmanImage from '../assets/batman.jpg';
import duneImage from '../assets/dune.jpg';
import avengerImage from '../assets/avenger.jpg';
import antmanImage from '../assets/antman.jpg';
import spidermanImage from '../assets/spiderman.jpg';
import robinhoodImage from '../assets/robinhood.jpg';


const Content = () => {
    const { addToWatchlist } = useContext(WatchlistContext);



    const movies = [
        { title: 'Batman', year:"2025", text:"After witnessing his parents' death, billionaire Bruce Wayne learns the art of fighting to confront injustice. When he returns to Gotham as Batman, he must stop a secret society that intends to destroy the city" , image: batmanImage },
        { title: 'Dune', year:"2021", text:"Paul Atreides arrives on Arrakis after his father accepts the stewardship of the dangerous planet. However, chaos ensues after a betrayal as forces clash to control melange, a precious resource" , image: duneImage },
        { title: 'Avenger', year:"2019", text:"After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos'." , image: avengerImage },
        { title: 'Ant-man', year:"2015", text:"Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength his inner hero and help his mentor." , image: antmanImage },
        { title: 'Spider-man', year:"2021", text:"With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear." , image: spidermanImage },
        { title: 'Robinhood', year:"2025", text:"A modern Robin Hood switches from stealing to protecting when circumstances." , image: robinhoodImage },
    ];

    return (
        <Container className="my-2 shadow" id='content'>
            <Row>
                {movies.map((movie, index) => (
                    <Col md={4} className="movieWriper" key={index}>
                        <Card className="text-white text-center movieImage">
                            <Image src={movie.image} alt={`${movie.title} image`} />
                            <div className="bg-dark p-2">
                                <Card.Title>{movie.title}</Card.Title>
                                <Card.Text>
                                    {movie.text}
                                </Card.Text>
                                <Card.Text>{movie.year}</Card.Text>
                                <Button onClick={() => addToWatchlist(movie)}>Add Watched</Button>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Content;