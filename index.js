function receivesAFunction(anyFunc){
    return anyFunc(whatEver)
}
const whatEver = x => "hi"


function returnsANamedFunction() {
    return whatEver
}

function returnsAnAnonymousFunction(){
    return (function(){return"halo"})

}