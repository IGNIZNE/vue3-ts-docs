import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({  
    title: "Vue 3 + TypeScript 学习文档",  
    description: "学习 Vue 3 和 TypeScript 的指南",  
    themeConfig: {  
      siteTitle: "前端学习",  
      logo: "/assets/logo.png",  
      nav: [  
        { text: "指南", link: "/guide/" },  
        { text: "组件", link: "/components/" },  
        { text: "API", link: "/api/" },  
        { text: "常见问题", link: "/faq/" },  
      ],  
      socialLinks: [  
        { icon: "github", link: "" },  
      ],  
      
    sidebar: {  
      "/guide/": [  
        {  
          text: "开始",  
          collapsible: true,  
          items: [  
            { text: "介绍", link: "/guide/" },  
            { text: "安装", link: "/guide/installation" },  
            { text: "概念", link: "/guide/concepts" },  
          ],  
        },  
      ],
        
        "/components/": [  
          {  
            "text": "常用组件",  
            "items": [  
              { "text": "按钮 Button", link: "/components/button" },  
              { "text": "表单 Form", link: "/components/form" },  
              { "text": "表格 Table", link: "/components/table" }  
            ],  
          },  
        ],
    },  
    footer: {  
          message: "雄关漫道真如铁，而今迈步从头越",  
          copyright: "Copyright © 2024 ShengxianGao"  
        },  
      },
     
  });
