const { updateRaw } = require("../../basicTableFunc");

async function updateTodo(todoId, body) {
    const { completed } = body;

    if (completed) {
        const answer = await updateRaw('todo', 'todo_Id', todoId, "completed", completed);
        console.log(answer);
        if (answer.affectedRows) {
            return "update successfully";
        } else {
            throw 'the update not sucsseded'
        }
    }


}
module.exports = updateTodo;