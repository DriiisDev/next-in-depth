import Link from "next/link";
import "./mainNavigation.css"

const MainNavigation = () => {
    return(
        <header>
            <div>
                <ul>
                    <li>
                        <Link to="/">All Meetups</Link>
                    </li>
                    <li>
                        <Link to="/new-meetup">Add New Meetup</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default MainNavigation;