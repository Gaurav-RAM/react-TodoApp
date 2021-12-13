// import logo from './logo.svg';
// import './App.css';
// import React,{useState} from 'react';
// import Header from './components/Header'
// import AddTask from './components/AddTask';
// function App() {
//   const [taskName, setTaskName] = useState();
//   addNewTask = (e) =>{
//     console.log('in app.js==========>',e);
//   }
//   return (
//     <div>
//       <Header name = "Todo Task"/>
//       <AddTask  addTask = {this.addNewTask()}/>
//     </div>
//   );
// }

// export default App;
import React, { Component } from 'react';
import './assets/css/myStyle.css'

import Header from './components/Header'
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       taskList: [],
       
       
    }
  }
  addNewTask = (e) =>{
    let id = Math.floor(Math.random() * 10);
    let taskobj = {id:id, task:e}
    this.setState(prevState => ({
      taskList: [...prevState.taskList, taskobj]
 }));
    }
    removeHandleDelete = (element) =>{
      this.setState(prevState => ({
        taskList: prevState.taskList.filter((el,i) => el.id != element.id )
        // taskList : [...prevState.taskList,element]
      }))
    }

    nextEditTask = (element) => {

      this.setState(prevState =>({
        taskList: prevState.taskList.filter(el => el.id  !==  element.id)
       
      }))
    }

    
    
   

   

   
  render() {
    return (
      <div >      
       <Header name = "Todo Task"/>
       <AddTask  addTask = {this.addNewTask}/>
       <TaskList 
       handleDelete = {this.removeHandleDelete}
       taskList= {this.state.taskList} 
       editTask= {this.nextEditTask}  
         />
      </div>
    )
  }
}

export default App

