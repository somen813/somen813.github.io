const content = document.getElementById('content');
async function readingHeader() {
	let retries = 0;
	const maxRetries = 3;
	while(retries < maxRetries) {
		try {
			const responce = await fetch('/settings/header.html');
			const data = await responce.text();
			await content.insertAdjacentHTML('beforebegin', data)
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
async function readingCopyright() {
	let retries = 0;
	const maxRetries = 3
	while(retries < maxRetries) {
		try {
			const responce = await fetch('/settings/copyright.html');
			const data = await responce.text();
			await content.insertAdjacentHTML('beforeend', data)
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
readingHeader();
readingCopyright();