module.exports = {
  lang: 'ko-KR',
  title: '삼해트의 공방',
  description: '해피트리봇, 허브 봇을 개발 및 운영합니다.',

  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['link', { rel: 'apple-touch-icon', sizes: '192x192', href: '/icons/icon-192x192.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '256x256', href: '/icons/icon-256x256.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '384x384', href: '/icons/icon-384x384.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '512x512', href: '/icons/icon-512x512.png' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  theme: '@vuepress/theme-default',

  themeConfig: {
    search: true,
    logo: 'https://guide.htlab.kr/logo.png',
    repo: 'discord-korea',
    logo: '/logo.png',
    docsRepo: 'discord-korea/guide',
    docsBranch: 'master',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '수정하기',
    displayAllHeaders: false,
    lastUpdated: true,
    lastUpdatedText: '최근 변경',
    nextLinks: false,
    prevLinks: false,
    contributors: true,
    contributorsText: '기여자',

    notFound: ['페이지가 존재하지 않습니다.'],
    backToHome: '메인 페이지로 돌아가기',

    sidebar: {
      '/': [
        {
          text: '메인 페이지',
          link: '/',
        },
        {
          text: '공방 소개',
          link: '/guide/',
        },
        {
          text: '교단이',
          collapsible: true,
          children: ['/guide/교단이/', '/guide/교단이/명령어', '/guide/교단이/자주 묻는 질문']
        },
        {
          text: '해피트리봇',
          collapsible: true,
          children: ['/guide/해피트리봇/', '/guide/해피트리봇/명령어', '/guide/해피트리봇/자주 묻는 질문', '/guide/해피트리봇/대시보드']
        },
        {
          text: '허브 봇',
          collapsible: true,
          children: ['/guide/허브봇/', '/guide/허브봇/자주 묻는 질문']
        }
      ],
    },

    themePlugins:{
      backToTop: true,
    },

    plugins: [
      '@vuepress/plugin-back-to-top',
      '@vuepress/back-to-top',
      '@vuepress/plugin-medium-zoom',
      '@vuepress/plugin-last-updated',
      'vuepress-plugin-code-copy',
    ],
  
  },
}