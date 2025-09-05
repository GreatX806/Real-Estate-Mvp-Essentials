// Payment Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Tab Switching
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show corresponding content
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Card Payment Form
    const cardPaymentForm = document.getElementById('card-payment-form');
    if (cardPaymentForm) {
        cardPaymentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real application, this would connect to a payment gateway
            // For this MVP, we'll just show a confirmation message
            alert('In a real application, this would process your card payment securely. For this demo, consider your payment simulation successful!');
            
            // Reset form
            this.reset();
        });
    }
    
    // Payment Plan Calculator
    const installmentForm = document.getElementById('installment-form');
    const paymentPlanResult = document.getElementById('payment-plan-result');
    
    if (installmentForm && paymentPlanResult) {
        installmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const totalAmount = parseFloat(document.getElementById('total-amount').value);
            const downPayment = parseFloat(document.getElementById('down-payment').value);
            const period = parseInt(document.getElementById('installment-period').value);
            
            // Calculate payment plan
            const remainingAmount = totalAmount - downPayment;
            const monthlyPayment = remainingAmount / period;
            const interestRate = 0.05; // 5% annual interest rate
            const monthlyInterestRate = interestRate / 12;
            const monthlyPaymentWithInterest = remainingAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, period)) / (Math.pow(1 + monthlyInterestRate, period) - 1);
            
            // Display result
            paymentPlanResult.innerHTML = `
                <h5>Your Payment Plan</h5>
                <ul>
                    <li><strong>Property Value:</strong> ₦${totalAmount.toLocaleString()}</li>
                    <li><strong>Down Payment:</strong> ₦${downPayment.toLocaleString()}</li>
                    <li><strong>Remaining Amount:</strong> ₦${remainingAmount.toLocaleString()}</li>
                    <li><strong>Payment Period:</strong> ${period} months</li>
                    <li><strong>Monthly Payment (without interest):</strong> ₦${monthlyPayment.toLocaleString(undefined, {maximumFractionDigits: 2})}</li>
                    <li><strong>Monthly Payment (with 5% annual interest):</strong> ₦${monthlyPaymentWithInterest.toLocaleString(undefined, {maximumFractionDigits: 2})}</li>
                    <li><strong>Total Interest Paid:</strong> ₦${((monthlyPaymentWithInterest * period) - remainingAmount).toLocaleString(undefined, {maximumFractionDigits: 2})}</li>
                    <li><strong>Total Amount Paid:</strong> ₦${(downPayment + (monthlyPaymentWithInterest * period)).toLocaleString(undefined, {maximumFractionDigits: 2})}</li>
                </ul>
                <p>Contact our finance team for more details or to customize your payment plan.</p>
            `;
            
            paymentPlanResult.classList.add('active');
        });
    }
    
    // Payment Notification Form
    const paymentNotificationForm = document.getElementById('payment-notification-form');
    if (paymentNotificationForm) {
        paymentNotificationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real application, this would send the notification to the server
            // For this MVP, we'll just show a confirmation message
            alert('Thank you for your payment notification. Our team will verify your payment and update your account within 24 hours.');
            
            // Reset form
            this.reset();
        });
    }
    
    // Format card number input with spaces
    const cardNumberInput = document.getElementById('card-number');
    if (cardNumberInput) {
        cardNumberInput.addEventListener('input', function(e) {
            let value = this.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
            let formattedValue = '';
            
            for (let i = 0; i < value.length; i++) {
                if (i > 0 && i % 4 === 0) {
                    formattedValue += ' ';
                }
                formattedValue += value[i];
            }
            
            this.value = formattedValue.substring(0, 19); // Limit to 16 digits + 3 spaces
        });
    }
    
    // Format expiry date input
    const expiryDateInput = document.getElementById('expiry-date');
    if (expiryDateInput) {
        expiryDateInput.addEventListener('input', function(e) {
            let value = this.value.replace(/\D/g, '');
            
            if (value.length > 2) {
                this.value = value.substring(0, 2) + '/' + value.substring(2, 4);
            } else {
                this.value = value;
            }
        });
    }
    
    // Format CVV input
    const cvvInput = document.getElementById('cvv');
    if (cvvInput) {
        cvvInput.addEventListener('input', function(e) {
            this.value = this.value.replace(/\D/g, '').substring(0, 3);
        });
    }
});

// Enhance chatbot with payment-related responses
document.addEventListener('DOMContentLoaded', function() {
    // Add payment-related responses to the chatbot
    if (typeof chatbotResponses !== 'undefined') {
        chatbotResponses.payment = [
            "You can make payments through bank transfer, card payment, or set up a payment plan. Would you like more information about any of these options?",
            "Our payment page offers multiple options including bank transfers to Nigerian banks and card payments. Which would you prefer to use?",
            "For property purchases, we offer flexible payment plans with various installment options. Would you like me to explain how they work?"
        ];
        
        chatbotResponses.bankDetails = [
            "For bank transfers, please use: Bank: First Bank of Nigeria, Account Name: RealEstate MVP Nigeria Ltd, Account Number: 1234567890. After transferring, please fill out our notification form.",
            "Our bank details for transfers are: First Bank of Nigeria, Account Number: 1234567890, Account Name: RealEstate MVP Nigeria Ltd. Don't forget to use your name and property ID as reference.",
            "You can make a transfer to our First Bank account: 1234567890, Account Name: RealEstate MVP Nigeria Ltd. Please notify us after making the payment."
        ];
        
        chatbotResponses.paymentPlan = [
            "Our payment plans allow you to pay for properties in installments. We typically require a down payment of 20-30%, with the balance spread over 6-36 months. Would you like to calculate a specific plan?",
            "We offer flexible payment plans with terms from 6 to 36 months. The down payment is usually 20-30% of the property value. Interest rates start at 5% annually.",
            "Our installment plans are designed to make property ownership accessible. You can use our calculator on the payments page to estimate your monthly payments based on your preferred down payment and period."
        ];
    }
    
    // Extend the getBotResponse function to handle payment queries
    if (typeof getBotResponse === 'function') {
        const originalGetBotResponse = getBotResponse;
        
        window.getBotResponse = function(userMessage) {
            userMessage = userMessage.toLowerCase();
            
            // Check for payment-related keywords
            if (userMessage.includes('payment') || userMessage.includes('pay') || userMessage.includes('money') || userMessage.includes('transfer')) {
                return getRandomResponse(chatbotResponses.payment);
            } else if (userMessage.includes('bank') || userMessage.includes('account') || userMessage.includes('transfer details')) {
                return getRandomResponse(chatbotResponses.bankDetails);
            } else if (userMessage.includes('installment') || userMessage.includes('payment plan') || userMessage.includes('monthly payment')) {
                return getRandomResponse(chatbotResponses.paymentPlan);
            } else {
                // Use the original function for other queries
                return originalGetBotResponse(userMessage);
            }
        };
    }
});