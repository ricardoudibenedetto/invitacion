export const formatTitleCase = (name: string = '' ) => { 
    if(name.trim().length < 1) return name;
    return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
}