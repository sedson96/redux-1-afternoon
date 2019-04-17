import React, { Component } from "react";
import { Link } from "react-router-dom";
import RecipeCard from "./../RecipeCard/RecipeCard";
import "./Home.css";
import store, {DELETE_RECIPE} from "../../store";

class Home extends Component {
  constructor(props) {
    super(props);
    let globalState = store.getState()
    this.state = {
      recipes: globalState.recipes
    };
  }
  delete(name) {
    store.dispatch({
      payload: name,
      type: DELETE_RECIPE
    })
  }

  render() {
    const recipes = this.state.recipes.map((recipe, i) => {
      console.log(recipe)
      return (
        <RecipeCard
          key={i}
          name={recipe.name}
          category={recipe.category}
          authorFirst={recipe.authorFirst}
          authorLast={recipe.authorLast}
          ingredients={recipe.ingredients}
          instructions={recipe.instructions}
          delete={this.delete}
        />
      );
    });
    return (
      <div className="Home">
        <Link to="/add/name">
          <button>Create New Recipe</button>
        </Link>
        <div className="card_container">{recipes}</div>
      </div>
    );
  }
}

export default Home;
