pragma solidity >=0.4.22 <0.9.0;

contract Todo{
    uint256 public count;
    
    struct Task{
        address owner;
        uint id;
        string task;
        bool checked;
    }
    mapping(uint=>Task) public todoList;
    event TaskCreated(uint id,string task,bool checked);
    event TaskChecked(uint id,string task,bool checked);

    function addTask(string memory task) public {
        todoList[count]=Task(msg.sender,count,task,false);
        emit TaskCreated(todoList[count].id,todoList[count].task,todoList[count].checked);
        count++;

    }

    function ToggleCheckTask(uint id) public {
        require(msg.sender==todoList[id].owner);
        todoList[id].checked=!todoList[id].checked;
        emit TaskChecked(todoList[id].id,todoList[id].task,todoList[id].checked);

    }
}