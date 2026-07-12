-Library -GSAP -Lenis -Reactjs

-Framework -Nextjs -Angular -Remix

--> There are two type of import and export

-Default-> you only default export one thing from a file and while importing you can name it anything you want

-Named->you can export as many as you want but while importing use {} and you have to named as same as in file from where it is getting export

Real DOM & virtual DOM

-Real DOM updates the browser UI directly, whereas Virtual DOM first updates a virtual copy, compares changes, and then updates only the necessary parts of the Real DOM.

Real DOM -Real DOM is the actual DOM maintained by the browser; any change directly updates the UI and may trigger reflow/repaint operations. -Updating multiple elements frequently can be costly because the browser has to recalculate layouts and render changes. -In large applications, direct DOM manipulation can lead to performance bottlenecks.

Virtual DOM -Virtual DOM is a lightweight JavaScript representation of the Real DOM maintained by React in memory. -When state changes, React creates a new Virtual DOM, compares it with the previous one (Diffing), and identifies only the changed nodes. -React updates only those specific nodes in the Real DOM (Reconciliation), improving rendering performance and efficiency.

->in js we call function by FunctionName() in jsx you can call function by '<'  FunctionName/>
