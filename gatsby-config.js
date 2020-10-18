module.exports = {
    siteMetadata: {
        title: "Ajay Ramachandran",
        description:
            "You can find projects I've worked on and links to contact me.",
        author: "Ajay Ramachandran",
        siteUrl: "https://blog.ajay.app"
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "Ajay Ramachandran",
                short_name: "Ajay Ramachandran",
                start_url: "/",
                background_color: "#fff",
                theme_color: "#fff",
                icon: "static/ajay_profile.jpg",
            },
        },
        "gatsby-plugin-sass",
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/markdown-pages`,
                name: `markdown-pages`,
            },
        },
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                {
                    resolve: `gatsby-remark-prismjs`,
                    options: {
                    classPrefix: "language-",
                    inlineCodeMarker: null,
                    aliases: {},
                    showLineNumbers: true,
                    noInlineHighlight: false,
                    languageExtensions: [
                        {
                        language: "superscript",
                        extend: "javascript",
                        definition: {
                            superscript_types: /(SuperType)/,
                        },
                        insertBefore: {
                            function: {
                            superscript_keywords: /(superif|superelse)/,
                            },
                        },
                        },
                    ],
                    prompt: {
                        user: "root",
                        host: "localhost",
                        global: false,
                    },
                    escapeEntities: {},
                    },
                },
                ],
            }
        },
        "gatsby-plugin-feed"
    ],
};
