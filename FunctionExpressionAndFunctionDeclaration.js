'use strict';
function main(){

    function helloWorld(){
        alert('hello world');
    }

    let ask = (question, yes, no) => { confirm(question) ? yes() : no() };
    ask('are you ukrainian?',
        () => alert('Glory to Ukraine'),
        () => alert('Die for enemies')
    );
}
main();
