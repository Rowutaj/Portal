import {DATE_OPTION} from "./options.js";
import {addImage, addNewsLinkClick, addStatistic, addTag} from "./helpers.js";



export default {
    id: "main-news-container",
    configCardNode
};

export function configCardNode(node, oneNews){
    const {id, tag, date, title, description, commentsCount, likesCount, img} = oneNews;
    node.style.display = "block";
    addNewsLinkClick(node.children[0], id);
    addImage(node.children[0], img);
    addInfo(node.children[1], tag, date, commentsCount, likesCount);
    addNewsLinkClick(node.children[2], id);
    addTextContent(node.children[2], title, description);
}



function addTextContent(node, title, description){
    node.children[0].innerText = title;
    node.children[1].innerText = description;
}



function addInfo(node, tag, date, commentsCount, likesCount){
    addTag(node.children[0]);
    node.children[1].innerText = date.toLocaleString('ru', DATE_OPTION);
    addStatistic(node.children[2]);
}