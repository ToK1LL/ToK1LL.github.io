for (i=38; i<73; i++) {
    // ゼロパディング
    var length = 3;
    var img_id = i.toString().padStart(length, '0');

    // img要素を作成
    var img_element = document.createElement('img');
    img_element.src = "img\\illust_img_" + img_id + ".gif"; // 画像パス
    img_element.id = img_id;
    img_element.onclick = function() {
        var source = document.getElementById("intro" + this.id);
        if (source.style.display == "none"){
            source.style.display = "";
        } else {
            source.style.display = "none";
        }
    };

    // 指定した要素にimg要素を挿入
    var content_area = document.getElementById("content_area");
    content_area.appendChild(img_element);

    // レシピを生成
    var intro_element = document.createElement('h2');
    intro_element.id = "intro" + img_id;
    intro_element.style = "display: none;";
    intro_element.textContent = "レシピ" + img_id;

    content_area.appendChild(intro_element);

    var intro_element2 = document.createElement('h3');
    intro_element2.textContent = "レシピの作り方をここに書く";

    intro_element.appendChild(intro_element2);
}