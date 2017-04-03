var i = 5;

// var func = function(){
//     var i = 10;
//     console.log(i);
//     var innerFunc = function(){
//         var i = 15;
//         console.log(i);
//     };
//     innerFunc();
//     console.log(i);
// };
// func();

var func = function(){
    var i = 10;
    console.log(i);
    var innerFunc = function(){
        console.log(i); // Подъем (histing)
        var i = 15;
    };
    innerFunc();
    console.log(i);
};
func();