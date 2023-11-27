const { search } = require("../../basicTableFunc");

async function getComments(postId) {
    const posts = await search('comments', 'post_id', postId);

    if (posts.length > 0) {
        return posts;
    } else {
        throw 'There are no comments for this post'
    }
}
module.exports = getComments;