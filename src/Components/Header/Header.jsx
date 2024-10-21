import ProfileImage from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex items-center justify-between p-4 border-b-2 max-w-7xl mx-auto'>
            <h3 className="text-4xl text-center font-semibold">This is using Tailwind css</h3>
            <img src={ProfileImage} alt="" />
        </header>
    );
};

export default Header;