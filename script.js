let home = document.getElementById("navigationHome");
let about = document.getElementById("navigationAbout");
let contact = document.getElementById("navigationContact");

// When the window reloads fetch the home file by default
window.onload = fetchHtml('home');
 
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

// Not sure
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

function loadingPage(){
    
}