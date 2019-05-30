---
layout: post
title:  "Daily Update 5/30/19"
date:   2019-05-30 08:30:00 -0500
categories: daily update
author: "Charles Kubiak"
# tags: "bash profile"
# permalink: ""
---
<h2>Always hit apply before hitting ok with intellij!!!</h2>
- Otherwise nothing sticks 50% of the time... Ron Burgandy
- [Intellij IDEA Default Keymap](https://resources.jetbrains.com/storage/products/intellij-idea/docs/IntelliJIDEA_ReferenceCard.pdf)
    - Feedback from my coinchanger kata
        - DRY my if statement
            -   It was recommended that I use 2 arrays to return the values needed
        - Use less mouse clicks
            - I figured out how to alter my keymap so that crtl-` opens my terminal
            - crtl-tab will allow me to jump from editor windows
        - [CoinChanger Kata Attempt 3](https://www.youtube.com/watch?v=mcoIey4UvgI&feature=youtu.be)
- Making Sense of Mac Keyboard Symbols
    - ⌘ is the Command () key.
    - ⌃ is the Control key.
    - ⌥ is the Option (alt) key.
    - ⇧ is the Shift key.
    - ⇪ is the Caps Lock key.
    - fn is the Function key. Now you know, but if the symbols confuse you, don't feel too bad about it.

- Intro to Web Technologies
    - Going back to the late 90's everything was HTML and it was simplistic
    - Client
    - Load document
    - Load document assets
    - Load additional asset types -> css
    - Presentational HTML makes it more difficult for non tech experts to maintain pages
    Favor semanitcs over presentational
    - sem h1 h3 ul ol li
    - pres b i hr br
    - event handlers work from inside -> out
        - can prevent this with stop propogation
    - CanIUse.com will show what features by browser type
    - babel.io is a transpiler, can take modern JS and convert it to a more supported older version
    - weboack helps bundle types of info together
- Junit Basics #3
    - Why automated tests?
        - Every test must include:
            - preparation
            - provide test inputs
            - provide the expected output
        - Every test should include:
            - Run the tests
            - Verify the result
            - Do something to alert the dev if test failed
- Junit basics #4
    - JUnit 4
        - JUnit 4 Is 10+ years old
        - Lacking newer testing patterns
        - Not up to date with Java language
        - Monolithic
- Junit basics #5
    - JUnit 5
        - JUnit was a new design
        - Architecture
            - Core Platform
            - JUnit API = Jupiter
            - Vintage API = Allows you to run older tests (JU4)
            - EXT API = Allows you to use 3rd party libraries
            - IDES adn Tools use platform to run the test
<!-- {% highlight java %}
{% endhighlight %} -->
