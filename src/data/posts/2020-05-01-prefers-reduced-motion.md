---
path: "/blog/media-query-prefers-reduced-motion"  
date: "2020-05-01"  
title: "Media Query: prefers-reduced-motion"  
slug: "media-query-prefers-reduced-motion"
summary: "Animations are cool, but for some people it's a problem. No worries, there's a CSS solution!"  
tags: ["css", "accessibility"]  
image: "/images/media-query-prefers-reduced-motion.jpg"
read_minutes: "2"
type: "code_note"
---

## Why we use animations
Animations are not just awesome to see, but they can help deliver a message, or help the user in some way. They are only useful when done right, when there's a reason why you need to use them. They are very easy to get wrong, to be too much, too slow, too fast. Motion can guide the user or get their attention. 

A common scenario where animations are used is when loading something. Users hate waiting, so a simple animation can help distract them. With the right animation, the user might even enjoy waiting. 😄

## Love it or hate it
I love animations, but others could have a very different opinion, and that's fine. For some it's a matter of taste, but for others it's about health. Some people get sick because of animations. It has become common to have the option to tone down or turn off animations on your device. This is a real problem, even if it is not very common. 

So should we stop using animations altogether? **No!**

## CSS Media Queries
CSS has been advancing a lot lately, making our styling not only better to look at, but also smarter. We can cater for more people, easily.

One of the media queries in CSS is *prefers-reduced-motion*, which uses the mentioned setting of the operating system. This makes it super easy for us developers to know if the user wants to dial down the animations. Keep in mind that this media query only returns two values: **no-preference** or **reduce**. You cannot know if the user wants to completely remove the animations or just reduce them from this media query, so it's not perfect, but it gives us enough information to work with.

### How To Use
It's used just like any other media query. You use it to overwrite the previous styling. I would put it in the bottom and target the transitions of every element. However this highly depends on your situation, as some styling is more complex. In this case I am only using CSS transitions to keep it simple.

```CSS
button {
  background-color: red;
  color: blue;
  transition: all 0.5s; /* this transitions all supported properties on change */
  padding: 15px;
  border: 2px solid green;
}

button:hover {
  background-color: blue;
  color: white;
  border-color: red;
  transform: rotate3d(1, 1, 1, 15deg);
}

@media (prefers-reduced-motion) {
  * { /* disable all transitions */
    transition-duration: 0s;
  }
}
```
```html
<button>
    CLICK ME!
</button> 
```

### Browser Support
Browser support is pretty good! All the major browsers support it, apart from IE, nothing new there.
![prefers-reduced-motion browser support](https://caniuse.bitsofco.de/image/prefers-reduced-motion.webp)

