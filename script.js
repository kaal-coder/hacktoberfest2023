fetch('https://api.adviceslip.com/advice')
    .then(data => data.json())
    .then(adviceData => {
        const adviceText = adviceData.slip.advice;
        const adviceElement = document.getElementById('advice');
        adviceElement.innerHTML = adviceText;
    })
