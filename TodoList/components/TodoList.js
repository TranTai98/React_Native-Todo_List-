import React,{useEffect, useState} from 'react'
import Todo from './Todo'
import {View,Text,StyleSheet,Button,TextInput} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
const TodoList = () =>{
    const [text,setText] = useState()
    const [list,setList] = useState([])
    const [tasksStatus,setTaskStatus] = useState("Todo")
// add item
    const addItem = async () =>{
        try {
            const updateList = list
            if(text ==="")
            {
                return
            }
            else{
            updateList.push(text)
            }
            setList(updateList)
            await AsyncStorage.setItem('my-to-do-list',JSON.stringify(updateList))
            setText('')
            Keyboard.dismiss()
            
        } catch (error) {
            console.log('Error when saving..');
            
        }
    }
    // delete item
    const deleteItem = async (index) =>{
        try {
            const updateList = list.filter((todo) =>todo !== index)
            setList(updateList)
            await AsyncStorage.setItem('my-to-do-list',JSON.stringify(updateList))

            
        } catch (error) {
            console.log('Erro when removing');    
        }
    }
    const load = async()=>{
        try {
            const todolist = await AsyncStorage.getItem('my-to-do-list')
            if(todolist !==null){
                const todo = JSON.parse(todolist)
                setList(todo)
            }
            else{
                setList([])
            }
            
        } catch (error) {
            console.log('Error when loading ..');
            
        }
    }
    useEffect(()=>{
        load();
    },[])
    return(
        <View style={styles.item}>
            <Text style={[styles.align, styles.font]}>The App only saves to-do items on your device</Text>
                {list.map((x,index) => <Todo key={index} item ={x} index={index} delete ={deleteItem}  />)}
            <View>
                <TextInput style={styles.input}
                           value={text}
                           onChangeText={(text) => setText(text)}
                />
                <Button title='Add Item' onPress={addItem}/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    align:{
        alignSelf:'center'
    },
    font:{
        padding:4,
        borderWidth: 1,
        backgroundColor:'#85D9F1',
        fontSize:20,
        fontWeight:'bold',
        borderRadius: 10,
    },
    input:{
        borderRadius:5,
        borderWidth:1,
        marginBottom:8,
        padding:8
    },
    item:{
        width:'80%',
        justifyContent:'space-between',
        marginBottom: 60
    },
})
export default TodoList