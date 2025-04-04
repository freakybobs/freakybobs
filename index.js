const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar =
      '▒'.repeat(passedProgressBarIndex) +
      '▁'.repeat(progressBarCapacity - passedProgressBarIndex)
    return `{ ${progressBar} }`
}

const readme = `\

[![Auto](https://github.com/freakybobs/CandyLand/actions/workflows/auto.yml/badge.svg?event=push)](https://github.com/freakybobs/CandyLand/actions/workflows/auto.yml)

<br clear="both">

<p align="center">
  <a href="https://github.com/freakybobs?tab=repositories&sort=stargazers">
    <img alt="total stars" title="Total stars on GitHub" src="https://custom-icon-badges.demolab.com/github/stars/freakybobs?color=55960c&style=for-the-badge&labelColor=488207&logo=star"/></a>
  <a href="https://github.com/freakybobs?tab=followers">
    <img alt="followers" title="Follow me on Github" src="https://custom-icon-badges.demolab.com/github/followers/freakybobs?color=236ad3&labelColor=1155ba&style=for-the-badge&logo=person-add&label=Follow&logoColor=white"/></a>
<br>
</p>
<hr>
<div align="center">
  <img height="300" src="https://i.imgflip.com/9o00hj.jpg"  />
</div>

<p align="center">
  <samp>Everything's perfect here, and the sun is shining 🌅
  </samp>
  <br> <br>
  <img src="https://komarev.com/ghpvc/?username=freakybobs" alt="https://github.com/freakybobs" />
</p>

<hr>

<div align="center">
  <a href="https://www.instagram.com/fbi_federalagent007" target="_blank">
    <img src="https://img.shields.io/static/v1?message=Instagram&logo=instagram&label=&color=E4405F&logoColor=white&labelColor=&style=for-the-badge" height="30" alt="instagram logo"  />
  </a>
  <a href="https://www.facebook.com/profile.php?id=61566735449795" target="_blank">
    <img src="https://img.shields.io/static/v1?message=Facebook&logo=facebook&label=&color=1877F2&logoColor=white&labelColor=&style=for-the-badge" height="30" alt="facebook logo"  />
  </a>
  <a href="t.me/pemburulolii" target="_blank">
    <img src="https://img.shields.io/static/v1?message=Telegram&logo=telegram&label=&color=2CA5E0&logoColor=white&labelColor=&style=for-the-badge" height="30" alt="telegram logo"  />
  </a>
</div>

<hr>

<h2 align="left"></h2>

<h2 align="center">⏳ Year progress ⏳ </h2>

<p align="center">${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %</p>

<p align="center">⏰ Updated on ${new Date().toUTCString()} ⏰</p>

###




`

console.log(readme)
