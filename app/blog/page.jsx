import React from "react";

export const getData = async () => {
    const apiResponse = fetch(
        "https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=10"
    );
    return (await apiResponse).json();
};

export const News = async () => {
    const posts = await getData();
    console.log(posts);
    return <div></div>;
};

export default News;
