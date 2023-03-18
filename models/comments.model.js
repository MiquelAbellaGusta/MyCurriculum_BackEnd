//GET

const getAll = () => {
    return db.query('select * from comments')
};

const getById = (commentId) => {
    return db.query('select * from comments where id=?', [commentId])
};

const getByStars = (starsNum) => {
    return db.query('select * from comments where stars=?', [starsNum])
};

const getByReviewer = (reviewer) => {
    return db.query('select * from comments where reviewer=?', [reviewer])
};

//POST
const create = async ({ reviewer, comment_text, comment_date, stars }) => {
    return await db.query('insert into comments (reviewer, comment_text, comment_date, stars) values (?,?,?,?)', [reviewer, comment_text, comment_date, stars])
};

//PUT
const update = (commentId, { reviewer, comment_text, comment_date, stars }) => {
    return db.query('update comments set reviewer=?, comment_text=?, comment_date=?, stars=? where id=?', [reviewer, comment_text, comment_date, stars, commentId])
};
//DELETE
const deleteById = (commentId) => {
    return db.query('delete from comments where id=?', [commentId])
};

module.exports = {
    getAll, getById, getByReviewer, getByStars, create, update, deleteById
};