const message = document.getElementById('message');
const chooseLine = document.getElementById('chooseLine');
const checkLines = document.getElementById('checkLines');
const resetLines = document.getElementById('resetLines');

async function callAPI(path, method) {
    const response = await fetch(`https://foo.fly.dev/${path}/thelostboys`, {
        cache: 'no-store',
        method: method,
        mode: 'cors'
    });
    const result = await response.json();
    if (result.success) {
        message.innerText = result.text;
    } else {
        alert(`Unexpected error: ${result.text}`);
    }

}

chooseLine.addEventListener('click', async e => callAPI('choose', 'POST'))
// checkLines.addEventListener('click', async e => callAPI('check', 'GET'))
// resetLines.addEventListener('click', async e => callAPI('reset', 'POST'))
