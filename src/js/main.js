const dropdownItem = document.querySelector('.nav__dropdown-item')
const dropdownMenu = document.querySelector('.nav__dropdown-menu')
const dropdownArrow = document.querySelector('.nav__dropdown-arrow')

const showMenu = (toggleId, navId) => {
	const toggle = document.getElementById(toggleId),
		nav = document.getElementById(navId)

	toggle.addEventListener('click', () => {
		nav.classList.toggle('nav__show-menu')
		toggle.classList.toggle('nav__show-icon')
	})
}

const showDropdown = () => {
	dropdownMenu.classList.toggle('nav__showDropdown')
	dropdownArrow.classList.toggle('nav__dropdown-arrowR')
}

showMenu('nav-toggle', 'nav-menu')
dropdownItem.addEventListener('click', showDropdown)

