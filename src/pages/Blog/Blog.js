import React from 'react';

const Blog = () => {
    return (
        <div className='bg-color'>
            <div className="container py-5">
                <h1 className='text-center text-white fw-bold pb-5'>Blog</h1>
                <div className="row g-5">
                    <div className="col-md-6 col-sm-12">
                        <div className="p-4 rounded border bg-light h-100">
                            <h4>Difference between javascript and nodejs?</h4>
                            <p>JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="p-4 rounded border bg-light h-100">
                            <h4>When should you use nodejs and when should you use mongodb?</h4>
                            <p>Nodejs is a Javascript engine that you can write any application you want with (by programming in the Javascript language). It runs your Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too.
                                MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="p-4 rounded border bg-light h-100">
                            <h4>Differences between sql and nosql databases?</h4>
                            <p>SQL databases are relational, NoSQL databases are non-relational. SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="p-4 rounded border bg-light h-100">
                            <h4>What is the purpose of jwt and how does it work?</h4>
                            <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;