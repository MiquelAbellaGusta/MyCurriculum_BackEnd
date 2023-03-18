//GET

const getAll = () => {
    return db.query('select * from languages')
};

const getById = (languageId) => {
    return db.query('select from languages where id=?', [languageId])
};

//POST
const create = async ({ name, level_write, level_read, level_speak, proficiency, flag }) => {
    return await db.query('insert into languages (name, level_write, level_read, level_speak, proficiency, flag) values (?,?,?,?,?,?)', [name, level_write, level_read, level_speak, proficiency, flag])
};

//PUT
const update = (languageId, { name, level_write, level_read, level_speak, proficiency, flag }) => {
    return db.query('update languages set name=?, level_write=?, level_read=?, level_speak=?, proficiency=?, flag=? where id=?', [name, level_write, level_read, level_speak, proficiency, flag, languageId])
};

//DELETE
const deleteById = (languageId) => {
    return db.query('delete from languages where id=?', [languageId])
};

module.exports = {
    getAll, getById, create, update, deleteById
};