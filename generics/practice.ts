
const url = 'https://www.test.com/realms/{realmName}/{protocol}/openid-connect/token';

type GenPathParams<T> = any;

type ans = GenPathParams<typeof url>

// How to make type 'ans' become the following type? 
// type GenPathParams = {
//     realmName: string,
//     protocol: string
// }