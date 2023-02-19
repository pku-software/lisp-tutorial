import { defineConfig } from "vitepress";

export default defineConfig({
    title: "30 分钟 Lisp 入门教程",
    lang: "zh-CN",
    themeConfig: {
        sidebar: [
            {
                text: "第一课",
                link: "/lesson1"
            },
            {
                text: "第二课",
                link: "/lesson2"
            },
            {
                text: "第三课",
                link: "/lesson3"
            },
            {
                text: "第四课",
                link: "/lesson4"
            },
            {
                text: "第五课",
                link: "/lesson5"
            },
            {
                text: "第六课",
                link: "/lesson6"
            },
            // {
            //     text: "第七课",
            //     link: "/lesson7"
            // },
            // {
            //     text: "第八课",
            //     link: "/lesson8"
            // },
        ]
    }

});