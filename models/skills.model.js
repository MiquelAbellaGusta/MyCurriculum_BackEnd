//GET

const getAll = () => {
    return db.query('select * from skills');
}
const getByUsername = (username) => {
    return db.query('select * from skills where username = ?', [username]);
}
const getById = (userId) => {
    return db.query('select * from skills where id = ?', [userId]);
}
const getByRange = (userRange) => {
    return db.query('select * from skills where rango = ?', [userRange]);
}
const getByCategory = (category) => {
    return db.query('select * from skills where category = ?', [category]);
}

//POST
const create = async ({ name, surname, rango, password, username, category }) => {
    return await db.query(
        'insert into skills (name, surname, rango, password,username,category) values (?,?, ?, ?, ?,?)',
        [name, surname, rango, password, username, category]
    )
}


//PUT

const update = (userId, { name, surname, rango, password, username, category }) => {
    return db.query(
        'update skills set name=?, surname=?, rango=?, password=?, username=?, category=?  where id = ?',
        [name, surname, rango, password, username, category, userId]
    )
}

//DELETE

const deleteById = (userId) => {
    return db.query('delete from skills where id = ?', [userId]);
}

module.exports = {
    getAll, getById, getByRange, getByCategory, getByUsername, create, update, deleteById
}