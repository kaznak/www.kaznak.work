
# blog.kaznak.work

Tech blog

## [Hakyll](https://jaspervdj.be/hakyll/)
### [TUTORIAL: INSTALLATION](https://jaspervdj.be/hakyll/tutorials/01-installation.html)

INSTALLATION
~~~
stack install hakyll
~~~

BUILDING THE EXAMPLE SITE
~~~
hakyll-init blog-kaznak-work
cd blog-kaznak-work
stack init  # creates stack.yaml file based on my-site.cabal
stack build
stack exec site build
stack exec site watch
~~~

[sample](http://localhost:8000/)
