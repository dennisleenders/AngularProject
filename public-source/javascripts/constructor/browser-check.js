function browserDetection() {  

  console.log(navigator.userAgent);
  //Check if browser is IE or not
  if (navigator.userAgent.search("MSIE") >= 0) {
      $("html").addClass("MSIE");
  }
  //Check if browser is Chrome or not
  else if (navigator.userAgent.search("Chrome") >= 0) {
      $("html").addClass("chrome");
  }
  //Check if browser is Firefox or not
  else if (navigator.userAgent.search("Firefox") >= 0) {
      $("html").addClass("firefox");
  }
  //Check if browser is Safari or not
  else if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
      $("html").addClass("safari");
  }
  //Check if browser is Opera or not
  else if (navigator.userAgent.search("Opera") >= 0) {
      $("html").addClass("opera");
  }

  //Mobile check
  if (navigator.userAgent.search("iPhone") >= 0) {
      $("html").addClass("iphone");
  }
   if (navigator.userAgent.search("Android") >= 0) {
      $("html").addClass("android");
  } 
}

browserDetection();