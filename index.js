const receivesAFunction = (receivesAFunction) => {
    return receivesAFunction()
}

function returnsANamedFunction() {
    return receivesAFunction()
}

const returnsAnAnonymousFunction = () => function() {return 'mogus'}