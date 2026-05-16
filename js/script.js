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


// TOP BUTTONS 
const btnList = document.getElementById('btn-list');
const btnRandom = document.getElementById('btn-random');

if (btnList) {
    btnList.addEventListener('click', () => {
        return;
    });
};
if (btnRandom) {
    btnRandom.addEventListener('click', () => {
        return;
    });
};


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
                <button class="poem-meta-btn">
                    <i class="bi bi-lightbulb"></i> <span style="flex-grow: 1; text-align: center;">?</span>
                </button>
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
                <button class="poem-meta-btn">
                    <i class="bi bi-lightbulb"></i> <span style="flex-grow: 1; text-align: center;">?</span>
                </button>
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