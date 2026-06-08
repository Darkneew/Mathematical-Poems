// MODAL WINDOW 
const modalOverlay = document.getElementById('poem-modal');
const modalContent = document.getElementById('poem-modal-content');
const modalClose = document.querySelector('.modal-close');

function openModal(contentHtml) {
    if (!modalOverlay || !modalContent) return;
    modalContent.innerHTML = contentHtml;
    const modalContainer = modalContent.parentElement;
    if (modalContainer) {
        modalContainer.scrollTop = 0;
    }
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

function getResponsiveImageHTML(src, alt, classes) {
    if (!src || !src.includes('/webp/')) {
        return `<img src="${src}" alt="${alt}" class="${classes}" loading="lazy" decoding="async">`;
    }
    const basePath = src.split("/webp/")[0];
    const filename = src.split("/webp/")[1];
    const srcset = `
        ${basePath}/webp-320/${filename} 320w,
        ${basePath}/webp-640/${filename} 640w,
        ${basePath}/webp-800/${filename} 800w,
        ${basePath}/webp-1200/${filename} 1200w,
        ${basePath}/webp-1600/${filename} 1600w
    `;
    // Modal images take up mostly full width on small screens, and ~80% on large.
    const sizes = "(max-width: 768px) 90vw, 80vw";
    return `<img src="${src}" srcset="${srcset}" sizes="${sizes}" alt="${alt}" class="${classes}" loading="lazy" decoding="async">`;
}

function getTranslatedPoemHTML(poem) {
    const content = poem.isImage ? getResponsiveImageHTML(poem.translatedText, `Poem: ${poem.translatedObject}`, "img-fluid poem-image") : `<div class="d-flex justify-content-center"><p class="poem-text">${poem.translatedText.replaceAll('\n', '<br>')}</p></div>`;
    let extra = "";
    poem.images.forEach(image => {
        extra += `<div class="mt-5 w-100"> ${getResponsiveImageHTML(image.link, `Image: ${poem.translatedObject}`, "img-fluid w-100 rounded shadow-lg")} <p class="text-end mt-2 mb-0" style="font-size: 0.75rem; color: rgba(255,255,255,0.4);"> Image credit: ${image.credit} </p> </div>`
    });
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
    const translateButton = poem.translatedObject? `<div class="row mb-5">
            <div class="col-2"></div>
            <div class="col-8">
                <button class="poem-translate-btn" onclick="translatePoem(false, '${poem.id}')">
                    Translate
                </button>
            </div>
            <div class="col-2"></div>
        </div>` : "";
    const content = poem.isImage ? getResponsiveImageHTML(poem.text, `Poem: ${poem.object}`, "img-fluid poem-image") : `<div class="d-flex justify-content-center"><p class="poem-text">${poem.text.replaceAll('\n', '<br>')}</p></div>`;
    let extra = "";
    poem.images.forEach(image => {
        extra += `<div class="mt-5 w-100"> ${getResponsiveImageHTML(image.link, `Image: ${poem.object}`, "img-fluid w-100 rounded shadow-lg")} <p class="text-end mt-2 mb-0" style="font-size: 0.75rem; color: rgba(255,255,255,0.4);"> Image credit: ${image.credit} </p> </div>`
    });
    return `
        ${translateButton}
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

function graphCoordinateX(x) {
    return `${(PARAMETERS.shift.x + x)*10/(100+PARAMETERS.shift.x/10)}%`
}
function graphCoordinateY(y) {
    return `${(PARAMETERS.shift.y + y)*10/PARAMETERS.graphRatio/(100+PARAMETERS.shift.y/10)}%`
}

function addPoem(poem) {
    let node = document.createElement("button");
    node.classList = "graph-node";
    node.style.left = graphCoordinateX(poem.position.x);
    node.style.top = graphCoordinateY(poem.position.y);
    node.ariaLabel = `Poem: ${poem.object}`;
    let icon = document.createElement("img")
    icon.alt = poem.object;
    icon.loading = "lazy";
    icon.decoding = "async";

    if (poem.icon && poem.icon.includes("/webp/")) {
        const basePath = poem.icon.split("/webp/")[0];
        const filename = poem.icon.split("/webp/")[1];
        icon.srcset = `
            ${basePath}/webp-64/${filename} 64w,
            ${basePath}/webp-96/${filename} 96w,
            ${basePath}/webp-128/${filename} 128w,
            ${basePath}/webp-192/${filename} 192w,
            ${basePath}/webp-256/${filename} 256w,
            ${basePath}/webp-384/${filename} 384w,
            ${poem.icon} 512w
        `;
        // Nodes are roughly 5-8% of the graph width (which caps at 1400px).
        icon.sizes = "10vw";
    }
    
    icon.addEventListener('load', () => {
        const ratio = Math.max(icon.naturalWidth / icon.naturalHeight, icon.naturalHeight / icon.naturalWidth);
        // Calculate final size, bounded between 75px and 150px
        const finalSize = Math.min(80 + ratio * 15, 130)/17;
        const padding = (40 - Math.min(2, ratio) * 15)/17;
        node.style.width = `${finalSize}%`;
        node.style.height = `${finalSize/PARAMETERS.graphRatio}%`;
        node.style.paddingTop = `${padding/PARAMETERS.graphRatio}%`;
        node.style.paddingBottom = `${padding/PARAMETERS.graphRatio}%`;
        node.style.paddingLeft = `${padding}%`;
        node.style.paddingRight = `${padding}%`;
    });
    icon.src = poem.icon;
    node.appendChild(icon);
    node.addEventListener('click', () => openModal(getOriginalPoemHTML(poem)));
    graph.appendChild(node);
    poem.edges.forEach((edge) => {
        POEMS.forEach((_poem) => {
            if (_poem.id != edge) return;
            let line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("x1", graphCoordinateX(poem.position.x));
            line.setAttribute("y1", graphCoordinateY(poem.position.y));
            line.setAttribute("x2", graphCoordinateX(_poem.position.x));
            line.setAttribute("y2", graphCoordinateY(_poem.position.y));
            line.setAttribute("stroke", "rgba(255,255,255,0.4)");
            line.setAttribute("stroke-width", "2");
            edges.appendChild(line);
        });
    });
};

function applyLayout(scroll) {
    // Use visualViewport when available (most reliable on mobile Chrome),
    // falling back to documentElement.clientWidth (excludes scrollbars, more stable than innerWidth).
    const vp = window.visualViewport;
    const vpWidth  = vp ? vp.width  : document.documentElement.clientWidth;
    const vpHeight = vp ? vp.height : document.documentElement.clientHeight;

    const base = Math.max(vpWidth, vpHeight / PARAMETERS.graphRatio);

    // Clamp to [minPx, maxPx]
    const graphPx = Math.max(LAYOUT.minPx, Math.min(LAYOUT.maxPx, base * 0.98));

    graph.style.width  = `${graphPx}px`;
    graph.style.height = `${graphPx * PARAMETERS.graphRatio}px`;

    // Expose a CSS custom property for UI elements to optionally scale up
    const uiScale = graphPx > LAYOUT.uiScaleBreak
        ? 1 + (graphPx - LAYOUT.uiScaleBreak) / LAYOUT.uiScaleBreak * 1.3
        : 1;
    document.documentElement.style.setProperty('--ui-scale', uiScale.toFixed(3));

    // Wait for the browser to reflow with the new sizes before computing scroll position.
    // requestAnimationFrame fires after the next paint, when scrollWidth/Height are correct.
    if (scroll) requestAnimationFrame(() => {
        const scrollContainer = document.getElementById('scroll-container');
        const scroller = scrollContainer || window;
        const scrollW = scrollContainer ? scrollContainer.scrollWidth : document.body.scrollWidth;
        const scrollH = scrollContainer ? scrollContainer.scrollHeight : document.body.scrollHeight;
        
        scroller.scrollTo({
            left: (scrollW - vpWidth)  / 2,
            top:  (scrollH - vpHeight) / 2,
            behavior: 'instant'
        });
    });
}

window.onload = () => {
    POEMS.forEach((poem) => addPoem(poem));
    // Defer the first layout to the next animation frame so the browser has
    // finished its initial paint and viewport dimensions have settled.
    requestAnimationFrame(()=>applyLayout(true));
};

// Debounce helper: waits `delay` ms after the last call before firing.
// This prevents applyLayout from being called hundreds of times per second
// while the user is pinch-zooming on mobile.
function debounce(fn, delay) {
    let timer = null;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}

const debouncedApplyLayout = debounce(() => applyLayout(false), 150);

window.addEventListener('resize', debouncedApplyLayout);
// Also re-apply when the virtual viewport changes (mobile URL bar appearing/hiding)
if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', debouncedApplyLayout);
}


// TOP BUTTONS 
const btnList = document.getElementById('btn-list');
const btnRandom = document.getElementById('btn-random');

function openPoem(id) {
    closeModal();
    setTimeout(() =>
    POEMS.forEach((poem) => {
        if (poem.id != id) return;
        openModal(getOriginalPoemHTML(poem))
    }),150);
};

if (btnList) {
    btnList.addEventListener('click', () => {
        openModal(`
            <h3 class="text-center mb-5" style="color: white; font-weight: 300; letter-spacing: 2px;">POEM COLLECTION</h3>
            <div class="poem-list-container">
                ${POEMS.map((poem) => `
                    <button class="poem-list-item" onclick="openPoem('${poem.id}')">
                        <div class="poem-list-content">
                            <span class="poem-list-title">${poem.translatedObject? poem.translatedObject : poem.object}</span>
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