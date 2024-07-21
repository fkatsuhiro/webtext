# TechBlog

## ルーティング

- top画面(コース一覧)
    - ReactJs
        - 記事1
        - 記事2
    - NodeJs
        - 記事1
        - 記事2
    - JavaScript   
        - 記事1
        - 記事2
    - HTML/CSS 
        - 記事1
        - 記事2
    - QA
        - 記事1
        - 記事2

## コンポーネント構成

### page-top.vue
- page-top.vue(PageTopComponent)
    - page-header-component.vue(PageHeaderComponent)
    - page-body-component.vue(PageBodyComponent)
    - page-footer-component.vue(PageFooterComponent)

### page-header-component
- page-header-component.vue(PageHeaderComponent)
    - all-cource-text.vue(AllCourceText)
    - all-cource-practice.vue(AllCourcePractice)

### page-body-component.vue
- page-body-component.vue(PageBodyComponent)
    - all-cource-text.vue
        - cource-top-component.vue(CourceTopTemplateComponent)
            - all-cource-detail-component
                - article-top-component
                    - article-detail-component.vue
    - all-cource-practice.vue
        - cource-top-component.vue(CourceTopTemplateComponent)
            - article-top-component.vue(ArticleTopComponent)
                - article-detail-component.vue

### search-result.json
検索結果を返すためのデータを格納しているjsonファイル
記事の追加などがあれば、その都度ここは更新する予定。




## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
