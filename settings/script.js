const nowURL = window.location.href;
const body = document.querySelector('body');
const content = document.getElementById('content');

async function loadingHeader() {
	let retries = 0;
	const maxRetries = 3;
	while(retries < maxRetries) {
		try {
			const responce = await fetch('/settings/header.html');
			const data = await responce.text();
			await body.insertAdjacentHTML('afterbegin', data)
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
async function loadingCopyright() {
	let retries = 0;
	const maxRetries = 3
	while(retries < maxRetries) {
		try {
			const responce = await fetch('/settings/copyright.html');
			const data = await responce.text();
			await body.insertAdjacentHTML('beforeend', data)
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


function initHeaderMenuAnimation() {
	const headerMenuBox = document.getElementById('hedermenuBox');
	const headerMenuToggle = document.getElementById('headerMenuToggle');

	function headerMenuBoxAnimation(direction) {
		const keyframs = {
			translate: ['0 0', '-100% 0'],
		};
		const options = {
			duration: 250,
			easing: 'ease',
			fill: 'forwards',
			direction: direction,
		};
		return headerMenuBox.animate(keyframs, options);
	}

}
loadingHeader();
loadingCopyright();