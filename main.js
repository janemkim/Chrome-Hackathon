//'typsed in a bunch of code'

//Comment in here our ideas!

//inspired by TabbyCat!

// social justice but make it cute?
// and/or environmentalism
// happy little trees?

// functionalities:
// turn it into a game
// maybe 


// what sites do you want to work on?

// print out to the console in the browser? 

// find the pumpkin
// stretch function - if there are any strings "pumpkin" on the page, clicking that works too

// HACKREACTOR as MVP

// const contents = document.getElementById('contents');
// contents.parentNode.removeChild(contents)

const background = document.body;
const navBar = document.getElementById("navbar");
background.parentNode.style.backgroundImage = "url('https://res.cloudinary.com/dbo7cxsfs/image/upload/v1603949252/Optimized-Optimized-Background_1_y72ofx.jpg')";
navBar.style.backgroundImage = "url('https://res.cloudinary.com/dbo7cxsfs/image/upload/v1603949252/Optimized-Optimized-Background_1_y72ofx.jpg')";

const heading = document.querySelector("h1");
heading.innerHTML = "The Least Advanced Coding Bootcamp: Go to Codesmith Instead";

const headingText = document.getElementsByClassName("styles-module--hero__supportText--2Ah-m");
headingText[0].innerHTML = "<p>Don't just learn to code. <b>Reinvent your career</b> full-time, part-time <i>in-person</i> or online at Codesmith, not HackReactor.</p>"

const linkTo = document.getElementsByClassName("styles-module--button--1Jzl- styles-module--btn--27e5_ styles-module--blue--1VSAx undefined styles-module--link--1q_aF");
linkTo[0].href = "https://www.codesmith.io";

const ISA = document.getElementsByClassName("styles-module--announcementTitle--xXet1");
ISA[0].innerHTML = 'Hack Reactor says: "We now have the best ISA in the industry"'

const isaText = document.getElementsByClassName('styles-module--containerRichText--1TGpR styles-module--announcementDescription--2vsuX');
isaText[0].innerHTML = 'In response to financial uncertainty, we\'ve decided to take even more of your money once you get a job. Who wouldn\'t? Oh, Codesmith doesn\'t? Wow, maybe you <b>SHOULD</b> go there instead.';

const awardsSection = document.getElementsByClassName('styles-module--awards--3aD4Z');
awardsSection[0].parentNode.removeChild(awardsSection[0]);

const applyNowButton = document.querySelectorAll('a');
applyNowButton[1].innerHTML = 'Play Now!';

const emptySection1 = document.getElementsByClassName('container styles-module--block--2cnS1');
emptySection1[0].parentNode.removeChild(emptySection1[0]);

const getStartedWithHackReactor = document.getElementsByClassName('styles-module--imageBlock--2Q0ms topSection')
getStartedWithHackReactor[0].parentNode.removeChild(getStartedWithHackReactor[0])

const hackReactorNews = document.getElementsByClassName('swiper-wrapper')
hackReactorNews[1].parentNode.removeChild(hackReactorNews[1])

const logo = document.querySelectorAll('img')
logo[0].removeAttribute('src')
logo[0].setAttribute('src', 'https://res.cloudinary.com/dbo7cxsfs/image/upload/v1603942173/notcodesmith_zygdld.png')

const goodbyeIframe = document.querySelectorAll('iframe')
goodbyeIframe[0].parentNode.removeChild(goodbyeIframe[0])

const copyright = document.getElementsByClassName('styles-module--footerNavbar--3hGhP');
copyright[0].innerHTML = '&#169 2020 Jjane and Jbri. All Rights Reserved'

class Pumpkin {
  constructor(el) {
      this.node = document.createElement('img');
      this.node.setAttribute('id', 'pumpkin');
      this.node.setAttribute('src', 'https://res.cloudinary.com/dbo7cxsfs/image/upload/v1603941226/pumpkin_n3tnkl.png');
    
      el.appendChild(this.node);
    
      this.node.style.left = `${Math.floor(Math.random() * Math.floor(10)) * 100}px`;
      this.node.style.top = `${Math.floor(Math.random() * Math.floor(5)) * 100}px`;

      this.node.style.width = "100px";
      this.node.style.height = "100px";

      this.node.style["z-index"] = 10000;

      this.node.style.position = "relative";

			this.node.counter = 0;

			// this.SPEED = 500;
			// this.timeoutID = setTimeout(this.move.bind(this), this.SPEED);
			// setTimeout(callback function, time in milliseconds)
			// after 250 ms, move function executes on head
	}

	// Tried to move the pumpkin every 500 miliseconds
  // move() {
  //   pumpkin.node.style.left = `${Math.floor(Math.random() * Math.floor(10)) * 100}px`;
  //   pumpkin.node.style.top = `${Math.floor(Math.random() * Math.floor(5)) * 100}px`;

  //   this.timeoutID = setTimeout(this.move.bind(this), this.SPEED);
  // }
}

const explodingPumpkin = document.createElement('img');
explodingPumpkin.setAttribute('id', 'exploding-pumpkin');
explodingPumpkin.setAttribute('src', 'https://res.cloudinary.com/dbo7cxsfs/image/upload/v1603945033/explodedpumpkin_oor5wn.png');

const gamebox = document.createElement('div');
gamebox.setAttribute("id", "gamebox");
// Append userAndDateDiv and messagesDiv inside containerForPost
background.prepend(gamebox);
// gamebox.style.backgroundColor = "blue";
gamebox.style["margin-top"] = "100px";
gamebox.style.width = "100%";
gamebox.style.height = "100%";
gamebox.style.position = "absolute";
gamebox.style["z-index"] = "0";

const pumpkin = new Pumpkin(gamebox);

const counterbox = document.createElement('div');
counterbox.setAttribute("id", "counterbox");
gamebox.prepend(counterbox);
counterbox.style["margin-top"] = "20px";
counterbox.style.width = "200px";
counterbox.style.height = "100px";
counterbox.style.position = "relative";
counterbox.style["z-index"] = "1000";
counterbox.style.backgroundColor = "orange";
counterbox.style["border-radius"] = "25px";

const score = document.createElement('p');
score.setAttribute("id", "score");
score.innerHTML = `<b>Shoot the Pumpkin!</br></br>Score: ${pumpkin.node.counter}</b>`; 
counterbox.prepend(score);
score.style["text-align"] = "center";
// counterbox.querySelector('p').style["text-align"] = center; 

//IDEA: Take hack reactor sign up link and break it so an alert pops up and says, You don't want to do that...

const signUpButton = document.getElementById('submit_button')
signUpButton.addEventListener('click', (e) => {
    alert('You really don\'t want to do that, so we aren\'t going to let you!')
});

//we access our clicked pumpkin using the ID
const clickedPumpkin = document.getElementById('pumpkin')
//when we click on the pumpkin, we add an event listener
clickedPumpkin.addEventListener('click', (e) => {
  //style our exploding pumpkin
	explodingPumpkin.style.position = "relative";
		explodingPumpkin.style.width = "700px";
		explodingPumpkin.style.height = "700px";
		explodingPumpkin.style.left = pumpkin.node.style.left;
    explodingPumpkin.style.top = 100;
    //move our pumpkin to a new random place on the screen
    pumpkin.node.style.left = `${Math.floor(Math.random() * Math.floor(10)) * 100}px`;
    pumpkin.node.style.top = `${Math.floor(Math.random() * Math.floor(5)) * 100}px`;
    //add our exploding pumpkin to the DOM
    gamebox.append(explodingPumpkin);
    //wait a second and then get rid of our exploding pumpkin
    setTimeout(function() {
       explodingPumpkin.remove() 
    }, 1000);
    
    //increment our counter when we click on our pumpkin because we scored a point!
		let counter = pumpkin.node.counter;
		pumpkin.node.counter = counter + 1;
		score.innerHTML = `<b>Shoot the Pumpkin!</br></br>Score: ${pumpkin.node.counter}</b>`; 
    
});


