---
layout: post
title:  "Daily Update 6/3/19"
date:   2019-06-03 08:30:00 -0500
categories: daily update
author: "Charles Kubiak"
# tags: "bash profile"
# permalink: ""
---
<!-- {% highlight java %}
{% endhighlight %} -->

Good morning.  It's June... in Chicago... and it's 50 degrees outside...
Over the weekend I put some thought's down at a coffee shop on how I was going to handle my Tic Tac Toe project.
Tic tac toe notes

I want players to be able to alternate taking turns

Runner
- will continue to run the game until conditions are met with a while loop
- Import
    - Score()
    - Board()
    - Game()
- gameCount() = 0 / +1 on new game
- boolean firstGame
    - True = Do you want to play a game? y/n
    - False = Do you want to play another game? y/n
- “Your move Player 1/2:”

Score()
- P1
- Draw
- P2

Board()
- will be responsible for printing the board
- 3 x 3 numbered grid
{% highlight java %}
    1|2|3
    -----
    4|5|6
    -----
    7|8|9
{% endhighlight %}

- Board will be index + 1 for readability
- Board will use game class to draw 
Game()
- contain an array w/length of 9 that will store moves
- originally String[] game = {1,2,3,4,5,6,7,8,9}
- int moveCount = 0
- When player selects a move
    - if move count % 2 == 0 then ‘O’
    - else ‘X’
- Game should increment score +1 of appropriate column in Score() class
- If the element already contains an X/O it is no longer a valid move
- If the entered move is anything other than valid choices 1-9 the input is rejected 

Logic()
- Victory conditions
    - Horizontal - 123, 456, 789
    - Vertical - 147, 258, 369
    - Diagonal - 159, 357
- If victory condition = true then game should end, winner declared, score marked
- If moveCount == 9 and vicCondition == false draw +1 