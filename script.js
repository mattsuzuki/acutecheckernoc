document.addEventListener('DOMContentLoaded', () => {
    const onesInput = document.getElementById('ones');
    const twosInput = document.getElementById('twos');
    const threesInput = document.getElementById('threes');
    const oneToOneInput = document.getElementById('one_to_ones');
    const submitButton = document.getElementById('submit');
    const resultsSpan = document.getElementById('results');
    const totalSpan = document.getElementById('total');

    const calculateResults = (event) => {
        event.preventDefault();  // Add this line to prevent form submission

        const onesValue = onesInput.value ? parseFloat(onesInput.value) * 1.2 / 8 : 0;
        const twosValue = twosInput.value ? parseFloat(twosInput.value) * 1.7 / 8 : 0;
        const threesValue = threesInput.value ? parseFloat(threesInput.value) * 2.2 / 8 : 0;
        const oneToOneValue = oneToOneInput.value ? parseFloat(oneToOneInput.value) : 0;

        resultsSpan.textContent = `Ones: ${onesValue.toFixed(4)}, Twos: ${twosValue.toFixed(4)}, Threes: ${threesValue.toFixed(4)}, One to One's: ${oneToOneValue.toFixed(4)}`;
        totalSpan.textContent = (onesValue + twosValue + threesValue + oneToOneValue).toFixed(4);
    };

    submitButton.addEventListener('click', calculateResults);
});
