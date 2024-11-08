# Frontend Mentor - Designo agency website solution

This is a solution to the [Designo agency website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/designo-multipage-website-G48K6rfUT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- Receive an error message when the contact form is submitted if:
  - The `Name`, `Email Address` or `Your Message` fields are empty should show "Can't be empty"
  - The `Email Address` is not formatted correctly should show "Please use a valid email address"

### Screenshot

![](./preview.jpg)

### Links

- [Solution URL](https://github.com/jonahunuafe/designo-multi-page-website)
- [Live Site URL](https://jonahunuafe.github.io/designo-multi-page-website/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

- I actually learnt how to create a multipage website using different file name for each page together with their corresponding style sheet.
- I learnt specificity by integrating a css style meant for a particular page into another page.
- I learnt how to create background Images.
- I learnt the efficacy positioning and the potency of z-index.

Am proud of the line of code below:
```js
const changeMenuToTimes = () => {
  if (menu.classList.value === 'fa fa-bars fa-2x') {
      menu.classList.replace('fa-bars', 'fa-times');
    } else if (menu.classList.value === 'fa fa-times fa-2x') {
      menu.classList.replace('fa-times', 'fa-bars');
    }
  };
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

## Author

- Website - [Jonah Unuafe](https://jonahunuafe.github.io/designo-multi-page-website/)
- Frontend Mentor - [@jonahunuafe](https://www.frontendmentor.io/profile/jonahunuafe)
- Twitter - [@jonahunuafe](https://www.twitter.com/jonahunuafe)

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.
