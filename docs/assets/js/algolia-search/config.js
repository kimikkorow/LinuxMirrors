const AlgoliaI18nData = {
    'zh-Hans': {
        askAiText: '询问 AI',
        clearText: '清空',
        openText: '打开',
        navigateText: '导航',
        placeholder: '请输入要搜索的内容',
    },
    'zh-Hant': {
        askAiText: '詢問 AI',
        clearText: '清空',
        openText: '打開',
        navigateText: '導航',
        placeholder: '請輸入要搜索的內容',
    },
    en: {
        askAiText: 'Ask AI',
        clearText: 'Clear',
        openText: 'Open',
        navigateText: 'Navigate',
        placeholder: 'Enter your search query',
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
