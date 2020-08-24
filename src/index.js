import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import api from './services/api';

export default function App() {
  const [ projects, setProjects ] = useState([]);

  useEffect(() => {
    api.get('/projects').then(response => {
      console.log(response.data);
      setProjects(response.data);
    })
  }, []);

  async function handleAddProject() {
    const response = await api.post('/projects', {
      title: `RN Novo projeto ${Date.now()}`,
      owner: 'Diego 3G'
    });
    const project = response.data;
    setProjects([...projects, project]);
  }

  async function handleDeleteProject(id) {    
    // console.log('Delete: ', id);
    // api.delete(`/projects/${id}`);
    // setProjects(projects.filter(project => project.id !== id));
  }
  
  return (
    <>
    <StatusBar 
      barStyle="light-content"
      backgroundColor="#715999"
    />
    <SafeAreaView style={styles.container}>
      <FlatList
        data={projects}
        keyExtractor={project => project.id}
        renderItem={({ item: project }) => (
          <Text style={styles.project}>{project.title}</Text>
        )}
      />

      <TouchableOpacity 
        activeOpacity={0.8}
        style={styles.button}
        onPress={handleAddProject}
      >
        <Text style={styles.buttonText}>Adicionar projeto</Text>
      </TouchableOpacity>
    </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
  },
  project: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  button: {
    backgroundColor: '#FFF',
    margin: 20,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonInline: {
    backgroundColor: 'red',
    margin: 10,
    height: 20,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonTextInline: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 10,
  }
})