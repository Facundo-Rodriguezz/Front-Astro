const producto = document.querySelector('.producto');
		if (producto) {
			producto.addEventListener('click', () => {
				const navLinks = document.querySelector('.nav-links');
				if (navLinks) {
					navLinks.classList.toggle('expanded');
				}
			});
		}