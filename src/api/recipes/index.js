import axios from 'axios'

import {fetchRecipesAction, fetchSelectedRecipeAction} from '../../redux/actions'

const ENDPOINT_BASE = 'https://api.spoonacular.com/recipes/'
const ENDPOINT_RECIPES = ENDPOINT_BASE + "complexSearch";

const apiKey = '4ed9fc1fce8b4c1b8cc7fc9f8b7319eb';
const MAX_PER_PAGE = 30

export const fetchRecipes = async (dispatch) => {
    try{
        console.log('dans fetch recipes')
        const response = await axios.get(ENDPOINT_RECIPES, {
            params: {
                apiKey,
                number : MAX_PER_PAGE
            }
        })
        console.log('la reponse = ', response.data.results)
    
        
        dispatch(fetchRecipesAction(response.data.results))
    }catch(e) {
        console.log('error requete recipes', e)
    }
   

}


export const fetchSelectedRecipe = async (dispatch, recipeId) => {
    try{

        console.log('dans fetch selected recipe')
        const response = await axios.get(ENDPOINT_BASE + '/' + recipeId + '/information', {
            params: {
                apiKey
            }
        })
        console.log('Response = ', response.data)

        dispatch(fetchSelectedRecipeAction(response.data))
    }catch(e){

    }
}
