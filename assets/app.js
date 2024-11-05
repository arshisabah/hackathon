var productsData = {
    "reusable water bottle": { recyclability: 8, organicMaterials: 7, carbonFootprint: 3 },
    "plastic bottle": { recyclability: 2, organicMaterials: 1, carbonFootprint: 8 },
    "bamboo toothbrush": { recyclability: 7, organicMaterials: 9, carbonFootprint: 2 }
};

const greenTips = [
    "Switch to reusable shopping bags to reduce plastic waste.",
    "Turn off lights when not in use to save energy.",
    "Opt for products with minimal or no packaging.",
    "Buy locally to reduce carbon emissions from transport.",
    "Recycle old electronics responsibly."
];
// Display a random green tip on page load
window.onload = function() {
    const randomTip = greenTips[Math.floor(Math.random() * greenTips.length)];
    document.getElementById("tip-result").textContent = randomTip;
};

// Function to search for a product and display its eco score
function searchProduct() {
    const productName = document.getElementById("product-input").value.toLowerCase();
    const product = productsData[productName];
    
    const scoreSection = document.getElementById("eco-score");
    const scoreResult = document.getElementById("score-result");

    if (product) {
        // Simple scoring formula (scale of 1-10)
        const ecoScore = Math.round(
            (product.recyclability + product.organicMaterials - product.carbonFootprint) / 3
        );
        scoreResult.textContent = Eco Score for "${productName}": ${ecoScore}/10;
    } else {
        scoreResult.textContent = Sorry, no data found for "${productName}".;
    }

    scoreSection.style.display = 'block';
}
const productsData = {
    "reusable water bottle": { recyclability: 8, organicMaterials: 7, carbonFootprint: 3, durability: 9 },
    // Add more products with extra attributes as needed
};

// Updated scoring formula
const ecoScore = Math.round(
    (product.recyclability * 0.3 + product.organicMaterials * 0.3 + product.durability * 0.2 - product.carbonFootprint * 0.2)
);