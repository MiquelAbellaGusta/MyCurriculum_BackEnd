//GET

const getAll = () => {
    return db.query('select * from studies');
}
const getByUsername = (username) => {
    return db.query('select * from studies where username = ?', [username]);
}
const getById = (userId) => {
    return db.query('select * from studies where id = ?', [userId]);
}
const getByRange = (userRange) => {
    return db.query('select * from studies where rango = ?', [userRange]);
}
const getByCategory = (category) => {
    return db.query('select * from studies where category = ?', [category]);
}

//POST
const create = async ({ name, surname, rango, password, username, category }) => {
    return await db.query(
        'insert into studies (name, surname, rango, password,username,category) values (?,?, ?, ?, ?,?)',
        [name, surname, rango, password, username, category]
    )
}


//PUT

const update = (userId, { name, surname, rango, password, username, category }) => {
    return db.query(
        'update studies set name=?, surname=?, rango=?, password=?, username=?, category=?  where id = ?',
        [name, surname, rango, password, username, category, userId]
    )
}

//DELETE

const deleteById = (userId) => {
    return db.query('delete from studies where id = ?', [userId]);
}

module.exports = {
    getAll, getById, getByRange, getByCategory, getByUsername, create, update, deleteById
}