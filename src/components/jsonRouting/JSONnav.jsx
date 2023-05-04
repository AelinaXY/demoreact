import { Link } from 'react-router-dom'

const JSONNav = () => {

    return(
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/albums">Albums</Link>
        </li>
        <li>
            <Link to="/comments">Comments</Link>
        </li>
        <li>
            <Link to="/photos">Photos</Link>
        </li>
        <li>
            <Link to="/posts">Posts</Link>
        </li>
        <li>
            <Link to="/todos">Todos</Link>
        </li>
        <li>
            <Link to="/users">Users</Link>
        </li>
    </ul>
    )

}

export default JSONNav;