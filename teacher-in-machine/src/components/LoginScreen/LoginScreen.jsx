import { CloseSvg } from '../Svgs';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// export type LoginScreenState = "HIDDEN" | "LOGIN" | "SIGNUP";

export const useLoginScreen = (queryState) => {
    const [loginScreenState, setLoginScreenState] = useState(queryState);
    useEffect(() => setLoginScreenState(queryState), [queryState]);
    return { loginScreenState, setLoginScreenState };
};

const LoginScreen = ({ loginScreenState, setLoginScreenState }) => {
    const navigate = useNavigate();

    const nameInputRef = useRef(null);

    // useEffect(() => {
    //     if (loginScreenState !== 'HIDDEN' && loggedIn) {
    //         setLoginScreenState('HIDDEN');
    //     }
    // }, [loginScreenState, loggedIn, setLoginScreenState]);

    const logInAndSetUserProperties = () => {
        navigate('/learn');
    };

    return (
        <article
            className={[
                'fixed inset-0 z-30 flex flex-col bg-white p-7 transition duration-300',
                loginScreenState === 'HIDDEN' ? 'pointer-events-none opacity-0' : 'opacity-100',
            ].join(' ')}
            aria-hidden={!loginScreenState}>
            <header className="flex flex-row-reverse justify-between sm:flex-row">
                <button className="flex text-gray-400" onClick={() => setLoginScreenState('HIDDEN')}>
                    <CloseSvg />
                    <span className="sr-only">Close</span>
                </button>
                <button
                    className="hidden rounded-2xl border-2 border-b-4 border-gray-200 px-4 py-3 text-sm font-bold uppercase text-blue-400 transition hover:bg-gray-50 hover:brightness-90 sm:block"
                    onClick={() => setLoginScreenState((x) => (x === 'LOGIN' ? 'SIGNUP' : 'LOGIN'))}>
                    {loginScreenState === 'LOGIN' ? 'Sign up' : 'Login'}
                </button>
            </header>
            <div className="flex grow items-center justify-center">
                <div className="flex w-full flex-col gap-5 sm:w-96">
                    <h2 className="text-center text-2xl font-bold text-gray-800">
                        {loginScreenState === 'LOGIN' ? 'Log in' : 'Create your profile'}
                    </h2>
                    <div className="flex flex-col gap-2 text-black">
                        {loginScreenState === 'SIGNUP' && (
                            <>
                                <div className="relative flex grow">
                                    <input
                                        className="grow rounded-2xl border-2 border-gray-200 bg-gray-50 px-4 py-3"
                                        placeholder="Age (optional)"
                                    />
                                    {/* <div className="absolute bottom-0 right-0 top-0 flex items-center justify-center pr-4">
                                        <div
                                            className="relative flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border-2 border-gray-200 text-gray-400"
                                            onMouseEnter={() => setAgeTooltipShown(true)}
                                            onMouseLeave={() => setAgeTooltipShown(false)}
                                            onClick={() => setAgeTooltipShown((x) => !x)}
                                            role="button"
                                            tabIndex={0}
                                            aria-label="Why do you need an age?">
                                            ?
                                            {ageTooltipShown && (
                                                <div className="absolute -right-5 top-full z-10 w-72 rounded-2xl border-2 border-gray-200 bg-white p-4 text-center text-xs leading-5 text-gray-800">
                                                    Providing your age ensures you get the right Duolingo experience. For more details,
                                                    please visit our{' '}
                                                    <Link href="https://www.duolingo.com/privacy" className="text-blue-700">
                                                        Privacy Policy
                                                    </Link>
                                                </div>
                                            )}
                                        </div>
                                    </div> */}
                                </div>
                                <input
                                    className="grow rounded-2xl border-2 border-gray-200 bg-gray-50 px-4 py-3"
                                    placeholder="Name (optional)"
                                    ref={nameInputRef}
                                />
                            </>
                        )}
                        <input
                            className="grow rounded-2xl border-2 border-gray-200 bg-gray-50 px-4 py-3"
                            placeholder={loginScreenState === 'LOGIN' ? 'Email or username (optional)' : 'Email (optional)'}
                        />
                        <div className="relative flex grow">
                            <input
                                className="grow rounded-2xl border-2 border-gray-200 bg-gray-50 px-4 py-3"
                                placeholder="Password (optional)"
                                type="password"
                            />
                            {loginScreenState === 'LOGIN' && (
                                <div className="absolute bottom-0 right-0 top-0 flex items-center justify-center pr-5">
                                    <Link className="font-bold uppercase text-gray-400 hover:brightness-75" href="/forgot-password">
                                        Forgot?
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                    <button
                        className="rounded-2xl border-b-4 border-blue-500 bg-blue-400 py-3 font-bold uppercase text-white transition hover:brightness-110"
                        onClick={logInAndSetUserProperties}>
                        {loginScreenState === 'LOGIN' ? 'Log in' : 'Create account'}
                    </button>
                    <p className="block text-center sm:hidden">
                        <span className="text-sm font-bold text-gray-700">
                            {loginScreenState === 'LOGIN' ? "Don't have an account?" : 'Have an account?'}
                        </span>{' '}
                        <button
                            className="text-sm font-bold uppercase text-blue-400"
                            onClick={() => setLoginScreenState((x) => (x === 'LOGIN' ? 'SIGNUP' : 'LOGIN'))}>
                            {loginScreenState === 'LOGIN' ? 'sign up' : 'log in'}
                        </button>
                    </p>
                </div>
            </div>
        </article>
    );
};

export default LoginScreen;
