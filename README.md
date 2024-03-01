# Namaste React Basics

# Parcel

- Dev Build.
- Local Server.
- HMR = Hot Module Replacement.
- Using File watching algorithm written in C++ it does HMR.
- Faster Build - Using Cache.
- Image optimisation.
- Minification of files.
- Bundle all the files.
- Compress all the files.
- Consistent Hashing.
- Code Splitting.
- Differential bundling: Means when app is hosted it runs smoothly on older versions of browsers as well.
- Diagnostic Features- By giving us better error handling features.
- Tree Shaking Algo: Suppose we have 10 functions and we are using only 3, it will remove those extra 7 function to minify the code.
- Different build for dev and prod.

# JSX

- Attributes written in camel case
- if you write multiple lines: (<h1 id= "heading" className = "Root">this is react</h1>)

# React Components

- class based component -old
- Functional component - new(Basically nothing but js function that return some piece of jsx).

# props

- just similar to arguments in function.
- usually used to dynamically use data in a component.

# React says never use index as keys.

# Named and Default export

    -Default Export
        export default newVar
        import newVar from "..."
        only one default export is allowed in one file.

    -Named Export
        export newVar
        import {newVar} from "..."

# React Hooks

- Normally a JS function
- useState() - state variable

# Use Effect()

    - if no dependency array is given, use effect will be called after every render.
    - if it is present and empty then used effect is called only on initial render, just once.
    - if there is somedependency is present in array, it will be called on every time dependency is changed.
