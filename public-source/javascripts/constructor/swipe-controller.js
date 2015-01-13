/* Swipe functie  */

// Zepto(function($){
//     var pagesElement = $('.pages'); /* Hier wordt een variabele gemaakt voor het element pages */
//     var pages = pagesElement.children('.page'); /* Hier wordt een variabele gemaakt om meerdere DOM elementen aan te spreken, in dit geval .page binnen .pages */
//     var pageIndex = 0;  // variabele voor de indexwaarde, in dit geval 
    
//    pagesElement.swipeRight(function(event) {    /* Functie geschreven om naar rechts te swipen */
//         move('right');
//     });

//     pagesElement.swipeLeft(function(event) {    /* Functie geschreven om naar links te swipen */
//         move('left');
//     });
  
//   if ($(window).width() < 400){
//     var deviceWidth = 320;
//   } else {
//     var deviceWidth = 768;
//   }
  
// /* Move animatie */

//     function move(direction){
//         if(direction == 'left' && pageIndex < (pages.length - 1))  Als de afstand(=direction) naar links gaat EN de paginaIndex kleiner is dan de pages.length - 1 dan krijgt pageIndex +1 
//         { pageIndex++;  /* Pagina index wordt met 1 verhoogd */
//           }else if(direction == 'right' && pageIndex > 0) /* Anders als de afstand gelijk is aan rechts en de pagina index is groter dan 0, dan krijgt de pageIndex - 1 */
//     { pageIndex--;
//           }else if(direction == 'begin')  /* Anders als de afstand gelijk is aan het begin, dan is pageIndex 0 */
//         { pageIndex = 0;
//   }
//     var position = pageIndex * deviceWidth;   /* Variabele voor positie is pageIndex x 320 ( de width van een mobiele scherm) */
//       pages.animate({           /* Een animate die die zorgt voor de animatie dat de pagina's sliden naar de volgende pagina */
//       left: '-' + position + 'px'   /* Als hij naar links gaat komt hij in de - posistie met als waarde pixel */
//     }, 250, 'ease-out');        
//     }
// });