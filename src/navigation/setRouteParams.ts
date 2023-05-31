export function setRouteParams(
    routeStr: string, 
    params: {
        [k in string]?: string | number
    } 
) {
    let result = routeStr
    for (const [key, value] of Object.entries(params)) {
        if (value) {
            result = result.replace(`:${key}`, "" + value);
        }
    }
    result = result.replaceAll(/\:.+?(?=\/)/g, "-")
    return result
}