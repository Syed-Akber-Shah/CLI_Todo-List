import inquirer from "inquirer";
let todos = [];
let conditon = true;
// Loop until user says no to add more tasks.
while (conditon) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What do you want to add in your todo?"
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more Todo?",
            default: false
        }
    ]);
    todos.push(addTask.todo);
    conditon = addTask.addMore;
    console.log(todos);
}
