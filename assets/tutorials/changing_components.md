:s: Introduction
# Introduction
This tutorial will walk you through adding a new Component. As an example, you will be adding a Text Widget. By the end of the tutorial you will be able to add any Component to your app.

:s: What is a Component
# What is a Component
A Component is a box in the Components View that you can add to the properties of other Components. Some, but not all, Components are Widgets.

Most Components have either a Child or multiple Children. For example, a Center Widget has a property "Child" which will center that child. So if you put a Text Widget in the "Child" property of a Center Widget, it would be centered.

You can find all Components in the Component's View. Every box in the Component's View is a Component that can be put into a Widget's property as long as they match.

You will notice there are not many Components right now even though we show all the options in the Properties View. There are temporarily fewer Components as we continue to develop Slate.
;;![components view](assets/pictures/tutorials/change_components/components_view.jpg#597x700)

:s: Adding a new Component
# Adding a new Component
So far you have modified an existing Widget, but how do you add a new one?

:n:
In the Shell, select the white space above the text in the middle of the screen.
;;:g:assets/pictures/tutorials/change_components/select_column.gif#800x448

:n:
The Component we have currently selected is a Column. You will add a new Text Widget inside of the Container Widget.

To do so, we will need to have the Container selected. There are two ways to select a Component for editing. The easiest is to click it in the shell, but if it is transparent or very small, you can also click it in the Properties View. Click on the Container in the Properties View to select it.

:n:
:g:assets/pictures/tutorials/change_components/select_container.gif#800x448

:n:
In the Component's View click and drag the Text Widget to the second property in the list under the property "Child" with type Widget. A Text is a type of Widget, so they match. If you are able to add a Component to a box, it will turn blue.

The color should be blue as you hover over it, meaning you can add it to that property.

When you release, it will turn yellow, letting you know there is a problem with that Component. The reason there is a problem is because a Text Widget requires a value. You will fix this in the next step.
;;:g:assets/pictures/tutorials/change_components/add_text.gif#800x448

:s: Adding Required Properties
# Adding Required Properties
When you add a Component with a required property you __MUST__ fix it's error before doing anything else. You can fix it by adding the required value, removing the Component, or undoing.

To add the value we need to be inside the Text Widget. Click on the Text Widget to go into it.

The first property is *Required. Any property that has a * in front of it is required regardless of the name after it. Required properties will always be at the top of the Properties View and will always be yellow if they are not filled in.

To add text, click in the box like you did in the Changing A Value tutorial, add some text, and hit enter.

Once you hit enter, it will add the text and clear the error.
;;:g:assets/pictures/tutorials/change_components/complete_text.gif#800x448

:s: Adding Any Component
# Adding Any Component
At this point you can now use the same steps to add any Component.

You will almost always add a Component to the property Child. This is because your entire app is made up of Widgets inside of othe Widgets and the "Child" or "Children" property is usually where you insert Widgets.

Most will actually be much simpler, since they won't have required properties, meaning they will add and update immediately. An example with a Container Component is on the right.
;;:g:assets/pictures/tutorials/change_components/add_container.gif#800x448
