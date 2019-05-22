---
layout: post
title:  "Daily Update 5/21/19"
date:   2019-05-21 08:30:00 -0500
categories: daily update
author: "Charles Kubiak"
# tags: "bash profile"
# permalink: ""
---

- I will also be learning how to use the internal ticket system.
- Helped trouble shoot of readme.md for Thursday's apprentice seminar.  PR created and merged. Here is the propper way to install nvm on a Mac.  This is useful as it will allow you to avoid having to create EACCESS (you don't have permission to install this package...) issue workarounds such as using SUDO and custom directories for global installs.
{% highlight markdown %}
Install the Node Version Manager. Mac users can use Homebrew:

brew install nvm
In the terminal type:

brew info nvm
Copy the following lines from your terminal into your shell profile(bash_profile, bashrc, zshrc, etc...):

export NVM_DIR="$HOME/.nvm"
  [ -s "/usr/local/opt/nvm/nvm.sh" ] && . "/usr/local/opt/nvm/nvm.sh"  # This loads nvm
  [ -s "/usr/local/opt/nvm/etc/bash_completion" ] && . "/usr/local/opt/nvm/etc/bash_completion"  # This loads nvm bash_completion
After saving the changes you will then need to reload your terminal.
{% endhighlight %}
- Finished apprenticeship kick-off meeting
- Finished intermediate java koans
- First java kata - was an interesting mob programming attempt.  Learned some intersting basics on project file structure and naming for junit to work.  Kata was in intellij, I would like to figure out how to get it to work for VSCode, I plan on watching a video tutorial on it.
    - [JAVA Application Testing with JUNIT For Beginners](https://www.youtube.com/watch?v=2nWI8wZM-U0&t=35s) - 43 minutes / 1 part
    - [JUnit 5 Basics](https://www.youtube.com/watch?v=2E3WqYupx7c&list=PLqq-6Pq4lTTa4ad5JISViSb2FVG8Vwa4o) - Approx 2 hrs / 27 parts
    
- Tonight I will be attending: [Learn TypeScript, Chrome Extensions, Velocirender](https://www.meetup.com/js-chi/events/258154817/)
    - [Bitovi Typescript Course](https://www.bitovi.com/academy/learn-typescript.html)
    - JS by itself is an untyped langague, TS can be useful for large code bases, it forces you to type (integer,string,boolean) your code prior to it compiling.
    - If the TS is coded correctly it will compile into a JS file that can be ran.