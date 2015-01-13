/* Swipe functie  */

// Zepto(function($){
//     var pagesElement = $('.noun-wrapper');
//     var pages = pagesElement.children('section'); 
//     var pageIndex = 0;  
    
//    pagesElement.swipeRight(function(e) {    
//         move('right');
//     });

//     pagesElement.swipeLeft(function(ee) {    
//         move('left');
//     });
  
//   if ($(window).width() < 400){
//     var deviceWidth = 320;
//   } else {
//     var deviceWidth = 768;
//   }
  
/* Move animatie */

//     function move(direction){
//         if(direction == 'left' && pageIndex < (pages.length - 1))
//         { pageIndex++;  
//           }else if(direction == 'right' && pageIndex > 0)
//     { pageIndex--;
//           }else if(direction == 'begin')  
//         { pageIndex = 0;
//   }
//     var position = pageIndex * deviceWidth;   
//       pages.animate({           
//       left: '-' + position + 'px'   
//     }, 250, 'ease-out');        
//     }
// });