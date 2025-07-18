import { useContext, useState } from "react";
import { WatchlistContext } from "../context/WatchlistContext";
import { Card, Button, Col, Container, Image, Row, Form } from "react-bootstrap";
import "../style/header.css";
import CommentSection from './CommentSection';

const Watchlist = () => {
    const { watchlist, removeFromWatchlist } = useContext(WatchlistContext);
    const [searchTerm, setSearchTerm] = useState("");

    const filteredWatchlist = watchlist.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="mybg2" id="Watchlist">
            <Container className="my-4">
                <h1 className=" text-white mt-4 mb-4">My Watched List</h1>
                <Form className="mb-4">
                    <Form.Control
                        type="text"
                        placeholder="Search Watchlist..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </Form>

                <Row>
                    {filteredWatchlist.length === 0 ? (
                        <p className="text-white">No results found</p>
                    ) : (
                        filteredWatchlist.map((movie, index) => (
                            <Col md={4} className="movieWriper" key={index}>
                                <Card className="text-white text-center movieImage">
                                    <Image
                                        src={movie.image || movie.thumbnail || "https://via.placeholder.com/200x300"}
                                        alt={movie.title}
                                    />
                                    <div className="bg-dark p-2">
                                        <Card.Title>{movie.title}</Card.Title>
                                        <Card.Text>
                                            Added.
                                        </Card.Text>
                                        <Button variant="danger" onClick={() => removeFromWatchlist(movie.title)}>
                                            Delete
                                        </Button>
                                        {/* 💬 Komentar & Rating */}
                                        <CommentSection movieTitle={movie.title} />
                                    </div>
                                </Card>
                            </Col>
                        ))
                    )}
                </Row>
            </Container>
        </div>

    );
};

export default Watchlist;
