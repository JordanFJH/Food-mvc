import React from 'react';

function Show({ vegetable, index }) {
    return (
        <div>
            <h1>Individual Vegetable</h1>
            <a href="/vegetables">Home</a>
            <h2>{vegetable.name}</h2>
            <h2>{vegetable.color}</h2>
            {vegetable.readyToEat? 'It is ready to eat' : 'It is not ready to eat... Cant touch this' }
            <form action={`/vegetables/${index}?_method=DELETE`} method='POST'>
                <button>Delete</button>
            </form>
        </div>
    );
}

export default Show;