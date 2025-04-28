import React, { useEffect, useState } from "react";
import Header from "../Common/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <HomeBanner />
      <SideBar />
      <Footer/>
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

function SideBar() {
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
                  <li className="uk-parent uk-open">
                    <a href="#">Dish Type</a>
                    <ul className="uk-nav-sub">
                      <li>
                        <a href="#">Appetizers &amp; Snacks</a>
                      </li>
                      <li>
                        <a href="#">Bread Recipes</a>
                      </li>
                      <li>
                        <a href="#">Cake Recipes</a>
                      </li>
                      <li>
                        <a href="#">Candy and Fudge</a>
                      </li>
                      <li>
                        <a href="#">Casserole Recipes</a>
                      </li>
                      <li>
                        <a href="#">Christmas Cookies</a>
                      </li>
                      <li>
                        <a href="#">Cocktail Recipes</a>
                      </li>
                      <li>
                        <a href="#">Main Dishes</a>
                      </li>
                      <li>
                        <a href="#">Pasta Recipes</a>
                      </li>
                      <li>
                        <a href="#">Pie Recipes</a>
                      </li>
                      <li>
                        <a href="#">Sandwiches</a>
                      </li>
                    </ul>
                  </li>
                  <li className="uk-parent">
                    <a href="#">Meal Type</a>
                    <ul className="uk-nav-sub">
                      <li>
                        <a href="#">Breakfast and Brunch</a>
                      </li>
                      <li>
                        <a href="#">Desserts</a>
                      </li>
                      <li>
                        <a href="#">Dinners</a>
                      </li>
                      <li>
                        <a href="#">Lunch</a>
                      </li>
                    </ul>
                  </li>
                  <li className="uk-parent">
                    <a href="#">Diet and Health</a>
                    <ul className="uk-nav-sub">
                      <li>
                        <a href="#">Diabetic</a>
                      </li>
                      <li>
                        <a href="#">Gluten Free</a>
                      </li>
                      <li>
                        <a href="#">High Fiber Recipes</a>
                      </li>
                      <li>
                        <a href="#">Low Calorie</a>
                      </li>
                    </ul>
                  </li>
                  <li className="uk-parent">
                    <a href="#">World Cuisine</a>
                    <ul className="uk-nav-sub">
                      <li>
                        <a href="#">Chinese</a>
                      </li>
                      <li>
                        <a href="#">Indian</a>
                      </li>
                      <li>
                        <a href="#">Italian</a>
                      </li>
                      <li>
                        <a href="#">Mexican</a>
                      </li>
                    </ul>
                  </li>
                  <li className="uk-parent">
                    <a href="#">Seasonal</a>
                    <ul className="uk-nav-sub">
                      <li>
                        <a href="#">Baby Shower</a>
                      </li>
                      <li>
                        <a href="#">Birthday</a>
                      </li>
                      <li>
                        <a href="#">Christmas</a>
                      </li>
                      <li>
                        <a href="#">Halloween</a>
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
  // function to fetch api function
  const fetchData = () => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((a) => setData(a.recipes));
  };
  useEffect(() => fetchData(), []);
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
                    <a href="recipe.html" className="uk-position-cover" />
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

function Footer() {
  return (
    <>
      <footer class="uk-section uk-section-default">
        <div class="uk-container uk-text-secondary uk-text-500">
          <div class="uk-child-width-1-2@s" data-uk-grid>
            <div>
              <a href="#" class="uk-logo">
                Kocina
              </a>
            </div>
            <div class="uk-flex uk-flex-middle uk-flex-right@s">
              <div data-uk-grid class="uk-child-width-auto uk-grid-small">
                <div>
                  <a
                    href="https://www.facebook.com/"
                    data-uk-icon="icon: facebook; ratio: 0.8"
                    class="uk-icon-button facebook"
                    target="_blank"
                  ></a>
                </div>
                <div>
                  <a
                    href="https://www.instagram.com/"
                    data-uk-icon="icon: instagram; ratio: 0.8"
                    class="uk-icon-button instagram"
                    target="_blank"
                  ></a>
                </div>
                <div>
                  <a
                    href="mailto:info@blacompany.com"
                    data-uk-icon="icon: twitter; ratio: 0.8"
                    class="uk-icon-button twitter"
                    target="_blank"
                  ></a>
                </div>
              </div>
            </div>
          </div>
          <div class="uk-child-width-1-2@s uk-child-width-1-4@m" data-uk-grid>
            <div>
              <ul class="uk-list uk-text-small">
                <li>
                  <a class="uk-link-text" href="#">
                    Presentations
                  </a>
                </li>
                <li>
                  <a class="uk-link-text" href="#">
                    Professionals
                  </a>
                </li>
                <li>
                  <a class="uk-link-text" href="#">
                    Stores
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul class="uk-list uk-text-small">
                <li>
                  <a class="uk-link-text" href="#">
                    Webinars
                  </a>
                </li>
                <li>
                  <a class="uk-link-text" href="#">
                    Workshops
                  </a>
                </li>
                <li>
                  <a class="uk-link-text" href="#">
                    Local Meetups
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul class="uk-list uk-text-small">
                <li>
                  <a class="uk-link-text" href="#">
                    Our Initiatives
                  </a>
                </li>
                <li>
                  <a class="uk-link-text" href="#">
                    Giving Back
                  </a>
                </li>
                <li>
                  <a class="uk-link-text" href="#">
                    Communities
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul class="uk-list uk-text-small">
                <li>
                  <a class="uk-link-text" href="#">
                    Contact Form
                  </a>
                </li>
                <li>
                  <a class="uk-link-text" href="#">
                    Work With Us
                  </a>
                </li>
                <li>
                  <a class="uk-link-text" href="#">
                    Visit Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="uk-margin-medium-top uk-text-small uk-text-muted">
            <div>
              Made by{" "}
              <a
                class="uk-link-muted"
                href="https://unbound.studio/"
                target="_blank"
              >
                Unbound Studio
              </a>{" "}
              in Guatemala City.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
