function randomTime(){
    return Math.random()*100;
}

function a(callback){
    setTimeout(function(){
        callback("a");
    },randomTime());
    
    
}
function b(callback){
    setTimeout(function(){
    callback("b");
    },randomTime());
    
}
var c =function(callback){
    setTimeout(function(){
    callback("c");
    },randomTime());
}
function d(callback)
{
    setTimeout(function(){
    callback("d");
    },randomTime());
    
}
/*
a(function(result)
{
    console.log(result);
}
)
b(function(result)
{
    console.log(result);
}
)
c(function(result)
{
    console.log(result);
}
)
d(function(result)
{
    console.log(result);
}
)*/

var allfunction = [];
allfunction.push(a);
allfunction.push(b);
allfunction.push(c);
allfunction.push(d);
allfunction.push(a);
allfunction.push(b);
allfunction.push(c);
allfunction.push(d);
allfunction.push(a);
allfunction.push(b);
allfunction.push(c);
allfunction.push(d);



//
//
//
//

var running =0;
var limit = 2;
var index =0;
var maxitem=12;
function callLimit(){
    while(running<limit && index < maxitem)
    {
        allfunction[index++](function(result){
            running--;
            if(index < maxitem) callLimit();
            console.log(result);
        });
        
        running++;
    }
}

callLimit();