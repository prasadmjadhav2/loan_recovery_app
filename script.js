document.addEventListener('DOMContentLoaded', () => {
    const predictButton = document.getElementById('predictButton');
    const predictionResultDiv = document.getElementById('predictionResult');
    const borrowerLoanInfo = document.getElementById('borrowerLoanInfo');
    const actionInfo = document.getElementById('actionInfo');
    const errorMessageDiv = document.getElementById('errorMessage');
    const errorText = document.getElementById('errorText');

    // Function to generate random Borrower_ID and Loan_ID
    function generateRandomId(prefix) {
        return `${prefix}_${Math.floor(Math.random() * 900) + 100}`; // Generates IDs like BRW_XXX or LN_XXX
    }

    // --- SIMULATED PREDICTION LOGIC ---
    // This function mimics the behavior of your ML model for client-side demo.
    // It does NOT use the actual .pkl model.
    function getSimulatedPrediction(daysPastDue, numMissedPayments) {
        if (daysPastDue <= 7) {
            return "Email Reminder";
        } else if (daysPastDue <= 30) {
            if (numMissedPayments <= 1) {
                return "Phone Call";
            } else {
                return "Email Reminder & Phone Call"; // More urgent
            }
        } else if (daysPastDue <= 60) {
            if (numMissedPayments <= 2) {
                return "Settlement Offer";
            } else {
                return "Field Visit"; // More aggressive
            }
        } else { // daysPastDue > 60
            if (numMissedPayments <= 3) {
                return "Settlement Offer & Legal Consultation";
            } else {
                return "Legal Action";
            }
        }
    }

    // Function to handle prediction
    predictButton.addEventListener('click', () => {
        // Clear previous results and errors
        predictionResultDiv.classList.add('hidden');
        errorMessageDiv.classList.add('hidden');
        errorText.textContent = '';

        try {
            // Get input values
            const age = parseInt(document.getElementById('age').value);
            const gender = document.getElementById('gender').value;
            const employmentType = document.getElementById('employmentType').value;
            const monthlyIncome = parseFloat(document.getElementById('monthlyIncome').value);
            const loanAmount = parseFloat(document.getElementById('loanAmount').value);
            const loanTenure = parseInt(document.getElementById('loanTenure').value);
            const interestRate = parseFloat(document.getElementById('interestRate').value);
            const monthlyEMI = parseFloat(document.getElementById('monthlyEMI').value);
            const numMissedPayments = parseInt(document.getElementById('numMissedPayments').value);
            const daysPastDue = parseInt(document.getElementById('daysPastDue').value);
            const loanType = document.getElementById('loanType').value;

            // Basic input validation (can be expanded)
            if (isNaN(age) || isNaN(monthlyIncome) || isNaN(loanAmount) || isNaN(loanTenure) ||
                isNaN(interestRate) || isNaN(monthlyEMI) || isNaN(numMissedPayments) || isNaN(daysPastDue)) {
                throw new Error("Please enter valid numerical values for all fields.");
            }

            // Generate random IDs
            const borrowerId = generateRandomId('BRW');
            const loanId = generateRandomId('LN');

            // Get simulated prediction
            const suggestedAction = getSimulatedPrediction(daysPastDue, numMissedPayments);

            // Display results
            borrowerLoanInfo.textContent = `[Borrower: ${borrowerId} | Loan: ${loanId}]`;
            actionInfo.textContent = `Days Overdue: ${daysPastDue} | Suggested Action: ${suggestedAction}`;
            predictionResultDiv.classList.remove('hidden');

        } catch (error) {
            errorMessageDiv.classList.remove('hidden');
            errorText.textContent = error.message;
            console.error("Prediction error:", error);
        }
    });
});