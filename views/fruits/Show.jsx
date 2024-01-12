import React from "react";

export default function Show({ fruit, index }) {

    return (
        <div>
            <h1>The {fruit.name} is {fruit.color}</h1>
            <h2>{fruit.readyToEat? 'Its is ready to eat' : 'It is not ready to eat... Cant touch this' }</h2>
            <a href={`/fruits/${index}/edit`}>Edit</a>
            <form action={`/fruits/${index}?_method=DELETE`} method="POST">
                <button>Delete</button>
            </form>
        </div>
    );
}