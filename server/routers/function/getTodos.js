const { search } = require("../../basicTableFunc");

async function getTodos(userId) {
    const todos = await search('todo', 'user_id', userId);

    if (todos.length > 0) {
        return todos;
    } else {
        throw 'There are no todos for this user'
    }
}
module.exports = getTodos;