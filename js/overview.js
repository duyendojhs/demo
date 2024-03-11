typeof jQuery === "function" && jQuery.holdReady(true);
window.tiggerReadyed = false;
window.loaded = false;
if (window.location.pathname.indexOf("phones") > -1) {
  typeof tiggerReady === "function" && tiggerReady();
}
var tiggerReady = function() {
  if (window.tiggerReadyed) {
    return;
  }
  window.tiggerReadyed = true;
  if ( typeof jQuery === "function" ) {
    while (jQuery.readyWait) {jQuery.holdReady(false); }
  }

  typeof jQuery == 'function' && jQuery.holdReady(false);

  window._babelPolyfill = false;
  typeof featuresRun === "function" && featuresRun();

};
(function() {
  window.addEventListener("load", function() {
    if (window.loaded) {
      return;
    }
    window.loaded = true;
    setTimeout(function() {
      $("#rog-width-full").parents(".product_overview").css({
        "width": "100%",
      });
      var $imgList = document.querySelectorAll(".progressive-image");
      if (!window.IntersectionObserver) {
        for (var i = 0; i < $imgList.length; i++) {
          $imgList[i].classList.remove("progressive-image");
        }
      } else {
        var callback = function(entries) {
          entries.forEach(function($img) {
            if ($img.isIntersecting) {
              $img.target.classList.remove("progressive-image");
              observer.unobserve($img.target);
            }
          });
        };
        var observer = new IntersectionObserver(callback);
        $imgList.forEach($img => observer.observe($img));
        for (var k = 0; k < $imgList.length; k++) {
          observer.observe($imgList[k]);
        }
      }
    }, 4000);
  });
})();
