import { Link } from 'react-router-dom';
 import classes from './MainNavigation.module.css';
function MainNavigation(){
return<header className={classes.header}>
    <div>React Meetups
<nav>
    <ul>
        <li><Link to='/'>All Meetups</Link></li>
        <li><Link to='/new-meetup'>Add New Meetup</Link></li>
        <li><Link to='/favorites'>My Favorites</Link></li>
    </ul>
</nav>

    </div>
</header>
}

export default MainNavigation;