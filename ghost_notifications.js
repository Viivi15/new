
/* === GHOST NOTIFICATIONS SYSTEM === */
const memories = [
    { text: "System Alert: Bhindi detected in vicinity. Evacuate.", time: 5000 }, // 5 seconds
    { text: "Reminder: You promised to sleep > 4 hours.", time: 15000 },
    { text: "New Message: 'Where ya from Harry?' (June 20, 2024)", time: 30000 },
    { text: "Critical: Ota's Medicine No. 1 is due.", time: 60000 }
];

memories.forEach(memory => {
    setTimeout(() => {
        showNotification('HarshitOS Memory', memory.text);
    }, memory.time);
});

function showNotification(title, body) {
    // Create notification element
    const notif = document.createElement('div');
    notif.className = 'fixed top-4 right-4 bg-white/90 backdrop-blur text-gray-800 p-4 rounded-xl shadow-2xl border-l-4 border-blue-500 transform translate-x-full transition-transform duration-500 z-[9999]';
    notif.innerHTML = `
        <div class="font-bold text-sm">${title}</div>
        <div class="text-xs mt-1">${body}</div>
    `;

    document.body.appendChild(notif);

    // Slide in
    requestAnimationFrame(() => {
        notif.style.transform = 'translateX(0)';
    });

    // Slide out and remove
    setTimeout(() => {
        notif.style.transform = 'translateX(120%)';
        setTimeout(() => notif.remove(), 500);
    }, 4000);
}
