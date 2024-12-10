# debounce-by-edge

Debounce is a programming technique used to limit the rate at which a function is executed. It ensures that a function is only called after a certain amount of time has passed since it was last invoked.

A lightweight, flexible debounce function for all types of events.

## Installation

```bash
npm install debounce-by-edge
```
## Usage

The debounce function delays the execution of a given function until after a specified delay in milliseconds, preventing multiple calls within that delay. It can also optionally run the function immediately on the first trigger.

### Example 1: Debouncing a Function with Delay

```javascript
// Import the debounce function from your package
const debounce = require('debounce-by-edge');

// Function to handle search input
function handleSearch(event) {
  console.log('Searching for:', event.target.value);
}

// Apply debounce to the handleSearch function
const debouncedSearch = debounce(handleSearch, 500);

// Attach the debounced function to the input event
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', debouncedSearch);
```

In this example, the `handleSearch` function will only be triggered 500 milliseconds after the user stops typing, avoiding multiple unnecessary calls while the user is still typing.

### Example 2: Debouncing with Immediate Execution

You can also make the debounced function run immediately the first time, and then debounce subsequent calls. To do this, set the `immediate` option to `true`.

```javascript
// Import the debounce function
const debounce = require('debounce-by-edge');

// Function to handle search input
function handleSearch(event) {
  console.log('Searching for:', event.target.value);
}

// Apply debounce with immediate execution
const debouncedSearchImmediate = debounce(handleSearch, 500, true);

// Attach the debounced function to the input event
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', debouncedSearchImmediate);
```

In this case, the `handleSearch` function will be executed immediately on the first keystroke, and subsequent calls will be debounced by 500ms.

## API

```javascript
debounce(fn, delay = 300, immediate = false)
```

- **fn**: The function to debounce.
- **delay** (optional): The delay in milliseconds before calling `fn`. Default is `300ms`.
- **immediate** (optional): If `true`, `fn` is invoked immediately on the first call and then debounced. Default is `false`.