import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import './home.css'
const Home = () => {
  const [news, setNews] = useState([]);
  const [latestNews, setLatestNews] = useState([]);
  const [breakingNews, setBreakingNews] = useState(null);
  const [trendingNews, setTrendingNews] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);
  const hotTopicsStatic = [
  { category: "Politics" },
  { category: "Business" },
  { category: "Technology" },
  { category: "Health" },
  { category: "Entertainment" },
  { category: "Sports" },
  { category: "Science" },
  { category: "World" },
];

const { category } = useParams();

  useEffect(() => {
  const fetchNews = async () => {
    try {

      let url;

      if (!category || category === "pakistan") {
        url = `https://gnews.io/api/v4/top-headlines?country=pk&lang=en&max=50&token=bd6f02737212e52328f38fc5ed183ba5`;
      }

      else if (category === "world") {
        url = `https://gnews.io/api/v4/top-headlines?lang=en&max=50&token=bd6f02737212e52328f38fc5ed183ba5`;
      }

      else {
        url = `https://gnews.io/api/v4/top-headlines?country=pk&topic=${category}&lang=en&max=50&token=bd6f02737212e52328f38fc5ed183ba5`;
      }

      const res = await fetch(url);
      const data = await res.json();

      const formatted = (data.articles || []).map(article => ({
        title: article.title,
        overview: article.description,
        img: article.image,
        date: article.publishedAt,
        category: category ? category : "General",
        tag: article.source?.name || "Unknown",
        url: article.url
      }));

      const sorted = formatted.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );

      // Homepage extra sections only when no category
      if (!category) {
        setBreakingNews(sorted[0]);
        setLatestNews(sorted.slice(1, 3));
        setTrendingNews(sorted.slice(0, 5));
      }
       
      setNews(sorted);

    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  fetchNews();

}, [category]);

return (
  <div className="App">
    <Navbar />

    <div className=" homepage container mt-4">
      <div className="row">

        {/* LEFT SIDE - col-lg-8 */}
        <div className="col-lg-8">

         
          {breakingNews && (
            <>
              <h2 className="mb-3">Breaking News</h2>

              <div className="card mb-4 shadow-sm">
                <img
                  src={breakingNews.img || "https://via.placeholder.com/400x250"}
                  className="card-img-top"
                  alt={breakingNews.title}
                />
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="badge bg-danger">{breakingNews.category}</span>
                    <small className="text-muted">{breakingNews.tag}</small>
                  </div>

                  <h5 className="card-title">{breakingNews.title}</h5>
                  <p className="card-text">{breakingNews.overview}</p>
                  <small className="text-muted">
                    {new Date(breakingNews.date).toLocaleString()}
                  </small>

                  <div className="mt-2">
                    <a href={breakingNews.url} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}

          
          <h2 className="mb-3">Latest News</h2>
          <div className="row">
            {latestNews.map((item, i) => (
              <div key={i} className="col-md-6 mb-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src={item.img || "https://via.placeholder.com/300x200"}
                    className="card-img-top"
                    alt={item.title}
                  />
                  <div className="card-body">
                    <span className="badge bg-primary">{item.category}</span>
                    <h6 className="mt-2">{item.title}</h6>
                    <p className="small">{item.overview}</p>
                    <small className="text-muted">
                      {new Date(item.date).toLocaleDateString()}
                    </small>
                  </div>
                </div>
              </div>
            ))}

          </div>

          <div className="row">
  {news.slice(0, visibleCount).map((item, i) => (
    <div key={i} className="col-12 mb-4">
      <div className="card shadow-sm">
        <div className="row g-0 align-items-center">

          {/* Image Left */}
          <div className="col-md-4">
            <img
              src={item.img || "https://via.placeholder.com/400x250"}
              className="img-fluid rounded-start h-100"
              style={{ objectFit: "cover" }}
              alt={item.title}
            />
          </div>

          {/* Content Right */}
          <div className="col-md-8">
            <div className="card-body">

              <div className="d-flex justify-content-between mb-2">
                <span className="badge bg-dark">
                  {item.category}
                </span>
                <small className="text-muted">
                  {item.tag}
                </small>
              </div>

              <h5 className="card-title">{item.title}</h5>

              <p className="card-text">
                {item.overview}
              </p>

              <p className="card-text">
                <small className="text-muted">
                  {new Date(item.date).toLocaleString()}
                </small>
              </p>

              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-dark btn-sm"
              >
                Read More →
              </a>

            </div>
          </div>

        </div>
      </div>
    </div>
  ))}
  {visibleCount < news.length && (
  <div className="text-center mb-4">
    <button
      className="btn btn-dark"
      onClick={() => setVisibleCount(prev => prev + 10)}
    >
      Load More News
    </button>
  </div>
)}
</div>

        </div>

        {/* RIGHT SIDE - col-lg-4 */}
        <div className="col-lg-4">

        
          <h4 className="mt-4 mb-3">Trending Topics</h4>
          {trendingNews.map((item, index) => (
            <div key={index} className="card mb-3 p-3 shadow-sm trending">
              <span className="badge bg-danger text-light">{item.category}</span>
              <h6 className="mt-2">{item.title}</h6>
              <small className="text-muted">
                {new Date(item.date).toLocaleTimeString()}
              </small>
            </div>
          ))}

        <div className="col-lg-4">
  <h4 className="mt-4 mb-3">Hot Topics</h4>
  
  <div className="hot-topics"> 
    {hotTopicsStatic.map((item, index) => (
      <span key={index} className="badge">
        {item.category}
      </span>
    ))}
  </div>
</div>

        </div>

      </div>
    </div>

    <Footer />
  </div>
);

}

export default Home; 
