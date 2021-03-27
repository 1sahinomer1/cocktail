export const debounce = (fnc: Function , delay:number) => {
    let timeout:any
    return () =>{
        if(timeout)clearTimeout(timeout)
        timeout = setTimeout(() => {
            fnc()
        }, delay);
    }
}