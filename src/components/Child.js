import React from "react";

function Child({count}) {
    console.log('Child component rerendered')
    return <div>Child count is: {count}</div>
}

export default React.memo(Child);