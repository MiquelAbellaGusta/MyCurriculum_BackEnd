//GET

const getAll = () => {
    return db.query('select * from user');
}
const getByEmail = (email) => {
    return db.query('select * from user where email = ?', [email]);
}
const getById = (userId) => {
    return db.query('select * from user where id = ?', [userId]);
}

//POST

const create = async ({ name, surname, age, birthdate, image, phone, email, password }) => {
    return await db.query(
        'insert into user (name, surname, age, birthdate, image, phone, email,password) values (?,?, ?, ?, ?,?,?,?)',
        [name, surname, age, birthdate, image, phone, email, password]
    )
}


//PUT

const update = (userId, { name, surname, age, birthdate, image, phone, email, password }) => {
    return db.query(
        'update user set name=?, surname=?, age=?, birthdate=?, image=?, phone=?, email=?,password=?  where id = ?',
        [name, surname, age, birthdate, image, phone, email, password, userId]
    )
}

//DELETE

const deleteById = (userId) => {
    return db.query('delete from user where id = ?', [userId]);
}

module.exports = {
    getAll, getById, getByEmail, create, update, deleteById
}