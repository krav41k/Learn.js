class A {
    test(value) {
        switch(value) {
            case 1: 
            console.log("case 1");
            break;
            case 2:
            console.log("case 2");
            break;
        }
    }
}

class B extends A {
    test(value) {
        super.test(value);
        switch(value) {
            case 3:
                console.log("case 3");
            break;
        }
    }
}

testObj = new B;

