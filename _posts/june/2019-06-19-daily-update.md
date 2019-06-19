---
layout: post
title:  "Daily Update 6/19/19"
date:   2019-06-19 08:30:00 -0500
categories: daily update
author: "Charles Kubiak"
# tags: "bash profile"
# permalink: ""
---
<!-- {% highlight java %}
{% endhighlight %} -->
SOLID Notes

Single Responsibility Principle(SRP)
- A class should only have one reason to change
    - If there is more than one motivation to change 
- Show a class with multiple responsibilities in it
- Break it out

Open/Close Principle (OCP)
- Software entities should be open for extension but closed for modification
- Bad
    - a class that calculates area of a shape
    - each shapes area calculation is in an if/else statement
    - each new shape that is added modifies the code
- Good
    - an abstract class / interface
    - each new shape can be added as it’s own class and is extending the program
    - area method no longer needs to be modified

Liskov Substitution Principle (LSP)
- Subtypes must be substitutable for their base types
- Rectangle class, need to implement Square
- Over use of inheritance
- The square subclass cannot be substituted for the rectangle class as h/w need to be the same
- A rect of 4 x 5 would pass the rect tests, but not the square tests

Interface Segregation Principle (ISP)
- The dependency of one class to another one should depend on the smallest possible interface
    - Clients should not be forced to implement interfaces they do not use
    - Instead of one fat interface many small interfaces are preferred based on groups of methods, each one serving one submodule.
    - Bad
        - Interface animal has
            - method feed()
            - method groom()
        - Dog implements animal
        - Tiger implements animal
        - Feeding is ok for both, but do you want to groom a tiger?
        - Tiger is forced to dummy implement groom to compile
    - Good
        - Interface animal has
            - method feed
        - Interface pet extends animal
            - method groom
        - Dog implements pet
            - feed
            - groom
        - Tiger implements animal
            - feed

Dependency Inversion Principle
- Depend upon abstractions (interfaces) not upon concrete classes
    - Bad
        - Output device - printer, disk
        - Class copy(outputDevice dev)
            - As output devices increase the code for copy must be modified
    - Good
        - create interfaces for
            - reader
            - writer
        - this allows copy class to stay the same as output and inputs increase/decrease in #’s

Why SOLID?
- Intends to make software designs 
    - flexible
    - understandable
    - maintainable
- 
