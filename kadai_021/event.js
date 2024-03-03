// textというidを持つHTML要素を取得し、定数に代入
const obj = document.getElementById('text');
// btnというidを持つHTML要素を取得し、定数に代入
const btn = document.getElementById('btn');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
    if (obj.textContent == "ボタンをクリックしてください") {
        setTimeout(() => {
            obj.textContent = "ボタンをクリックしました";
        }, 2000);
    } else {
        obj.textContent = "ボタンをクリックしてください";
    }
});