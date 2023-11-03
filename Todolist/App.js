import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
} from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function App() {

  const [tasks, setTasks] = useState([
    { text: 'Do laundry', completed: true },
    { text: 'Go to gym', completed: false },
    { text: 'Walk dog', completed: true },
  ]);

  const addTask = (taskText) => {
    setTasks([...tasks, {text: taskText, completed: false}]);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <ToDoList tasks={tasks}/>
      </ScrollView>
      <ToDoForm addTask={addTask} />
    </SafeAreaView>
  );
}

export default App;