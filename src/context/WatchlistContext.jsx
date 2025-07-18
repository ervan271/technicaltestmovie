import { createContext, useState, useEffect } from 'react';

export const WatchlistContext = createContext();

export const WatchlistProvider = ({ children }) => {
    const [watchlist, setWatchlist] = useState([]);

    useEffect(() => {
        const stored = localStorage.getItem('watchlist');
        if (stored) setWatchlist(JSON.parse(stored));
    }, []);

    useEffect(() => {
        localStorage.setItem('watchlist', JSON.stringify(watchlist));
    }, [watchlist]);

    const addToWatchlist = (movie) => {
        if (!watchlist.some(m => m.title === movie.title)) {
            setWatchlist([...watchlist, movie]);
        }
    };

    const removeFromWatchlist = (title) => {
        const filtered = watchlist.filter(movie => movie.title !== title);
        setWatchlist(filtered);
    };

    return (
        <WatchlistContext.Provider value={{ watchlist, addToWatchlist, removeFromWatchlist }}>
            {children}
        </WatchlistContext.Provider>
    );
};