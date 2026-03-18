document.addEventListener('DOMContentLoaded', () => {
    // === Boot Sequence Animation ===
    const bootScreen = document.getElementById('boot-screen');
    const bootTextContainer = document.getElementById('boot-text');
    const mainContent = document.getElementById('main-content');

    if (bootScreen && mainContent) {
        const bootLines = [
            "BIOS Date 03/18/26 14:00:00 Ver 08.00.10",
            "CPU: ARM Cortex-M4 Processor",
            "Memory Test: 4194304K OK",
            "",
            "Loading Kernel...",
            "Mounting File Systems... [OK]",
            "Starting Hardware Abstraction Layer... [OK]",
            "Initializing System Integration protocols... [OK]",
            "Loading Dr. Poom Kongniratsaikul Profile Module... [OK]",
            "",
            "Welcome to SYS_INIT. Starting UI..."
        ];

        let currentLine = 0;
        
        function typeLine() {
            if (currentLine < bootLines.length) {
                // Append the line
                const p = document.createElement('div');
                p.textContent = bootLines[currentLine];
                bootTextContainer.appendChild(p);
                
                currentLine++;
                
                // Randomize typing speed for a more authentic feel (50ms to 200ms)
                const nextDelay = Math.random() * 150 + 50;
                setTimeout(typeLine, nextDelay);
            } else {
                // Finish boot sequence
                setTimeout(() => {
                    bootScreen.classList.add('hidden');
                    
                    // Show main content after boot screen fades
                    setTimeout(() => {
                        bootScreen.style.display = 'none';
                        mainContent.classList.remove('hidden');
                    }, 500); // matches the CSS opacity transition duration
                    
                }, 800);
            }
        }

        // Start boot sequence
    setTimeout(typeLine, 500);
} else {
    // Not the home page, or boot screen missing, just show main content
    if (mainContent) {
        mainContent.classList.remove('hidden');
    }
}
});
