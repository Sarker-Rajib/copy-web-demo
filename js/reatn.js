function base(b) {
    return function(p) {
        var result = 1;
        for (i = 0; i < b; i++){
            return result*= p;
        }
    }
};

var base = base(5)
console.log(base(5))