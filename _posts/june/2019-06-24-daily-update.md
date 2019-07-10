---
layout: post
title:  "Daily Update 6/24/19"
date:   2019-06-24 08:30:00 -0500
categories: daily update
author: "Charles Kubiak"
# tags: "bash profile"
# permalink: ""
---
<!-- {% highlight java %}
{% endhighlight %} -->
- TDD Design Patterns
    - Command - Represent the invocation of a computation as an object not just as a message.
    - Value Object - Avoid aliasing problems by making objects whose values change once created.
    - Null Object- Represent the base case of a computation by an object.
    - Template Method- Represent invairant sequences of computation with an abstract method intended to be specialized through inheritance.
    - Pluggable Object - represent vaiation by invoking another object with two or more implementations.
    - Pluggable Selector - avoid gratuitous subclasses by dynamically invoking different methods for different instances.
    - Factory Method - Create an object by calling a method instead of a constructor.
    - Imposter - Introduce variation by introducing a new implementation of existing protocol.
    - Composite-  Represent the composition of the behavior of a list of objects with an object.
    - Collecting Parameter - Pass around a paameter to be used t aggregate the results of computation in many different objects.

|Pattern|Test Writing|Refactoring
|-----------------------------------------------
|Command                 |X               
|Value Object            |X
|Null Object             |                |X
|Template Method         |                |X
|Pulggable Object        |                |X
|Pluggable Selector      |                |X
|Facotry Method          |X|               X
|Imposter                |X|               X
|Composite               |X|               X
|Collecting Parameter    |X|               X

- Building and testing interfaces in Java
    - Testing interface vs. implementation
        - Interface is how something interacts with the world
            - Inputs / Outputs
            - The contract with the outside world
        - Implemenation is how it accomplishes what is required of it
            - This should be hidden from the world
            - Calculation, database lookup, etc.
    - How do we isolate components that need to be tested?
        - Replace the components not subject to the unit test with things that have the same interface, but simple implementations.
