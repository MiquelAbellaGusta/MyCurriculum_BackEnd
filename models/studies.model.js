//GET

const getAll = () => {
    return db.query('select * from studies');
};

const getByClase = (clase) => {
    return db.query('select * from studies where clase = ?', [clase]);
};

const getById = (studyId) => {
    return db.query('select * from studies where id=?', [studyId]);
}

//POST
const create = async ({ clase, centre, start_date, finish_date, average_grade, locality }) => {
    return await db.query(
        'insert into studies (clase, centre, start_date, finish_date, average_grade, locality) values (?,?, ?, ?, ?,?)',
        [clase, centre, start_date, finish_date, average_grade, locality]
    )
}


//PUT

const update = (studyId, { clase, centre, start_date, finish_date, average_grade, locality }) => {
    return db.query(
        'update studies set clase=?, centre=?, start_date=?, finish_date=?, average_grade=?, locality=? where id = ?',
        [clase, centre, start_date, finish_date, average_grade, locality, studyId]
    )
}

//DELETE

const deleteById = (studyId) => {
    return db.query('delete from studies where id = ?', [studyId]);
}

module.exports = {
    getAll, getByClase, getById, create, update, deleteById
}