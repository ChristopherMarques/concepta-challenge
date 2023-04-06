# 🏃🏾‍♂️ Concepta Challenge

> Hello, welcome to Concepta Challgenge. A react native expo app with a dropdown component. 😀
> This project was made as a part of a challenge for concepta company. 🤓

## What I've done in this component?

> To attend the steps mentioned, I've followed the steps below:

- I allowed the menu to be aligned to the left or the right by providing a prop called "alignment" that could take either "left" or "right" as its value.
- To make the component reusable, I divided it into three smaller components: DropdownMenu, DropdownButton, and Dropdown.
- The DropdownMenu was responsible for rendering the menu items, the DropdownButton rendered the button with the "more" icon, and the Dropdown composed the two.
- I followed the principle of "composability" instead of "inheritance" to make the component more flexible and easier to use.
- I ensured that the component worked for users who did not have a mouse by providing keyboard accessibility using the "tab" key and "enter" key.
- To handle a mixture of buttons and anchor tags, I provided a "renderItem" prop that could be used to customize the rendering of each menu item.
- I did not use external libraries to keep the code simple and lightweight.

## Technologies i've used in this project

- React ✔
- React Hooks: [React Hooks](https://pt-br.reactjs.org/docs/hooks-intro.html) ✔
- React Native✔

## What the next steps to keep improving the usability of this component?

> To keep the usability and good maintance of the component, a good practice is to keep the component tested and very well documented, something I would like to do is add [Storybook](https://storybook.js.org/) to keep all components of the application really well documented and simple to understand.
