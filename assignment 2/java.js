const form = document.querySelector('.form');
const radioInputs = document.querySelectorAll('.form-radio-input');
const card = document.querySelector('.card');

let ratingValue;

radioInputs.forEach((input) => {
    input.addEventListener("change", (e) => {
        ratingValue = e.target.value;
    });
});

form.addEventListener("submit",(e) => {
    e.preventDefault();
    if (!ratingValue) return;
    renderThankyouContent(card, ratingValue);
});

function renderThankyouContent(container, ratingValue) {
 container.innerHTML = `
 <div class="thank-you">
         <img src="/Image/illustration-thank-you.svg" 
         class="thank-you-img" 
         alt="thankyou">
    <p class="result">You selected ${ratingValue} out of 5</p>
    <h1 class="thank-you-title">Thank you!</h1>
    <p class="thank-you-paragraph">We appreciate you taking the time to give a rating. If you ever need more support,
    don’t hesitate to get in touch!
    </p>
</div>
        `;
}
