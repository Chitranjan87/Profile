let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

let mainVid = document.querySelector('.main-video');

document.querySelectorAll('.course-3 .box .video video').forEach(vid =>{

    vid.onclick = () =>{
        let src = vid.getAttribute('src');
        mainVid.classList.add('active');
        mainVid.querySelector('video').src = src;
    }

});

document.querySelector('#close-vid').onclick = () =>{
    mainVid.classList.remove('active');
}





async function fetchWordDefinition() {
    const inputWord = document.getElementById('inputWord').value;
    try {
        const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputWord}`);
        const definition = response.data[0].meanings[0].definitions[0].definition;
        document.getElementById('definitionBox').innerHTML = `<div class="larger-text">${definition}</div>`;
    } catch (error) {
        console.error('Error fetching word definition:', error);
        document.getElementById('definitionBox').innerHTML = '<div class="larger-text">Error fetching word definition. Please try again later.</div>';
    }
}



document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeydown = function(e) {
  if (e.keyCode == 123) { return false; } // F12 Disable
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) { return false; } // Ctrl+Shift+I Disable
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) { return false; } // Ctrl+Shift+J Disable
  if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) { return false; } // Ctrl+U Disable
};