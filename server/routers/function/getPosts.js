const { search } = require("../../basicTableFunc");

async function getPosts(userId) {
    const posts = await search('posts', 'user_id', userId);

    if (posts.length > 0) {
        return posts;
    } else {
        throw 'There are no posts for this user'
    }
}
module.exports = getPosts;