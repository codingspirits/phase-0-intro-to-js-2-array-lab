const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push(name)
}

function destructivelyPrependCat(name) {
    return cats.unshift(name)
}

function destructivelyRemoveLastCat(name) {
    return cats.pop()
}

function destructivelyRemoveFirstCat(name) {
    return cats.shift()
}
function appendCat(name) {
    let new_cats= [...cats, name]
    return new_cats
}
function prependCat(name) {
    let new_cats= [name, ...cats]
    return new_cats
}

function removeLastCat(name) {
    let new_cats= cats.slice(0, cats.length-1)
    return new_cats
}

function removeFirstCat(name) {
    let new_cats = cats.slice(1, cats.length)
    return new_cats
}



