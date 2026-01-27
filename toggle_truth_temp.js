
function toggleTruth(card) {
    // Close others
    document.querySelectorAll('.truth-card.active').forEach(c => {
        if (c !== card) c.classList.remove('active');
    });
    card.classList.toggle('active');
}
window.toggleTruth = toggleTruth; // Ensure it's globally accessible
