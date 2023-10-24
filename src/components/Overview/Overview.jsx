import React from "react";
import "./Overview.scss";
/* import Table from "./Table"; */

const Overview = () => {
  return (
    <div>
      <div className="overview">
        <div className="overview--left">
          <img src="/assets/profile.png" alt="profilepicture" />
          <div className="overview--left__names">
            <h2>Javier Azagra</h2>
            <h3>JaviiAzagra</h3>
            <p>Full Stack Developer Student</p>
          </div>
          <div className="overview--left__button">
            <button>Edit profile</button>
            <button>Sponsors dashboard</button>
          </div>
          <div className="overview--left__stats">
            <svg height="16" width="16">
              <path d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z"></path>
            </svg>
            <p>
              <span>9 </span>followers <span>·</span>
              <span> 10 </span>following
            </p>
          </div>
          <div className="overview--left__info">
            <a href="/">
              <svg
                class="octicon octicon-location"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path d="m12.596 11.596-3.535 3.536a1.5 1.5 0 0 1-2.122 0l-3.535-3.536a6.5 6.5 0 1 1 9.192-9.193 6.5 6.5 0 0 1 0 9.193Zm-1.06-8.132v-.001a5 5 0 1 0-7.072 7.072L8 14.07l3.536-3.534a5 5 0 0 0 0-7.072ZM8 9a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 9Z"></path>
              </svg>
              Spain
            </a>
            <a href="/">
              <svg
                class="octicon octicon-mail"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809v6.442Zm13-8.181v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88Z"></path>
              </svg>
              javiazagra12@gmail.com
            </a>
            <a href="https://javierazagra.com" rel="noreferrer" target="_blank">
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                class="octicon octicon-link"
              >
                <path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path>
              </svg>
              javierazagra.com
            </a>
            <a
              href="https://twitter.com/12jav1_"
              rel="noreferrer"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 273.5 222.3"
                role="img"
                aria-labelledby="a3mk638rl2hncdiqmkur5y6d84j0t330"
                class="octicon"
                width="16"
                height="16"
              >
                <path d="M273.5 26.3a109.77 109.77 0 0 1-32.2 8.8 56.07 56.07 0 0 0 24.7-31 113.39 113.39 0 0 1-35.7 13.6 56.1 56.1 0 0 0-97 38.4 54 54 0 0 0 1.5 12.8A159.68 159.68 0 0 1 19.1 10.3a56.12 56.12 0 0 0 17.4 74.9 56.06 56.06 0 0 1-25.4-7v.7a56.11 56.11 0 0 0 45 55 55.65 55.65 0 0 1-14.8 2 62.39 62.39 0 0 1-10.6-1 56.24 56.24 0 0 0 52.4 39 112.87 112.87 0 0 1-69.7 24 119 119 0 0 1-13.4-.8 158.83 158.83 0 0 0 86 25.2c103.2 0 159.6-85.5 159.6-159.6 0-2.4-.1-4.9-.2-7.3a114.25 114.25 0 0 0 28.1-29.1"></path>
              </svg>
              @12jav1_
            </a>
          </div>
          <div className="line"></div>
          <div className="overview--left__sponsors">
            <p>Sponsoring</p>
            <img
              src="https://avatars.githubusercontent.com/u/2492783?v=4"
              alt="sponsor"
            />
          </div>
          <div className="line"></div>
          <div className="overview--left__achievements">
            <p>Achievements</p>
            <img
              src="https://github.githubassets.com/images/modules/profile/achievements/public-sponsor-default.png"
              alt="sponsor"
            />
            <img
              src="https://github.githubassets.com/images/modules/profile/achievements/pair-extraordinaire-default.png"
              alt="extraordinaire"
            />
            <img
              src="https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png"
              alt="pullshark"
            />
            <img
              src="https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default--light.png"
              alt="quickdraw"
            />
            <img
              src="https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png"
              alt="yolo"
            />
            <div className="overview--left__achievements__beta">
              <p>Beta</p>
              <a href="/">Send feedback</a>
            </div>
          </div>
          <div className="line2"></div>
          <div className="overview--left__organizations">
            <p>Organizations</p>
            <img
              src="https://avatars.githubusercontent.com/u/147668326?s=64&v=4"
              alt="tkvil"
            />
          </div>
        </div>
        <div className="overview--right">
          <div className="overview--right__readmeprofile">
            <div></div>
            <p>
              JaviiAzagra <span>/ </span>README.<span>md</span>
            </p>
            <div className="overview--right__readmeprofile__imgs">
              <img
                src="https://img.shields.io/badge/github-%2312100E.svg?&style=for-the-badge&logo=github&logoColor=white&color=black"
                alt="profile"
                rel="noreferrer"
                target="_blank"
              />
              <img
                src="https://img.shields.io/badge/gitlab-%2312100E.svg?&style=for-the-badge&logo=gitlab&logoColor=white&color=9b51e0"
                alt="profile"
                rel="noreferrer"
                target="_blank"
              />
              <img
                src="https://img.shields.io/badge/instagram-%2312100E.svg?&style=for-the-badge&logo=instagram&color=405DE6"
                alt="profile"
                rel="noreferrer"
                target="_blank"
              />
              <img
                src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"
                alt="profile"
                rel="noreferrer"
                target="_blank"
              />
            </div>
            <div className="overview--right__readmeprofile__info">
              <ul>
                <li>
                  Checkout my{" "}
                  <a
                    href="https://javierazagra.com"
                    rel="noreferrer"
                    target="_blank"
                  >
                    portfolio
                  </a>{" "}
                  website!
                </li>
                <li>🏢 Software Engineer (Full Stack), in Madrid ESP</li>
                <li>
                  🧰 I build with: <span>JavaScript</span>, <span>React</span>,{" "}
                  <span>SCSS</span>, <span>Angular</span>, <span>Node</span> ...
                </li>
                <li>⚡ I enjoy travel, driving, sports, and programming ;)</li>
                <li>
                  📫 Reach out to me:{" "}
                  <a href="mailto:ejaviazagra12@gmail.com">
                    javiazagra12@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="overview--right__panels">
              <p align="center">
                <img
                  align="center"
                  src="https://github-readme-stats.vercel.app/api/top-langs?username=javiiazagra&theme=one_dark_pro&show_icons=true&locale=en&layout=compact"
                  alt="javiiazagra"
                />
              </p>
              <p align="center">
                <img
                  align="center"
                  src="https://github-readme-stats.vercel.app/api?username=javiiazagra&theme=one_dark_pro&show_icons=true&locale=en"
                  alt="javiiazagra"
                />
              </p>

              <p align="center">
                <img
                  align="center"
                  src="https://github-readme-streak-stats.herokuapp.com/?user=javiiazagra&theme=one_dark_pro"
                  alt="javiiazagra"
                />
              </p>

              <p align="center">
                <img
                  src="https://komarev.com/ghpvc/?username=javiiazagra&label=Profile%20views&color=0e75b6&style=flat"
                  alt="javiiazagra"
                />
              </p>
              <p align="left"></p>
            </div>
          </div>
          <div className="overview--right__pinned">
            <h2>Pinned</h2>
            <div className="overview--right__pinned__container">
              <div className="pinned">
                <div className="pinned--container">
                  <div className="pinned--container__title">
                    <svg
                      aria-hidden="true"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                      class="octicon octicon-repo mr-1 color-fg-muted"
                    >
                      <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                    </svg>
                    <p>Template-Node.js</p>
                    <span>Public</span>
                  </div>
                  <p className="pinned--container__info">
                    💎 A template node with cloudinary and authentication.
                  </p>
                  <p className="pinned--container__more">
                    <span className="javascript"></span>
                    <span>JavaScript</span>
                    <span>
                      <svg
                        aria-label="stars"
                        role="img"
                        height="16"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="16"
                        data-view-component="true"
                        class="octicon octicon-star"
                      >
                        <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
                      </svg>
                    </span>
                  </p>
                </div>
              </div>

              <div className="pinned">
                <div className="pinned--container">
                  <div className="pinned--container__title">
                    <svg
                      aria-hidden="true"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                      class="octicon octicon-repo mr-1 color-fg-muted"
                    >
                      <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                    </svg>
                    <p>javierazagra.com</p>
                    <span>Public</span>
                  </div>
                  <p className="pinned--container__info">
                    🙂 My personal website made using TypeScript, CSS, SCSS, and
                    deployed on Vercel.
                  </p>
                  <p className="pinned--container__more">
                    <span className="typescript"></span>
                    <span>TypeScript</span>
                    <span>
                      <svg
                        aria-label="stars"
                        role="img"
                        height="16"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="16"
                        data-view-component="true"
                        class="octicon octicon-star"
                      >
                        <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
                      </svg>
                    </span>
                  </p>
                </div>
              </div>

              <div className="pinned">
                <div className="pinned--container">
                  <div className="pinned--container__title">
                    <svg
                      aria-hidden="true"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                      class="octicon octicon-repo mr-1 color-fg-muted"
                    >
                      <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                    </svg>
                    <p>Porsche-Supercup</p>
                    <span>Public</span>
                  </div>
                  <p className="pinned--container__info">
                    🎮🏎️ A little Porsche Supercup game created with python
                  </p>
                  <p className="pinned--container__more">
                    <span className="python"></span>
                    <span>Python</span>
                    <span>
                      <svg
                        aria-label="stars"
                        role="img"
                        height="16"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="16"
                        data-view-component="true"
                        class="octicon octicon-star"
                      >
                        <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
                      </svg>
                    </span>
                  </p>
                </div>
              </div>

              <div className="pinned">
                <div className="pinned--container">
                  <div className="pinned--container__title">
                    <svg
                      aria-hidden="true"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                      class="octicon octicon-repo mr-1 color-fg-muted"
                    >
                      <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                    </svg>
                    <p>Four-Corners</p>
                    <span>Public</span>
                  </div>
                  <p className="pinned--container__info">
                    🏪 A sneaker and clothing store created with Angular.
                    Backend: https://github.com/JaviiAzagra/sneakers-backend
                  </p>
                  <p className="pinned--container__more">
                    <span className="typescript"></span>
                    <span>TypeScript</span>
                    <span>
                      <svg
                        aria-label="stars"
                        role="img"
                        height="16"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="16"
                        data-view-component="true"
                        class="octicon octicon-star"
                      >
                        <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
                      </svg>
                    </span>
                  </p>
                </div>
              </div>

              <div className="pinned">
                <div className="pinned--container">
                  <div className="pinned--container__title">
                    <svg
                      aria-hidden="true"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                      class="octicon octicon-repo mr-1 color-fg-muted"
                    >
                      <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                    </svg>
                    <p>BOT-DISCORD</p>
                    <span>Public</span>
                  </div>
                  <p className="pinned--container__info">
                    🤖 A discord bot with roles, music, tickets and admins
                    commands.
                  </p>
                  <p className="pinned--container__more">
                    <span className="javascript"></span>
                    <span>JavaScript</span>
                    <span>
                      <svg
                        aria-label="stars"
                        role="img"
                        height="16"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="16"
                        data-view-component="true"
                        class="octicon octicon-star"
                      >
                        <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
                      </svg>
                    </span>
                  </p>
                </div>
              </div>

              <div className="pinned">
                <div className="pinned--container">
                  <div className="pinned--container__title">
                    <svg
                      aria-hidden="true"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                      class="octicon octicon-repo mr-1 color-fg-muted"
                    >
                      <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                    </svg>
                    <p>Luxury-Cars-Angular-Project</p>
                    <span>Public</span>
                  </div>
                  <p className="pinned--container__info">
                    🚗 A luxury cars rental page created with Angular.
                  </p>
                  <p className="pinned--container__more">
                    <span className="typescript"></span>
                    <span>TypeScript</span>
                    <span>
                      <svg
                        aria-label="stars"
                        role="img"
                        height="16"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="16"
                        data-view-component="true"
                        class="octicon octicon-star"
                      >
                        <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
                      </svg>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="overview--right__table">{/* <Table /> */}</div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
