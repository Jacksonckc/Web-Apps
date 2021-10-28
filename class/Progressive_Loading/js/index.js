const images = document.querySelectorAll('[data-src]');

const preloadImage = (img) => {
    const src = img.getAttribute('data-src');
    
    if (!src){
        return;
    }
    img.src = src;
}

const imgOptions = {
    threshod: 0,
    rootMargin: '0px 0px -200px 0px',
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        } else{
            entry.target.style.animation = 'bounce ease-in 500ms'
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions);

images.forEach((image)=>{
    imgObserver.observe(image)
})

console.log('hi')


function drop() {
    document.getElementsByClassName("content")[0].classList.toggle("mystyle");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('#menu')) {
      var dropdowns = document.getElementsByClassName("content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('mystyle')) {
          openDropdown.classList.remove('mystyle');
        }
      }
    }
  }
  
  function activePage(){
    document.getElementById("active").parentElement.style.backgroundColor="lightblue";
  }
  
  activePage()
  
  
  function getDate(){
    const date = new Date()
    const day = date.getDay()
    return day  
  }
  
  
  function showNotice() {
  
    if (getDate() == 5){
      document.getElementById('saturday_notice').style.display = 'block'
    }
  }
  
  showNotice()
  
  WebFont.load({
    google: {
      families: [
        'Josefin Sans'
      ]
    }
  });
  
  
