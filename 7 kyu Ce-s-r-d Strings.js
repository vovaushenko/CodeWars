// https://www.codewars.com/kata/5ff6060ed14f4100106d8e6f

const uncensor = (infected, discovered) => {
    if (!discovered) return infected;
    let text;
    let counter = 0;

    const helper = (s) => {
        if (counter === discovered.length) return;
        text = s.replace('*', discovered[counter]);
        counter++;

        helper(text);
    };

    helper(infected);

    return text;
};
