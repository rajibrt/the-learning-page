import React from 'react';
import { FaFacebook, FaTwitter, FaYahoo } from 'react-icons/fa';

const Blog = () => {
    return (
        <div className='grid justify-items-center my-8'>
            <div className="card card-compact md:w-[750px] mx-8 bg-base-100 shadow-xl my-2">
                <figure><img src="https://i.ibb.co/pyXyC5Y/cors.jpg" alt="Shoes" /></figure>
                <div className="card-body mx-4">
                    <h2 className="card-title">What is cors?</h2>
                    <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a 'preflight' request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request. An example of a cross-origin request: the front-end JavaScript code served from https://domain-a.com uses XMLHttpRequest to make a request for https://domain-b.com/data.json.For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts. For example, XMLHttpRequest and the Fetch API follow the same-origin policy. This means that a web application using those APIs can only request resources from the same origin the application was loaded from unless the response from other origins includes the right CORS headers.</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>

            </div>
            <div className="card card-compact md:w-[750px] mx-8 bg-base-100 shadow-xl my-2">
                <figure><img src="https://i.ibb.co/Z1KST8q/firebase.jpg" alt="Shoes" /></figure>
                <div className="card-body mx-4 ">
                    <h2 className="card-title">Why are you using firebase?</h2>
                    <p>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience. Store and sync data with our NoSQL cloud database. Data is synced across all clients in realtime, and remains available when your app goes offline. The Firebase Realtime Database is a cloud-hosted database. Data is stored as JSON and synchronized in realtime to every connected client. When you build cross-platform apps with our Apple platforms, Android, and JavaScript SDKs, all of your clients share one Realtime Database instance and automatically receive updates with the newest data.</p>
                    <p>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience. Store and sync data with our NoSQL cloud database. Data is synced across all clients in realtime, and remains available when your app goes offline. The Firebase Realtime Database is a cloud-hosted database. Data is stored as JSON and synchronized in realtime to every connected client. When you build cross-platform apps with our Apple platforms, Android, and JavaScript SDKs, all of your clients share one Realtime Database instance and automatically receive updates with the newest data.</p>

                    <h2 className="card-title">What other options do you have to implement authentication?</h2>
                    <ul>
                        <div className='flex items-center'><FaFacebook className='mr-2'></FaFacebook><li>FaceBook</li></div>
                        <div className='flex items-center'><FaTwitter className='mr-2'></FaTwitter><li>Twitter</li></div>
                        <div className='flex items-center'><FaYahoo className='mr-2'></FaYahoo><li>Yahoo</li></div>
                    </ul>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
            <div className="card card-compact md:w-[750px] mx-8 bg-base-100 shadow-xl my-2">
                <figure><img src="https://i.ibb.co/YhC9tqd/priviate-router.jpg" alt="Shoes" /></figure>
                <div className="card-body mx-4 ">
                    <h2 className="card-title">How does the private route work?</h2>
                    <p>Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.</p>
                    <p>
                        This is a React Router tutorial which teaches you how to use Private Routes with React Router 6. The code for this React Router v6 tutorial can be found over here.
                    </p>
                    <p>We will start off with a minimal React project that uses React Router to navigate a user from one page to another page. In the following function component, we have matching Link and Route components from React Router for various routes. Furthermore, we have a so-called Index Route loaded with the Landing component and a so-called No Match Route loaded with inline JSX. Both act as fallback routes:</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
            <div className="card card-compact md:w-[750px] mx-8 bg-base-100 shadow-xl my-2">
                <figure><img src="https://i.ibb.co/VHrjZFd/node.jpg" alt="Shoes" /></figure>
                <div className="card-body mx-4 ">
                    <h2 className="card-title">What is Node?</h2>
                    <p>As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep.</p>
                    <p>This is in contrast to today's more common concurrency model, in which OS threads are employed. Thread-based networking is relatively inefficient and very difficult to use. Furthermore, users of Node.js are free from worries of dead-locking the process, since there are no locks. Almost no function in Node.js directly performs I/O, so the process never blocks except when the I/O is performed using synchronous methods of Node.js standard library. Because nothing blocks, scalable systems are very reasonable to develop in Node.js.</p>
                    <p>
                        Node.js is similar in design to, and influenced by, systems like Ruby's Event Machine and Python's Twisted. Node.js takes the event model a bit further. It presents an event loop as a runtime construct instead of as a library. In other systems, there is always a blocking call to start the event-loop. Typically, behavior is defined through callbacks at the beginning of a script, and at the end a server is started through a blocking call like EventMachine::run(). In Node.js, there is no such start-the-event-loop call. Node.js simply enters the event loop after executing the input script. Node.js exits the event loop when there are no more callbacks to perform. This behavior is like browser JavaScript — the event loop is hidden from the user.
                    </p>

                    <h2 className="card-title">How does Node work?</h2>
                    <p>Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                    <p>Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.

                        <ul> Node.js basically works on two concept</ul>

                    </p>
                    <p>
                        Non-blocking I/o: Non-blocking i/o  means working with multiple requests without blocking the thread for a single request. I/O basically interacts with external systems such as files, databases. Node.js is not used for CPU-intensive work means for calculations, video processing because a single thread cannot handle the CPU works.
                    </p>
                    <p>
                        Asynchronous: Asynchronous is executing a callback function. The moment we get the response from the other server or database it will execute a callback function. Callback functions are called as soon as some work is finished and this is because the node.js uses an event-driven architecture. The single thread doesn’t work with the request instead it sends the request to another system which resolves the request and it is accessible for another request.

                        To implement the concept of the system to handle the request  node.js uses the concept of Libuv.

                        Libuv is an open-source library built-in C. It has a strong focus on asynchronous and  I/O, this gives node access to the underlying computer operating system, file system, and networking.

                        Libuv implements two extremely important features of node.js
                    </p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Blog;