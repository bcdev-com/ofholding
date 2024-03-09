const cranes = [1,2,4,5,9,6,7,8,10,12,13,14];
var currentCrane = 0;

const crane = document.getElementById('crane');
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
        message.style.display = `none`;
        crane.setAttribute('src', `/images/cranes/crane (${cranes[currentCrane]}).png`);
        crane.style.display = 'block';
        message.className = `crane${cranes[currentCrane]}`;
        setTimeout(() => message.style.display = 'block', 300);
        currentCrane = (currentCrane + 1) % cranes.length;
        message.innerText = result.text;
    } else {
        alert(`Unexpected error: ${result.text}`);
    }

}

chooseLine.addEventListener('click', async e => callAPI('choose', 'POST'))
// checkLines.addEventListener('click', async e => callAPI('check', 'GET'))
// resetLines.addEventListener('click', async e => callAPI('reset', 'POST'))
