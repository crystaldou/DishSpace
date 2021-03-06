import mongoose from 'mongoose' 

const Schema = mongoose.Schema

const RecipeSchema = new Schema({
    // _id: Schema.Types.ObjectId,
    name: String,
    directions: Array,
    prepTime: Number,
    cookTime: Number,
    ingredients: Array,
    tags: Array,
    servings: Number,
},  { timestamps: true })

export default mongoose.model('Recipe', RecipeSchema)

/*
{
    "_id": {
        "$oid": "5c79bb2bcba6f658ddaf2945"
    },
    "name": "kimchi jigae",
    "directions": [{
        "text": "hello this is the recipe. Basically you put kimchi and spam in"
    }, {
        "text": "you also might want to boil with some onions"
    }, {
        "text": "the longer you boil, the better it's going to taste"
    }],
    "prepTime": {
        "$numberDouble": "10"
    },
    "cookTime": {
        "$numberDouble": "45"
    },
    "ingredients": [{
        "name": "kimchi",
        "quantity": "1",
        "measuringUnit": "large jar"
    }, {
        "name": "spam",
        "quantity": "2",
        "measuringUnit": "boxes"
    }, {
        "name": "onion",
        "quantity": "1",
        "measuringUnit": "medium"
    }],
    "tags": [{
        "tagName": "korean"
    }, {
        "tagName": "easy"
    }],
    "servings": {
        "$numberDouble": "15"
    },
    "timeStamp": "12:15pm, 2019/02/28",
    "modifiedTimeStamp": "12:15pm, 2019/02/28"
}*/ 