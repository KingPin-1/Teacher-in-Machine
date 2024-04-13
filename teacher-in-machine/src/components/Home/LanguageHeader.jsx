import { Link } from 'react-router-dom';

export const LanguageHeader = () => {
    return (
        <header className="fixed left-0 right-0 top-0 mx-auto flex min-h-[70px] max-w-5xl items-center justify-center bg-[#235390] px-10 font-bold text-white">
            <Link className="text-4xl" to="/">
                ™Ameen Rox's 😎 Banger Application©
            </Link>
        </header>
    );
};
