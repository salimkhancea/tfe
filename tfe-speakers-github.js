/**
 * The Flex Executive Summit 2026 — Speaker Component
 * GitHub file: tfe-speakers-github.js
 *
 * GoDaddy embed:
 * <div id="tfe-speakers-root"></div>
 * <script src="https://cdn.jsdelivr.net/gh/salimkhancea/tfe@main/tfe-speakers-github.js?v=20260914-5" defer></script>
 */

(() => {
  "use strict";

  const root = document.getElementById("tfe-speakers-root");
  if (!root) return;

  const CFG = {
    bioUrl:
      "https://raw.githubusercontent.com/salimkhancea/tfe/main/tfespeakers.json",

    ticketUrl:
      "https://theflexexecutive.com/registration-specialoffer",

    venueUrl:
      "https://www.millenniumhotels.com/en/singapore/grand-copthorne-waterfront"
  };


  /* =========================================================
     SPEAKERS
     ========================================================= */

  const speakers = [

    {
      id: "tracey-campbell",
      name: "Tracey Campbell",
      title: "Senior Vice President, LyondellBasell",
      image:
        "https://img1.wsimg.com/isteam/ip/69f464fa-0f03-4140-9b35-09ebe8220179/Tracey_web.webp",
      eager: true
    },

    {
      id: "emily-poon",
      name: "Emily Poon",
      title: "CEO, Singapore Institute of Directors",
      image:
        "https://img1.wsimg.com/isteam/ip/69f464fa-0f03-4140-9b35-09ebe8220179/Emily_Poon_web.webp",
      eager: true
    },

    {
      id: "shine-ding",
      name: "Shine Ding",
      title: "Partner, Egon Zehnder Singapore",
      image:
        "https://img1.wsimg.com/isteam/ip/69f464fa-0f03-4140-9b35-09ebe8220179/ShineDingNew_Web.webp",
      eager: true
    },

    {
      id: "tanvi-gautam",
      name: "Dr. Tanvi Gautam",
      title:
        "Sr. Faculty and Program Director Singapore Management University",
      image:
        "https://img1.wsimg.com/isteam/ip/69f464fa-0f03-4140-9b35-09ebe8220179/TanviGautam_web.webp",
      eager: true
    },

    {
      id: "jacob-duer",
      name: "Jacob Duer",
      title:
        "President & CEO, Alliance to End Plastic Waste",
      image:
        "https://img1.wsimg.com/isteam/ip/69f464fa-0f03-4140-9b35-09ebe8220179/Jacob_New_Web-2.webp"
    },

    {
      id: "virginia-cha",
      name: "Virginia Cha",
      title:
        "Adjunct Professor, National University of Singapore",
      image:
        "https://img1.wsimg.com/isteam/ip/69f464fa-0f03-4140-9b35-09ebe8220179/Virginia_Cha_Web-7f9ee06.webp",
      eager: true
    },

    {
      id: "kanchana-gupta",
      name: "Kanchana Gupta",
      title:
        "Founder & CEO, vLookUp",
      image:
        "https://img1.wsimg.com/isteam/ip/69f464fa-0f03-4140-9b35-09ebe8220179/Kanchana_Gupta_Web-d3d68b4.webp",
      eager: true
    },

    {
      id: "david-clark",
      name: "David Clark",
      title:
        "Chief Sustainability Officer, Amcor",
      image:
        "https://img1.wsimg.com/isteam/ip/69f464fa-0f03-4140-9b35-09ebe8220179/David_CV_Web.webp",
      eager: true
    },

    {
      id: "su-yen-wong",
      name: "Su-Yen Wong",
      title:
        "Chairperson, James Cook University Singapore & Independent Director",
      image:
        "https://img1.wsimg.com/isteam/ip/69f464fa-0f03-4140-9b35-09ebe8220179/Su_Yen_web.webp",
      eager: true
    },

    {
      id: "bassam-salem",
      name: "Bassam Salem",
      title:
        "Chairman, Finance & Banking Council, SwissChamHK",
      image:
        "https://img1.wsimg.com/isteam/ip/69f464fa-0f03-4140-9b35-09ebe8220179/bassam%20salem1-web.webp"
    },

    {
      id: "soorya-themudu",
      name: "Soorya Themudu",
      title:
        "SVP Global Talent & Development, Sodexo",
      image:
        "https://img1.wsimg.com/isteam/ip/69f464fa-0f03-4140-9b35-09ebe8220179/Soorya_Web.webp",
      eager: true
    },

    {
      id: "dn-prasad",
      name: "DN Prasad",
      title:
        "MD & Head – Work & Rewards, Singapore, WTW",
      image:
        "https://img1.wsimg.com/isteam/ip/69f464fa-0f03-4140-9b35-09ebe8220179/DN_Prasad_Web.webp",
      eager: true
    },

    {
      id: "brandon-lee",
      name: "Brandon Lee",
      title:
        "Chief Futures, Skills & Workforce Development Agency (SWDA)",
      image:
        "https://img1.wsimg.com/isteam/ip/69f464fa-0f03-4140-9b35-09ebe8220179/Brandon_Lee_Web.webp",
      eager: true
    },

    {
      id: "probir-das",
      name: "Probir Das",
      title:
        "Group CEO, Integris Medtech",
      image:
        "https://img1.wsimg.com/isteam/ip/69f464fa-0f03-4140-9b35-09ebe8220179/Probir_Das_web.webp",
      eager: true
    },

    {
      id: "achal-khanna",
      name: "Achal Khanna",
      title:
        "CEO, SHRM APAC & MENA",
      image:
        "https://img1.wsimg.com/isteam/ip/69f464fa-0f03-4140-9b35-09ebe8220179/Achal%20Khanna.webp"
    },

    {
      id: "nitin-jaiswal",
      name: "Nitin Jaiswal",
      title:
        "Founder & CEO, The 8th Continent",
      image:
        "https://img1.wsimg.com/isteam/ip/69f464fa-0f03-4140-9b35-09ebe8220179/Nitin_Jaiswal_WB_Web.webp",
      eager: true
    },

    {
      id: "frank-koo",
      name: "Frank Koo",
      title:
        "Speaker, Coach & Community Builder",
      image:
        "https://img1.wsimg.com/isteam/ip/69f464fa-0f03-4140-9b35-09ebe8220179/Frank%20Koo.webp",
      eager: true
    },

    {
      id: "ooi-huey-tyng",
      name: "Ooi Huey Tyng",
      title:
        "Independent Director",
      image:
        "https://img1.wsimg.com/isteam/ip/69f464fa-0f03-4140-9b35-09ebe8220179/Ooi%20Huey%20Tyng.webp"
    },

    {
      id: "philip-forrest-am",
      name: "Philip Forrest AM",
      title:
        "Business Leader & Board Advisor",
      image:
        "https://img1.wsimg.com/isteam/ip/69f464fa-0f03-4140-9b35-09ebe8220179/Philip%20Forrest%20AM-New-web.webp"
    },

    {
      id: "sanjeev-jain",
      name: "Sanjeev Jain",
      title:
        "Chief Operating Officer, Wipro",
      image:
        "https://img1.wsimg.com/isteam/ip/69f464fa-0f03-4140-9b35-09ebe8220179/Sanjeev%20Jain.webp"
    },

    {
      id: "nancy-groesch",
      name: "Nancy Groesch",
      title:
        "Organisational Psychologist & Executive Coach",
      image:
        "https://img1.wsimg.com/isteam/ip/69f464fa-0f03-4140-9b35-09ebe8220179/Nancy%20Groesch.webp",

      /* Change to true to show Nancy again */
      visible: false
    },

    {
      id: "priya-rao",
      name: "Priya Rao",
      title:
        "Chief Operating Officer, Board Match-Up",
      image:
        "https://img1.wsimg.com/isteam/ip/69f464fa-0f03-4140-9b35-09ebe8220179/Priya_Web.webp",
      eager: true
    },

    {
      id: "karunesh-prasad",
      name: "Karunesh Prasad",
      title:
        "Founder, Change Et Al / Board Match-Up",
      image:
        "https://img1.wsimg.com/isteam/ip/69f464fa-0f03-4140-9b35-09ebe8220179/Karunesh%20Prasad.webp"
    }

  ];


  const activeSpeakers =
    speakers.filter(
      speaker =>
        speaker.visible !== false
    );


  const bioMap = {};


  const mobile =
    window.matchMedia(
      "(max-width:767px)"
    );


  let biosLoaded =
    false;


  let biosPromise =
    null;


  let explorerIndex =
    0;


  let resizeTimer =
    null;


  /* =========================================================
     HELPERS
     ========================================================= */

  function esc(
    value = ""
  ) {

    return String(
      value
    )

      .replace(
        /&/g,
        "&amp;"
      )

      .replace(
        /</g,
        "&lt;"
      )

      .replace(
        />/g,
        "&gt;"
      )

      .replace(
        /"/g,
        "&quot;"
      );
  }


  /* =========================================================
     CREATE SPEAKER CARDS
     ========================================================= */

  function cardsHTML() {

    return speakers
      .map(
        (
          speaker,
          index
        ) => {

          const hidden =
            speaker.visible === false
              ? " tfe-hidden-speaker"
              : "";


          const loading =
            speaker.eager ||
            index < 5
              ? "eager"
              : "lazy";


          const priority =
            speaker.eager ||
            index < 5
              ? "high"
              : "low";


          return `
            <div
              class="tfe-speaker-card${hidden}"
              data-speaker-id="${speaker.id}"
            >

              <div class="tfe-photo">

                <img
                  src="${speaker.image}"
                  alt="${esc(
                    speaker.name
                  )}"
                  width="138"
                  height="138"
                  decoding="async"
                  loading="${loading}"
                  fetchpriority="${priority}"
                >

              </div>


              <h3>
                ${esc(
                  speaker.name
                )}
              </h3>


              <p class="short-title">
                ${esc(
                  speaker.title
                )}
              </p>


              <div class="speaker-details">

                <p class="tfe-speaker-bio">
                  Profile details loading…
                </p>

              </div>

            </div>
          `;
        }
      )

      .join("");
  }


  /* =========================================================
     HTML
     ========================================================= */

  root.innerHTML = `

    <link
      rel="preconnect"
      href="https://fonts.googleapis.com"
    >

    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossorigin
    >

    <link
      rel="preconnect"
      href="https://img1.wsimg.com"
      crossorigin
    >

    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Oswald:wght@600;700&family=DM+Sans:wght@400;500;700&display=swap"
    >


    <section
      class="tfe-fresh-section tfe-speakers-split tfe-is-loading"
      aria-busy="true"
    >


      <!-- ==============================
           LOADER
           ============================== -->

      <div
        class="tfe-section-loader"
        aria-live="polite"
        aria-label="Loading speakers section"
      >

        <div
          class="tfe-loader-ring"
          aria-hidden="true"
        ></div>


        <div
          class="tfe-loader-dot"
          aria-hidden="true"
        ></div>


        <span>
          Loading speakers
        </span>

      </div>


      <!-- ==============================
           MAIN SECTION
           ============================== -->

      <div class="tfe-fresh-main">


        <!-- POSTER -->

        <div class="tfe-poster-wrap">

          <div class="tfe-mini-poster">


            <div class="tfe-poster-logos">


              <div
                class="tfe-logo-slot tfe-logo-slot-one"
              >

                <img
                  src="https://img1.wsimg.com/isteam/ip/69f464fa-0f03-4140-9b35-09ebe8220179/flex%20logo.png"
                  alt="The Flex Executive Logo"
                  width="110"
                  height="110"
                  loading="eager"
                >

              </div>


              <div
                class="tfe-logo-slot tfe-logo-slot-two"
              >

                <img
                  src="https://img1.wsimg.com/isteam/ip/f949858a-5410-4007-9066-936f82154009/Logo%20New%20BMU-Small-1.png"
                  alt="Board Match-Up Logo"
                  width="140"
                  height="60"
                  loading="eager"
                >

              </div>


            </div>


            <div class="tfe-poster-year">
              2026
            </div>


            <div class="tfe-poster-line">

              <span></span>

              <i></i>

              <span></span>

            </div>


            <div class="tfe-poster-title">

              <div class="gold">
                The Flex
              </div>

              <div>
                Executive
              </div>

              <div class="gold">
                Summit
              </div>

            </div>


            <div class="tfe-poster-line">

              <span></span>

              <i></i>

              <span></span>

            </div>


            <div
              class="tfe-poster-events"
              aria-label="Event schedule"
            >


              <div class="tfe-event-row">

                <span>
                  1 Oct
                </span>

                <b>
                  |
                </b>

                <span>
                  Masterclass
                </span>

              </div>


              <div class="tfe-event-row">

                <span>
                  2 Oct
                </span>

                <b>
                  |
                </b>

                <span>
                  Summit
                </span>

              </div>


              <div class="tfe-event-single">
                Networking Dinner
              </div>


              <div class="tfe-event-location">

                <a
                  href="${CFG.venueUrl}"
                  target="_blank"
                  rel="noopener"
                >

                  <svg
                    class="tfe-location-icon"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >

                    <path
                      d="M12 21s6-5.15 6-11a6 6 0 1 0-12 0c0 5.85 6 11 6 11Z"
                    ></path>

                    <circle
                      cx="12"
                      cy="10"
                      r="2.3"
                    ></circle>

                  </svg>


                  <span>
                    Grand Copthorne Waterfront Hotel, Singapore
                  </span>

                </a>

              </div>


            </div>


          </div>

        </div>


        <!-- ==============================
             SPEAKER AREA
             ============================== -->

        <div class="tfe-speakers-area">


          <div class="tfe-speaker-kicker">

            Curated leadership voices shaping the
            Flex Executive Economy

          </div>


          <!-- SPEAKER GRID -->

          <div class="tfe-speaker-grid">

            ${cardsHTML()}

          </div>


          <!-- ==============================
               KNOW MORE SPEAKER EXPLORER
               ============================== -->

          <div
            class="tfe-speaker-explorer"
            aria-hidden="true"
          >


            <div class="tfe-explorer-topbar">


              <button
                class="tfe-explorer-back"
                type="button"
              >

                <span aria-hidden="true">
                  ←
                </span>

                All Speakers

              </button>


              <div
                class="tfe-explorer-counter"
                aria-live="polite"
              >
                01 / 01
              </div>


            </div>


            <div class="tfe-featured-shell">


              <button
                class="tfe-featured-nav tfe-featured-prev"
                type="button"
                aria-label="Previous speaker"
              >
                ‹
              </button>


              <article
                class="tfe-featured-card"
                aria-live="polite"
              >


                <div class="tfe-featured-photo">

                  <img
                    class="tfe-featured-img"
                    src=""
                    alt=""
                    width="280"
                    height="280"
                    decoding="async"
                  >

                </div>


                <div class="tfe-featured-content">


                  <h2 class="tfe-featured-name">
                    Speaker Name
                  </h2>


                  <p class="tfe-featured-title">
                    Speaker Title
                  </p>


                  <div class="tfe-featured-divider"></div>


                  <p class="tfe-featured-bio">
                    Profile details loading…
                  </p>


                </div>


              </article>


              <button
                class="tfe-featured-nav tfe-featured-next"
                type="button"
                aria-label="Next speaker"
              >
                ›
              </button>


            </div>


            <!-- THUMBNAIL SCROLLER -->

            <div class="tfe-thumb-window">


              <button
                class="tfe-thumb-scroll tfe-thumb-scroll-left"
                type="button"
                aria-label="Scroll speaker list left"
              >
                ‹
              </button>


              <div
                class="tfe-thumb-strip"
                role="listbox"
                aria-label="Select a speaker"
              ></div>


              <button
                class="tfe-thumb-scroll tfe-thumb-scroll-right"
                type="button"
                aria-label="Scroll speaker list right"
              >
                ›
              </button>


            </div>


          </div>


        </div>


      </div>


      <!-- ==============================
           CTA
           ============================== -->

      <div class="tfe-agenda-section">

        <div class="tfe-action-row">


          <a
            class="tfe-action-btn primary"
            href="${CFG.ticketUrl}"
            target="_blank"
            rel="noopener"
          >

            Get Your Executive Pass

          </a>


          <button
            class="tfe-action-btn secondary tfe-know-more-btn"
            type="button"
          >

            Know More About Speakers

          </button>


        </div>

      </div>


    </section>
  `;


  /* =========================================================
     CSS
     ========================================================= */

  const style =
    document.createElement(
      "style"
    );


  style.textContent = `

    /* =========================================================
       GLOBAL
       ========================================================= */

    .tfe-fresh-section,
    .tfe-fresh-section * {

      box-sizing:
        border-box;
    }


    .tfe-fresh-section {

      --gold:
        #c9a84c;

      --gold-light:
        #f1d36b;

      --poster-bg:
        #04101f;

      --poster-bg-2:
        #010812;


      width:
        100%;

      margin:
        0;

      padding:
        34px 0 8px;

      position:
        relative;

      overflow:
        visible;


      font-family:
        "DM Sans",
        Arial,
        sans-serif;


      background-color:
        #000;


      background-image:

        radial-gradient(
          ellipse at 50% 44%,
          rgba(162,122,32,.14),
          transparent 62%
        ),

        linear-gradient(
          90deg,
          #000 0%,
          #000 18%,
          #010101 34%,
          #050403 50%,
          #010101 66%,
          #000 82%,
          #000 100%
        );
    }


    /* =========================================================
       LOADING
       ========================================================= */

    .tfe-fresh-section.tfe-is-loading {

      height:
        600px !important;

      min-height:
        600px !important;

      max-height:
        600px !important;

      overflow:
        hidden !important;

      background:
        #000 !important;
    }


    .tfe-is-loading .tfe-fresh-main,
    .tfe-is-loading .tfe-agenda-section {

      opacity:
        0 !important;

      visibility:
        hidden !important;

      pointer-events:
        none;
    }


    .tfe-section-loader {

      position:
        absolute;

      inset:
        0;

      z-index:
        99999;


      display:
        flex;

      flex-direction:
        column;

      align-items:
        center;

      justify-content:
        flex-start;


      gap:
        12px;


      padding-top:
        clamp(
          58px,
          11vh,
          96px
        );


      background:

        radial-gradient(
          ellipse 42% 30% at 50% 42%,
          rgba(201,168,76,.16),
          transparent 58%
        ),

        #000;


      color:
        rgba(
          241,
          211,
          107,
          .82
        );


      font-size:
        11px;

      font-weight:
        800;

      letter-spacing:
        .16em;

      text-transform:
        uppercase;


      transition:

        opacity .45s ease,

        visibility .45s ease;
    }


    .tfe-loader-ring {

      width:
        38px;

      height:
        38px;

      border-radius:
        50%;


      border:
        1px solid rgba(
          241,
          211,
          107,
          .18
        );


      border-top-color:
        rgba(
          241,
          211,
          107,
          .95
        );


      border-right-color:
        rgba(
          201,
          168,
          76,
          .44
        );


      box-shadow:
        0 0 34px
        rgba(
          201,
          168,
          76,
          .16
        );


      animation:
        tfe-spin
        1s
        linear
        infinite;
    }


    .tfe-loader-dot {

      width:
        5px;

      height:
        5px;

      border-radius:
        50%;


      background:
        rgba(
          241,
          211,
          107,
          .95
        );


      box-shadow:
        0 0 22px
        rgba(
          241,
          211,
          107,
          .42
        );
    }


    .tfe-is-ready .tfe-section-loader {

      opacity:
        0;

      visibility:
        hidden;
    }


    .tfe-is-ready .tfe-fresh-main,
    .tfe-is-ready .tfe-agenda-section {

      opacity:
        1;

      visibility:
        visible;


      transition:
        opacity .55s ease;
    }


    @keyframes tfe-spin {

      to {

        transform:
          rotate(360deg);
      }

    }


    /* =========================================================
       MAIN LAYOUT
       ========================================================= */

    .tfe-fresh-main {

      width:
        min(
          1220px,
          calc(100% - 72px)
        );


      margin:
        0 auto;


      display:
        grid;


      grid-template-columns:
        280px
        minmax(
          0,
          1fr
        );


      gap:
        48px;


      align-items:
        center;


      position:
        relative;


      z-index:
        10;
    }


    /* =========================================================
       POSTER
       ========================================================= */

    .tfe-poster-wrap {

      display:
        flex;

      justify-content:
        center;

      align-items:
        center;
    }


    .tfe-mini-poster {

      width:
        280px;

      height:
        498px;


      padding:
        28px 24px;


      border:
        1.5px solid
        rgba(
          255,
          255,
          255,
          .42
        );


      border-radius:
        24px;


      display:
        flex;

      flex-direction:
        column;

      justify-content:
        space-between;


      overflow:
        hidden;


      background:

        radial-gradient(
          circle at 75% 12%,
          rgba(201,168,76,.10),
          transparent 26%
        ),

        linear-gradient(
          145deg,
          var(--poster-bg),
          var(--poster-bg-2)
        );


      box-shadow:
        0 28px 70px
        rgba(
          0,
          0,
          0,
          .48
        );
    }


    .tfe-poster-logos {

      height:
        78px;


      display:
        flex;


      align-items:
        flex-start;


      justify-content:
        space-between;


      gap:
        16px;
    }


    .tfe-logo-slot {

      display:
        flex;

      align-items:
        center;

      justify-content:
        center;

      overflow:
        hidden;
    }


    .tfe-logo-slot-one {

      width:
        78px;

      height:
        78px;
    }


    .tfe-logo-slot-two {

      width:
        112px;

      height:
        48px;

      margin-top:
        8px;
    }


    .tfe-logo-slot img {

      width:
        100%;

      height:
        100%;

      display:
        block;

      object-fit:
        contain;
    }


    .tfe-poster-year {

      color:
        #fff;


      font-size:
        82px;


      line-height:
        .9;


      font-weight:
        800;


      letter-spacing:
        .03em;


      text-align:
        center;


      white-space:
        nowrap;
    }


    .tfe-poster-line {

      display:
        flex;

      align-items:
        center;

      gap:
        7px;
    }


    .tfe-poster-line span {

      flex:
        1;

      height:
        1px;

      background:
        rgba(
          201,
          168,
          76,
          .75
        );
    }


    .tfe-poster-line i {

      width:
        7px;

      height:
        7px;


      border:
        1px solid
        rgba(
          201,
          168,
          76,
          .95
        );


      transform:
        rotate(45deg);
    }


    .tfe-poster-title {

      color:
        #fff;


      font-family:
        "Oswald",
        Arial,
        sans-serif;


      font-size:
        42px;


      line-height:
        1.16;


      font-weight:
        800;


      letter-spacing:
        .17em;


      text-align:
        center;


      text-transform:
        uppercase;


      white-space:
        nowrap;
    }


    .tfe-poster-title .gold {

      color:
        var(--gold-light);
    }


    .tfe-poster-events {

      display:
        grid;


      gap:
        7px;


      color:
        rgba(
          255,
          255,
          255,
          .86
        );


      text-align:
        center;


      text-transform:
        uppercase;
    }


    .tfe-event-row {

      display:
        flex;


      align-items:
        center;


      justify-content:
        center;


      gap:
        11px;


      font-size:
        14px;


      font-weight:
        700;


      letter-spacing:
        .115em;


      white-space:
        nowrap;
    }


    .tfe-event-row b {

      color:
        rgba(
          255,
          255,
          255,
          .46
        );


      font-weight:
        400;
    }


    .tfe-event-single {

      font-size:
        12px;


      font-weight:
        800;


      letter-spacing:
        .17em;


      color:
        rgba(
          241,
          211,
          107,
          .92
        );


      white-space:
        nowrap;
    }


    .tfe-event-location {

      font-size:
        12.5px;


      line-height:
        1.3;


      font-weight:
        800;


      text-transform:
        none;
    }


    .tfe-event-location a {

      display:
        inline-flex;


      align-items:
        flex-start;


      justify-content:
        center;


      gap:
        6px;


      color:
        rgba(
          255,
          255,
          255,
          .84
        );


      text-decoration:
        none;
    }


    .tfe-event-location a:hover {

      color:
        var(--gold-light);
    }


    .tfe-location-icon {

      width:
        14px;


      height:
        14px;


      flex:
        0 0 14px;


      fill:
        none;


      stroke:
        var(--gold-light);


      stroke-width:
        1.8;


      stroke-linecap:
        round;


      stroke-linejoin:
        round;
    }


    /* =========================================================
       SPEAKER GRID
       ========================================================= */

    .tfe-speakers-area {

      min-width:
        0;


      position:
        relative;


      z-index:
        20;


      overflow:
        visible;
    }


    .tfe-speaker-kicker {

      margin:
        0 auto 34px;


      text-align:
        center;


      color:
        rgba(
          241,
          211,
          107,
          .9
        );


      font-size:
        .84rem;


      line-height:
        1.5;


      font-weight:
        800;


      letter-spacing:
        .16em;


      text-transform:
        uppercase;
    }


    .tfe-speaker-grid {

      display:
        flex;


      flex-wrap:
        wrap;


      justify-content:
        center;


      gap:
        32px 20px;


      position:
        relative;


      z-index:
        30;


      overflow:
        visible;
    }


    .tfe-hidden-speaker {

      display:
        none !important;
    }


    .tfe-speaker-card {

      position:
        relative;


      z-index:
        1;


      flex:
        0 1
        calc(
          (100% - 80px) / 5
        );


      min-width:
        0;


      text-align:
        center;


      color:
        #fff;


      cursor:
        pointer;


      transition:
        transform .25s ease;
    }


    .tfe-speaker-card:hover,
    .tfe-speaker-card.is-open {

      transform:
        translateY(-6px);


      z-index:
        999;
    }


    .tfe-photo {

      width:
        132px;


      height:
        132px;


      margin:
        0 auto;


      border-radius:
        50%;


      overflow:
        hidden;


      position:
        relative;


      background:
        #111;


      box-shadow:
        0 18px 36px
        rgba(
          0,
          0,
          0,
          .42
        );
    }


    .tfe-photo img {

      width:
        100%;


      height:
        100%;


      display:
        block;


      border-radius:
        50%;


      object-fit:
        cover;


      object-position:
        center top;
    }


    .tfe-photo:after {

      content:
        "";


      position:
        absolute;


      left:
        0;


      right:
        0;


      bottom:
        0;


      height:
        38%;


      background:

        linear-gradient(
          to bottom,
          transparent,
          rgba(0,0,0,.72),
          #000
        );


      pointer-events:
        none;
    }


    .tfe-speaker-card h3 {

      margin:
        -14px 0 0;


      position:
        relative;


      z-index:
        2;


      color:
        #fff;


      font-family:
        "Oswald",
        Arial,
        sans-serif;


      font-size:
        1.06rem;


      line-height:
        1.08;


      letter-spacing:
        .055em;


      text-transform:
        uppercase;


      text-shadow:
        0 2px 9px
        rgba(
          0,
          0,
          0,
          .88
        );
    }


    .short-title {

      max-width:
        165px;


      margin:
        4px auto 0;


      position:
        relative;


      z-index:
        2;


      color:
        rgba(
          255,
          255,
          255,
          .72
        );


      font-size:
        .74rem;


      line-height:
        1.32;


      font-weight:
        500;


      text-shadow:
        0 2px 8px
        rgba(
          0,
          0,
          0,
          .88
        );
    }


    /* =========================================================
       DESKTOP / TABLET SPEAKER BIO POPUP
       ========================================================= */

    .speaker-details {

      --tfe-popover-shift:
        0px;


      position:
        absolute;


      left:
        50%;


      top:
        100%;


      width:
        286px;


      max-width:
        calc(
          100vw - 32px
        );


      padding:
        18px;


      border-radius:
        18px;


      background:
        #fff;


      border:
        1px solid
        rgba(
          0,
          0,
          0,
          .08
        );


      box-shadow:
        0 24px 60px
        rgba(
          0,
          0,
          0,
          .5
        );


      opacity:
        0;


      visibility:
        hidden;


      pointer-events:
        none;


      z-index:
        9999;


      transform:

        translate(
          calc(
            -50% +
            var(--tfe-popover-shift)
          ),
          14px
        );


      transition:

        opacity .22s ease,

        visibility .22s ease,

        transform .22s ease;
    }


    .speaker-details:before {

      content:
        "";


      position:
        absolute;


      top:
        -7px;


      left:

        clamp(
          18px,
          calc(
            50% -
            var(--tfe-popover-shift)
          ),
          calc(
            100% - 18px
          )
        );


      width:
        14px;


      height:
        14px;


      background:
        #fff;


      border-left:
        1px solid
        rgba(
          0,
          0,
          0,
          .06
        );


      border-top:
        1px solid
        rgba(
          0,
          0,
          0,
          .06
        );


      transform:

        translateX(-50%)
        rotate(45deg);
    }


    .speaker-details p {

      margin:
        0;


      color:
        #202632;


      font-size:
        .8rem;


      line-height:
        1.5;


      font-weight:
        500;
    }


    .tfe-speaker-card:hover .speaker-details,
    .tfe-speaker-card.is-open .speaker-details {

      opacity:
        1;


      visibility:
        visible;


      pointer-events:
        auto;


      transform:

        translate(
          calc(
            -50% +
            var(--tfe-popover-shift)
          ),
          8px
        );
    }


    /* =========================================================
       DESKTOP ROW POSITIONING
       ========================================================= */

    @media (
      min-width: 768px
    ) {


      /* LAST ROW OPENS UPWARD */

      .tfe-speaker-card.tfe-popover-up
      .speaker-details {

        top:
          auto;


        bottom:
          100%;


        transform:

          translate(
            calc(
              -50% +
              var(--tfe-popover-shift)
            ),
            -14px
          );
      }


      .tfe-speaker-card.tfe-popover-up:hover
      .speaker-details,

      .tfe-speaker-card.tfe-popover-up.is-open
      .speaker-details {

        transform:

          translate(
            calc(
              -50% +
              var(--tfe-popover-shift)
            ),
            -8px
          );
      }


      .tfe-speaker-card.tfe-popover-up
      .speaker-details:before {

        top:
          auto;


        bottom:
          -7px;


        border-left:
          0;


        border-top:
          0;


        border-right:
          1px solid
          rgba(
            0,
            0,
            0,
            .06
          );


        border-bottom:
          1px solid
          rgba(
            0,
            0,
            0,
            .06
          );
      }


      /* RIGHT-MOST CARD ALIGNS POPUP INWARD */

      .tfe-speaker-card.tfe-popover-right
      .speaker-details {

        left:
          auto;


        right:
          0;


        transform:
          translate(
            0,
            14px
          );
      }


      .tfe-speaker-card.tfe-popover-right:hover
      .speaker-details,

      .tfe-speaker-card.tfe-popover-right.is-open
      .speaker-details {

        transform:
          translate(
            0,
            8px
          );
      }


      .tfe-speaker-card.tfe-popover-right
      .speaker-details:before {

        left:
          auto;


        right:

          calc(
            var(
              --tfe-card-half,
              82px
            ) - 7px
          );


        transform:
          rotate(45deg);
      }


      /* LAST ROW + RIGHT EDGE */

      .tfe-speaker-card.tfe-popover-up.tfe-popover-right
      .speaker-details {

        top:
          auto;


        bottom:
          100%;


        transform:
          translate(
            0,
            -14px
          );
      }


      .tfe-speaker-card.tfe-popover-up.tfe-popover-right:hover
      .speaker-details,

      .tfe-speaker-card.tfe-popover-up.tfe-popover-right.is-open
      .speaker-details {

        transform:
          translate(
            0,
            -8px
          );
      }


      .tfe-speaker-card.tfe-popover-up.tfe-popover-right
      .speaker-details:before {

        top:
          auto;


        bottom:
          -7px;


        border-left:
          0;


        border-top:
          0;


        border-right:
          1px solid
          rgba(
            0,
            0,
            0,
            .06
          );


        border-bottom:
          1px solid
          rgba(
            0,
            0,
            0,
            .06
          );
      }

    }


    /* =========================================================
       KNOW MORE SPEAKER EXPLORER
       ========================================================= */

    .tfe-speaker-explorer {

      display:
        none;


      width:
        100%;


      max-width:
        890px;


      margin:
        0 auto;


      color:
        #fff;
    }


    .tfe-explorer-open
    .tfe-speaker-kicker,

    .tfe-explorer-open
    .tfe-speaker-grid {

      display:
        none !important;
    }


    .tfe-explorer-open
    .tfe-speaker-explorer {

      display:
        block;
    }


    .tfe-explorer-topbar {

      display:
        flex;


      align-items:
        center;


      justify-content:
        space-between;


      gap:
        18px;


      margin:
        0 0 18px;
    }


    .tfe-explorer-back {

      border:
        0;


      background:
        transparent;


      color:
        rgba(
          241,
          211,
          107,
          .92
        );


      padding:
        6px 0;


      display:
        inline-flex;


      align-items:
        center;


      gap:
        8px;


      font:
        inherit;


      font-size:
        .72rem;


      font-weight:
        900;


      letter-spacing:
        .13em;


      text-transform:
        uppercase;


      cursor:
        pointer;
    }


    .tfe-explorer-counter {

      color:
        rgba(
          255,
          255,
          255,
          .52
        );


      font-size:
        .68rem;


      font-weight:
        900;


      letter-spacing:
        .15em;
    }


    /* =========================================================
       WHITE FEATURED SPEAKER CARD
       ========================================================= */

    .tfe-featured-shell {

      display:
        grid;


      grid-template-columns:

        42px
        minmax(0,1fr)
        42px;


      align-items:
        center;


      gap:
        12px;
    }


    .tfe-featured-card {

      min-height:
        420px;


      border:
        1.5px solid
        rgba(
          211,
          171,
          57,
          .72
        );


      border-radius:
        26px;


      padding:
        32px 36px;


      display:
        grid;


      grid-template-columns:

        minmax(
          210px,
          255px
        )

        minmax(
          0,
          1fr
        );


      gap:
        36px;


      align-items:
        center;


      position:
        relative;


      overflow:
        hidden;


      background-color:
        #fff;


      background-image:

        radial-gradient(
          ellipse at 96% 8%,
          rgba(
            222,
            235,
            252,
            .70
          ),
          transparent 45%
        ),

        linear-gradient(
          164deg,
          transparent 53%,
          rgba(
            225,
            238,
            254,
            .42
          ) 57%,
          rgba(
            246,
            250,
            255,
            .86
          ) 61%,
          transparent 67%
        ),

        linear-gradient(
          170deg,
          transparent 64%,
          rgba(
            218,
            234,
            253,
            .42
          ) 68%,
          rgba(
            248,
            251,
            255,
            .90
          ) 72%,
          transparent 79%
        );


      box-shadow:

        0 28px 72px
        rgba(
          0,
          0,
          0,
          .34
        ),

        0 0 0 1px
        rgba(
          255,
          255,
          255,
          .7
        )
        inset;
    }


    .tfe-featured-photo {

      width:
        100%;


      max-width:
        250px;


      aspect-ratio:
        1;


      margin:
        0 auto;


      border:
        3px solid
        rgba(
          211,
          171,
          57,
          .88
        );


      border-radius:
        50%;


      overflow:
        hidden;


      background:
        #eef2f7;


      box-shadow:

        0 22px 48px
        rgba(
          12,
          24,
          42,
          .18
        ),

        0 0 0 5px
        rgba(
          255,
          255,
          255,
          .92
        );
    }


    .tfe-featured-img {

      width:
        100%;


      height:
        100%;


      display:
        block;


      object-fit:
        cover;


      object-position:
        center top;
    }


    .tfe-featured-content {

      min-width:
        0;


      text-align:
        left;
    }


    .tfe-featured-name {

      margin:
        0;


      color:
        #07111f;


      font-family:
        "Oswald",
        Arial,
        sans-serif;


      font-size:
        clamp(
          2rem,
          3vw,
          2.7rem
        );


      line-height:
        1.03;


      font-weight:
        800;


      letter-spacing:
        .04em;


      text-transform:
        uppercase;
    }


    .tfe-featured-title {

      margin:
        10px 0 0;


      color:
        #596474;


      font-size:
        .9rem;


      line-height:
        1.48;


      font-weight:
        650;
    }


    .tfe-featured-divider {

      width:
        76px;


      height:
        2px;


      margin:
        19px 0 17px;


      background:

        linear-gradient(
          90deg,
          #d3ab39,
          rgba(
            211,
            171,
            57,
            .12
          )
        );
    }


    .tfe-featured-bio {

      margin:
        0;


      max-height:
        190px;


      overflow-y:
        auto;


      padding-right:
        8px;


      color:
        #334155;


      font-size:
        .84rem;


      line-height:
        1.66;


      font-weight:
        500;


      scrollbar-width:
        none;


      -ms-overflow-style:
        none;
    }


    .tfe-featured-bio::-webkit-scrollbar {

      display:
        none;

      width:
        0;

      height:
        0;
    }


    /* =========================================================
       EXPLORER NAVIGATION
       ========================================================= */

    .tfe-featured-nav,
    .tfe-thumb-scroll {

      border:
        1px solid
        rgba(
          241,
          211,
          107,
          .26
        );


      background:
        rgba(
          6,
          14,
          25,
          .9
        );


      color:
        var(--gold-light);


      display:
        grid;


      place-items:
        center;


      cursor:
        pointer;
    }


    .tfe-featured-nav {

      width:
        42px;


      height:
        42px;


      border-radius:
        50%;


      font-size:
        2rem;
    }


    /* =========================================================
       SPEAKER THUMBNAILS
       ========================================================= */

    .tfe-thumb-window {

      display:
        grid;


      grid-template-columns:

        34px
        minmax(0,1fr)
        34px;


      gap:
        9px;


      align-items:
        center;
    }


    .tfe-thumb-scroll {

      width:
        34px;


      height:
        34px;


      border-radius:
        50%;


      font-size:
        1.45rem;
    }


    .tfe-thumb-strip {

      display:
        flex;


      gap:
        12px;


      overflow-x:
        auto;


      overflow-y:
        hidden;


      padding:
        8px 4px 11px;


      scroll-behavior:
        smooth;


      scrollbar-width:
        none;


      -ms-overflow-style:
        none;
    }


    .tfe-thumb-strip::-webkit-scrollbar {

      display:
        none;

      width:
        0;

      height:
        0;
    }


    .tfe-thumb-item {

      flex:
        0 0 76px;


      width:
        76px;


      border:
        0;


      background:
        transparent;


      padding:
        0;


      color:
        #fff;


      text-align:
        center;


      cursor:
        pointer;
    }


    .tfe-thumb-photo {

      width:
        64px;


      height:
        64px;


      margin:
        0 auto 7px;


      border-radius:
        50%;


      overflow:
        hidden;


      border:
        2px solid
        rgba(
          255,
          255,
          255,
          .14
        );


      background:
        #111;
    }


    .tfe-thumb-photo img {

      width:
        100%;


      height:
        100%;


      display:
        block;


      object-fit:
        cover;


      object-position:
        center top;
    }


    .tfe-thumb-item span {

      display:
        block;


      max-width:
        76px;


      overflow:
        hidden;


      text-overflow:
        ellipsis;


      white-space:
        nowrap;


      color:
        rgba(
          255,
          255,
          255,
          .56
        );


      font-size:
        .56rem;


      font-weight:
        700;
    }


    .tfe-thumb-item.is-active
    .tfe-thumb-photo,

    .tfe-thumb-item:hover
    .tfe-thumb-photo {

      border-color:
        var(--gold-light);


      box-shadow:
        0 0 0 3px
        rgba(
          201,
          168,
          76,
          .09
        );
    }


    .tfe-thumb-item.is-active span {

      color:
        rgba(
          241,
          211,
          107,
          .96
        );
    }


    /* =========================================================
       CTA
       ========================================================= */

    .tfe-agenda-section {

      width:
        100%;


      margin:
        12px 0 0;


      padding:
        4px 0;


      position:
        relative;


      z-index:
        2;
    }


    .tfe-action-row {

      width:
        min(
          1180px,
          calc(100% - 72px)
        );


      min-height:
        44px;


      margin:
        0 auto;


      display:
        flex;


      align-items:
        center;


      justify-content:
        center;


      position:
        relative;
    }


    .tfe-action-btn {

      min-height:
        44px;


      padding:
        11px 28px;


      border-radius:
        999px;


      display:
        inline-flex;


      align-items:
        center;


      justify-content:
        center;


      font-size:
        .82rem;


      font-weight:
        800;


      letter-spacing:
        .11em;


      text-transform:
        uppercase;


      text-decoration:
        none;
    }


    .tfe-action-btn.primary {

      color:
        #06101d;


      background:

        linear-gradient(
          135deg,
          #f1d36b,
          #c9a84c
        );
    }


    .tfe-action-btn.secondary {

      border:
        0;


      background:
        transparent;


      color:
        rgba(
          241,
          211,
          107,
          .94
        );


      cursor:
        pointer;
    }


    .tfe-know-more-btn {

      position:
        absolute;


      right:
        0;


      top:
        50%;


      min-height:
        auto;


      padding:
        8px 0;


      border:
        0;


      border-radius:
        0;


      background:
        transparent;


      white-space:
        nowrap;


      font-size:
        .7rem;


      letter-spacing:
        .09em;


      text-transform:
        none;


      transform:
        translateY(-50%);


      opacity:
        .88;
    }


    .tfe-know-more-btn:after {

      content:
        " →";
    }


    .tfe-know-more-btn:hover {

      color:
        #fff;


      opacity:
        1;
    }


    .tfe-explorer-open
    .tfe-know-more-btn {

      display:
        none;
    }


    /* =========================================================
       DESKTOP
       ========================================================= */

    @media (
      min-width:1025px
    ) {

      .tfe-fresh-section {

        min-height:
          1060px;
      }

    }


    @media (
      min-width:1025px
    ) and (
      max-width:1240px
    ) {

      .tfe-fresh-main {

        width:

          min(
            1160px,
            calc(100% - 54px)
          );


        gap:
          34px;
      }


      .tfe-mini-poster {

        width:
          270px;


        height:
          480px;
      }


      .tfe-speaker-grid {

        gap:
          30px 16px;
      }


      .tfe-photo {

        width:
          124px;


        height:
          124px;
      }


      .tfe-speaker-card h3 {

        font-size:
          1rem;
      }


      .short-title {

        max-width:
          150px;


        font-size:
          .7rem;
      }

    }


    /* =========================================================
       TABLET
       ========================================================= */

    @media (
      min-width:768px
    ) and (
      max-width:1024px
    ) {

      .tfe-fresh-section {

        padding:
          30px 0 24px;
      }


      .tfe-fresh-main {

        width:

          min(
            920px,
            calc(100% - 28px)
          );


        grid-template-columns:
          1fr;


        gap:
          42px;
      }


      .tfe-mini-poster {

        width:
          min(
            292px,
            88vw
          );


        height:
          auto;


        aspect-ratio:
          9 / 16;
      }


      .tfe-speaker-grid {

        max-width:
          820px;


        margin:
          0 auto;


        gap:
          32px 22px;
      }


      .tfe-speaker-card {

        flex:

          0 1
          calc(
            (100% - 44px) / 3
          );
      }

    }


    @media (
      min-width:768px
    ) and (
      max-width:860px
    ) {

      .tfe-speaker-card {

        flex-basis:

          calc(
            (100% - 24px) / 2
          );
      }

    }


    /* =========================================================
       MOBILE
       ========================================================= */

    @media (
      max-width:767px
    ) {


      .tfe-fresh-section {

        padding:
          0 0 20px;
      }


      .tfe-fresh-main {

        width:
          100%;


        grid-template-columns:
          1fr;


        gap:
          38px;


        padding:
          0 14px;
      }


      .tfe-mini-poster {

        width:
          min(
            72vw,
            276px
          );


        height:
          auto;


        aspect-ratio:
          9 / 16;


        padding:
          24px 20px;
      }


      .tfe-poster-logos {

        height:
          76px;
      }


      .tfe-logo-slot-one {

        width:
          92px;


        height:
          92px;
      }


      .tfe-logo-slot-two {

        width:
          118px;


        height:
          52px;


        margin-top:
          34px;
      }


      .tfe-poster-year {

        font-size:

          clamp(
            82px,
            23vw,
            94px
          );
      }


      .tfe-poster-title {

        font-size:

          clamp(
            37px,
            10.6vw,
            44px
          );


        line-height:
          1.08;


        letter-spacing:
          .105em;
      }


      .tfe-speaker-kicker {

        margin-bottom:
          28px;


        padding:
          0 6px;


        font-size:
          .68rem;


        letter-spacing:
          .12em;
      }


      .tfe-speaker-grid {

        gap:
          28px 14px;
      }


      .tfe-speaker-card {

        flex:

          0 1
          calc(
            50% - 8px
          );
      }


      .tfe-speaker-card:hover,
      .tfe-speaker-card.is-open {

        transform:
          none;


        z-index:
          10000;
      }


      /* Dark background when mobile bio is open */

      .tfe-speaker-card.is-open:before {

        content:
          "";


        position:
          fixed;


        inset:
          0;


        background:
          rgba(
            0,
            0,
            0,
            .62
          );


        backdrop-filter:
          blur(2px);


        -webkit-backdrop-filter:
          blur(2px);


        z-index:
          9998;


        pointer-events:
          none;
      }


      .tfe-photo {

        width:
          min(
            122px,
            76%
          );


        height:
          auto;


        aspect-ratio:
          1;


        margin-bottom:
          12px;
      }


      .tfe-speaker-card h3 {

        font-size:
          1rem;
      }


      .short-title {

        max-width:
          145px;


        font-size:
          .7rem;
      }


      /* =====================================================
         MOBILE BIO POPUP
         Stable centered modal
         Tap only — hover disabled
         ===================================================== */

      .speaker-details {

        position:
          fixed !important;


        left:
          50% !important;


        top:
          50% !important;


        right:
          auto !important;


        bottom:
          auto !important;


        width:

          min(
            340px,
            calc(
              100vw - 28px
            )
          ) !important;


        max-width:
          none !important;


        max-height:

          min(
            70vh,
            440px
          ) !important;


        margin:
          0 !important;


        padding:
          22px 20px !important;


        overflow-y:
          auto !important;


        overflow-x:
          hidden !important;


        -webkit-overflow-scrolling:
          touch;


        background:
          #fff !important;


        border:
          0 !important;


        border-radius:
          20px !important;


        box-shadow:

          0 30px 80px
          rgba(
            0,
            0,
            0,
            .55
          ),

          0 0 0 1px
          rgba(
            255,
            255,
            255,
            .4
          )
          inset !important;


        opacity:
          0 !important;


        visibility:
          hidden !important;


        pointer-events:
          none !important;


        z-index:
          9999 !important;


        text-align:
          left;


        transform:

          translate(
            -50%,
            -50%
          )

          scale(.96)
          !important;


        transition:

          opacity .2s ease,

          transform .2s ease,

          visibility .2s ease

          !important;


        scrollbar-width:
          none !important;


        -ms-overflow-style:
          none !important;
      }


      .speaker-details::-webkit-scrollbar {

        display:
          none !important;


        width:
          0 !important;


        height:
          0 !important;
      }


      .speaker-details:before {

        display:
          none !important;
      }


      .speaker-details p {

        margin:
          0 !important;


        color:
          #202632 !important;


        font-size:
          .79rem !important;


        line-height:
          1.58 !important;


        font-weight:
          500 !important;
      }


      /* Disable hover opening on mobile */

      .tfe-speaker-card:hover
      .speaker-details {

        opacity:
          0 !important;


        visibility:
          hidden !important;


        pointer-events:
          none !important;


        transform:

          translate(
            -50%,
            -50%
          )

          scale(.96)

          !important;
      }


      /* Open ONLY on tap / .is-open */

      .tfe-speaker-card.is-open
      .speaker-details {

        opacity:
          1 !important;


        visibility:
          visible !important;


        pointer-events:
          auto !important;


        transform:

          translate(
            -50%,
            -50%
          )

          scale(1)

          !important;
      }


      /* =====================================================
         MOBILE EXPLORER
         ===================================================== */

      .tfe-speaker-explorer {

        max-width:
          100%;


        padding:
          0 2px;
      }


      .tfe-explorer-topbar {

        margin-bottom:
          12px;
      }


      .tfe-explorer-back {

        font-size:
          .64rem;
      }


      .tfe-featured-shell {

        grid-template-columns:
          1fr;


        gap:
          12px;


        position:
          relative;
      }


      .tfe-featured-card {

        min-height:
          0;


        padding:
          23px 18px 22px;


        grid-template-columns:
          1fr;


        gap:
          20px;


        border-radius:
          22px;
      }


      .tfe-featured-photo {

        max-width:
          190px;
      }


      .tfe-featured-content {

        text-align:
          center;
      }


      .tfe-featured-name {

        font-size:

          clamp(
            1.72rem,
            8.5vw,
            2.2rem
          );
      }


      .tfe-featured-title {

        max-width:
          290px;


        margin:
          8px auto 0;


        font-size:
          .8rem;
      }


      .tfe-featured-divider {

        margin:
          16px auto;
      }


      .tfe-featured-bio {

        max-height:
          210px;


        padding:
          0 4px;


        text-align:
          left;


        font-size:
          .77rem;


        line-height:
          1.58;
      }


      .tfe-featured-prev,
      .tfe-featured-next {

        position:
          absolute;


        top:
          78px;


        z-index:
          5;


        width:
          38px;


        height:
          38px;
      }


      .tfe-featured-prev {

        left:
          8px;
      }


      .tfe-featured-next {

        right:
          8px;
      }


      .tfe-thumb-window {

        grid-template-columns:

          30px
          minmax(0,1fr)
          30px;


        gap:
          5px;
      }


      .tfe-thumb-scroll {

        width:
          30px;


        height:
          30px;
      }


      .tfe-thumb-strip {

        gap:
          9px;
      }


      .tfe-thumb-item {

        flex-basis:
          66px;


        width:
          66px;
      }


      .tfe-thumb-photo {

        width:
          56px;


        height:
          56px;
      }


      /* =====================================================
         MOBILE CTA
         ===================================================== */

      .tfe-agenda-section {

        margin-top:
          26px;


        padding:
          11px 0;
      }


      .tfe-action-row {

        width:
          min(
            100%,
            360px
          );


        display:
          grid;


        grid-template-columns:
          1fr;


        justify-items:
          center;


        gap:
          8px;


        padding:
          0 10px;
      }


      .tfe-action-btn.primary {

        width:
          100%;


        max-width:
          310px;
      }


      .tfe-know-more-btn {

        position:
          static;


        justify-self:
          end;


        width:
          auto;


        min-height:
          auto;


        margin:
          1px 2px 0 0;


        padding:
          5px 0;


        transform:
          none;


        font-size:
          .67rem;
      }

    }


    /* =========================================================
       SMALL MOBILE
       ========================================================= */

    @media (
      max-width:420px
    ) {

      .tfe-mini-poster {

        width:
          min(
            74vw,
            264px
          );


        padding:
          22px 18px;
      }


      .tfe-logo-slot-one {

        width:
          84px;


        height:
          84px;
      }


      .tfe-logo-slot-two {

        width:
          110px;


        height:
          48px;


        margin-top:
          32px;
      }


      .tfe-photo {

        width:
          min(
            112px,
            78%
          );
      }


      .tfe-speaker-card h3 {

        margin-top:
          -10px;


        font-size:
          .92rem;
      }


      .short-title {

        font-size:
          .66rem;
      }

    }


    /* =========================================================
       REDUCED MOTION
       ========================================================= */

    @media (
      prefers-reduced-motion: reduce
    ) {

      .tfe-loader-ring {

        animation:
          none !important;
      }


      .tfe-fresh-section * {

        scroll-behavior:
          auto !important;


        transition:
          none !important;
      }

    }

  `;


  root.appendChild(
    style
  );


  /* =========================================================
     ELEMENT REFERENCES
     ========================================================= */

  const section =
    root.querySelector(
      ".tfe-fresh-section"
    );


  const cards = [
    ...root.querySelectorAll(
      ".tfe-speaker-card:not(.tfe-hidden-speaker)"
    )
  ];


  const explorer =
    root.querySelector(
      ".tfe-speaker-explorer"
    );


  const knowMoreBtn =
    root.querySelector(
      ".tfe-know-more-btn"
    );


  const backBtn =
    root.querySelector(
      ".tfe-explorer-back"
    );


  const prevBtn =
    root.querySelector(
      ".tfe-featured-prev"
    );


  const nextBtn =
    root.querySelector(
      ".tfe-featured-next"
    );


  const thumbLeft =
    root.querySelector(
      ".tfe-thumb-scroll-left"
    );


  const thumbRight =
    root.querySelector(
      ".tfe-thumb-scroll-right"
    );


  const thumbStrip =
    root.querySelector(
      ".tfe-thumb-strip"
    );


  const featuredImg =
    root.querySelector(
      ".tfe-featured-img"
    );


  const featuredName =
    root.querySelector(
      ".tfe-featured-name"
    );


  const featuredTitle =
    root.querySelector(
      ".tfe-featured-title"
    );


  const featuredBio =
    root.querySelector(
      ".tfe-featured-bio"
    );


  const counter =
    root.querySelector(
      ".tfe-explorer-counter"
    );


  /* =========================================================
     LOADER
     ========================================================= */

  function wait(
    ms
  ) {

    return new Promise(
      resolve =>
        setTimeout(
          resolve,
          ms
        )
    );
  }


  function imageReady(
    img
  ) {

    return new Promise(
      resolve => {

        if (
          !img ||
          (
            img.complete &&
            img.naturalWidth
          )
        ) {

          resolve();

          return;
        }


        const done =
          () =>
            resolve();


        img.addEventListener(
          "load",
          done,
          {
            once:
              true
          }
        );


        img.addEventListener(
          "error",
          done,
          {
            once:
              true
          }
        );

      }
    );
  }


  async function revealWhenReady() {

    const critical = [

      ...root.querySelectorAll(
        ".tfe-poster-logos img, .tfe-speaker-card:nth-child(-n+5) img"
      )

    ];


    await Promise.all([

      wait(
        450
      ),


      Promise.race([

        Promise.all(
          critical.map(
            imageReady
          )
        ),


        wait(
          1400
        )

      ])

    ]);


    section.classList.remove(
      "tfe-is-loading"
    );


    section.classList.add(
      "tfe-is-ready"
    );


    section.setAttribute(
      "aria-busy",
      "false"
    );


    setTimeout(
      () => {

        const loader =
          root.querySelector(
            ".tfe-section-loader"
          );


        if (
          loader
        ) {

          loader.style.display =
            "none";
        }

      },
      700
    );


    scheduleBioHydration();
  }


  /* =========================================================
     BIOGRAPHIES
     ========================================================= */

  function isPlaceholder(
    text
  ) {

    const value =
      String(
        text || ""
      ).trim();


    return (

      !value ||

      value ===
        "Profile details loading…" ||

      value ===
        "Loading profile…" ||

      value ===
        "Visit Speaker Page for more details."

    );
  }


  function applyBios() {

    cards.forEach(
      card => {

        const id =
          card.dataset.speakerId;


        const node =
          card.querySelector(
            ".tfe-speaker-bio"
          );


        if (
          !node
        ) {

          return;
        }


        if (
          bioMap[id]
        ) {

          node.textContent =
            bioMap[id];

        } else if (
          isPlaceholder(
            node.textContent
          )
        ) {

          node.textContent =
            "Visit Speaker Page for more details.";
        }

      }
    );


    if (
      section.classList.contains(
        "tfe-explorer-open"
      )
    ) {

      renderExplorer();
    }

  }


  function loadBios(
    forceFresh = false
  ) {

    if (
      forceFresh
    ) {

      biosLoaded =
        false;


      biosPromise =
        null;
    }


    if (
      biosLoaded
    ) {

      return Promise.resolve(
        bioMap
      );
    }


    if (
      biosPromise
    ) {

      return biosPromise;
    }


    biosPromise =
      fetch(

        `${CFG.bioUrl}?v=${Date.now()}`,

        {
          cache:
            "no-store",

          credentials:
            "omit"
        }

      )


      .then(
        response => {

          if (
            !response.ok
          ) {

            throw new Error(
              `HTTP ${response.status}`
            );
          }


          return response.json();

        }
      )


      .then(
        data => {


          (
            data.speakers || []
          ).forEach(
            speaker => {

              if (
                speaker &&
                speaker.id
              ) {

                bioMap[
                  speaker.id
                ] =
                  speaker.bio || "";
              }

            }
          );


          biosLoaded =
            true;


          biosPromise =
            null;


          applyBios();


          return bioMap;

        }
      )


      .catch(
        error => {

          biosPromise =
            null;


          console.warn(
            "Speaker bios could not be loaded:",
            error
          );


          applyBios();


          return bioMap;

        }
      );


    return biosPromise;
  }


  function ensureBio(
    id
  ) {

    if (
      bioMap[id]
    ) {

      return Promise.resolve(
        bioMap[id]
      );
    }


    const card =
      cards.find(
        current =>
          current.dataset.speakerId ===
          id
      );


    const node =
      card
        ?.querySelector(
          ".tfe-speaker-bio"
        );


    if (
      node &&
      isPlaceholder(
        node.textContent
      )
    ) {

      node.textContent =
        "Loading profile…";
    }


    return loadBios()

      .then(
        () => {

          if (
            node
          ) {

            node.textContent =

              bioMap[id] ||

              "Visit Speaker Page for more details.";
          }


          return (
            bioMap[id] ||
            ""
          );

        }
      );

  }


  function scheduleBioHydration() {

    if (
      "requestIdleCallback"
      in window
    ) {

      requestIdleCallback(

        () =>
          loadBios(),

        {
          timeout:
            4500
        }

      );

    } else {

      setTimeout(
        () =>
          loadBios(),
        3200
      );
    }

  }


  /* =========================================================
     SPEAKER POPUP
     ========================================================= */

  function resetCard(
    card
  ) {

    card.classList.remove(
      "is-open"
    );


    const details =
      card.querySelector(
        ".speaker-details"
      );


    if (
      details
    ) {

      details.style.setProperty(
        "--tfe-popover-shift",
        "0px"
      );
    }

  }


  function closeOtherCards(
    active = null
  ) {

    cards.forEach(
      card => {

        if (
          card !== active
        ) {

          resetCard(
            card
          );
        }

      }
    );

  }


  /* =========================================================
     DESKTOP POPOVER VIEWPORT CORRECTION
     ========================================================= */

  function keepInside(
    card
  ) {

    if (
      mobile.matches
    ) {

      return;
    }


    const details =
      card.querySelector(
        ".speaker-details"
      );


    if (
      !details
    ) {

      return;
    }


    details.style.setProperty(
      "--tfe-popover-shift",
      "0px"
    );


    /*
     * Right-most cards already use
     * dedicated right alignment.
     */

    if (
      card.classList.contains(
        "tfe-popover-right"
      )
    ) {

      return;
    }


    requestAnimationFrame(
      () => {

        const rect =
          details.getBoundingClientRect();


        const gap =
          16;


        let shift =
          0;


        if (
          rect.left <
          gap
        ) {

          shift +=
            gap -
            rect.left;
        }


        if (
          rect.right >
          window.innerWidth -
          gap
        ) {

          shift -=

            rect.right -

            (
              window.innerWidth -
              gap
            );
        }


        details.style.setProperty(

          "--tfe-popover-shift",

          `${Math.round(
            shift
          )}px`
        );

      }
    );

  }


  /* =========================================================
     DETECT LAST ROW + RIGHT MOST CARD
     ========================================================= */

  function markRows() {

    if (
      mobile.matches
    ) {

      cards.forEach(
        card => {

          card.classList.remove(
            "tfe-popover-up",
            "tfe-popover-right"
          );


          card.style.removeProperty(
            "--tfe-card-half"
          );

        }
      );


      return;
    }


    const rows =
      [];


    const rowGap =
      14;


    cards.forEach(
      card => {

        const rect =
          card.getBoundingClientRect();


        if (
          rect.width <= 0 ||
          rect.height <= 0
        ) {

          return;
        }


        card.style.setProperty(

          "--tfe-card-half",

          `${Math.round(
            rect.width /
            2
          )}px`
        );


        const top =
          Math.round(
            rect.top
          );


        let row =
          rows.find(
            current =>

              Math.abs(
                current.top -
                top
              ) <=
              rowGap
          );


        if (
          !row
        ) {

          row = {
            top,
            items:
              []
          };


          rows.push(
            row
          );
        }


        row.items.push({
          card,
          rect
        });


        row.top =
          Math.min(
            row.top,
            top
          );

      }
    );


    if (
      !rows.length
    ) {

      return;
    }


    const lastRowTop =
      Math.max(
        ...rows.map(
          row =>
            row.top
        )
      );


    rows.forEach(
      row => {

        const rightMost =
          row.items.reduce(
            (
              best,
              item
            ) =>

              !best ||

              item.rect.right >
              best.rect.right

                ? item

                : best,

            null
          );


        row.items.forEach(
          item => {


            item.card.classList.toggle(

              "tfe-popover-up",

              row.top >=
              lastRowTop -
              rowGap
            );


            item.card.classList.toggle(

              "tfe-popover-right",

              !!rightMost &&

              item.card ===
              rightMost.card
            );

          }
        );

      }
    );

  }


  /* =========================================================
     SPEAKER CARD EVENTS
     ========================================================= */

  cards.forEach(
    card => {


      /* Desktop hover only */

      card.addEventListener(
        "mouseenter",
        () => {

          if (
            mobile.matches
          ) {

            return;
          }


          markRows();


          keepInside(
            card
          );


          ensureBio(
            card.dataset.speakerId
          );

        }
      );


      card.addEventListener(
        "mouseleave",
        () => {

          if (
            mobile.matches
          ) {

            return;
          }


          if (
            !card.classList.contains(
              "is-open"
            )
          ) {

            keepInside(
              card
            );
          }

        }
      );


      /*
       * Tap / click.
       *
       * Desktop:
       * also supports click-open.
       *
       * Mobile:
       * opens centered modal.
       */

      card.addEventListener(
        "click",
        event => {

          event.stopPropagation();


          const open =
            !card.classList.contains(
              "is-open"
            );


          closeOtherCards(
            card
          );


          card.classList.toggle(
            "is-open",
            open
          );


          if (
            open
          ) {

            ensureBio(
              card.dataset.speakerId
            );


            if (
              !mobile.matches
            ) {

              markRows();


              keepInside(
                card
              );
            }

          }

        }
      );

    }
  );


  /* =========================================================
     CLOSE SPEAKER POPUP WHEN CLICKING OUTSIDE
     ========================================================= */

  document.addEventListener(
    "click",
    event => {

      if (
        !event.target.closest(
          ".tfe-speaker-card"
        )
      ) {

        closeOtherCards();
      }

    }
  );


  /* =========================================================
     ESC CLOSES SPEAKER POPUP
     ========================================================= */

  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key !==
        "Escape"
      ) {

        return;
      }


      const openCard =
        section.querySelector(
          ".tfe-speaker-card.is-open"
        );


      if (
        openCard
      ) {

        resetCard(
          openCard
        );
      }

    }
  );


  /* =========================================================
     EXPLORER THUMBNAILS
     ========================================================= */

  function buildThumbs() {

    if (
      thumbStrip.children.length
    ) {

      return;
    }


    activeSpeakers.forEach(
      (
        speaker,
        index
      ) => {


        const button =
          document.createElement(
            "button"
          );


        button.type =
          "button";


        button.className =
          "tfe-thumb-item";


        button.setAttribute(
          "role",
          "option"
        );


        button.setAttribute(
          "aria-label",
          `View ${speaker.name}`
        );


        button.innerHTML = `

          <div class="tfe-thumb-photo">

            <img
              src="${speaker.image}"
              alt=""
              width="64"
              height="64"
              loading="lazy"
            >

          </div>


          <span>
            ${esc(
              speaker.name
            )}
          </span>

        `;


        button.addEventListener(
          "click",
          () =>

            showSpeaker(
              index,
              true
            )
        );


        thumbStrip.appendChild(
          button
        );

      }
    );

  }


  /* =========================================================
     EXPLORER RENDER
     ========================================================= */

  function renderExplorer() {

    const speaker =
      activeSpeakers[
        explorerIndex
      ];


    if (
      !speaker
    ) {

      return;
    }


    featuredImg.src =
      speaker.image;


    featuredImg.alt =
      speaker.name;


    featuredName.textContent =
      speaker.name;


    featuredTitle.textContent =
      speaker.title;


    featuredBio.textContent =

      bioMap[
        speaker.id
      ] ||

      "Profile details loading…";


    featuredBio.scrollTop =
      0;


    counter.textContent =

      `${String(
        explorerIndex + 1
      ).padStart(
        2,
        "0"
      )} / ${String(
        activeSpeakers.length
      ).padStart(
        2,
        "0"
      )}`;


    [
      ...thumbStrip.querySelectorAll(
        ".tfe-thumb-item"
      )
    ]

      .forEach(
        (
          button,
          index
        ) => {


          const active =
            index ===
            explorerIndex;


          button.classList.toggle(
            "is-active",
            active
          );


          button.setAttribute(
            "aria-selected",
            active
              ? "true"
              : "false"
          );


          if (
            active
          ) {

            button.scrollIntoView({

              behavior:
                "smooth",

              block:
                "nearest",

              inline:
                "center"

            });
          }

        }
      );

  }


  /* =========================================================
     CHANGE EXPLORER SPEAKER
     ========================================================= */

  function showSpeaker(
    index,
    focusName = false
  ) {

    if (
      index < 0
    ) {

      index =
        activeSpeakers.length -
        1;
    }


    if (
      index >=
      activeSpeakers.length
    ) {

      index =
        0;
    }


    explorerIndex =
      index;


    renderExplorer();


    ensureBio(
      activeSpeakers[
        index
      ].id
    )

      .then(
        () => {

          if (
            section.classList.contains(
              "tfe-explorer-open"
            )
          ) {

            renderExplorer();
          }

        }
      );


    if (
      focusName
    ) {

      featuredName.setAttribute(
        "tabindex",
        "-1"
      );


      featuredName.focus({
        preventScroll:
          true
      });
    }

  }


  /* =========================================================
     OPEN EXPLORER
     ========================================================= */

  function openExplorer() {

    buildThumbs();


    closeOtherCards();


    section.classList.add(
      "tfe-explorer-open"
    );


    explorer.setAttribute(
      "aria-hidden",
      "false"
    );


    showSpeaker(
      explorerIndex
    );


    requestAnimationFrame(
      () =>

        explorer.scrollIntoView({

          behavior:
            "smooth",

          block:
            "nearest"

        })
    );

  }


  /* =========================================================
     CLOSE EXPLORER
     ========================================================= */

  function closeExplorer() {

    section.classList.remove(
      "tfe-explorer-open"
    );


    explorer.setAttribute(
      "aria-hidden",
      "true"
    );


    requestAnimationFrame(
      () =>

        knowMoreBtn.focus({
          preventScroll:
            true
        })
    );

  }


  /* =========================================================
     EXPLORER EVENTS
     ========================================================= */

  knowMoreBtn.addEventListener(
    "click",
    openExplorer
  );


  backBtn.addEventListener(
    "click",
    closeExplorer
  );


  prevBtn.addEventListener(
    "click",
    () =>

      showSpeaker(
        explorerIndex - 1
      )
  );


  nextBtn.addEventListener(
    "click",
    () =>

      showSpeaker(
        explorerIndex + 1
      )
  );


  thumbLeft.addEventListener(
    "click",
    () => {

      thumbStrip.scrollBy({

        left:

          -Math.max(
            260,
            thumbStrip.clientWidth *
            .72
          ),

        behavior:
          "smooth"

      });

    }
  );


  thumbRight.addEventListener(
    "click",
    () => {

      thumbStrip.scrollBy({

        left:

          Math.max(
            260,
            thumbStrip.clientWidth *
            .72
          ),

        behavior:
          "smooth"

      });

    }
  );


  /* =========================================================
     EXPLORER KEYBOARD NAVIGATION
     ========================================================= */

  section.addEventListener(
    "keydown",
    event => {

      if (
        !section.classList.contains(
          "tfe-explorer-open"
        )
      ) {

        return;
      }


      if (
        event.key ===
        "ArrowLeft"
      ) {

        event.preventDefault();


        showSpeaker(
          explorerIndex - 1
        );

      } else if (
        event.key ===
        "ArrowRight"
      ) {

        event.preventDefault();


        showSpeaker(
          explorerIndex + 1
        );

      } else if (
        event.key ===
        "Escape"
      ) {

        event.preventDefault();


        closeExplorer();
      }

    }
  );


  /* =========================================================
     RESIZE
     ========================================================= */

  window.addEventListener(
    "resize",
    () => {

      clearTimeout(
        resizeTimer
      );


      resizeTimer =
        setTimeout(
          () => {

            markRows();


            const open =
              section.querySelector(
                ".tfe-speaker-card.is-open"
              );


            if (
              open &&
              !mobile.matches
            ) {

              keepInside(
                open
              );
            }

          },
          120
        );

    }
  );


  /* =========================================================
     BACK / FORWARD CACHE
     ========================================================= */

  window.addEventListener(
    "pageshow",
    event => {

      if (
        event.persisted
      ) {

        loadBios(
          true
        );
      }

    }
  );


  /* =========================================================
     START
     ========================================================= */

  markRows();


  revealWhenReady();

})();
