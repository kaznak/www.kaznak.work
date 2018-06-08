
# blog.kaznak.work

a blog

## Usage

### Installation

~~~
npm install netlify-cli
~~~

### Deploy

~~~
task/deploy
~~~

## Future works

+ Automated build & deploy
+ Add table of contents for each post
+ Handle multilanguage
+ Handle tags
+ Sitemap generation for google

## Tools

+ [Hakyll](https://jaspervdj.be/hakyll/)
+ [Sekleton.css](http://getskeleton.com/)
+ [github](https://github.com/)
+ [netlify](https://www.netlify.com/)
+ [gmail](https://mail.google.com/)
+ [google search console](https://search.google.com/search-console)
+ [google analytics](https://analytics.google.com/)

## Site tree(plan)

+ [root]
  - css/ : global css
  - js/  : global javascript
  - img/ : global images
  - index.html : protal
  - index.ja.html
  - index.en.html
  - posts/ : directory for posts
    - index.html : list of posts
    - index.ja.html
    - index.en.html
    - \<YYYY\>-\<MM\>-\<DD\>.\<title-en\>/  : directory for each posts
      - css/ : post local css
      - js/  : post local javascript
      - img/ : post local images
      - index.html : post main html
      - index.ja.html
      - index.en.html


## Reference
+ [Hakyllを使ってGitHub Pagesを作成して、そのソースも管理して、Travis CIで自動デプロイする。,Posted on April 5, 2015](https://imokuri123.com/blog/2015/04/create-github-pages-with-hakyll.html)
+ [jakubfijalkowski/codinginfinity](https://github.com/jakubfijalkowski/codinginfinity)
+ [Hakyll - automatic sitemap generation, April 26, 2015, tags: haskell, hakyll](https://codinginfinity.me/post/2015-04-26/hakyll_automatic_sitemap_generation)
