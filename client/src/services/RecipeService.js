import 'whatwg-fetch'

export const getRecipe = (cb) => {
    fetch('/api/recipes')
        .then(data => data.json())
        .then((res) => {
            if (!res.success) console.log('errored!!')
            else cb(res.data)
        })
}