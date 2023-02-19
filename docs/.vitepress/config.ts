import { defineConfig } from "vitepress";

export default defineConfig({
    title: "30 分钟 Lisp 入门教程",
    lang: "zh-CN",
    base: "/lisp-tutorial/",
    themeConfig: {
        sidebar: [
            {
                text: "第一课：Lisp 介绍",
                link: "/lesson1"
            },
            {
                text: "第二课：组合式",
                link: "/lesson2"
            },
            {
                text: "第三课：命名",
                link: "/lesson3"
            },
            {
                text: "第四课：特殊形式",
                link: "/lesson4"
            },
            {
                text: "第五课：列表",
                link: "/lesson5"
            },
            {
                text: "第六课：映射",
                link: "/lesson6"
            },
            {
                text: "第七课：对子",
                link: "/lesson7"
            },
            {
                text: "结语",
                link: "/episode"
            },
        ]
    }
});