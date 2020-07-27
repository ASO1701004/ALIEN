// function model_select(){
//     //何をチェックしているかの情報を取得
//     //radioボタンのvalue値を取得している
//     let value = $("input[name='model']:checked").val();
//     //オーバーレイとキャラ選択画面をフェードアウト
//     $(".overlay-all").fadeOut();
// }

let roomId = getParam();
document.getElementById("roomid").value = roomId;

//URLのGETパラメータを取得
function getParam(){
    let params = (new URL(document.location)).searchParams;
    let roomId = params.get('roomid');
    return roomId;
}