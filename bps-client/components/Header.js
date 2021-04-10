import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>Music Artists and Albums</span>
            </h1>
            <p className={headerStyles.description}>
                <i>Music Database</i> 
            </p>
        </div>
    )
}

export default Header