import peopleCover from "../content/images/People/SilvanaLightsCloseup.JPG"
import weddingCover from "../content/images/Prewed/SargamColor1.jpg"
import natureCover from "../content/images/Nature/SnowMountains.jpg"
import autoCover from "../content/images/Car/carFinal.jpg"
import streetCover from "../content/images/Abstract/muse.jpg"

import p1 from "../content/images/People/leeza-01.jpg"
import p2 from "../content/images/People/BLeonida-6.jpg"
import p3 from "../content/images/People/AnujaYorkvilleNight-5.jpg"
import p4 from "../content/images/People/GirlsMountain1.jpg"

import w1 from "../content/images/Prewed/3SargamDramatic.jpg"
import w2 from "../content/images/Prewed/13SargamSunset.jpg"
import w3 from "../content/images/Prewed/17SargamSunset.jpg"
import w4 from "../content/images/Prewed/zPrewed3.jpg"

import n1 from "../content/images/Nature/SnowMountains.jpg"
import n2 from "../content/images/Nature/BurrardViewBeach.JPG"
import n3 from "../content/images/Nature/LouiseSide.jpg"
import n4 from "../content/images/Nature/YorkStormySunset.JPG"

import a1 from "../content/images/Car/LexusHalloween.jpg"
import a2 from "../content/images/Car/redwheel.jpg"
import a3 from "../content/images/Car/LexusPolson.jpg"
import a4 from "../content/images/Car/NathanPhilipsGarage.JPG"

import s1 from "../content/images/Abstract/muse.jpg"
import s2 from "../content/images/Abstract/VncStreet.jpg"
import s3 from "../content/images/Abstract/burrardSunset.jpg"
import s4 from "../content/images/Abstract/goderhamBuilding.jpg"

export const creativeCategories = [
  {
    slug: "people",
    name: "Portrait Photography",
    description: "Capturing personalities and honest emotion.",
    cover: peopleCover,
    images: [p1, p2, p3, p4],
  },
  {
    slug: "weddings",
    name: "Wedding Stories",
    description: "Elegant documentary-style wedding moments.",
    cover: weddingCover,
    images: [w1, w2, w3, w4],
  },
  {
    slug: "nature",
    name: "Nature",
    description: "Quiet compositions of light, weather and place.",
    cover: natureCover,
    images: [n1, n2, n3, n4],
  },
  {
    slug: "motor",
    name: "Automotive",
    description: "Performance lines and cinematic machine detail.",
    cover: autoCover,
    images: [a1, a2, a3, a4],
  },
  {
    slug: "street",
    name: "Fine Art / Street",
    description: "Abstract and urban scenes with texture and mood.",
    cover: streetCover,
    images: [s1, s2, s3, s4],
  },
]

export const getCategoryBySlug = slug =>
  creativeCategories.find(category => category.slug === slug)
