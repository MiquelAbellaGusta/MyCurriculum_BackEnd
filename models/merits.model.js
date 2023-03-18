//GET

const getAll = () => {
    return db.query('select * from merits');
}
const getById = (userId) => {
    return db.query('select * from merits where id = ?', [userId]);
}

//POST
const create = async ({ name }) => {
    return await db.query(
        'insert into merits (name) values (?)',
        [name]
    )
}


//PUT

const update = (meritId, { name }) => {
    return db.query(
        'update merits set name=? where id = ?',
        [name, meritId]
    )
}

//DELETE

const deleteById = (meritId) => {
    return db.query('delete from merits where id = ?', [meritId]);
}

module.exports = {
    getAll, getById, create, update, deleteById
}