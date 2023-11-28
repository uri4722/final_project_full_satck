const { addRow } = require("../../basicTableFunc");

async function setComments(comment) {
    const { user_name, email, body, post_id } = comment
    const setComment = await addRow('comments', ['name', 'email', 'body', 'post_id'], [user_name, email, body, post_id]);
    return setComment;
}

// setComments({ user_name: 'John Doe', email: 'john@example.com', body: 'this is comments 1', postId: 1 })
module.exports = setComments;
// ('John Doe', 'john@example.com', '555-1234', 'password123', 'john_doe'),
