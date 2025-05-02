import React, { useEffect, useState } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header />
      <HomeBanner />
      <SideBar pathname='/' />
      <Footer />
    </div>
  );
};

function HomeBanner() {
  return (
    <>
      <div className="uk-container">
        <div
          className="uk-border-rounded-large uk-background-top-center uk-background-cover 
    uk-background-norepeat uk-light uk-inline uk-overflow-hidden uk-width-1-1"
          style={{ backgroundImage: "url(img/header.jpg)" }}
        >
          <div className="uk-position-cover uk-header-overlay" />
          <div className="uk-position-relative" data-uk-grid>
            <div className="uk-width-1-2@m uk-flex uk-flex-middle">
              <div className="uk-padding-large uk-padding-remove-right">
                <h1 className="uk-heading-small uk-margin-remove-top">
                  Choose from thousands of recipes
                </h1>
                <p className="uk-text-secondary">
                  Appropriately integrate technically sound value with scalable
                  infomediaries negotiate sustainable strategic theme areas
                </p>
                <a
                  className="uk-text-secondary uk-text-600 uk-text-small hvr-forward"
                  href="sign-up.html"
                >
                  Sign up today
                  <span
                    className="uk-margin-small-left"
                    data-uk-icon="arrow-right"
                  />
                </a>
              </div>
            </div>
            <div className="uk-width-expand@m" />
          </div>
        </div>
      </div>
    </>
  );
}

export function SideBar(props) {
  const navigate=useNavigate();
  return (
    <>
      <div className="uk-section uk-section-default">
        <div className="uk-container">
          <div data-uk-grid>
            <div className="uk-width-1-4@m sticky-container">
              <div data-uk-sticky="offset: 100; bottom: true; media: @m;">
                <h2>Recipes</h2>
                <ul
                  className="uk-nav-default uk-nav-parent-icon uk-nav-filter uk-margin-medium-top"
                  data-uk-nav
                >
                  <li className="uk-parent">
                    <a href="#">Meal Type</a>
                    <ul className="uk-nav-sub">
                      <li>
                        <a onClick={() => navigate(`${props.pathname}snacks`)}>
                          Snacks
                        </a>
                      </li>
                      <li>
                        <a onClick={() => navigate(`${props.pathname}dinner`)}>
                          Dinner
                        </a>
                      </li>
                      <li>
                        <a onClick={() => navigate(`${props.pathname}lunch`)}>
                          Lunch
                        </a>
                      </li>
                      <li>
                        <a onClick={() => navigate(`${props.pathname}dessert`)}>
                          Dessert
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <RecipeCard />
          </div>
        </div>
      </div>
    </>
  );
}

function RecipeCard() {
  // define state  to store api data
  const [data, setData] = useState([]);
  const {mealname}=useParams();
  // define use navigate
  const navigate = useNavigate();
  // function to fetch api function
  const fetchData = () => {
    let url = "https://dummyjson.com/recipes";
    if(mealname){
      url = `${url}/meal-type/${mealname}`
    }
    fetch(url)
      .then((res) => res.json())
      .then((a) => setData(a.recipes));
  };
  useEffect(() => fetchData(), [mealname]);
  console.log(data);
  return (
    <>
      <div className="uk-width-expand@m">
        <div data-uk-grid>
          <div className="uk-width-expand@m">
            <form className="uk-search uk-search-default uk-width-1-1">
              <span data-uk-search-icon />
              <input
                className="uk-search-input uk-text-small uk-border-rounded uk-form-large"
                type="search"
                placeholder="Search for recipes..."
              />
            </form>
          </div>
          <div className="uk-width-1-3@m uk-text-right@m uk-light">
            <select className="uk-select uk-select-light uk-width-auto uk-border-pill uk-select-primary">
              <option>Sort by: Latest</option>
              <option>Sort by: Top Rated</option>
              <option>Sort by: Trending</option>
            </select>
          </div>
        </div>
        <div className="uk-child-width-1-2 uk-child-width-1-3@s" data-uk-grid>
          {data.map((element, index) => {
            return (
              <>
                <div>
                  <div key={index} className="uk-card">
                    <div className="uk-card-media-top uk-inline uk-light">
                      <img
                        className="uk-border-rounded-medium"
                        src={element.image}
                        alt="Course Title"
                      />
                      <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium" />
                      <div className="uk-position-xsmall uk-position-top-right">
                        <a
                          href="#"
                          className="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                          data-uk-icon="heart"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">
                        {element.name}
                      </h3>
                      <div
                        className="uk-text-xsmall uk-text-muted"
                        data-uk-grid
                      >
                        <div className="uk-width-auto uk-flex uk-flex-middle">
                          <span
                            className="uk-rating-filled"
                            data-uk-icon="icon: star; ratio: 0.7"
                          />
                          <span className="uk-margin-xsmall-left">
                            {element.rating}
                          </span>
                          <span>({element.reviewCount})</span>
                        </div>
                        <div className="uk-width-expand uk-text-right">
                          by John Keller
                        </div>
                      </div>
                    </div>
                    <a
                      onClick={() => navigate(`/Recepie/${element.id}`)}
                      className="uk-position-cover"
                    />
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="uk-margin-large-top uk-text-small">
          <ul
            className="uk-pagination uk-flex-center uk-text-500 uk-margin-remove"
            data-uk-margin
          >
            <li>
              <a href="#">
                <span data-uk-pagination-previous />
              </a>
            </li>
            <li>
              <a href="#">1</a>
            </li>
            <li className="uk-active">
              <span>2</span>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li>
              <a href="#">4</a>
            </li>
            <li>
              <a href="#">
                <span data-uk-pagination-next />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;
