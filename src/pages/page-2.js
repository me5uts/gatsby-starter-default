import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Movie page" />
    <h1>Movie page.</h1>
    <p>A mafia movie.</p>
    <Link to="/">Go back to the homepage</Link>
  
  const links = [
  {
    text: "365 days ",
    url: "https://bamfilmizle.com/365-gun-izle-2064.html",
    description:
      "A mafia movie.",
  },
  {
    text: "Testing clang.",
    url: "https://clang.llvm.org/",
    description:
      "The Clang project provides a language front-end and tooling infrastructure for languages in the C language family (C, C++, Objective C/C++, OpenCL, CUDA, and RenderScript) for the LLVM project.",        
  },
  {
    text: "Ab init page",
    url: "https://www.abinit.org/",
    description:
      "A software suite to calculate the optical, mechanical, vibrational, and other observable properties of materials.",
  },
 
]
  </Layout>
)

export default SecondPage
