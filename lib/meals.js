import sql from 'better-sqlite3';

const db = sql('meals.db');

export function getMeals() {
    
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(db.prepare('SELECT * FROM meals').all());
        }, 2000);
    });
}
