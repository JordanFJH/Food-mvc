import React from 'react';

function New(props) {
    return (
        <div>
            <h1>New Page</h1>
            <form action="/fruits" method="POST">
                Name: <input type="text" name="name" />
                <br /><br />
                Color: <input type="text" name="color" />
                <br /><br />
                Is Ready To Eat: <input type="checkbox" name="readyToEat" />
                <br />
                <button>Create Fruit</button>
            </form>
        </div>
    );
}

export default New;