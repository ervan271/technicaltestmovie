import { useState, useEffect } from 'react';

const ReviewForm = ({ movieTitle }) => {
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(3);

    useEffect(() => {
        const saved = localStorage.getItem(`review-${movieTitle}`);
        if (saved) {
            const data = JSON.parse(saved);
            setComment(data.comment);
            setRating(data.rating);
        }
    }, [movieTitle]);

    const handleSave = () => {
        localStorage.setItem(`review-${movieTitle}`, JSON.stringify({ comment, rating }));
        alert('Saved');
    };

    return (
        <div className="mt-2">
            <textarea value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Comment" rows={2} />
            <br />
            <input type="number" min={1} max={5} value={rating} onChange={(e) => setRating(e.target.value)} />
            <button onClick={handleSave}>Save</button>
        </div>
    );
};

export default ReviewForm;
