---
layout: post
title:  "Daily Update 6/13/19"
date:   2019-06-13 08:30:00 -0500
categories: daily update
author: "Charles Kubiak"
# tags: "bash profile"
# permalink: ""
---
<!-- {% highlight java %}
{% endhighlight %} -->

- I am stuck.  I've smashed into a wall with figuring out how to check for victory in my TTT game.
- I have successfully created the following classes:
    - Board - tracks the state of the board and processes moves
    - Validation - handles user input, ensures that the move is an integer between 1 - 9 and that the space is still available on the board.
    - Game - runs the game, takes the board and validation and executes the choosen moves
- I am struggling with
    - Rules - I would like this class to have the conditions for victory and check to see if the board has a winning combination on it
        - In my functional version of TTT I had the following:
            - An `Integer array` to track available choices
                - track all of the available positions 1-9
                - as positions were picked they were changed from the number to a zero
            - A `String array` to track where each X and O was placed, this was the board displayed to the players
            - An `Integer array` for each player
                - The array started as nine zeros and were replaced by 1-9 that corresponded with each players choosen move `Integer[] player1 = {1,0,0,0,5,0,0,0,9}`
        - The player arrays were fed into a `HashSet` and then compared against each of the victory conditions, if one was met the player was declared winner.
- [Java Programming Tutorial - 55 - Intoduction to Polymorphism](https://www.youtube.com/watch?v=0xw06loTm1k)
- [Java Programming Tutorial - 56 - Polymorphic Arguements](https://www.youtube.com/watch?v=KKbN5pjBZGM)