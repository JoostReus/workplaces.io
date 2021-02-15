document.addEventListener('scroll', function () {
    let top  = window.pageYOffset + window.innerHeight,
        isVisible = top > document.querySelector('section').offsetTop;
  
     if (isVisible) {
       document.querySelector('section').classList.add('animate');
     }
  });