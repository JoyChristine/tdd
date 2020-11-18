// const Capitalize = s =>
//     s.replace(/^\w|\.\s\w/g, x => x.toUpperCase());
// export default Capitalize;
export const Capitalize = (string) => {
    if (typeof string !== 'string') return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
};