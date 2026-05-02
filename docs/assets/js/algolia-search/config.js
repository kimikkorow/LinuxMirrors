const AlgoliaI18nData = {
    'zh-Hans': {
        askAiText: '询问 AI',
        clearText: '清空',
        openText: '打开',
        navigateText: '导航',
        placeholder: '请输入要搜索的内容',
        askAiPlaceholder: '询问 AI 任何问题',
        aiDisclaimer: 'AI 可能不准确，请核实答案。',
        newConversation: '新对话',
        backToSearch: '返回搜索',
        likeText: '有帮助',
        dislikeText: '没帮助',
        copyAnswer: '复制',
    },
    'zh-Hant': {
        askAiText: '詢問 AI',
        clearText: '清空',
        openText: '打開',
        navigateText: '導航',
        placeholder: '請輸入要搜索的內容',
        askAiPlaceholder: '詢問 AI 任何問題',
        aiDisclaimer: 'AI 可能不準確，請查證答案。',
        newConversation: '新對話',
        backToSearch: '返回搜尋',
        likeText: '有幫助',
        dislikeText: '沒幫助',
        copyAnswer: '複製',
    },
    en: {
        askAiText: 'Ask AI',
        clearText: 'Clear',
        openText: 'Open',
        navigateText: 'Navigate',
        placeholder: 'Enter your search query',
        askAiPlaceholder: 'Ask AI anything',
        aiDisclaimer: 'Answers are generated with AI which can make mistakes.',
        newConversation: 'New conversation',
        backToSearch: 'Back to search',
        likeText: 'Like',
        dislikeText: 'Dislike',
        copyAnswer: 'Copy',
    },
}

function getAlgoliaCurrentLang() {
    return __isZhHant ? 'zh-Hant' : __isEn ? 'en' : 'zh-Hans'
}

function getAlgoliaSearchConfig() {
    const lang = getAlgoliaCurrentLang()
    return {
        container: '#search-container',
        applicationId: 'EQO6IPTEY8',
        apiKey: '353d0a78521edc905d38a27d479bc2ec',
        indexName: 'docs',
        assistantId: '967fa671-8a15-46d8-83cd-095bb3e3619a',
        agentStudio: true,
        placeholder: AlgoliaI18nData[lang].placeholder,
        attributes: {
            primaryText: 'title',
            secondaryText: 'description',
            tertiaryText: 'itunesAuthor',
            url: 'url',
            image: 'imageUrl',
        },
        insights: false,
    }
}
