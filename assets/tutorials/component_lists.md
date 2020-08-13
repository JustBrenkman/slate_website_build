:s: Introduction
This tutorial will explain how some Components have multiple children. By the end of the tutorial you will be able to add a ListView, Row, or Column to your app.

:s: Overview
So far we have added and modified a Component when it has just one child under the Child property.

What if we want to have a list of Components appear vertically or horizontally? For example, a list of names the user can scroll through.

Some Components, instead of a Child property have Children. This means you can add as many Components as you want and they will appear one after another.

The three Components in the pre-alpha that do this are the ListView, Row, and Column.

:n:
;;IMAGE

:s: Adding a Component With Children
You add these Components the same way you would any other Component.

Let's start a fresh project for this. Once you have a new project opened you should see the following (if you don't know how to do this go back to the Getting Started tutorial):
:n:
;;IMAGE
;;IMAGE

:n:
Click the white space in the screen. This will select the Column that is part of the example project that is loaded.
;;:g:GIF

:n:
Click the back button so we go to the Column's parent, which is a Center Component (which centers it's child).
;;:g:GIF

:n:
Click and drag a new List View from the Components View and replace the existing Column. Then click on it in the Properties View to select the new List View.
;;:g:GIF

Next will add some names to show in our list.

:s: Adding Children
To add children, you simply click and drag a new Component like you normally would to the Children property.

For our example, we will use a Text Component. If you don't remember how to fix a Text when you add it, revist the Adding a Text tutorial. This will add a Component to our list, updating the Shell and Properties View.
;;:g:GIF

:n:
To add more Components, you drag them to the grey box, not the green one. If you drag it to the already existing Text, it will replace it.
;;:g:GIF
