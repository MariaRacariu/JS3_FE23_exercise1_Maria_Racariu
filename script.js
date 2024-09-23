let home = document.getElementById("navigationHome");
let about = document.getElementById("navigationAbout");
let contact = document.getElementById("navigationContact");

var loadingTimeout;
const loader = document.getElementById("loader");
const content = document.getElementById("content");

// When the window reloads fetch the home file by default
window.onload = function() {
    clearTimeout(loadingTimeout);
    loader.style.display = "none";
    content.style.display= "block";
    fetchHtml('home');
}

loadingTimeout = setTimeout(function() {
    loader.style.display = "block";
}, 300);
 
// If user navigate to website by specific link choose right page or default home
window.addEventListener('popstate', (event) => {
    switch (event.state.page) {
        case 1:
            fetchHtml('home');
            break
        case 2:
            fetchHtml('about');
            break
        case 3:
            fetchHtml('contact');
            break
        default:

            fetchHtml('home');
    }
})

// Event listeners for navigation
home.addEventListener('click', (event) => {
    event.preventDefault;

    history.pushState({ page: 1 }, 'home', 'home.html');
    fetchHtml('home');
});

about.addEventListener('click', (event) => {
    event.preventDefault;

    history.pushState({ page: 2 }, 'about', 'about.html');
    fetchHtml('about');
});

contact.addEventListener('click', (event) => {
    event.preventDefault;

    history.pushState({ page: 3 }, 'contact', 'contact.html');
    fetchHtml('contact');
});



function fetchHtml(filename) {

    fetch(`./${filename}.html`)
        .then((response) => {
            switchStyle(filename);
            return response.text();  
        })
        .then((html) => {
            content.innerHTML = html;
        })
}

// Switches Styles depending on page
function switchStyle(filename){
        const stylesheet = document.getElementById('pageTheme');

        if(filename.includes('home')){
            stylesheet.href = '/styles/home.css';
        }else if(filename.includes('about')){
            stylesheet.href = '/styles/about.css';
        }else if(filename.includes('contact')){
            stylesheet.href = '/styles/contact.css';
        }else{
            stylesheet.includes = '/styles/home.css';
        }
}

// Extra
const test = {
    name : "Miss Piggys bank",
    amount: 5000,

}