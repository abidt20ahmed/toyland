import React from 'react';
import NavBar from '../../components/NavBar';
import SharedFooter from '../../components/SharedFooter';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <>
            <NavBar></NavBar>
            <div className="max-w-4xl mx-auto p-6 mt-8">

                <h2 className="text-4xl font-bold text-indigo-700 mb-14 text-center"><span
                    className="inline-block h-full bg-gradient-to-r from-purple-500 via-blue-500 to-blue-700 text-transparent bg-clip-text"
                    style={{
                        WebkitTextFillColor: 'transparent',
                        display: 'inline-flex',
                        alignItems: 'center',
                        lineHeight: '2'
                    }}

                >
                    Answers of the questions:
                </span></h2>

                <div className="my-8 bg-white rounded-lg p-6 shadow-md">
                    <h3 className="text-2xl font-bold mb-2 text-purple-600">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
                    <p className="text-lg text-gray-700 mb-4">
                        An access token is a credential issued to a client after authentication, representing authorization to access protected resources. It is short-lived and sent in the authorization header of HTTP requests.

                        A refresh token is a long-lived credential issued alongside an access token during authentication. It allows obtaining a new access token without re-authentication. Refresh tokens are securely stored on the client-side, typically in cookies or local storage.

                        For client-side storage:

                        Cookies: Access tokens and refresh tokens can be stored in HTTP-only cookies.
                        Local Storage: Tokens can be stored in the client's local storage.
                        Session Storage: Tokens can be stored in session storage.
                        IndexedDB: Tokens can be stored in IndexedDB.
                        Ensure appropriate security measures, such as HTTPS, protection against XSS attacks, and secure handling of tokens.
                    </p>
                </div>

                <div className="my-8 bg-white rounded-lg p-6 shadow-md">
                    <h3 className="text-2xl font-bold mb-2 text-purple-600">Compare SQL and NoSQL databases?</h3>

                    <p className="text-lg text-gray-700 mb-4">SQL Databases: <br />
                        SQL databases follow a structured data model with predefined schemas and relationships. They use SQL as the query language for interacting with the data. SQL databases are known for enforcing strong data integrity through features like primary keys, foreign keys, and unique constraints. They provide ACID compliance, ensuring atomicity, consistency, isolation, and durability. SQL databases are commonly used for applications that require structured and consistent data, such as financial systems, inventory management, and traditional business applications.</p>
                    <p className="text-lg text-gray-700 mb-4">NoSQL Databases: <br />
                        NoSQL databases offer a more flexible data model without predefined schemas. They support various data formats, including key-value pairs, documents, columns, and graphs. NoSQL databases use different query languages specific to their data models, enabling efficient retrieval and manipulation of data. They are designed for horizontal scalability, allowing for distributed data across multiple servers to handle large volumes of unstructured or semi-structured data. NoSQL databases prioritize high performance, making them suitable for modern applications that deal with rapidly changing or diverse data types, such as social media, real-time analytics, content management systems, and IoT platforms.</p>
                </div>

                <div className="my-8 bg-white rounded-lg p-6 shadow-md">
                    <h3 className="text-2xl font-bold mb-2 text-purple-600">What is Express.js? What is Nest.js?</h3>
                    <p className="text-lg text-gray-700 mb-4">Express.js:
                        Express.js is a minimalistic and flexible web application framework for Node.js. It provides a simple yet powerful set of features for building web applications and APIs. Express.js is known for its lightweight nature and its focus on simplicity and modularity. It offers various middleware functions that can be used to handle requests, process data, and define routes. Express.js has a large ecosystem of extensions and plugins, making it highly customizable and suitable for a wide range of web development needs. It is widely adopted and popular among developers due to its simplicity, speed, and flexibility.</p>
                    <p className="text-lg text-gray-700 mb-4">Nest.js:
                        Nest.js is a progressive and opinionated Node.js framework for building efficient and scalable server-side applications. It is built with TypeScript and takes advantage of modern JavaScript features. Nest.js follows the modular architecture pattern and is heavily inspired by Angular, making it familiar to developers with Angular background. It provides a solid foundation for building server-side applications by combining the best practices from different frameworks and languages. Nest.js promotes the use of decorators, dependency injection, and TypeScript decorators for creating modular and maintainable code. It supports various features like routing, authentication, database integration, and real-time communication. Nest.js aims to enhance developer productivity and application performance while ensuring code maintainability and scalability.</p>
                </div>

                <div className="my-8 bg-white rounded-lg p-6 shadow-md">
                    <h3 className="text-2xl font-bold mb-2 text-purple-600">What is MongoDB aggregate and how does it work?</h3>

                    <p className="text-lg text-gray-700 mb-4">
                        The MongoDB Aggregation Framework is a feature that allows you to perform advanced data processing and analysis within the MongoDB database. It uses a pipeline of stages and operators to perform operations like filtering, grouping, sorting, and transformations on documents. The output is the result of the aggregation operation based on the specified stages and operators. It is useful for complex data manipulations and aggregations in MongoDB.</p>
                </div>
            </div>
            <SharedFooter></SharedFooter>
        </>

    );
};

export default Blog;