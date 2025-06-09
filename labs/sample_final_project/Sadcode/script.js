// JavaScript for Farm Game
document.addEventListener("DOMContentLoaded", () => {
    // Variables
    let coins = 100; // User's starting coins
    let water = 5;   // User's starting water
    let tree = null; // Current tree

    // DOM Elements
    const treeArea = document.getElementById("tree");
    const changeTreeBtn = document.getElementById("changeTree");
    const waterTreeBtn = document.getElementById("waterTree");
    const friendAssistBtn = document.getElementById("friendAssist");
    const collectWaterBtn = document.getElementById("collectWater");
    const completeTaskBtn = document.getElementById("completeTask");

    const treeListUI = document.getElementById("treeListUI");
    const treeOptions = document.querySelectorAll(".treeOption");
    const closeTreeListBtn = document.getElementById("closeTreeList");

    const friendAssistUI = document.getElementById("friendAssistUI");
    const closeFriendAssistBtn = document.getElementById("closeFriendAssist");

    // Functions
    const updateTreeUI = () => {
        if (tree) {
            treeArea.innerHTML = `<p>${tree.name} (${tree.waterLevel} Water)</p>`;
        } else {
            treeArea.innerHTML = "<p>No tree planted yet.</p>";
        }
    };

    const plantTree = (name, cost) => {
        if (cost > coins) {
            alert("Not enough coins!");
            return;
        }

        // Deduct coins if required
        if (cost > 0) {
            coins -= cost;
        }

        // Plant the tree
        tree = { name, waterLevel: 0 };
        updateTreeUI();
        treeListUI.classList.add("hidden");
    };

    const waterTree = () => {
        if (!tree) {
            alert("No tree to water!");
            return;
        }

        if (water <= 0) {
            alert("Not enough water!");
            return;
        }

        tree.waterLevel++;
        water--;
        updateTreeUI();
    };

    // Event Listeners
    changeTreeBtn.addEventListener("click", () => {
        treeListUI.classList.remove("hidden");
    });

    treeOptions.forEach(option => {
        option.addEventListener("click", () => {
            const name = option.textContent;
            const cost = parseInt(option.getAttribute("data-cost"));
            plantTree(name, cost);
        });
    });

    closeTreeListBtn.addEventListener("click", () => {
        treeListUI.classList.add("hidden");
    });

    waterTreeBtn.addEventListener("click", waterTree);

    friendAssistBtn.addEventListener("click", () => {
        friendAssistUI.classList.remove("hidden");
    });

    closeFriendAssistBtn.addEventListener("click", () => {
        friendAssistUI.classList.add("hidden");
    });

    collectWaterBtn.addEventListener("click", () => {
        water += 3; // Example rainwater collection logic
        alert("Collected rainwater!");
    });

    completeTaskBtn.addEventListener("click", () => {
        alert("Task completed!");
    });
});
