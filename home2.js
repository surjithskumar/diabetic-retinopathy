    // for username on navbar
    const uname = localStorage.getItem('username');
    document.getElementById("name").innerText = `${uname}`;

    // Retrieve the score and total questions from local storage
    const score = Math.max(0, parseInt(localStorage.getItem("quizScore"), 10) || 0);
    const totalQuestions = 15;
    const incorrectAnswers = Math.max(0, totalQuestions - score);

    // Debugging: Check values
    console.log("Score:", score);
    console.log("Total Questions:", totalQuestions);
    console.log("Incorrect Answers:", incorrectAnswers);

    // Calculate percentages
    const incorrectPercentage = ((incorrectAnswers / totalQuestions) * 100).toFixed(1);

    // display percentages
    document.getElementById("incorrectPercentage").innerText = `${incorrectPercentage}%`;

    // Function for logging out
    function logout() {
        localStorage.removeItem('username');
        window.location.href = 'index.html';
    }