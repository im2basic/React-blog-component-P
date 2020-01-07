import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail
            author="Sam"
            timeAgo="Today at 4:45PM"
            comment="I am cool"
            avatar={faker.image.avatar()}
        />
            <ApprovalCard />
            <CommentDetail
            author="Alex"
            timeAgo="Today at 6:20PM"
            comment="Are you really?"
            avatar={faker.image.avatar()}
        />
        <CommentDetail
            author="James"
            timeAgo="Yesterday at 2:20PM"
            comment="You're really not cool bro"
            avatar={faker.image.avatar()}
        />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));
