import React from "react";
import Client from "../components/Client/Client";
import Content from "../components/Content/Content";
import Feature from "../components/Feature/Feature";
import LogoWrapper from "../components/LogoWrapper/LogoWrapper";
import Style from "../components/Style/Style";
import ContentData from "../data/ContentData";
import ContentData1 from "../data/ContentData1";
import ContentData2 from "../data/ContentData2";
import ContentData3 from "../data/ContentData3";
import ContentData4 from "../data/ContentData4";
import ContentData5 from "../data/ContentData5";
import FeatureData from "../data/FeatureData";
import FeatureData1 from "../data/FeatureData1";
import VideoContainer from "../components/VideoContainer";

const Home = () => {
    return (
        <>
            <VideoContainer />
            <LogoWrapper />
            <Content {...ContentData} />
            <Client />
            <Content {...ContentData1} />
            <Content {...ContentData2} />
            <Content {...ContentData3} />
            <Content {...ContentData4} />
            <Content {...ContentData5} />
            <Feature {...FeatureData} />
            <Style />
            <Feature {...FeatureData1} />
        </>
    );

}

export default Home;