import React from 'react';

function Index({ fruits }) {

    function showFruits(fruit, index) {
        return (
            <li key={index}>
                <a href={`/fruits/${index}`}>{fruit.name}</a> is {fruit.color}
                <br />
                {fruit.readyToEat? 'Its is ready to eat' : 'It is not ready to eat... Cant touch this' }
    
            </li>
        )
    }

    return (
        <div>
            <nav>
                <a href="/fruits/new">Create a New Fruit</a>
            </nav>
            <h1>This is for the index</h1>
            <ul>
                {fruits.map(showFruits)}
            </ul>
        </div>
    );
}

export default Index;