# Tutorial formatting reference

Every tutorial is written in markdown style. The exception is how we use formatting to parse
where to make steps and sections within steps.

The `:s:` symbol is used to indicate a new `step` in the tutorial. Every `step` must have an associated title. In other words, it must go to a new line (like a header in markdown).

The `:n:` is used to indicate a new `section` in a `step`.

The `;;` is used to indicate a new `piece` in a `section`.

Every `piece` is displayed using markdown by default. You can specify a different type by using `:[SINGLE_CHARACTER]:`. For example: `:g:` for a gif.

Supported characters are:
- g - gif
