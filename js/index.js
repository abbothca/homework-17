"use strict";

//Якщо я правильно зрозуміла постановку задачі, то функцію getUserInfo не можна пепеписувати
// Тут нема перевірки чи успішним був запит, тому в консоль буде вилітати помилка з fetch
const getUserInfo = async () => {
    const response = await fetch('/api/for/user');
    const userInfo = await response.json();

    return userInfo;
}

const retry = async (func, options) => {
    const retries = (!options?.retries) ? 1 : options.retries;
    let currentTrying = 0;
    let isSuccessful = false;

    while ((currentTrying < retries) && !isSuccessful) {
        try {
            let result = await func();
            isSuccessful = true;
        } catch (error) {
            console.log(error)
        }
        finally {
            currentTrying += 1;
        }
    }

}

retry(getUserInfo, { retries: 3 });