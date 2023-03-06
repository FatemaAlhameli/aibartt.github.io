const container = document.querySelector('.container');
let scrollLine = document.querySelector('.scroll');

container.addEventListener('wheel', (e)=> {
    e.preventDefault();
    container.scrollLeft += e.deltaY;
    scrollLine.style.width = container.scrollLeft / 7 + 'px';
})

const bgMusic = document.getElementById('bg-music');
const muteBtn = document.getElementById('mute-btn');
      
      function toggleMute() {
        if (bgMusic.muted) {
          bgMusic.muted = false;
          muteBtn.innerHTML = 'Mute';
        } else {
          bgMusic.muted = true;
          muteBtn.innerHTML = 'Unmute';
        }
      }

// document.getElementById("scroll-to-start").addEventListener("click", function() {
//         document.querySelector(".container").scrollTo(0, 0);
//       });
      
gsap.registerPlugin(ScrollToPlugin);

// Add event listener to the "Scroll to Start" button
document.getElementById("scroll-to-start").addEventListener("click", function() {
  // Get the left position of the first page
  const firstPage = document.querySelector(".page_1");
  const firstPageLeft = firstPage.offsetLeft;

  // Animate horizontal scroll to the first page
  gsap.to(".container", {duration: 1, scrollTo: {x: firstPageLeft, y: 0}, ease: "power3.out"});
});
