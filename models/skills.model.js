//GET

const getAll = () => {
    return db.query('select * from skills');
}

const getById = (skillId) => {
    return db.query('select * from skills where id = ?', [skillId]);
}

//POST
const create = async ({ name, level }) => {
    return await db.query(
        'insert into skills (name, level) values (?,?)',
        [name, level]
    )
}


//PUT

const update = (skillId, { name, level }) => {
    return db.query(
        'update skills set name=?, level=?  where id = ?',
        [name, level, skillId]
    )
}

//DELETE

const deleteById = (skillId) => {
    return db.query('delete from skills where id = ?', [skillId]);
}

module.exports = {
    getAll, getById, create, update, deleteById
}