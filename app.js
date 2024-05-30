let modal = document.querySelector('.header-modal')
let modal_click = document.querySelector('.modal-click')
let modal_close = document.querySelector('.modal-close')

modal_click.addEventListener('click', () => {
	modal.style.display = 'flex'
	modal_close.style.display = 'block'
	modal_click.style.display = 'none'
})

modal_close.addEventListener('click', () => {
	modal.style.display = 'none'
	modal_close.style.display = 'none'
	modal_click.style.display = 'flex'
})


document.addEventListener('DOMContentLoaded', function () {
	const tours = [
		{
			name: 'Горный поход "Эверест"',
			type: 'горные походы',
			difficulty: 'сложная',
			duration: '10 дней',
			season: 'весна-лето'
		},
		{
			name: 'Экскурсия по Парижу',
			type: 'экскурсии',
			difficulty: 'легкая',
			duration: '1 день',
			season: 'круглогодично'
		}
		// Добавьте остальные туры
	]

	const filters = {
		type: 'all',
		difficulty: 'all'
		// Добавьте остальные фильтры
	}

	const toursList = document.getElementById('tours-list')

	function renderTours() {
		toursList.innerHTML = ''
		tours.forEach(tour => {
			if (
				(filters.type === 'all' || tour.type === filters.type) &&
				(filters.difficulty === 'all' || tour.difficulty === filters.difficulty)
			) {
				const tourElement = document.createElement('div')
				tourElement.classList.add('tour')
				tourElement.innerHTML = `
                    <h3>${tour.name}</h3>
                    <p><strong>Тип:</strong> ${tour.type}</p>
                    <p><strong>Сложность:</strong> ${tour.difficulty}</p>
                    <p><strong>Продолжительность:</strong> ${tour.duration}</p>
                    <p><strong>Сезон:</strong> ${tour.season}</p>
                `
				toursList.appendChild(tourElement)
			}
		})
	}

	renderTours()

	document
		.getElementById('type-filter')
		.addEventListener('change', function (event) {
			filters.type = event.target.value
			renderTours()
		})

	document
		.getElementById('difficulty-filter')
		.addEventListener('change', function (event) {
			filters.difficulty = event.target.value
			renderTours()
		})

	// Добавьте обработчики событий для других фильтров при необходимости
})


document.addEventListener('DOMContentLoaded', function () {
	const contactButtons = document.querySelectorAll('.contact-btn')
	contactButtons.forEach(button => {
		button.addEventListener('click', function () {
			const email = button.getAttribute('data-email')
			alert('Вы можете связаться с нами по электронной почте: ' + email)
		})
	})
})
