#!/usr/bin/env stack
-- stack --resolver=lts-11.8 script

{-# LANGUAGE OverloadedStrings #-}

import System.FilePath

import Control.Monad.Fail
import Control.Applicative (Alternative (..))

import Data.Monoid (mappend, (<>))
import Data.Time (UTCTime)
import Data.Time.Format (parseTimeM, formatTime, defaultTimeLocale)

import Hakyll

-- Configuration
--------------------------------------------------------------------------
-- | file path to site document root.
sitePath :: FilePath
sitePath = "site/"

--------------------------------------------------------------------------
-- | file path to site posts directory.
postsPath :: FilePath
postsPath = "site/posts/"

-- Path Handlers
--------------------------------------------------------------------------
-- | drop $sitePath from file path to make URL
pathSite
  :: FilePath -- ^ file path
  -> FilePath
pathSite path = makeRelative sitePath path

--------------------------------------------------------------------------
-- | Identical router
routeId
  :: Routes
routeId = customRoute $ pathSite . toFilePath

--------------------------------------------------------------------------
-- | html router
routeHtml :: Routes
routeHtml = customRoute $
  (\path -> replaceExtension path "html") . pathSite . toFilePath

-- Compilers
--------------------------------------------------------------------------
-- | set a field to a formatted metadata value, if present
formattedMetadataFields
  :: [String]                 -- ^ metadata field names, it will be context keys.
  -> (String -> Maybe String) -- ^ metadata value formatter.
  -> Context String
formattedMetadataFields keys format = Context $ \k _ i ->
  if elem k keys
  then do
    value  <- getMetadataField (itemIdentifier i) k
    value' <- maybe empty (return . format) value
    maybe empty (return . StringField) value'
  else empty

--------------------------------------------------------------------------
defaultCtx :: Context String
defaultCtx =
  formattedMetadataFields [
  "published",
    "updated"
  ] timeformat <>
  -- dateField "date" "%B %e, %Y" <>
  defaultContext
  where timeformat s =
          (parseTimeM True defaultTimeLocale "%FT%X%z" s :: Maybe UTCTime)
          >>= (return . formatTime defaultTimeLocale "%B %e, %Y")

--------------------------------------------------------------------------
articleCtx :: Context String
articleCtx =
  listField "posts" defaultCtx postsCompiler <>
  defaultCtx
  where postsCompiler = recentFirst
          =<< (loadAll $ fromGlob $ normalise $ postsPath ++ "/*/index.*")

--------------------------------------------------------------------------
pageCompiler :: Compiler (Item String)
pageCompiler =
  getResourceString
  >>= applyAsTemplate articleCtx
  >>= renderPandoc
  >>= loadAndApplyTemplate "templates/default.html" articleCtx
  >>= relativizeUrls

-- main
--------------------------------------------------------------------------
main :: IO ()
main = hakyll $ do
  match "templates/*" $
    compile templateBodyCompiler

  match ( (fromGlob $ normalise $ sitePath  ++ "/img/*") .||.
          (fromGlob $ normalise $ postsPath ++ "/*/img/*") ) $
    route routeId
    >> compile copyFileCompiler

  match ( (fromGlob $ normalise $ sitePath  ++ "/css/*") .||.
          (fromGlob $ normalise $ postsPath ++ "/*/css/*") ) $
    route routeId
    >> compile compressCssCompiler

  match ( (fromGlob $ normalise $ sitePath  ++ "/index.*") .||.
          (fromGlob $ normalise $ postsPath ++ "/index.*") .||.
          (fromGlob $ normalise $ postsPath ++ "/*/index.*") ) $
    route routeHtml
    >> compile pageCompiler

{-
Local Variables:
mode: haskell
End:
-}
