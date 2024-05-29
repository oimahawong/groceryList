
import { Fragment } from "react";
function ListGroup() {
    const item = [
        'New York',
        'San Franciso',
        'Paris',
    ]
  return (
    <Fragment>
        <h1>HomePage</h1>
        <ul className="list-group">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li>
        </ul>
    </Fragment>
  );
}

export default ListGroup;
