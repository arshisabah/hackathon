// Initialize on the Suggestions section by default
document.addEventListener("DOMContentLoaded", () => {
    showSection("suggestions");
});

function showSection(sectionId) {
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => {
        section.style.display = "none";
    });

    document.getElementById(sectionId).style.display = "block";

    const buttons = document.querySelectorAll(".nav-button");
    buttons.forEach(button => {
        button.classList.remove("active");
    });

    // Fixed selector by adding proper quotation marks
    document.querySelector(`.nav-button[onclick="showSection('${sectionId}')"]`).classList.add("active");
}

function searchProduct() {
    const query = document.querySelector(".search-bar").value.toLowerCase();
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Clear previous results

    // Example product data
    const products = {
        "handbag": {
            disadvantage: "Leather handbag uses animal products and contributes to deforestation.",
            alternatives: [
                {
                    name: "Bamboo Handbag",
                    advantage: "Sustainable, lightweight, and biodegradable.",
                    image: "https://cdn.shopify.com/s/files/1/1581/2239/products/HTB1U7pSXLxj_uVjSZFqq6yboFXac_700x700.jpg?v=1676337284"
                },
                {
                    name: "Cotton Bag",
                    advantage: "Durable and made from natural fibers.",
                    image: "path/to/cotton-bag.jpg"
                }
                
            ]
        },
        "plastic bag": {
            disadvantage: "Non-biodegradable and harms marine life.",
            alternatives: [
                {
                    name: "Reusable Cloth Bags",
                    advantage: "Durable and washable.",
                    image: "https://daksindia.com/wp-content/uploads/2021/08/web1.jpeg"
                },
                {
                    name: "Paper Bags",
                    advantage: "Recyclable and biodegradable.",
                    image: ""
                }
            ]
        },
        // Add other products here
    };

    if (products[query]) {
        const productInfo = products[query];
        resultsDiv.innerHTML += `<p><strong>Disadvantage:</strong> ${productInfo.disadvantage}</p>`;
        resultsDiv.innerHTML += `<h3>Alternative Suggestions:</h3>`;
        
        productInfo.alternatives.forEach(alt => {
            resultsDiv.innerHTML += `
                <div class="alternative">
                    <img src="${alt.image}" alt="${alt.name}" style="width: 100px; height: auto;">
                    <h4>${alt.name}</h4>
                    <p><strong>Advantage:</strong> ${alt.advantage}</p>
                </div>
            `;
        });
    } else if (query) {
        resultsDiv.innerHTML = `<p>No specific suggestions found for "${query}". Try using more general terms.</p>`;
    } else {
        resultsDiv.innerHTML = `<p>Please enter a product name to search for alternatives.</p>`;
    }

    document.getElementById("results-section").style.display = "block"; // Show results section
}

