//GET

const getAll = () => {
    return db.query('select * from languages')
};

const getById = (languageId) => {
    return db.query('select from languages where id=?', [languageId])
};

//POST
const create = async ({ name, level, flag }) => {
    return await db.query('insert into languages (name, level, flag) values (?,?,?)', [name, level, flag])
};

//PUT
const update = (languageId, { name, level, flag }) => {
    return db.query('update languages set name=?, level=?, flag=? where id=?', [name, level, flag, languageId])
};

//DELETE
const deleteById = (languageId) => {
    return db.query('delete from languages where id=?', [languageId])
};

module.exports = {
    getAll, getById, create, update, deleteById
};