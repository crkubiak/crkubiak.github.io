---
layout: post
title:  "Daily Update 6/18/19"
date:   2019-06-18 08:30:00 -0500
categories: daily update
author: "Charles Kubiak"
# tags: "bash profile"
# permalink: ""
---
Agile Design

Symptoms of Poor Design

Design smells are similar to code smells, but deal with the overall design vs. one piece of code

1. Rigidity - the design is hard to change
    1. The system is hard to change because every change forces many other changes to other parts of the system
    2. A single change causes a cascade of subsequent changes in dependent modules
    3. More modules to be changed = more rigid design
    4. Looks like a snowball rolling down a hill
2. Fragility - the design is easy to break
    1. Changes cause the system to break in places that have no conceptual relationship to the part that was changed
    2. A change in one place breaks another place, often without a valid conceptual relationship
    3. Fixing the first broken elements can cause additional elements to break
    4. Looks like a dog chasing its tail
3. Immobility - the design is hard to reuse
    1. It is hard to disentangle the system into components that can be reused in other systems.
    2. If you want module 1 in program A to be used in program B, can you pull over just module 1?
    3. Pulling on a tangled string
4. Viscosity - It is hard to do the right thing
    1. Doing things right is harder than doing things wrong
    2. Two types:
        1. Software Visc
            1. When software needs to be updated it can be done multiple ways, some of those ways won’t preserve integrity of the design, these are hacks
            2. When it is easier to implement the hack vs. proper fixes the SV is high
            3. Software should be designed so that future updates are easy to implement and preserve design
        2. Environmental Visc
            1. When the dev environment is slow/inefficient
                1. Long compile times lead to hacks to avoid long recompiles vs doing it right
                2. Same w/checkins
5. Needless Complexity - over-design
    1. Contains elements that aren’t currently useful
    2. Happen when changes are anticipated
    3. Leads to many unused elements
6. Needless Repetition - mouse abuse
    1. Copying and pasting code 
    2. Appears repeatedly in slightly modified forms, it flags a missing abstraction
7. Opacity - Disorganized expression
    1. Makes a module difficult to understand
    2. As code ages it tends to become more opaque
    3. Code should be reviewed by others

Causes of rot
- Original software did not anticipate current needs
- Changes need to be made quickly
- Changes are made by devs who are not familiar with the initial code

A design smell is often a result of insufficient attention to the OCP.  Principles are used to remove smells.  They don’t’ apply principles when there are no smells.  It is a mistake to unconditionally conform to a principle just because it is a principle.  Principle are not a perfume to be liberally scattered all over the system.  Over-conformance to the principles leads to the design smell of Needless Complexity

1. Writing programs would be a lot easier if there weren’t customers with requirements
2. Requirements are always changing, your software should be written in a way that makes it adaptable to those changes

Cascading Issues

- Coupling
    - If a class has two responsibilities a change in one can impact the ability for the class to meet the requirements of the second. 
    - This will lead to breakage in unexpected ways
    - SRP -> Fragility