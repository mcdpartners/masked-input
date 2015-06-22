jQuery Masked Input Plugin
============================

A plugin to restrict the input of a text field and allow a user to easily enter data in a specified pattern. Some example patterns include phone numbers, dates, social security, etc. Here is a collection of predefined masks and what they represent:
  - X - Represents an alpha character (A-Z,a-z)
  - 9 - Represents a numeric character (0-9)
  - * - Represents an alphanumeric character (A-Z,a-z,0-9)

## Dependencies
- jQuery 1.7.2 or above

## Usage

Start off by including jQuery and the masked input javascript files on the page.

```html
<script src="jquery-1.7.2.js"></script>
<script src="jquery.masked-input.js"></script>
```

Add a ``data-masked-input`` attribute on the input field and set the desired pattern.

```html
<input type="text" data-masked-input="999-999-9999">
```

See more examples in the demo folder.

## Support
It has been tested and is supported in IE8+, Firefox, Chrome, Safari and Opera.

## License
Copyright &copy; MCD Partners<br>
Licensed under the [MIT license](https://github.com/mcdpartners/masked-input/blob/master/MIT-LICENSE.txt).