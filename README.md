# Members Only!
![A screenshot displaying the website with pre-filled posts](https://i.postimg.cc/cLZWGt1Z/members-only-home.png "Site Home Page")
> **Note:** Due to Herkou's aggressive sleep configuration for web dynos, initial load time may be longer than expected

A website where registered users may post stories, but only registered users may view the author of each story.

[Click here to view a live version in Heroku.](https://quiet-meadow-24874.herokuapp.com/)

## General Information
Members Only is an exclusive clubhouse where club members can write posts. Other (registered) members may see the author of each post. Guests (those who are not logged in) may only see the posts, but not the author of each post.

This project was created with Rails. User authentication was made possible with Devise.
The website is designed with a mobile-first approach, and as a result, will maintain its layout across devices of many screen sizes.
Excessively long posts are truncated using JavaScript, and can be expanded. The user may toggle between the two states using the "See More"/"See Less" button.

## Installing / Getting Started
[Click here to view a live version in Heroku.](https://quiet-meadow-24874.herokuapp.com/)

> Prerequisites:
> * Ruby >= 2.7.2
> * Rails >= 6.1.4.4
> * Bundler >= 2.1.4
> * PostgreSQL >= 13.5

```bash
git clone https://github.com/Eduardo06sp/members-only.git
cd members-only/
bundle install
bin/rails server
```
Then visit http://localhost:3000/ to view the project.

## Features
* Log in/out
* Sign up
* Recover forgotten password
* Create new post

## Reporting Issues/Feedback/Contact
Bug reports are greatly appreciated. You may create a new issue with a simple description of the problem, and any steps leading up to it.
PRs are kindly appreciated.

You may also email me at: eduardopelaez@pm.me

## Acknowledgements
* [The Odin Project](https://www.theodinproject.com/home), my favorite, highly-recommended resource for learning full-stack web development
  - For providing this project idea ([see the instructions for this assignment here](https://www.theodinproject.com/paths/full-stack-ruby-on-rails/courses/ruby-on-rails/lessons/members-only))
  - For their kind, wonderful Discord community
* Vecteezy artist lexlinx for [the creative illustration of the odin viking](https://www.vecteezy.com/vector-art/5191239-god-odin-mascot-viking-illustration)
