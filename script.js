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

// The object
const bank = {
    name : "Miss Piggys bank",
    amount: 0,

    // Check balance
    balance: function(){
        return this.amount;
    },

    // Add money
    add: function(input){
        const result = this.amount + input;
        return result;
    },

    withdraw: function(input){
        const result = this.amount - input;
        return result;
    }

}

// The class
class User{
    constructor(name, amount){
        this.name = name;
        this.amount = amount;
    }

    // Check balance
    balance(){
        console.log(`${this.name} balance: ${this.amount}`);
    }

    // Add money
    add(input){
        const result = this.amount + input;
        this.amount = result;
        console.log(`${input} added to ${this.name}. New balance: ${result}`);
    }

    // Withdraw
    withdraw(input){
        const result = this.amount - input;
        this.amount = result;
        console.log(`${input} was withdrew from ${this.name} account. New balance: ${result}`);
    }

    // Weekly Allowance
    allowance(){
        const weeklyAmount = setInterval(() =>{
            this.add(10);
        },10000); // 10 sec

        setTimeout(() =>{
            this.balance();
            clearInterval(weeklyAmount);
            console.log("Allowance stopped");

            accountAnders.add(10);

            // Show amount
            accountLotta.balance();
            accountAnders.balance();
        }, 30000); // 30 sec
    }
    
}

// Lotta
const accountLotta = new User("Lotta", 0);
console.log(accountLotta);
accountLotta.allowance();

// Anders
const accountAnders = new User("Anders", 0);
console.log(accountAnders);