import { openDB } from 'idb';
const DB_NAME = 'MovieReviewDB';
const STORE = 'reviews';

export async function getDB() {
    return openDB(DB_NAME, 1, {
        upgrade(db) {
            if (!db.objectStoreNames.contains(STORE)) {
                db.createObjectStore(STORE, { keyPath: 'createdAt' });
            }
        },
    });
}

export async function saveReview(review) {
    const db = await getDB();
    await db.add(STORE, review);
}

export async function getReviews() {
    const db = await getDB();
    return await db.getAll(STORE);
}