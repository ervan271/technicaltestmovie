import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const CommentSection = ({ movieTitle }) => {
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(0);

    useEffect(() => {
        const storedData = localStorage.getItem('comments');
        if (storedData) {
            const parsed = JSON.parse(storedData);
            if (parsed[movieTitle]) {
                setComment(parsed[movieTitle].comment);
                setRating(parsed[movieTitle].rating);
            }
        }
    }, [movieTitle]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const storedData = localStorage.getItem('comments');
        const parsed = storedData ? JSON.parse(storedData) : {};
        parsed[movieTitle] = { comment, rating };
        localStorage.setItem('comments', JSON.stringify(parsed));
        alert('Data Tersimpan');
    };

    return (
        <div className="text-start mt-3">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-2">
                    <Form.Label className="text-white">Comment:</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={2}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="add comment"
                    />
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label className="text-white">Rating (1–5):</Form.Label>
                    <Form.Control
                        type="number"
                        min={1}
                        max={5}
                        value={rating}
                        onChange={(e) => setRating(Number(e.target.value))}
                    />
                </Form.Group>
                <Button type="submit" variant="primary">Save</Button>
            </Form>

            {/* Tampilkan hasil komentar dan rating */}
            {(comment || rating) && (
                <div className="mt-2 text-white">
                    <strong>⭐ Rating:</strong> {rating} / 5<br />
                    <strong>💬 Komentar:</strong> {comment}
                </div>
            )}
        </div>
    );
};

export default CommentSection;
