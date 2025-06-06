import React from 'react'

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
export default Footer
