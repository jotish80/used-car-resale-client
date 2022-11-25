import React from 'react';
 


const Blog = () => {
    
    return (
        <>

            <div className='w-[90%] mx-auto mt-12 mb-12 bg-slate-50'>
                
                <div className='shadow-lg p-20 rounded-lg mt-10'>
                    <h1 className='text-2xl font-bold mb-2'>What are the different ways to manage a state in a React application?</h1>
                     
                    <p className='text-xl'>
                        The <span className='font-bold underline'>logical state</span> has a store to cover the information of the business logic that is essential to carry out the main functional requirements of the app.
                    </p>
                    <p className='text-xl'>
                        The <span className='font-bold underline'>server state</span> handles the server-side data introduced by the HTTP request. The information contains data and request states like loading, fetching, and error.
                    </p>
                    <p className='text-xl'>
                        The <span className='font-bold underline'>form state </span> is used to hold the multiple types of data used in a form.
                    </p>
                    <p className='text-xl'>
                        The <span className='font-bold underline'>navigation state</span> is about the paths and parameters in a URL that is used to show the states of a page for better user-friendly navigation. 
                    </p>
                    <p className='text-xl'>
                        The <span className='font-bold underline'>browser state</span> handles the details of the current user of the application. 
                    </p>
                </div>
                <div className='shadow-lg p-20 rounded-lg mt-10'>
                    <h1 className='text-2xl font-bold mb-2'>How does prototypical inheritance work?</h1>
                    <p className='text-xl'>
                        The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                    </p>
                </div>
                <div className='shadow-lg p-20 rounded-lg mt-10'>
                    <h1 className='text-2xl font-bold mb-2'> What is a unit test? Why should we write unit tests?</h1>
                    <p className='text-xl'>
                        Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.
                    </p>
                    <p className='text-xl'>
                        One of the benefits of unit tests is that they isolate a function, class or method and only test that piece of code. Higher quality individual components create overall system resiliency. Thus, the result is reliable code. Unit tests also change the nature of the debugging process.
                    </p>
                </div>
                <div className='shadow-lg p-20 rounded-lg mt-10'>
                    <h1 className='text-2xl font-bold mb-2'>React vs. Angular vs. Vue?</h1>
                    <p className='text-xl'>
                       <span className='font-bold underline'> React </span> is recommended for projects with front-end-heavy results. Since there are no clear structures, close cooperation between the development team is vital. React has a stronger server-side rendering support, making the library more SEO-friendly.
                    </p>
                    <p className='text-xl'>
                        <span className='font-bold underline'>Angular.js </span> offers a very clear structure and lots of features. It allows development teams to move quickly to implementation without the need to define structures or look for additional libraries. However, it is often too overloaded for small projects and brings unnecessary ballast.
                    </p>
                    <p className='text-xl'>
                       <span className='font-bold underline'> Vue </span> may be used for a wide range of applications. It may give a great solution for virtually every project type due to its interoperability with other JavaScript frameworks and its ability to add more complicated logic to current programs.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Blog;