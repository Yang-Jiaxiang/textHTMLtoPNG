import React from "react";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import "./App.css";
import Content from "./Content";
// 过滤掉所有<i>元素
function filter(node) {
    return node.tagName !== "i";
}
const App = () => {
    const id = "1949";
    const subject = "北護大舉行講座教授、特聘教授聘書頒授典禮";
    const html = `<p class="ql-align-center"><img src="../public/image/219s310r.jpg" alt=""></p><p><br></p><p><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;國立臺北護理健康大學為提升本校研究水準及學術地位，110學年度第2學期聘任謝楠楨校長擔任講座教授。謝校長在履任八年(102-110)&nbsp;&nbsp;期間積極推動各項校務發展，以「多元創新，體制再造，教學卓越，北護躍昇」的治校理念，與「合作、利他、關懷」行政團隊精神帶領北護大，積極深化紮根與拓展本校國際影響力，讓校務發展蒸蒸日上，為本校貢獻良多。<br&nbsp;&nbsp;/>
    <br&nbsp;&nbsp;/>
    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;謝校長擁有資訊工程專業背景，是本校創校66年以來首位男性身分與非護理出身的校長，履任期間為打造學生更優良的教學環境，成立全國首創「大健康產業創新研究中心」使本校走在全國健康照護領域的前鋒；成立「健康照護產學合作中心」以推動全國高中至大專的長照教育；配合政府新南向政策成立「台印健康教育中心」；建置「高齡精準照護人才培育基地」以及全國首創的「高齡健康照護及物聯網示範教室」、「生命轉化REACH諮商輔導專業教室」及「長期照護健康科技實務中心」等多元建設；期間更與校內同仁決定投資近20億台幣，興建學生宿舍大樓(爾雅樓)與教學研究大樓(學思樓)，為近30年來最大規模建設，大幅提升師生教學及生活品質。<br&nbsp;&nbsp;/>
    <br&nbsp;&nbsp;/>
    <br&nbsp;&nbsp;/>
    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▲&nbsp;&nbsp;謝楠楨校長獲聘為講座教授</p><p><br></p><p class="ql-align-center"><img src="../public/image/219s2.jpg" alt=""></p><p><br></p><p>▲&nbsp;&nbsp;謝楠楨校長於學思樓與爾雅樓啟用典禮致詞。<br&nbsp;&nbsp;/>
    <br&nbsp;&nbsp;/>
    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;良好優質的學習環境讓本校辦學表現卓越，畢業就業率、護理師考照率皆為全國第一，護理師考照通過率長年在90％以上名列全國前茅、109年聽力師考照通過率高達100%，1111人力銀行「雇主最滿意大學」調查中，本校已連續6年獲得雇主最滿意大學第一名；國際表現亦出色，109年榮獲QS&nbsp;&nbsp;Stars&nbsp;&nbsp;5星滿級殊榮，以及108-110連續三年獲軟科世界一流學科排名(ARWU)&nbsp;&nbsp;醫學-護理學科進入全球百大，並於104、106、108、110年獲指定為APEC參訪團蒞校參觀之重點學校，足證本校在學術和校務發展皆獲得國際肯定。<br&nbsp;&nbsp;/>
    <br&nbsp;&nbsp;/>
    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;謝校長曾多次在公開場合表示：「以北護大校友身份，終生為北護奉獻服務。」，憶起服務校務行政近20年時間，學校有了巨幅改變，謝校長更榮任8年北護校長，能為校進一步貢獻，使北護有了一番新的局面；謝校長亦表示，在近年在少子化衝擊下，北護大更是少數學生逆勢成長的學校，成就有目共睹，也祝福未來校運昌隆。</p><p><br></p>`;
    const cover =
        "http://localhost:3090/image/7d1ffb2ca38ad40e0b4987ea3cc0f5ad.jpg";
    // 转为png格式的图片
    const getImg = () => {
        const node = document.getElementById("node");

        domtoimage
            .toPng(node)
            .then((defaultUrl) => {
                const img = new Image();
                img.src = defaultUrl;
                img.setAttribute("className", "pngImg"); // 方便设置样式
                // 将生成的png图片插入到当前页面
                document.getElementById("export-img").appendChild(img);
                // 手动点击图片下载 自动下载调用saveAs(defaultUrl, '自动保存.png')
                img.addEventListener("click", () => {
                    var link = document.createElement("a");
                    link.download = "古诗词.png";
                    link.href = defaultUrl;
                    link.click();
                });
            })
            .catch(() => {
                console.log("error");
            });
    };
    // 生成图片自动下载为png格式（将dom转为二进制再编译下载）
    const getBlobPng = () => {
        const node = document.getElementById("node");
        domtoimage.toBlob(node).then((blob) => {
            // 调用file-save方法 直接保存图片
            saveAs(blob, id);
        });
    };
    // 转为Jpeg图片  --- 手动下载（自动下载调用saveAs(defaultUrl, '自动保存.png'))
    const getJpeg = () => {
        const node = document.getElementById("node");
        domtoimage.toJpeg(node, { quality: 0.95 }).then((defaultUrl) => {
            var link = document.createElement("a");
            link.download = "下载jpeg.jpeg";
            link.href = defaultUrl;
            link.click();
        });
    };
    // 转为SVG图片---手动下载 （自动下载调用saveAs(defaultUrl, '自动保存.png'))
    const getSVG = () => {
        const node = document.getElementById("node");
        domtoimage.toSvg(node, { filter: filter }).then((defaultUrl) => {
            const img = new Image();
            img.src = defaultUrl;
            img.setAttribute("className", "svgImg");
            document.getElementById("export-img").appendChild(img);
            img.addEventListener("click", () => {
                var link = document.createElement("a");
                link.download = "SVG";
                link.href = defaultUrl;
                link.click();
            });
        });
    };
    return (
        <div className="dom-to-img">
            <div className="my-actions">
                <button onClick={getImg} className="action">
                    转为png图片
                </button>
                <button onClick={getBlobPng} className="action">
                    自动保存png
                </button>
                <button onClick={getJpeg} className="action">
                    自动保存jpeg
                </button>
                <button onClick={getSVG} className="action">
                    转为svg图片
                </button>
            </div>

            <div
                id="node"
                className="node-content"
            >
                <Content subject={subject} html={html} cover={cover}/>
            </div>

            <div id="export-img" className="my-image "></div>
        </div>
    );
};

export default App;
