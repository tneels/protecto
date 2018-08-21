/* https://www.filamentgroup.com/lab/font-events.html */
// (function(){
//     // if the class is already set, we're good.
//     if( document.documentElement.className.indexOf( "fonts-loaded" ) > -1 ){
//         return;
//     }
//     let fontA = new FontFaceObserver( "Lato", {
//         weight: 300
//     });
//     let fontB = new FontFaceObserver( "Lato", {
//         weight: 400
//     });
//     let fontC = new FontFaceObserver( "Lato", {
//         weight: 700
//     });
//     Promise
//         .all([fontA.load(), fontB.load(), fontC.load()])
//         .then(function(){
//             document.documentElement.className += " fonts-loaded";
//         });
// }( this ));
