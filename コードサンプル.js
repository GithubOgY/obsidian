// JavaScriptコードサンプル
// Obsidianでコードファイルも閲覧できます

/**
 * 数値を2倍にする関数
 * @param {number} num - 対象の数値
 * @returns {number} 2倍された数値
 */
function doubleNumber(num) {
    return num * 2;
}

/**
 * 配列の要素を全て2倍にする関数
 * @param {number[]} arr - 数値配列
 * @returns {number[]} 各要素が2倍された配列
 */
function doubleArray(arr) {
    return arr.map(doubleNumber);
}

// 使用例
const numbers = [1, 2, 3, 4, 5];
const doubled = doubleArray(numbers);
console.log(`元の配列: ${numbers}`);
console.log(`2倍後: ${doubled}`);

// ES6のアロー関数版
const doubleNumberArrow = (num) => num * 2;
const doubleArrayArrow = (arr) => arr.map(doubleNumberArrow);

// 非同期処理の例
async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('データの取得に失敗しました:', error);
        throw error;
    }
}