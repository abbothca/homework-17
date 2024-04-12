"use strict";

//Якщо я правильно зрозуміла постановку задачі, то функцію getUserInfo не можна пепеписувати
const getUserInfo = async () => {
    const response = await fetch('/api/for/user');
    const userInfo = await response.json();

    return userInfo;
}

const retry = async (func, options) => {
    const retries = (!options?.retries) ? 1 : options.retries;
    let currentTrying = 0;
    let reason;

    while (currentTrying < retries) {
        try {
            return await func();
        } catch (error) {
            console.log(error)
            reason = error;
        }
        finally {
            currentTrying += 1;
        }
    }

    return Promise.reject(reason);
}

retry(getUserInfo, { retries: 3 });
// console.log(retry(getUserInfo, { retries: 3 }))