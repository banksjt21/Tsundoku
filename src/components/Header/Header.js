/*  ===========================================================================
//  Header.js
//  ===========================================================================
//  - Displays the logo and navigation for all pages
//  =======================================================================  */




/*  ===========================================================================
//  DEPENDENCIES
//  =======================================================================  */
import { Link } from 'react-router-dom';
import styles from './Header.module.css';




/*  ===========================================================================
//  HEADER
//  =======================================================================  */
export default function Header() {
    return (
        <header>
            <h1>Book Collection</h1>
            <nav>
                <ul>
                    <li><Link to={`/`} >Home</Link></li>
                    <li><Link to={`/books`} >Books</Link></li>
                    <li><Link to={`/books/new`}>Add a Book</Link></li>
                    <li><Link to={`/books/search`}>Add a Book via Search</Link></li>
                </ul>
            </nav>
        </header>
    )
}