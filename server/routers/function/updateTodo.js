const { updateRaw } = require("../../basicTableFunc");

async function updateTodo(todoId, keyChange, valueChange) {
    console.log(todoId);
    const answer = await updateRaw('todo', 'todo_Id', todoId, keyChange, valueChange);

    if (answer.affectedRows) {
        return "update successfully";
    } else {
        throw 'the update not sucsseded'
    }
}
module.exports = updateTodo;