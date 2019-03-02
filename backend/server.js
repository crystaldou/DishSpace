// server.js

// first we import our dependencies…
import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import { getSecret } from './secrets';
import Recipe from './models/recipe'
import { AST_False } from 'terser';

// and create our instances
const app = express();
const router = express.Router();

// set our port to either a predetermined port number if you have set it up, or 3001
const API_PORT = process.env.API_PORT || 3001;

mongoose.connect(getSecret('dbUri'));
// db config -- set your URI from mLab in secrets.js
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// now we should configure the API to use bodyParser and look for JSON data in the request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

// now we can set the route path & initialize the API
router.get('/', (req, res) => {
    Recipe.countDocuments((err, count) => {
        console.log(count)
        return res.json({success: true, count: count})
    })
});

router.get('/test', (req, res) => {
    Recipe.findOne((err, recipe) => {
        return res.json({success: true, recipe: recipe})
    })
})

router.post('/test', (req, res) => {
    const recipe = new Recipe()
    
    const {name, directions, prepTime, cookTime, ingredients, tags, servings} = req.body
    if (!name || !directions || !ingredients || ! servings) {
        return res.json({
            success: false, 
            error: "!!!You must include required fields!!!"
        })
    }

    recipe.name = name
    recipe.directions =  directions
    recipe.prepTime = prepTime
    recipe.cookTime = cookTime
    recipe.ingredients = ingredients
    recipe.tags = tags
    recipe.servings = servings

    recipe.save(err => {
        if (err) return res.json({ success: false, error: err })
        return res.json({ success: true })
    })
});

// Use our router configuration when we call /api
app.use('/api', router);

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));