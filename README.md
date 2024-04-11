# homework-17
## HW17 - "Async/await"

Потрібно написати функцію `retry`, яка приймає два параметри: асинхронну функцію, яку викликатиме і кількість спроб.

Якщо під час виклику передана функція кидає помилку, вона викликається повторно, але не більше ніж задана кількість разів у другому параметрі.

Приклад коду:
```
const getUserInfo = async () => {
  const response = await fetch('/api/for/user');
  const userInfo = await response.json();

  return userInfo;
}

retry(getUserInfo, { retries: 3 });
```
