//GET

const getAll = () => {
    return db.query('select * from languages');
}
const getByUsername = (username) => {
    return db.query('select * from languages where username = ?', [username]);
}
const getById = (userId) => {
    return db.query('select * from languages where id = ?', [userId]);
}
const getByRange = (userRange) => {
    return db.query('select * from languages where rango = ?', [userRange]);
}
const getByCategory = (category) => {
    return db.query('select * from languages where category = ?', [category]);
}

//POST
const create = async ({ name, surname, rango, password, username, category }) => {
    return await db.query(
        'insert into languages (name, surname, rango, password,username,category) values (?,?, ?, ?, ?,?)',
        [name, surname, rango, password, username, category]
    )
}


//PUT

const update = (userId, { name, surname, rango, password, username, category }) => {
    return db.query(
        'update languages set name=?, surname=?, rango=?, password=?, username=?, category=?  where id = ?',
        [name, surname, rango, password, username, category, userId]
    )
}

//DELETE

const deleteById = (userId) => {
    return db.query('delete from languages where id = ?', [userId]);
}

module.exports = {
    getAll, getById, getByRange, getByCategory, getByUsername, create, update, deleteById
}