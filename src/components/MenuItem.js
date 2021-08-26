const MenuItem = (props) => {
    return (
        <li className='menu-item'>
            <a href={props.href} className='menu-link' target={props.target}>
                {props.svg}
                <span className='link-text'>{props.text}</span>
            </a>
        </li>
    );
};

export default MenuItem;