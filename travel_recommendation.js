document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search");
    const resetButton = document.getElementById("reset");

    // Search functionality (currently just logs input)
    searchInput.addEventListener("input", function () {
        console.log("Searching for:", searchInput.value);
        // You can implement a filtering function here based on your data
    });

    // Reset button functionality
    resetButton.addEventListener("click", function () {
        searchInput.value = ""; // Clear the input field
        console.log("Search input cleared.");
    });
});
