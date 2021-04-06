App = {
  web3Provider: null,
  contracts: {},
  todo:null,
  init: async ()=>{
    App.initWeb3();
    App.loadContract();
    
  },

  initWeb3: async()=>{
    if(window.ethereum){
      try{
        App.web3Provider= new ethers.providers.Web3Provider(window.ethereum);
      }catch(error){
        console.log(error+"Web3 not found");
      }
    }
    else{
      App.web3Provider=new ethers.providers.JsonRpcProvider();
    }
  },
  loadContract: async()=>{
    var json= await $.getJSON("Todo.json");
    var signer=App.web3Provider.getSigner();
     App.todo = new ethers.Contract('0x9b24e857AE55C339F837B42213Da4DeD4C9E3cb6', json.abi, signer);
    App.loadList();
    App.listenForEvents();
    
  },
  listenForEvents: async()=> {
    App.todo.on("TaskCreated",()=>{
      console.log("task created");
      //window.location.reload();
      App.loadList();
    })
    App.todo.on("TaskChecked",()=>{
      console.log("task checked");
      //window.location.reload();
      App.loadList()
    })
  },
  loadList: async()=>{
    var count= await App.todo.count();
    console.log(count.toNumber());
    for(var i=0;i<count;i++){
      var task= await App.todo.todoList(i);
      console.log("id="+task.id.toNumber());
      console.log(task.task);
      console.log(task.owner);
      console.log(task.checked);
    }
  },

  addTask: async(str)=>{
      var result= await App.todo.addTask(str);
  },
  checkTask:async(id)=>{
    var result= await App.todo.ToggleCheckTask(id);
  }

};

$(function() {
  $(window).on('load',function() {
    App.init();
  });
});
