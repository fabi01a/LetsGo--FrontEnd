import React, { useState } from "react";
import Heart from "react-animated-heart";

const HeartLike = () =>  {
    const [isClick, setClick] = useState(false);

    return (
        <div id="heart">
            <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
        </div>
    );
}

export default HeartLike;