document.addEventListener('DOMContentLoaded', () => {
    // === Boot Sequence Removed Temporarily ===
    // We can add it back later if needed, but for now we just show the content immediately.
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
        mainContent.classList.remove('hidden');
    }
