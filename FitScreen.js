import { StyleSheet, Text, View,SafeAreaView,Image,Pressable } from 'react-native';
import React, { useContext, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FitnessItems } from '../Context';

const FitScreen = () => {
    const route = useRoute();
    const navigation = useNavigation;
  //  console.log(route.paramas);
    const[index,setIndex] = useState(0);
    const exercises = routes.paramas.exercises;
    const current = exercises[index];
   // console.log(current,"first exercises")
    console.log(completed)
    const{
      completed,
      setCompleted,
      minutes,
      setMinutes,
      calories,
      setCalories,
      workout,
      setWorkout
    } = useContext(FitnessItems)
     console.log(completed,"completed exercise") ;
    return (
    <SafeAreaView>
      <Image style={{width:"100%",
      height:370
      }}
      source={{uri:current.image}}/>
      <Text style ={{
        marginLeft:"auto",
        marginRight:"auto",
        marginTop:30,
        fontSize:30,
        fontWeight:"bold"
        }}>
         {current.name}
            </Text>

            <Text  style ={{
        marginLeft:"auto",
        marginRight:"auto",
        marginTop:30,
        fontSize:38,
        fontWeight:"bold"
        }}>
             x{current.sets}</Text>
             {index + 1 >= exercises.length ? (
                              <Pressable
                              onPress={() =>{
                                navigation.navigate("Home")
                                
                                setTimeout(() =>{
                                      setIndex(index+ 1)
                                } ,2000)
                              }}
                              style={{backgroundColor:"blue",
                              marginLeft:"auto",
                              marginRight:"auto",
                              marginTop: 30,
                              borderRadius:20,
                              padding:10,
                              width:150
                              }}>
                                 <Text style ={{textAlign:"center",fontWeight:"bold",fontSize:20,color:"white"}}>DONE</Text>
                              </Pressable>
            ): (
                    <Pressable
             onPress={() =>{
               navigation.navigate("Rest");
               setCompleted([...completed,current.name])
               setWorkout(workout+1)
               setMinutes(minutes+2.5)
               setCalories(calories+6.30)

               
               setTimeout(() =>{
                     setIndex(index+ 1)
               } ,2000)
             }}
             style={{backgroundColor:"blue",
             marginLeft:"auto",
             marginRight:"auto",
             marginTop: 30,
             borderRadius:20,
             padding:10,
             width:150
             }}>
                <Text style ={{textAlign:"center",fontWeight:"bold",fontSize:20,color:"white"}}>DONE</Text>
             </Pressable>
            )}

             <Pressable
             onPress={() =>{
               navigation.navigate("Rest")
               
               setTimeout(() =>{
                     setIndex(index+ 1)
               } ,2000)
             }}
             style={{backgroundColor:"blue",
             marginLeft:"auto",
             marginRight:"auto",
             marginTop: 30,
             borderRadius:20,
             padding:10,
             width:150
             }}>
                <Text style ={{textAlign:"center",fontWeight:"bold",fontSize:20,color:"white"}}>DONE</Text>
             </Pressable>
             
             <Pressable style ={{
              flexDirection: "row",
             alignItems:"center",
             marginLeft:"auto"
             ,marginRight:"auto",
             marginTop: 30
             }}
             >
              <Pressable 
              disabled= {index === 0}
              onPress={() =>{
                navigation.navigate("Rest")

                setTimeout(() => {
                    setIndex(index - 1)
                },2000 )
              }}
              style = {{backgroundColor:"green",
              padding:10,borderRadius:20,
              marginHorizontal: 20,
              width:100
              }}>
                <Text
                 style={{color:"white"
                 ,fontWeight:"bold"
                 ,textAlign:"center"
                 }}> 
                 PREV
                  </Text>
              </Pressable>
          
              {index + 1 >= exercise.length ?(
                <Pressable
                onPress={() => {
                  navigation.navigate("Home");
                }} style = {{backgroundColor:"green"
                ,padding:10,
                borderRadius:20,
                marginHorizontal: 20,
                width:100
                }} >
                  <Text style={{color:"white",
                  fontWeight:"bold",
                  textAlign:"center"
                  }}> 
                  SKIP 
                  </Text>
                </Pressable>
              ) : (
                <Pressable style = {{backgroundColor:"green"
              ,padding:10,
              borderRadius:20,
              marginHorizontal: 20,
              width:100
              }} >
                <Text style={{color:"white",
                fontWeight:"bold",
                textAlign:"center"
                }}> 
                SKIP 
                </Text>
              </Pressable>
              )}
              
             </Pressable>
    </SafeAreaView>
  )
}

export default FitScreen

const styles = StyleSheet.create({})