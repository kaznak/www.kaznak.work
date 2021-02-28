import { BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"

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

function generator() {
  const max = syllables.length
  const glen = 2 + Math.floor(Math.random() * 4)
  const val = Array.from({ length: glen }, (_) => Math.floor(Math.random() * Math.floor(max)))
    .map((i) => syllables[i])
    .join("")
  return val
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
