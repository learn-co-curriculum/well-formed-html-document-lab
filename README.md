# Well-Formed HTML Document Lab

## Objectives

1. Add an appropriate `doctype` tag at the top of an HTML file.
2. Enclose the HTML contents of a site inside `html` tags.
3. Structure an HTML document with `head` and `body` tags.
4. Add `title` tags to give the page a title that will show up in the browser
   tab.

## Instructions

Open `index.html` in your text editor. Add a `doctype` tag at the top of the
file indicating that the rest of the file will be HTML code. Then create
opening and closing `html` tags to enclose the remainder of your page's
content. Add opening and closing `head` and `body` tags within the outer
`html` tags to break your HTML document up into two sections. Remember, the
`head` section generally contains data intended for the web browser, and the
`body` section contains the content our users will see and interact with on the
page.

Since you're still new-ish in your HTML authoring career, we've added some
tests to help guide you. In real life, developers often write tests _along
with_ the code to do something so that they can prove to themselves that
based on their understanding of success, they've met it. This is a powerful
technique called "Test-Driven Development" (TDD). For this lab we've provided
you the tests that will verify your code works. To run the tests and get
automated feedback type `learn` in the Terminal window of the in-browser
Learn IDE. Oh, and be sure to _save_ the file before you run the `learn`
command. If you see scary red text, it's just the tests trying to 
help you write better code. It's OK to be nervous about that the first
couple times you see it because it means you're just one "A-ha" moment away
from getting that special joy that comes from making a red test "go green."
The red text contains helpful error messages that are designed to help you
debug your code &mdash; read the messages carefully and they'll help you!

## Viewing your work in the browser

Recall that you can start up a web server by running the `httpserver` command.
For more on this, review this [Help Center article][help].

Once you have the HTML document open in your browser, you can make changes to
it in the text editor, save the file, refresh the page in the browser, and see
your changes.

While working through these assignments, your general workflow should center on
writing code in the text editor, verifying it visually in the browser, and then 
periodically running the `learn command` in the terminal to check your work.
You'll have to exit the `httpserver` command to run `learn` and you'll use
`Control + C` to do that.

## Resources

* [W3S — HTML `<!DOCTYPE>` Declaration](https://www.w3schools.com/tags/tag_doctype.asp)

[help]: http://help.learn.co/the-learn-ide/common-ide-questions/viewing-html-pages-in-the-learn-ide
