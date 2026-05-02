const modalOverlay = document.getElementById('poem-modal');
const modalContent = document.getElementById('poem-modal-content');
const modalClose = document.querySelector('.modal-close');

// Buttons for testing the modal (from the top navigation)
const btnList = document.getElementById('btn-list');
const btnRandom = document.getElementById('btn-random');

/**
 * Opens the modal and injects the given HTML content.
 * @param {string} contentHtml - The HTML content to display inside the modal.
 */
function openModal(contentHtml) {
    if (!modalOverlay || !modalContent) return;

    modalContent.innerHTML = contentHtml;
    modalOverlay.classList.add('active');

    // Prevent background scrolling while modal is open
    document.body.style.overflow = 'hidden';
}

/**
 * Closes the modal.
 */
function closeModal() {
    if (!modalOverlay) return;

    modalOverlay.classList.remove('active');

    // Restore background scrolling
    document.body.style.overflow = '';

    // Optional: Clear content after closing to stop any media playing, etc.
    setTimeout(() => {
        if (!modalOverlay.classList.contains('active')) {
            modalContent.innerHTML = '';
        }
    }, 400); // Wait for transition to finish
}

// Event Listeners for Closing
if (modalClose) {
    modalClose.addEventListener('click', closeModal);
}

if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
        // Only close if clicking on the overlay itself, not the container
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
}

// Close on Escape key press
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
        closeModal();
    }
});

// ----------------------------------------------------
// Testing Example: Hooking up the top buttons
// ----------------------------------------------------
if (btnList) {
    btnList.addEventListener('click', () => {
        openModal(`
            <h2 class="text-center mb-4">Poem List</h2>
            <p class="text-center">
                A directory of all available poems will be displayed here.<br>
                For now, this is just placeholder text.
            </p>
        `);
    });
}

if (btnRandom) {
    btnRandom.addEventListener('click', () => {
        openModal(`
            <h2 class="text-center mb-4">Random Poem</h2>
            <p style="white-space: pre-line; text-align: center;">
                A random
                poem is
                Here and thereafter
            </p>
            <p class="text-end mt-4">
                — Random person
            </p>
        `);
    });
}

// ----------------------------------------------------
// Graph Nodes Auto-Sizing based on Image Aspect Ratio
// ----------------------------------------------------
function adjustNodeSize(img) {
    const node = img.closest('.graph-node');
    if (!node) return;

    const w = img.naturalWidth;
    const h = img.naturalHeight;
    if (!w || !h) return;

    // Calculate aspect ratio (how far it is from a square)
    // ratio >= 1. A square is 1. Wide is > 1. Tall is > 1.
    const ratio = Math.max(w / h, h / w);


    // Calculate final size, bounded between 75px and 150px
    const finalSize = Math.min(50 + ratio * 25, 150);

    node.style.width = `${finalSize}px`;
    node.style.height = `${finalSize}px`;

    node.style.padding = `${40 - Math.min(2, ratio) * 15}px`;
}

// Run adjustment for all node images
document.querySelectorAll('.graph-node img').forEach(img => {
    if (img.complete) {
        adjustNodeSize(img);
    } else {
        img.addEventListener('load', () => adjustNodeSize(img));
    }
});