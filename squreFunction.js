
function СreateSquare() {
    this.a = prompt("enter `a`");
    this.b = prompt("enter `b`");
    this.c = prompt("enter `c`");
    

    this.findRoots = () => {
        if (a === "") return "Значение a не задано.";
        if (b === "") return "Значение b не задано.";
        if (c === "") return "Значение c не задано.";
        if (a === 0) return "Возможно деление на 0.";

        let d = b*b - 4*a*c;
        if( d < 0 ){
            return undefined;
        }else{
            let x1 = (-b-Math.sqrt(d))/(2*a);
            if (x1 - Math.floor(x1) != 0) x1 = +(x1.toFixed(3));
            let x2 = (-b+Math.sqrt(d))/(2*a);
            if (x2 - Math.floor(x2) != 0) x2 = +(x2.toFixed(3));
            return [x1,x2];
        }

    };
};

function СreateSquare(a, b , c) {
    this.a = a;
    this.b = b;
    this.c = c;
    

    this.findRoots = () => {
        if (a === "") return "Значение a не задано.";
        if (b === "") return "Значение b не задано.";
        if (c === "") return "Значение c не задано.";
        if (a === 0) return "Возможно деление на 0.";

        let d = b*b - 4*a*c;
        if( d < 0 ){
            return undefined;
        }else{
            let x1 = (-b-Math.sqrt(d))/(2*a);
            if (x1 - Math.floor(x1) != 0) x1 = +(x1.toFixed(3));
            let x2 = (-b+Math.sqrt(d))/(2*a);
            if (x2 - Math.floor(x2) != 0) x2 = +(x2.toFixed(3));
            return [x1,x2];
        }

    };
};

