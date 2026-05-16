// MODAL WINDOW 
const modalOverlay = document.getElementById('poem-modal');
const modalContent = document.getElementById('poem-modal-content');
const modalClose = document.querySelector('.modal-close');

function openModal(contentHtml) {
    if (!modalOverlay || !modalContent) return;
    modalContent.innerHTML = contentHtml;
    modalOverlay.classList.add('active');
    // Prevent background scrolling while modal is open
    document.body.style.overflow = 'hidden';
}

function changeModal(newContentHtml) {
    if (!modalContent) return;
    
    // Lock current height and overflow to prepare for smooth height transition
    const currentHeight = modalContent.offsetHeight;
    modalContent.style.height = currentHeight + 'px';
    modalContent.style.overflow = 'hidden';

    modalContent.classList.add('transitioning');
    
    setTimeout(() => {
        const modalContainer = modalContent.parentElement;
        if (modalContainer) {
            modalContainer.scrollTop = 0;
        }
        modalContent.innerHTML = newContentHtml;
        
        // Measure new height without scaling interference
        modalContent.style.height = 'auto';
        const newHeight = modalContent.offsetHeight;
        
        // Re-apply old height, force reflow, then trigger height animation
        modalContent.style.height = currentHeight + 'px';
        void modalContent.offsetHeight; // Force reflow
        
        modalContent.style.height = newHeight + 'px';
        modalContent.classList.remove('transitioning');

        // Cleanup inline styles after animation finishes
        setTimeout(() => {
            modalContent.style.height = '';
            modalContent.style.overflow = '';
        }, 300);
    }, 300); // Match CSS transition duration
}


function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(() => {
        if (!modalOverlay.classList.contains('active')) {
            modalContent.innerHTML = '';
        }
    }, 400); // Wait for transition to finish
}
if (modalClose) {
    modalClose.addEventListener('click', closeModal);
}
if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
}
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
        closeModal();
    }
});


// GRAPH OF POEMS
const graph = document.getElementById("graph-container");
const edges = document.getElementById("graph-edges");

function getTranslatedPoemHTML(poem) {
    const content = poem.isImage ? `<img src="${poem.translatedText}" alt="Poem: ${poem.translatedObject}" class="img-fluid poem-image">` : `<div class="d-flex justify-content-center"><p class="poem-text">${poem.translatedText}</p></div>`;
    const extra = poem.image ? `<div class="mt-5 w-100"> <img src="${poem.image}" alt="Image: ${poem.translatedObject}" class="img-fluid w-100 rounded shadow-lg"> <p class="text-end mt-2 mb-0" style="font-size: 0.75rem; color: rgba(255,255,255,0.4);"> Image credit: ${poem.imageCredit} </p> </div>` : "";
    return `
        <div class="row mb-5">
            <div class="col-2"></div>
            <div class="col-8">
                <button class="poem-translate-btn" onclick="translatePoem(true, '${poem.id}')">
                    View Original
                </button>
            </div>
            <div class="col-2"></div>
        </div>

        <div class="poem-body mb-5 text-center">
            ${content}
        </div>
        <div class="row mt-4 pt-3">
            <div class="col-12">
                <div class="poem-meta-text">
                    <i class="bi bi-person-fill"></i> ${poem.author}
                </div>
            </div>
            <div class="col-12">
                <div class="poem-meta-text">
                    <i class="bi bi-translate"></i> ${poem.translator}
                </div>
            </div>
            <div class="col-12 text-center mt-4">
                <a href="#" onclick="window.revealObject(event, this, '${poem.translatedObject}', '${poem.translatedWikipedia}')" class="poem-meta-btn">
                    <i class="bi bi-lightbulb"></i> <span style="flex-grow: 1; text-align: center;">?</span>
                </a>
            </div>
        </div>
        ${extra}
    `;
};

function getOriginalPoemHTML(poem) {
    const content = poem.isImage ? `<img src="${poem.text}" alt="Poem: ${poem.object}" class="img-fluid poem-image">` : `<div class="d-flex justify-content-center"><p class="poem-text">${poem.text}</p></div>`;
    const extra = poem.image ? `<div class="mt-5 w-100"> <img src="${poem.image}" alt="Image: ${poem.object}" class="img-fluid w-100 rounded shadow-lg"> <p class="text-end mt-2 mb-0" style="font-size: 0.75rem; color: rgba(255,255,255,0.4);"> Image credit: ${poem.imageCredit} </p> </div>` : "";
    return `
        <div class="row mb-5">
            <div class="col-2"></div>
            <div class="col-8">
                <button class="poem-translate-btn" onclick="translatePoem(false, '${poem.id}')">
                    Translate
                </button>
            </div>
            <div class="col-2"></div>
        </div>

        <div class="poem-body mb-5 text-center">
            ${content}
        </div>
        <div class="row mt-4 pt-3">
            <div class="col-12">
                <div class="poem-meta-text">
                    <i class="bi bi-person-fill"></i> ${poem.author}
                </div>
            </div>
            <div class="col-12 text-center mt-4">
                <a href="#" onclick="window.revealObject(event, this, '${poem.object}', '${poem.wikipedia}')" class="poem-meta-btn">
                    <i class="bi bi-lightbulb"></i> <span style="flex-grow: 1; text-align: center;">?</span>
                </a>
            </div>
        </div>
        ${extra}
    `;
};

function translatePoem(isTranslated, id) {
    POEMS.forEach((poem) => {
        if (poem.id != id) return;
        if (isTranslated) changeModal(getOriginalPoemHTML(poem))
        else changeModal(getTranslatedPoemHTML(poem));
    })
};

window.revealObject = function(event, element, object, link) {
    event.preventDefault(); // Stop the first click from navigating
    element.onclick = null; 
    
    const span = element.querySelector('span');
    if (span) {
        // Measure current size
        const currentWidth = element.offsetWidth;
        const currentHeight = element.offsetHeight;
        
        // Lock both dimensions and prevent invisible text spilling
        element.style.width = currentWidth + 'px';
        element.style.height = currentHeight + 'px';
        element.style.overflow = 'hidden';
        
        // Fade out ?
        span.style.transition = 'opacity 0.15s ease';
        span.style.opacity = '0';
        
        setTimeout(() => {
            // MEASURE PHASE: swap text, disable transitions, measure natural layout
            span.innerText = object;
            element.style.transition = 'none';
            element.style.width = 'auto';
            element.style.height = 'auto';
            const newWidth = element.offsetWidth;
            const newHeight = element.offsetHeight;
            
            // RESET PHASE: snap back to small size
            element.style.width = currentWidth + 'px';
            element.style.height = currentHeight + 'px';
            void element.offsetWidth; // Force reflow
            
            // ANIMATE PHASE: restore transitions, trigger resize
            element.style.transition = '';
            element.style.width = newWidth + 'px';
            element.style.height = newHeight + 'px';
            
            // SUSPENSE PHASE: Wait for box to finish resizing (300ms) before fading in text
            setTimeout(() => {
                // Activate the link functionality now that the text is revealed
                element.href = link;
                element.target = "_blank";
                element.rel = "noopener noreferrer";    
                
                span.style.opacity = '1'; 
                
                element.style.width = '';
                element.style.height = '';
                element.style.overflow = '';
                span.style.transition = '';
            }, 300); // 300ms matches the CSS transition duration for .poem-meta-btn
        }, 150); // Wait for the ? to finish fading out
    }
};

function addPoem(poem) {
    let node = document.createElement("button");
    node.classList = "graph-node";
    node.style.left = `${poem.position.x}%`;
    node.style.top = `${poem.position.y}%`;
    node.ariaLabel = `Poem: ${poem.object}`;
    let icon = document.createElement("img")
    icon.alt = poem.object;
    icon.addEventListener('load', () => {
        const ratio = Math.max(icon.naturalWidth / icon.naturalHeight, icon.naturalHeight / icon.naturalWidth);
        // Calculate final size, bounded between 75px and 150px
        const finalSize = Math.min(50 + ratio * 25, 150);
        node.style.width = `${finalSize}px`;
        node.style.height = `${finalSize}px`;
        node.style.padding = `${40 - Math.min(2, ratio) * 15}px`;
    });
    icon.src = poem.icon;
    node.appendChild(icon);
    node.addEventListener('click', () => openModal(getOriginalPoemHTML(poem)));
    graph.appendChild(node);
    poem.edges.forEach((edge) => {
        POEMS.forEach((_poem) => {
            if (_poem.id != edge) return;
            let line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("x1", `${poem.position.x}%`);
            line.setAttribute("y1", `${poem.position.y}%`);
            line.setAttribute("x2", `${_poem.position.x}%`);
            line.setAttribute("y2", `${_poem.position.y}%`);
            line.setAttribute("stroke", "rgba(255,255,255,0.4)");
            line.setAttribute("stroke-width", "2");
            edges.appendChild(line);
        });
    });
};


window.onload = () => {
    POEMS.forEach((poem) => addPoem(poem));
};


// TOP BUTTONS 
const btnList = document.getElementById('btn-list');
const btnRandom = document.getElementById('btn-random');

function openPoem(id) {
    POEMS.forEach((poem) => {
        if (poem.id != id) return;
        openModal(getOriginalPoemHTML(poem))
    })
};

if (btnList) {
    btnList.addEventListener('click', () => {
        openModal(`
            <h3 class="text-center mb-5" style="color: white; font-weight: 300; letter-spacing: 2px;">POEM COLLECTION</h3>
            <div class="poem-list-container">
                ${POEMS.map((poem) => `
                    <button class="poem-list-item" onclick="openPoem('${poem.id}')">
                        <div class="poem-list-content">
                            <span class="poem-list-title">${poem.translatedObject}</span>
                            <span class="poem-list-author"><i class="bi bi-person-fill"></i> ${poem.author}</span>
                        </div>
                        <i class="bi bi-chevron-right poem-list-arrow"></i>
                    </button>
                `).sort(() => Math.random() - 0.5).join("")}
            </div>
        `);
    });
};
if (btnRandom) {
    btnRandom.addEventListener('click', () => openModal(getOriginalPoemHTML(POEMS[Math.floor(Math.random()*POEMS.length)])));
};