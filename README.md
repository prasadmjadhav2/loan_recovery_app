💰 Loan Recovery Action Predictor (Client-Side Demo)
This repository hosts a client-side web application designed to demonstrate a loan recovery action prediction system. It provides an interactive user interface where agents can input various customer and loan details to receive a suggested collection method.

Important Note: This is a client-side demo built using HTML, Tailwind CSS, and JavaScript. Due to the static hosting nature of GitHub Pages, it does not run the actual Python machine learning model (.pkl file) for predictions. The prediction logic within this demo is simulated using rule-based JavaScript to provide a functional and visually appealing experience.

✨ Features
Interactive UI: User-friendly forms for entering loan and customer details.

Responsive Design: Built with Tailwind CSS to look great on various screen sizes (mobile, tablet, desktop).

Simulated Predictions: Provides instant "suggested actions" based on simple rules, mimicking a real-time prediction.

Random ID Generation: Automatically generates placeholder Borrower and Loan IDs for each prediction.

Clear Output: Displays the predicted action along with key loan details in an easy-to-read format.

🚀 Live Demo
You can see the live demo hosted on GitHub Pages here:

View Live Demo

(Remember to replace YOUR_USERNAME and YOUR_REPOSITORY_NAME with your actual GitHub username and repository name after deployment.)

🛠️ Technologies Used
HTML5: For the basic structure of the web page.

Tailwind CSS: A utility-first CSS framework for rapid and responsive styling.

JavaScript (Vanilla JS): For handling user input, simulating prediction logic, and dynamically updating the UI.

💡 How it Works (Simulated Prediction)
The core of this demo is in script.js. When you click "Predict Suggested Action," the JavaScript collects the input values and then applies a set of predefined rules (based primarily on Days Past Due and Number of Missed Payments) to determine the Suggested Action.

For example:

If Days Past Due is very low, it might suggest "Email Reminder".

If Days Past Due is higher and Num Missed Payments increases, it might escalate to "Phone Call", "Settlement Offer", or even "Legal Action".

This simulation gives the feel of a predictive model without requiring a backend server.

📦 Project Structure
.
├── index.html          # Main HTML file for the UI
└── script.js           # JavaScript logic for interactions and simulated prediction
└── README.md           # This file

⚙️ Local Setup and Running
To run this project locally:

Clone the repository:

git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
cd YOUR_REPOSITORY_NAME

Open index.html: Simply open the index.html file in your preferred web browser. No server is required as it's a static HTML page.

🚀 Deployment to GitHub Pages
Create a GitHub Repository: If you haven't already, create a new public repository on GitHub.

Push your code: Upload the index.html and script.js files (and this README.md) to the root of your repository.

Enable GitHub Pages:

Go to your repository on GitHub.

Click on Settings (usually near the top right).

In the left sidebar, click on Pages.

Under "Source", select Deploy from a branch.

Under "Branch", choose main (or master) and select / (root) for the folder.

Click Save.

Access Your Page: GitHub will build and deploy your page. It might take a few minutes. Once deployed, you'll see a link like https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/ under the "Pages" settings.

🔮 Future Enhancements (Towards a Real ML App)
To make this a real-time machine learning prediction application, you would typically need a backend server:

Backend API: Deploy your Python XGBoost model (and label_encoders) on a web server (e.g., using Flask, FastAPI, Django). This server would expose an API endpoint.

API Integration: Modify script.js to send user input data to this backend API using fetch() or XMLHttpRequest.

Receive Predictions: The JavaScript would then receive the actual model prediction from the API and display it.

Cloud Deployment: Host your backend API on a cloud platform like Google Cloud Run, AWS Lambda, Azure App Service, etc.

Feel free to open issues or submit pull requests if you have suggestions or improvements!
