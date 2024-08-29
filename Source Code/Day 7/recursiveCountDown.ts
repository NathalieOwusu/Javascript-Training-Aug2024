const recursiveCountDown = (n: number) => {
    
    if (n == 0)
        return;

    console.log(n);

    recursiveCountDown(n-1)
}

recursiveCountDown(8);