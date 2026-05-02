function loadAlgoliaSearchComponent() {
    SiteSearchAskAI.init(getAlgoliaSearchConfig())

    // SiteSearch uses 'modal-backdrop', SiteSearchAskAI uses 'modal-backdrop-askai'
    const bodyObserver = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            for (const node of mutation.addedNodes) {
                if (
                    node.nodeType === Node.ELEMENT_NODE &&
                    Array.from(node.classList).some((c) => c.startsWith('modal-backdrop'))
                ) {
                    localizationAlgoliaSearchModal(node)
                }
            }
        }
    })
    bodyObserver.observe(document.body, { childList: true })
}

function localizationAlgoliaSearchModal(modal) {
    const lang = getAlgoliaCurrentLang()
    // English is the component default, no need to patch
    if (lang === 'en') return

    const i18n = AlgoliaI18nData[lang]

    const observer = new MutationObserver((mutations, obs) => {
        // "Clear" button
        const clearBtn = modal.querySelector('.ss-search-clear-button')
        if (clearBtn && clearBtn.textContent.trim() === 'Clear') {
            clearBtn.textContent = i18n.clearText
        }

        // Footer kbd groups: first span = "Open", second span = "Navigate"
        const kbdGroups = modal.querySelectorAll('.ss-footer-kbd-group')
        kbdGroups.forEach((group) => {
            const span = group.querySelector('span')
            if (!span) return
            if (span.textContent.trim() === 'Open') {
                span.textContent = i18n.openText
            } else if (span.textContent.trim() === 'Navigate') {
                span.textContent = i18n.navigateText
            }
        })

        // "Ask AI" entry in hits list: <article class="ss-ask-ai-btn">
        const askAiArticle = modal.querySelector('.ss-ask-ai-btn')
        if (askAiArticle) {
            const titleP = askAiArticle.querySelector('.ss-infinite-hits-item-title')
            if (titleP) {
                const firstText = titleP.childNodes[0]
                if (firstText && firstText.nodeType === Node.TEXT_NODE && firstText.textContent.startsWith('Ask AI')) {
                    firstText.textContent = i18n.askAiText + ': '
                }
            }
            if (askAiArticle.getAttribute('aria-label') === 'Ask AI') {
                askAiArticle.setAttribute('aria-label', i18n.askAiText)
            }
            if (askAiArticle.getAttribute('title') === 'Ask AI') {
                askAiArticle.setAttribute('title', i18n.askAiText)
            }
        }
    })

    observer.observe(modal, { childList: true, subtree: true })
    // Disconnect after the modal content has fully rendered
    setTimeout(() => observer.disconnect(), 2000)
}
