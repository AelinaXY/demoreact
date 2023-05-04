import {Link, useParams} from 'react-router-dom';

const Users = () => {
    const {id} = useParams();
    return(
        <>  
            <h1>Users</h1>
            <strong>Select a user:</strong>
            <ul>
                <li>
                    <Link to="/users/1">User 1</Link>
                </li>
                <li>
                    <Link to="/users/2">User 2</Link>
                </li>
                <li>
                    <Link to="/users/3">User 3</Link>
                </li>
            </ul>
            <p>{id}</p>
        </>
    );
}
export default Users;