
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService{

    ingredientsChanged = new Subject<Ingredient[]>()
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 50),
        new Ingredient('Tomato', 5),
      ];
      
      addIngredient(value: Ingredient) {
        this.ingredients.push(value)
        this.ingredientsChanged.next(this.ingredients.slice())
      }

      getIngredients(){
        return this.ingredients.slice()
      }

      setIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());

      }
}