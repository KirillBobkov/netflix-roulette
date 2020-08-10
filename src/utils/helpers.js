// @flow

export const getYear = ((dateString : string) : number => {
    return new Date(dateString).getFullYear();
});