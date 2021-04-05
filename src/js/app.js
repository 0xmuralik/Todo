App = {
  web3Provider: null,
  contracts: {},
  todo:null,
  init: async ()=>{
    App.initWeb3();
    App.loadContract();
   // App.loadList()
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
     App.todo = new ethers.Contract('0x5644217e49C47d58EaE104d5d2cd6B35A8E5E0d6', json.abi, signer);
    //var ul=$(".myUL");
    
  },
  loadList: async()=>{
    var count= await App.todo.count();
    console.log(count.toNumber());
    //todo.addTask("Test");
    //todo.addTask("Test 1");
    for(var i=0;i<count;i++){
      var task= await App.todo.todoList(i);
      console.log(task.id.toNumber());
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
