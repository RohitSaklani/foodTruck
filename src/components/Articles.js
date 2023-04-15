import { useState } from "react";
import "../styles/articles.css";
import { useEffect } from "react";

const intitalData = [
  {
    title: "Grilled  Tomatoes at Home",
    img: "/article-img1.png",
    content:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
  {
    title: "Snacks for Travel",
    img: "/article-img2.png",
    content:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
  {
    title: "Post-workout Recipes",
    img: "/article-img3.png",
    content:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
  {
    title: "How To Grill Corn",
    img: "/article-img4.png",
    content:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
  {
    title: "Crunchwrap Supreme",
    img: "/article-img5.png",
    content:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
  {
    title: "Broccoli Cheese Soup",
    img: "/article-img6.png",
    content:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
];

const pageLen = 3;

function Articles() {
  const [data, setData] = useState([]);

  const [page, setPage] = useState(1);

  useEffect(() => {
    const temp = intitalData.slice((page - 1) * 3, page * 3);
    setData(temp);
  }, [page]);

  return (
    <section className="articles">
      <h2>Latest Articles</h2>
      <div className="article-container">
        {data.map((ele) => {
          return (
            <div className="article-card">
              <div className="article-img">
                <img src={`/assets${ele.img}`} />
              </div>
              <div className="article-card-content">
                <h4>{ele.title}</h4>
                <p>{ele.content}</p>
                <button className="secondary-button">Read More</button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="articles-nav">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page < 2 ? true : false}
        >
          &#60;
        </button>
        <span>
          {page}/{intitalData.length / 3}
        </span>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page > intitalData.length / 3 - 1 ? true : false}
        >
          &#62;
        </button>
      </div>
    </section>
  );
}

export default Articles;
