function generatePortfolio() {
    const username = document.getElementById("username").value;
    const status = document.getElementById("status");
    const loading = document.getElementById("loading");
    const error = document.getElementById("error");

    error.innerText = "";

    if (!username) {
        error.innerText = "Please enter a GitHub username";
        return;
    }

    loading.style.display = "block";

    let steps = [
        "Fetching GitHub profile...",
        "Analyzing repositories...",
        "Detecting top languages...",
        "Generating portfolio with AI...",
        "Almost ready..."
    ];

    let i = 0;

    let interval = setInterval(() => {
        if (i < steps.length) {
            status.innerText = steps[i];
            i++;
        } else {
            clearInterval(interval);

            // TEMP: simulate redirect
            window.location.href = "portfolio.html";
        }
    }, 1000);
}
