const benefitsContainer = document.querySelector(".main__benefits-container");

benefitsContainer.addEventListener('click', (e) => {
    activeBenefit = document.querySelector(".main__benefit.active");
    
    benefitTarget = e.target;
    if (benefitTarget.tagName !== "DIV") {
        benefitTarget = benefitTarget.parentNode;
    }
    
    if (activeBenefit && activeBenefit !== benefitTarget) {
        activeBenefit.classList.remove("active");
    }
    benefitTarget.classList.toggle("active")
});