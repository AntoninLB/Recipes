import React, {useEffect} from 'react'
import {View, Text, StyleSheet,  FlatList} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import {fetchRecipes} from '../../../api/recipes'
import {getRecipes} from '../../../redux/selectors'
import RecipesListItem from './RecipesListItem'


const RecipesListScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const recipes = useSelector(getRecipes);
    useEffect(()=> {
        fetchRecipes(dispatch)
    }, []);


    const _renderItem = ({item}) => {
        return <RecipesListItem item= {item} navigation= {navigation} />
    }
    return (
    <View style={styles.container}>
        <FlatList
            data={recipes}
            renderItem= { _renderItem}
            ItemSeparatorComponent= {() => <View style= {styles.separator}/>}
        />
        
        
       
        </View>)
}


const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    separator: {
        height: 1,
        backgroundColor: 'grey'
    }
})

export default RecipesListScreen