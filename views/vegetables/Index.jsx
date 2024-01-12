import React from 'react';

function Index({ vegetables }) {
    return (
        <div>
            <h1>Index Page</h1>
            <ul>
            {vegetables.map((veg, index) => (
                <li>
                    The <a href={`/vegetables/${index}`}>{veg.name}</a> is {veg.color}
                    {veg.readyToEat? 'Its is ready to eat' : 'It is not ready to eat... Cant touch this' }
                </li>
            ))}
            </ul>
            <a href="/vegetables/new">Add New Vegetable</a>
        </div>
    );
}

export default Index;