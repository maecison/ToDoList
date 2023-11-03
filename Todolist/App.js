import React, { useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';

function HomeScreen() {
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

function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;