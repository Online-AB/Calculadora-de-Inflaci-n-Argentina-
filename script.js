// Inflation Calculator Functions

function calculateInflation() {
    const initialAmount = parseFloat(document.getElementById('initial-amount').value);
    const inflationRate = parseFloat(document.getElementById('inflation-rate').value);
    const timePeriod = parseFloat(document.getElementById('time-period').value);
    const resultDiv = document.getElementById('result');

    // Validate inputs
    if (isNaN(initialAmount) || isNaN(inflationRate) || isNaN(timePeriod)) {
        resultDiv.innerHTML = '<div class="error">Por favor, complete todos los campos con valores válidos.</div>';
        return;
    }

    if (initialAmount <= 0 || inflationRate < 0 || timePeriod <= 0) {
        resultDiv.innerHTML = '<div class="error">Por favor, ingrese valores positivos válidos.</div>';
        return;
    }

    // Calculate inflation impact
    const inflationDecimal = inflationRate / 100;
    const futureValue = initialAmount * Math.pow(1 + inflationDecimal, timePeriod);
    const inflationImpact = futureValue - initialAmount;
    const purchasingPower = initialAmount / futureValue;

    // Display results
    resultDiv.innerHTML = `
        <div class="results-container">
            <h3>Resultados del Cálculo</h3>
            <div class="result-item">
                <span class="label">Monto inicial:</span>
                <span class="value">$${initialAmount.toLocaleString('es-AR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
            </div>
            <div class="result-item">
                <span class="label">Valor futuro:</span>
                <span class="value">$${futureValue.toLocaleString('es-AR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
            </div>
            <div class="result-item">
                <span class="label">Impacto de la inflación:</span>
                <span class="value impact">+$${inflationImpact.toLocaleString('es-AR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
            </div>
            <div class="result-item">
                <span class="label">Poder adquisitivo:</span>
                <span class="value">${(purchasingPower * 100).toFixed(2)}% del valor original</span>
            </div>
            <div class="result-explanation">
                <p><strong>Interpretación:</strong> Después de ${timePeriod} año(s) con una inflación del ${inflationRate}% anual, necesitarás $${futureValue.toLocaleString('es-AR', {minimumFractionDigits: 2, maximumFractionDigits: 2})} para comprar lo que hoy cuesta $${initialAmount.toLocaleString('es-AR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}.</p>
            </div>
        </div>
    `;
}

// Country selector functionality
function changeCountry(selectedCountry) {
    if (selectedCountry && selectedCountry !== window.location.pathname.split('/').pop()) {
        window.location.href = selectedCountry;
    }
}

// Add event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add Enter key support for calculator inputs
    const inputs = document.querySelectorAll('#initial-amount, #inflation-rate, #time-period');
    inputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                calculateInflation();
            }
        });
    });

    // Set current country in dropdown
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const countrySelect = document.getElementById('country-select');
    if (countrySelect) {
        countrySelect.value = currentPage;
    }
});

// Smooth scrolling for anchor links
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Form validation and user experience enhancements
function formatCurrency(input) {
    let value = input.value.replace(/[^\d.]/g, '');
    if (value !== '') {
        const number = parseFloat(value);
        if (!isNaN(number)) {
            input.value = number.toFixed(2);
        }
    }
}

// Add input formatting on blur
document.addEventListener('DOMContentLoaded', function() {
    const amountInput = document.getElementById('initial-amount');
    if (amountInput) {
        amountInput.addEventListener('blur', function() {
            formatCurrency(this);
        });
    }
});