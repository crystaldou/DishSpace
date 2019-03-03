import React from 'react'
import { connect } from 'react-redux'
import { getRecipe } from '../services/RecipeService'
import { setRecipe } from '../actions/recipeActions';

class RecipeBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            recipes: []
        }
    }
    componentDidMount() {
        getRecipe(this.props.setRecipe)
    }
    
    render() {
        console.log(this.props)
        return(
            <div>
                i am a recipe box and i just don't care lala lala. ducks.

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { recipe: state.recipe }
}

const mapDispatchToProps =  {
    setRecipe
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RecipeBox)