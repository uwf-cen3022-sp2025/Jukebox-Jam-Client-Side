document.addEventListener("DOMContentLoaded", function () {
    // Ensure the navbar container exists in the HTML
    const navbar = document.getElementById("navbar");

    if (!navbar) {
        console.error("❌ Navbar element not found! Make sure <nav id='navbar'> is in index.html.");
        return;
    }

    // Define navigation items
    const navItems = [
        { name: "Home", page: "home" },
        { name: "Login", page: "login" },
        { name: "Your Playlists", page: "playlist" },
        { name: "Search Library", page: "search" },
        { name: "Register", page: "register" }
    ];

    // Create the navigation bar dynamically
    const navList = document.createElement("ul");

    navItems.forEach(item => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");

        link.href = "#";
        link.textContent = item.name;
        link.dataset.page = item.page;

        listItem.appendChild(link);
        navList.appendChild(listItem);
    });

    navbar.appendChild(navList);

    // Handle click events using event delegation
    navbar.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            event.preventDefault();
            loadPage(event.target.dataset.page);
        }
    });

    console.log("✅ Navbar successfully loaded!");
});
