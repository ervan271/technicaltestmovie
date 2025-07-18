export const loadWatched = () => {
  try {
    const data = localStorage.getItem('watchedMovies');
    return data ? JSON.parse(data) : [];
  } catch (err) {
    return [];
  }
};

export const saveWatched = (data) => {
  try {
    localStorage.setItem('watchedMovies', JSON.stringify(data));
  } catch (err) {
    console.error('Gagal menyimpan ke localStorage', err);
  }
};