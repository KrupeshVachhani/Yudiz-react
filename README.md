<div>
    <h1 style={{color: 'red'}}>Hello</h1>
</div>

{
    type: 'div',
    porps: {
        children: [
            {
                type: 'h1',
                props: {
                    style: {
                        color: 'red'
                    },
                    children: 'Hello'
                }
            }
        ]
    }
}