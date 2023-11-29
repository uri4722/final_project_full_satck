const { deleteRaw } = require("../../basicTableFunc");

async function deleteComments(commentId) {
    console.log(commentId);
    const answer = await deleteRaw('comments', 'comments_Id', commentId);

    if (answer.affectedRows) {
        return "deleted successfully";
    } else {
        throw 'the delete not sucsseded'
    }
}
module.exports = deleteComments;