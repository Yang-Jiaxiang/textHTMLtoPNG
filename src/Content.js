import NTUNHS from "./NTUNHS.jpg";

const Content = (props) => {
    

    var strippedHtml = props.html.replace(/<[^>]+>/g, "");
    var cleanText = strippedHtml.replace(/&nbsp;/g, "");
    const newContent = cleanText.substr(0, 200) + "......";
    const windowWidth = window.innerWidth;

    const postCover = (
        <img
            src={props.cover}
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
                            {props.subject}
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
