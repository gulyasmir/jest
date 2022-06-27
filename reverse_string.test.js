const reverseString = require('./task/task_01');
/*
test(
    'Проверяем реверс строки',
    () => {
        expect(reverseString('hello www')).toBe('www olleh');
    }
);
*/

describe(
    "me test",
    () => {
        const testCase = [
            {
                inString:'hello',
                expected: 'olleh'
            },
            {
                inString:'blin ha',
                expected: 'ah nilb'
            },
            {
                inString:'hello1',
                expected: '1olleh'
            },
            {
                inString:'hello3',
                expected: '3olleh'
            }
        ];
        testCase.forEach(test => {
            it(
                `Enter string : ${test.inString} expect: ${test.expected}`,
                () => {
                    const res = reverseString(test.inString);
                    expect(res).toBe(test.expected);
                }
            )
        })
    }
    )