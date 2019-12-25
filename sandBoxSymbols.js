'use strict';

// let str = "петя";

// alert(str[0].toUpperCase()+str.slice(1));

//////

// function checkSpam(str) {
//     str = str.toLowerCase();
//     if (str.includes("xxx") || str.includes("viagra")) return false
//     else return true;
// };

// alert(checkSpam('buy ViAgRA now'));
// alert(checkSpam('free xxxxx'));
// alert(checkSpam("innocent rabbit"));

///////

function truncate(str, maxlength){
    return str.length > 3 ? ( str.length <= maxlength ? str : str.slice(0, maxlength-1)+"…" ) : "invalide string value";
};

alert(truncate("Hello world my little furrer", 20));


