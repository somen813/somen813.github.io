const nowURL = window.location.href;
const body = document.querySelector('body');
const main = document.getElementById('main')
const content = document.getElementById('content');

function initHeader() {
	const headerMenu = document.getElementById('headerMenu');
	const headerToggle = document.getElementById('headerToggle');
	const icon_menu = document.getElementById('icon_menu');
	const icon_close = document.getElementById('icon_close');
	const shareBtn_copy = document.getElementById('shareBtn_copy');
	let headerMenuOpen = false;

	function headerMenu_animation(direction) {
		const keyframes = {
			transform: ['translate(0, 0)', 'translate(100%, 0)'],
		};
		const options = {
			duration: 250,
			easing: 'ease',
			fill: 'forwards',
			direction: direction,
		};
		return headerMenu.animate(keyframes, options);
	}
	function headerToggle_animation(direction) {
		const options = {
			duration: 250,
			easing: 'ease',
			fill: 'forwards',
			direction: direction,
		}
		function backgroundColor() {
			const keyframes = {
				backgroundColor: ['rgba(56, 123, 178, 1)', 'transparent'],
			};
			headerToggle.animate(keyframes, options);
		}
		function icon_menu_animation() {
			const keyframes = {
				opacity: [1, 0],
			};
			icon_menu.animate(keyframes, options);
		}
		function icon_close_animation() {
			const keyframes = {
				opacity: [0, 1],
			};
			icon_close.animate(keyframes, options);
		}
		backgroundColor();
		icon_menu_animation();
		icon_close_animation();
	}
	document.addEventListener('click', (e) => {
		const clickHeaderToggle = e.target.closest('#headerToggle');
		const clickOutSide = !e.target.closest('#headerMenu') && !clickHeaderToggle;
		if (clickHeaderToggle) {
			if (headerMenuOpen) {
				headerMenu_animation('reverse');
				headerToggle_animation('reverse');
				headerMenuOpen = false;
				return
			};
			headerMenu_animation('normal');
			headerToggle_animation('normal');
			headerMenuOpen = true;
		};
		if (clickOutSide && headerMenuOpen) {
			headerMenu_animation('reverse');
			headerToggle_animation('reverse');
			headerMenuOpen = false;
			return;
		};
	});


	function copylink() {
		navigator.clipboard.writeText(nowURL)
	}
	shareBtn_copy.addEventListener('click', copylink);
}
async function loadingHeader() {
	let retries = 0;
	const maxRetries = 3;
	while(retries < maxRetries) {
		try {
			const responce = await fetch('/settings/header.html');
			const data = await responce.text();
			await body.insertAdjacentHTML('afterbegin', data);
			await initHeader();
			return
		} catch(error) {
			retries++;
			console.error(`エラーが発生：${retries}回目${error.message}`)
		}
	}
	if(retries == 3) {
		console.log('エラーが3回出たので読み込みを終了します。')
	}
}
async function loadingFooter() {
	let retries = 0;
	const maxRetries = 3
	while(retries < maxRetries) {
		try {
			const responce = await fetch('/settings/footer.html');
			const data = await responce.text();
			await main.insertAdjacentHTML('afterend', data)
			return
		} catch(error) {
			retries++;
			console.error(`エラーが発生：${retries}回目${error.message}`)
		}
	}
	if (retries == 3) {
		console.log('エラーが3回出たので読み込みを終了します。')
	}
}

loadingHeader();
loadingFooter();