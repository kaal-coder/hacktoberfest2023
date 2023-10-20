const adviceElement = document.getElementById('advice');
const getAdviceButton = document.getElementById('getAdviceButton');

getAdviceButton.addEventListener('click', () => {
    adviceElement.innerHTML = 'Loading...';

    fetch('https://api.adviceslip.com/advice')
        .then(data => data.json())
        .then(adviceData => {
            const adviceText = adviceData.slip.advice;
            adviceElement.innerHTML = adviceText;
        })
        .catch(error => {
            adviceElement.innerHTML = 'Failed to fetch advice. Please try again later.';
        });
});
