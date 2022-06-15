import NTUNHS from "./NTUNHS.jpg";

const Content = () => {
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

    var strippedHtml = html.replace(/<[^>]+>/g, "");
    var cleanText = strippedHtml.replace(/&nbsp;/g, "");
    const newContent = cleanText.substr(0, 200) + "......";
    const windowWidth = window.innerWidth;

    const postCover = (
        <img
            src={cover}
            id="Cover"
            style={{
                width: windowWidth / 2,
            }}
        />
    );

    return (
        <>
            <img
                src={NTUNHS}
                className="node-content"
                style={{ width: windowWidth }}
                alt="Snow"
            />

            <div
                className="Text"
                style={{
                    position: "absolute",
                    top: "50%",
                    transform: "translate(-0%, -50%)",
                    left: windowWidth / 1.7,
                    width: windowWidth / 2.6,
                }}
            >
                <p>
                    <b>
                        <font
                            style={{
                                fontSize: windowWidth / 35 + "px",
                                fontFamily: "標楷體",
                            }}
                            color="#000000"
                        >
                            {subject}
                        </font>
                    </b>
                </p>
                <p>-</p>
                <p>
                    <font
                        style={{
                            fontSize: windowWidth / 50 + "px",
                            fontFamily: "標楷體",
                        }}
                        color="#000000"
                    >
                        {newContent}
                    </font>
                </p>
            </div>

            <div
                className="image-overlay"
                style={{
                    position: "absolute",
                    top: "50%",
                    left: windowWidth / 17,
                    transform: "translate(-0%, -50%)",
                }}
            >
                {postCover}
            </div>
        </>
    );
};

export default Content;
