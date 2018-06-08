---
title: haskell stack memo
published: 2018-06-08T12:00:00+0900
tags: memo
---

![](./img/haskell-logo.png){class="four columns u-pull-right"}

## Links

+ [Official](https://www.haskellstack.org/)
+ [Stackage](https://www.stackage.org/)

## Tips
### How to rebuild precompiled packages

In some cases, stack says that precompiled packages are broken.
This problem will solve following steps.

1. unregister package by ghc-pkg
2. delete precompiled package files of stack 

In following instruction, 
the target package name will denote as "package".
In stack message,
the pakcage name is denote with version number, like "package-1.0.1".

#### 1. unregister package by ghc-pkg

delete package

~~~
stack exec -- ghc-pkg unregister --force package
~~~

check deletion

~~~
stack exec -- ghc-pkg list | grep package
~~~

When there are several version of GHC,
these commands may not work well. Then do below.

1. find ghc-pkg manageing the target pakcage
   - ex : ~/.stack/programs/x86_64-osx/ghc-7.10.2/bin/ghc-pkg
   - $$ghcpkg in following
2. find database file
   - ex : ~/.stack/snapshots/x86_64-osx/lts-3.1/7.10.2/pkgdb
   - $$pkgdb in following
3. delete package
   - do > $$ghcpkg --package-db $$pkgdb unregister --force package
4. check deletion
   - do > $$ghcpkg --package-db $$pkgdb list | grep package

#### 2. delete precompiled package files of stack 

~~~
find ~/.stack/precompiled -type d -name package-* | xargs rm -rf
~~~

#### After deletion

Do "stack build", "stack install ..." or something.
You may see that stack recompile the target pakcages.

#### Reference
+ [Force `stack` to rebuild an installed package](https://stackoverflow.com/questions/37236892/force-stack-to-rebuild-an-installed-package)


