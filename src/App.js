import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import tasks from './sample/tasks.json';
import Tasks from './componets/Tasks';
import TaskForm from './componets/TaskForm';
import Post from './componets/Post';

class App extends Component {

  state = { tasks: tasks }

  addTask = (title, description) =>{
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter( task => task.id !== id );     
    this.setState( {tasks: newTasks});  
  }

  checkDone = (id) =>{
    const newTasks = this.state.tasks.map( task => {
      if(task.id === id){
        task.done = !task.done
      }
      return task;
    });
    this.setState( {tasks:newTasks});
  }


  render() {    
    return (  
    <div> 
      <Router>

        <Link to="/"> Home </Link>
        <Link to="/post"> Post </Link>

        <Route exact path="/" render={() =>{
          return(
          <div>
            <TaskForm addTask={this.addTask} />
            <Tasks 
              tasks={this.state.tasks} 
              deleteTask={ this.deleteTask } 
              checkDone={this.checkDone}/>
          </div>)
        }}>          
        </Route>

        <Route exact path="/post" component={Post} /> 
      </Router>   
     
    </div>
    )
  } 
} 

export default App;

