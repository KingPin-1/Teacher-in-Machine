import flagsSvg from '../assets/flags.svg';
export const Flag = ({ language, width = 84 }) => {
    const height = width * (19.3171 / 24);
    return (
        <svg viewBox={language.viewBox} style={{ height, width }}>
            <image height={flagsSvg.height} href={flagsSvg} width={flagsSvg.width}></image>
        </svg>
    );
};
