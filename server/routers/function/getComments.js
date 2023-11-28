const { search } = require("../../basicTableFunc");

async function getComments(postId) {
    const comments = await search('comments', 'post_id', postId);

    if (comments.length > 0) {
        return comments;
    } else {
        throw 'There are no comments for this post'
    }
}
module.exports = getComments;