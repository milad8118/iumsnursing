const copyText = document.getElementById('copy-text');

copyText.addEventListener('click', () => {
    const text = copyText.innerText;
    navigator.clipboard.writeText(text);
    const alert = document.createElement('div');
    alert.innerText = 'Copied!';
    alert.style.position = 'absolute';
    alert.style.top = '0';
    alert.style.left = '50%';
    alert.style.transform = 'translateX(-50%)';
    alert.style.backgroundColor = '#f1c40f';
    alert.style.padding = '10px';
    alert.style.borderRadius = '5px';
    document.body.appendChild(alert);
    setTimeout(() => {
        alert.remove();
    }, 2000);
});

const scrollLink = document.getElementById('scroll-link');
const targetElement = document.getElementById('articles');

scrollLink.addEventListener('click', (event) => {
    event.preventDefault();
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 250;
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
});
const scrollLink2 = document.getElementById('scroll-link2');
const targetElement2 = document.getElementById('slides');

scrollLink2.addEventListener('click', (event) => {
    event.preventDefault();
    const targetPosition = targetElement2.getBoundingClientRect().top + window.pageYOffset - 250;
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
});
const scrollLink3 = document.getElementById('scroll-link3');
const targetElement3 = document.getElementById('biography');

scrollLink3.addEventListener('click', (event) => {
    event.preventDefault();
    const targetPosition = targetElement3.getBoundingClientRect().top + window.pageYOffset - 250;
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
});
const scrollLink4 = document.getElementById('scroll-link4');
const targetElement4 = document.getElementById('questions');

scrollLink4.addEventListener('click', (event) => {
    event.preventDefault();
    const targetPosition = targetElement4.getBoundingClientRect().top + window.pageYOffset - 250;
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
});


