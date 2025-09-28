// Cart functionality
document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle
    // document.documentElement => referencia directa al <html> (raíz del documento)
    // Usamos esta referencia para leer/escribir atributos globales (p. ej., data-theme)
    (function initTheme() {
        const root = document.documentElement; // const = referencia no reasignable al <html>
        const btn = document.getElementById('themeToggle'); // botón de la navbar para alternar tema
        const stored = localStorage.getItem('theme'); // lee string persistente: 'light' | 'dark' | null
        if (!stored) {
            // First visit: default to light theme
            root.setAttribute('data-theme', 'light'); // <html data-theme="light">
            localStorage.setItem('theme', 'light');   // guarda preferencia para próximas visitas
            if (btn) btn.innerHTML = '<i class="fas fa-sun"></i>'; // innerHTML: inserta ícono de sol
        } else if (stored === 'light') {
            root.setAttribute('data-theme', 'light');  // aplica tema claro desde preferencia guardada
            if (btn) btn.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            // stored === 'dark'
            if (btn) btn.innerHTML = '<i class="fas fa-moon"></i>';
        }
        if (btn) {
            btn.addEventListener('click', () => {
                const isLight = root.getAttribute('data-theme') === 'light'; // lee atributo del <html>
                const next = isLight ? 'dark' : 'light'; // alterna destino
                if (next === 'light') {
                    root.setAttribute('data-theme', 'light'); // aplica claro
                    btn.innerHTML = '<i class="fas fa-sun"></i>'; // icono sol
                } else {
                    root.removeAttribute('data-theme'); // sin atributo => CSS usa tema oscuro por defecto
                    btn.innerHTML = '<i class="fas fa-moon"></i>'; // icono luna
                }
                localStorage.setItem('theme', next === 'light' ? 'light' : 'dark'); // persiste nueva preferencia
            });
        }
    })();
	const cart = [];
	const cartCount = document.querySelector('.cart-count');
	const cartItemsContainer = document.getElementById('cartItems');
	const cartSubtotal = document.getElementById('cartSubtotal');
	const cartTotal = document.getElementById('cartTotal');
	const checkoutBtn = document.getElementById('checkoutBtn');
	const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Evitar añadir si el producto está marcado como agotado
            const card = this.closest('.product-card');
            if (card && card.dataset.soldOut === 'true') {
                return;
            }
			const id = this.getAttribute('data-id');
			const name = this.getAttribute('data-name');
			const price = parseFloat(this.getAttribute('data-price'));
			const img = this.getAttribute('data-img');

			const existingItem = cart.find(item => item.id === id);
			if (existingItem) {
				existingItem.quantity += 1;
			} else {
				cart.push({ id, name, price, img, quantity: 1 });
			}

			updateCart();

			// Abrir el carrito automáticamente
			setTimeout(() => {
				const cartOffcanvasElement = document.getElementById('cartOffcanvas');
				if (cartOffcanvasElement) {
					const cartOffcanvas = new bootstrap.Offcanvas(cartOffcanvasElement);
					cartOffcanvas.show();
				}
			}, 100);
		});
	});

	function updateCart() {
		const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
		cartCount.textContent = totalItems;

		if (cart.length === 0) {
			cartItemsContainer.innerHTML = '<p class="text-center">Tu carrito está vacío</p>';
			checkoutBtn.disabled = true;
		} else {
			cartItemsContainer.innerHTML = '';
			cart.forEach(item => {
				const itemElement = document.createElement('div');
				itemElement.className = 'cart-item';
				itemElement.innerHTML = `
					<div class="d-flex justify-content-between">
						<div class="d-flex">
							<img src="${item.img}" alt="${item.name}" class="cart-item-img me-3">
							<div>
								<h6 class="mb-1">${item.name}</h6>
                                <p class="mb-1">Bs ${item.price.toFixed(2)} x ${item.quantity}</p>
                                <p class="mb-0 text-primary">Bs ${(item.price * item.quantity).toFixed(2)}</p>
							</div>
						</div>
						<div>
							<button class="btn btn-sm btn-outline-light remove-item" data-id="${item.id}">
								<i class="fas fa-times"></i>
							</button>
						</div>
					</div>
				`;
				cartItemsContainer.appendChild(itemElement);
			});

			checkoutBtn.disabled = false;
		}

		const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
		const total = subtotal; // Sin envío, total = subtotal

        cartSubtotal.textContent = `Bs ${subtotal.toFixed(2)}`;
        cartTotal.textContent = `Bs ${total.toFixed(2)}`;

		document.querySelectorAll('.remove-item').forEach(button => {
			button.addEventListener('click', function() {
				const id = this.getAttribute('data-id');
				const itemIndex = cart.findIndex(item => item.id === id);
				if (itemIndex !== -1) {
					cart.splice(itemIndex, 1);
					updateCart();
				}
			});
		});

		updateCheckoutBtn();
	}

	checkoutBtn.addEventListener('click', function(e) {
		if (cart.length === 0) {
			e.preventDefault();
			return;
		}
	});

	function updateCheckoutBtn() {
		if (cart.length === 0) {
			checkoutBtn.style.pointerEvents = 'none';
			checkoutBtn.style.opacity = '0.7';
			checkoutBtn.setAttribute('href', '#');
		} else {
			let message = '¡Hola! Quiero comprar:%0A';
			let total = 0;
			cart.forEach(item => {
				const subtotal = item.price * item.quantity;
				total += subtotal;
                message += `- ${item.name} x${item.quantity}: Bs ${subtotal.toFixed(2)}%0A`;
			});
            message += `Total: Bs ${total.toFixed(2)}`;
			const waLink = `https://wa.me/59178468355?text=${message}`;
			checkoutBtn.setAttribute('href', waLink);
			checkoutBtn.style.pointerEvents = 'auto';
			checkoutBtn.style.opacity = '1';
		}
	}

	// Initialize cart
	updateCart();
});



