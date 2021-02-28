import { BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"

// !TODO! refine syllables list
const syllables = [
  "bi",
  "bo",
  "bu",
  "ta",
  "se",
  "tri",
  "su",
  "ke",
  "ka",
  "flo",
  "ko",
  "pi",
  "pe",
  "no",
  "go",
  "zo",
  "fu",
  "fo",
  "si",
  "pa",
  "ar",
  "es",
  "i",
  "kya",
  "kyu",
  "fle",
  "o",
  "ne",
  "na",
  "le",
  "lu",
  "ma",
  "an",
]

function toUpperCaseSub(str: string, start = 0, end = 1) {
  return str.slice(start, end).toUpperCase() + str.slice(end)
}

function generator() {
  const max = syllables.length
  const glen = 2 + Math.floor(Math.random() * 4)
  const val = Array.from({ length: glen }, (_) => Math.floor(Math.random() * Math.floor(max)))
    .map((k, i) => syllables[k])
    .join("")
  return toUpperCaseSub(val)
}

const Page: BlitzPage = () => {
  return (
    <div className="container">
      <h1>Random Pronounceable String Generator</h1>
      <p>{generator()}</p>
    </div>
  )
}

Page.getLayout = (page) => <Layout title="Random Pronounceable String Generator">{page}</Layout>

export default Page
