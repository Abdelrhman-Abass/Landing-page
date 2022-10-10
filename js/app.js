/**
 * make a list of section numbers ,and for avoid duaplicating i remove allsections from navbar
 * 
*/

// get a bavbar item into variable to call it again
const navBarList = document.getElementById("navbar__list");

const createNavList = () => {
    navBarList.innerHTML = "";
    for (section of document.querySelectorAll("section")){
        const listItem = `<li><a href="#${section.id}" data-nav="${section.id}" class="menu__link">${section.dataset.nav}</a></li>`;
        navBarList.insertAdjacentHTML("beforeend", listItem);
    };
};

/*
 * creating section dynamically by add function to the main tag and use ES6
*/

// define counter to let us controll number of sections 
let counterSection = 1;

// make a section creator with using the arrow function
const sectionCreator = () => {

    const contentSection = `<section id="section${counterSection}" data-nav="Section ${counterSection}">
    <div class="landing__container">
    <h2>Section ${counterSection}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>
    
    <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
    </div>
    </section>`;
    // add section to the main tag
    document.querySelector("main").insertAdjacentHTML("beforeend",contentSection);
    // add 1 to counter for the next section
    counterSection++;

};


/**
 * I added Event listener to make the smoothy scrolling to target section
 * and added setTimeout to be realese to eyes in scrolling 
*/
navBarList.addEventListener("click" , (eventOccure) =>{
    eventOccure.preventDefault();
    if (eventOccure.target.dataset.nav){
        document.getElementById(`${eventOccure.target.dataset.nav}`).scrollIntoView({ behavior: "smooth" });
        setTimeout(() =>{
            location.has = `${eventOccure.target.dataset.nav}`;},220)
    };
});
// create four-section dynamically by javascript instead of HTML

for (let i = 1; i < 5; i++) sectionCreator();
createNavList();


// create button to add more section
document.getElementById("btt").addEventListener('click', () =>{
    sectionCreator();
    createNavList();

});

// create top button
let mybutton = document.getElementById("back-to-top");

// When the user scrolls down 30px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

// add function to make button top visible
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 30
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

/**
 * to observe the active section 
 * i used the window property onscroll
 * and used getBoundingClintRect function to know which section user in it 
 * add active class to navbar
*/
window.onscroll = function() {
	document.querySelectorAll("section").forEach(function(active) {
    let activeLink = navBarList.querySelector(`[data-nav=${active.id}]`);
	if(active.getBoundingClientRect().top >= -400 &&
    active.getBoundingClientRect().top <= 150){

    active.classList.add("your-active-class");
    activeLink.classList.add("active");

  }else{
         active.classList.remove("your-active-class");
         activeLink.classList.remove("active");
    }
	});
};