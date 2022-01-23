/*
	Menu button
*/

const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  if(menuBtn.className === 'menu-btn inactive'){
	menu.className ='menu opened';
  	 menuBtn.className = 'menu-btn active';
 } else if (menuBtn.className === 'menu-btn active'){
	menu.className ='menu closed';
   	menuBtn.className = 'menu-btn inactive';
 } 
});

/*
	Changing background of navigation-wrapper during scrolling
*/

const navWrapper = document.getElementById('scrolling');

window.addEventListener('scroll', () => {
	if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
		navWrapper.className ='nav-wrapper scrolled';
	} else {
		navWrapper.className ='nav-wrapper';
	}
	
});



/*
	Letters' display in about me section
*/

//string to group of pixel converting array
const matrix =[
	['C', [2, 3, 4, 6, 10, 11, 16, 21, 26, 30, 32, 33, 34]],
	['D', [1, 2, 3, 4, 6, 10, 11, 15, 16, 20, 21, 25, 26, 30, 31, 32, 33, 34]],
	['E', [1, 2, 3, 4, 5, 6, 11, 16, 17, 18, 21, 26, 31, 32, 33, 34, 35]],
	['H', [1, 5, 6, 10, 11, 15, 16, 17, 18, 19, 20, 21, 25, 26, 30, 31, 35]],
	['J', [5, 10, 15, 20, 21, 25, 26, 30, 32, 33, 34]],
	['L', [1, 6, 11, 16, 21, 26, 31, 32, 33, 34, 35]],
	['M', [1, 5, 6, 7, 9, 10, 11, 13, 15, 16, 20, 21, 25, 26, 30, 31, 35]],
	['O', [2, 3, 4, 6, 10, 11, 15, 16, 20, 21, 25, 26, 30, 32, 33, 34]],
	['P', [1, 2, 3, 4, 6, 10, 11, 15, 16, 17, 18, 19, 21, 26, 31]],
	['R', [1, 2, 3, 4, 6, 10, 11, 15, 16, 17, 18, 19, 21, 23, 26, 29, 31, 35]],
	['S', [2, 3, 4, 6, 10, 11, 17, 18, 19, 25, 26, 30, 32, 33, 34]],
	['T', [1, 2, 3, 4, 5, 8, 13, 18, 23, 28, 33]],
	['W', [1, 5, 6, 10, 11, 15, 16, 20, 21, 23, 25, 26, 28, 30, 32, 34]]
];

//signing buttons to variables
const htmlBtn = document.getElementById('html');
const cssBtn = document.getElementById('css');
const jsBtn = document.getElementById('js');
const wpBtn = document.getElementById('wp');


//asigning brigter color to pixels (windows in bulding drawing)
function lightOn(str){
	matrix.forEach(item => {
		if(item.includes(str)){
			for(let i = 0; i < item[1].length; i++){
				const pixel = document.getElementById(item[1][i]);
				pixel.style.backgroundColor = '#EFF5F9';
				pixel.style.transition ='background-color, 0.5s';
			}
		}
	})
}

//restoring initial color to pixels (windows in bulding drawing)
function resetScr(){
	for (let i = 1; i <= 35; i++){
		const pixel = document.getElementById(i);
		pixel.style.backgroundColor = '#4C4646';	
	}
}

//displaying each letter in string
function stringLightOn(str){
	const singleLetter = n => {
		if(n < str.length){
			resetScr();
			lightOn(str[n]), 1000;
			n++;
			setTimeout(function(){singleLetter(n++);}, 1000);
		}
	}
	singleLetter(0);
}

//events handlers
htmlBtn.addEventListener('click', () => { 
	stringLightOn('HTML');
});

cssBtn.addEventListener('click', () => {
	stringLightOn('CSS');
});

jsBtn.addEventListener('click', () => {
	stringLightOn('JS');
});

wpBtn.addEventListener('click', () => {
	stringLightOn('WORDPRESS');
});


/*
	Subtitles animation
*/
const subtitleBase = document.querySelectorAll('section .base');
const subtitleMirror = document.querySelectorAll('section .mirror');

const options = {
	treshhold: 1,
	rootMargin: '250px 0px 0px 0px'
	}

const subtitlesObserver = new IntersectionObserver(function(
	entries,
	subtitlesObserver
	) {
		entries.forEach(entry => {
		  if (!entry.isIntersecting) {
			return;
		  } else {
			entry.target.classList.add("appear");
			subtitlesObserver.unobserve(entry.target);
		  }
		});
	  },
	  options);

subtitleBase.forEach(base=>{
	subtitlesObserver.observe(base);
});

subtitleMirror.forEach(mirror=>{
	subtitlesObserver.observe(mirror);
});

/*
	Project section
*/
const projectsList = {
	pr1: {
		name: 'Philosophical therapy',
		description: 'Project made during Wordpress interships',
		technology: ['Wordpress', 'Divi', 'CSS'],
		image: 'pictures/therapy-screen.png',
		link: 'https://www.terapeutaonline-aurora.pl/'
	},
	pr2: {
		name: 'Spanish translator',
		description: 'Project made during Wordpress interships',
		technology: ['Wordpress', 'Divi', 'CSS'],
		image: 'pictures/spanish-translation-screen.png',
		link: 'https://www.letrahiszpanski.com/'
	},
	pr3: {
		name: 'Legal advisor\'s office',
		description: 'Project made during Wordpress interships',
		technology: ['Wordpress', 'Divi', 'CSS'],
		image: 'pictures/law-office-screen.png',
		link: 'https://www.gorzowradca.pl/'
	},
	pr4: {
		name: 'English translator',
		description: 'Second version of project made during Wordpress bootcamp. First one was made in Elementor',
		technology: ['Wordpress', 'Gutenberg', 'CSS'],
		image: 'pictures/english-translation-screen.png',
		link: '#'
	},
	pr5: {
		name: 'First portfolio project',
		description: 'Project made during freeCodeCamp Resposive Web Design certification',
		technology: ['HTML', 'CSS'],
		image: 'pictures/fcc-portfolio-screen.png',
		link: 'https://codepen.io/kryle/full/OJgbGyW'
	},
	pr6: {
		name: 'Product landing page',
		description: 'Project made during freeCodeCamp Resposive Web Design certification',
		technology: ['HTML', 'CSS'],
		image: 'pictures/guitar-store-screen.png',
		link: 'https://codepen.io/kryle/full/rNmvZLe'
	},
	projectData(item){
		for (const property in projectsList){
			if(item === property){
                return projectsList[property];
            }
		}	
		}	
	}


const projectWindow = document.getElementById('project-window');
const projectBtn = document.getElementById('project-btn');
const pageBody = document.querySelector('body');

function addData(id){
	const project = projectsList.projectData(id);
	//Add project's name
	let heading = document.createElement('h3');
	heading.innerHTML = project.name;
	projectWindow.appendChild(heading);
	
	//Add description
	let para = document.createElement('p');
	para.innerHTML = project.description;
	projectWindow.appendChild(para);
	
	//Add technology
	let techList = document.createElement('ul');
	projectWindow.appendChild(techList);
	 
	project.technology.forEach(item => {
		let techListItem = document.createElement('li');
		techListItem.innerHTML = item;
		techList.appendChild(techListItem);
	});

	//Add image
	let image = document.createElement('img');
	image.setAttribute('src', project.image);
	projectWindow.appendChild(image);

	//Add link
	let anchor = document.createElement('a');
	anchor.setAttribute('href', project.link);
	anchor.setAttribute('target', '_blank');
	anchor.innerHTML = `${project.name} page`;
	projectWindow.appendChild(anchor);

	//Make visible
	projectWindow.className = 'window-opened';
	
	//block body scrolling
	pageBody.className = 'block-scrolling';

	//Add button functionality
	projectBtn.addEventListener('click', ()=>{
		projectWindow.className = 'window-closed';
		projectWindow.removeChild(heading);
		projectWindow.removeChild(para);
		projectWindow.removeChild(techList);
		projectWindow.removeChild(image);
		projectWindow.removeChild(anchor);
		pageBody.classList.remove('block-scrolling');
	})
}

const project1 = document.querySelector('#pr1');
project1.addEventListener('click', () => addData('pr1'));

const project2 = document.querySelector('#pr2');
project2.addEventListener('click', () => addData('pr2'));

const project3 = document.querySelector('#pr3');
project3.addEventListener('click', () => addData('pr3'));

const project4 = document.querySelector('#pr4');
project4.addEventListener('click', () => addData('pr4'));

const project5 = document.querySelector('#pr5');
project5.addEventListener('click', () => addData('pr5'));

const project6 = document.querySelector('#pr6');
project6.addEventListener('click', () => addData('pr6'));
