# TodoList Solidity

## Instructions

1. Download the zip file or clone the repositry on to a local folder.
2. Downlaod truffle and ganache.
3. Run "npm ci" to download all the packages from packages-lock.json.
4. Setup ganache to run a local ethereum blockchain.
5. Configure truffle-config.js to connect to the ganache by setting the port number and host address of developement environment.
6. Run "truffle migrate --reset" to deploy the contracts.
7. Run "truffle console" and run the following lines of code to get the address of the deployed contract.
  <br>&nbsp;&nbsp;&nbsp;var instance = await Todo.deployed()
  <br>&nbsp;&nbsp;&nbsp;instance.address
8. Replace the contract address with the output of the above code in src/js/app.js in line 26. 
   <br>&nbsp;&nbsp;&nbsp;App.todo = new ethers.Contract('0x5644217e49C47d58EaE104d5d2cd6B35A8E5E0d6', json.abi, signer);
9. Run "npm run dev" to launch the web server.
10. Press f12 to open console and interact with the application.

## Functions

### App.loadList()
Prints all the existing tasks in the todo list.
### App.addTask("Your New Task")
Creates a new task and adds it to the list with the passed string as label. 
### App.checkTask(idOfTask)
Checkes or unchecks the status of the task with the given id. Can only be toggled by creater of the task.
