//GET

const getAll = () => {
    return db.query('select * from user');
}
const getByUsername = (name) => {
    return db.query('select * from user where name = ?', [name]);
}
const getById = (userId) => {
    return db.query('select * from user where id = ?', [userId]);
}

//POST

const create = async ({ name, surname, age, birthdate, image, phone, mail }) => {
    return await db.query(
        'insert into user (name, surname, age, birthdate, image, phone, mail) values (?,?, ?, ?, ?,?,?)',
        [name, surname, age, birthdate, image, phone, mail]
    )
}


//PUT

const update = (userId, { name, surname, age, birthdate, image, phone, mail }) => {
    return db.query(
        'update user set name=?, surname=?, age=?, birthdate=?, image=?, phone=?, mail=?  where id = ?',
        [name, surname, age, birthdate, image, phone, mail, userId]
    )
}

//DELETE

const deleteById = (userId) => {
    return db.query('delete from user where id = ?', [userId]);
}

module.exports = {
    getAll, getById, getByUsername, create, update, deleteById
}