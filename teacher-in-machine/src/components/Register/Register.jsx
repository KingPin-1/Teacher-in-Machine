import { Link } from 'react-router-dom';
import languages from '../../utils/languages';
import { LanguageHeader } from '../Home/LanguageHeader';
// import { useBoundStore } from "~/hooks/useBoundStore";
import { Flag } from '../Flag';
import bgSnow from '../../assets/bg-snow.svg';
// import type { StaticImageData } from "next/image";

const Register = () => {
    // const setLanguage = useBoundStore((x) => x.setLanguage);
    return (
        <main className="flex min-h-screen flex-col items-center bg-[#235390] text-white" style={{ backgroundImage: `url(${bgSnow})` }}>
            <LanguageHeader />
            <div className="container flex grow flex-col items-center justify-center gap-20 px-4 py-16">
                <h1 className="mt-20 text-center text-3xl font-extrabold tracking-tight text-white">I want to learn...</h1>
                <section className="mx-auto grid w-full max-w-5xl grow grid-cols-1 flex-col gap-x-2 gap-y-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {languages.map((language) => (
                        <Link
                            key={language.name}
                            to="/learn"
                            className={
                                'flex cursor-pointer flex-col items-center gap-4 rounded-2xl border-2 border-b-4 border-gray-400 px-5 py-8 text-xl font-bold hover:bg-gray-300 hover:bg-opacity-20'
                            }
                            // onClick={() => setLanguage(language)}
                        >
                            <Flag language={language} />
                            <span>{language.name}</span>
                        </Link>
                    ))}
                </section>
            </div>
        </main>
    );
};

export default Register;
