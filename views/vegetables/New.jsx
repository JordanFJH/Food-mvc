import React from 'react';

function New(props) {
    return (
        <div>
            <h1>Create New Vegetable</h1>
            <form action="/vegetables" method='POST'>
                Name: <input type="text" name='name'/> <br /> <br />
                Color: <input type="text" name='color'/> <br /> <br />
                Ready to Eat
                <input type="checkbox" name="readyToEat"/> <br /> <br />
                <button>Add Vegetable</button>
            </form>
        </div>
    );
}

export default New;