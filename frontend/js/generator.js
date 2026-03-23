async function generatePortfolio() {
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

    try {
        // Step 1
        status.innerText = "Fetching GitHub profile...";
        let res = await fetch(`https://api.github.com/users/${username}`);

        if (res.status === 404) {
            throw new Error("User not found");
        }

        if (res.status === 403) {
            throw new Error("API rate limit exceeded");
        }

        let userData = await res.json();

        // Step 2
        status.innerText = "Fetching repositories...";
        let repoRes = await fetch(`https://api.github.com/users/${username}/repos`);
        let repos = await repoRes.json();

        // Step 3
        status.innerText = "Analyzing repositories...";
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Save data in localStorage (temporary)
        localStorage.setItem("githubUser", JSON.stringify(userData));
        localStorage.setItem("githubRepos", JSON.stringify(repos));

        // Step 4
        status.innerText = "Generating portfolio...";
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Redirect
        window.location.href = "portfolio.html";

    } catch (err) {
        loading.style.display = "none";
        error.innerText = err.message;
    }
}
