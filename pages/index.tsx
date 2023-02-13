import { NextPage } from 'next';
import { Fragment } from 'react';
import { Footer } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';
import Script from 'next/script';
import { slideInDownAnimate } from 'utils/animation';
import NextLink from 'components/reuseable/links/NextLink';

const LandingPage: NextPage = () => {
  return (
    <Fragment>
      <Script
        id="Cookiebot"
        src="https://consent.cookiebot.com/uc.js"
        data-cbid="1315d47d-d606-4f96-a103-c9afa6469781"
        data-blockingmode="auto"
        type="text/javascript"
      ></Script>

      <PageProgress />

      <main className="content-wrapper mt-12 mb-12">
        <section className="wrapper bg-light position-relative min-vh-70 d-lg-flex align-items-center">
          <div
            style={{ backgroundImage: 'url(/img/photos/index.jpg)' }}
            className="rounded-4-lg-start col-lg-6 order-lg-2 position-lg-absolute top-0 end-0 image-wrapper bg-image bg-cover h-100 min-vh-50"
          />

          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="mt-10 mt-md-11 mt-lg-n10 px-10 px-md-11 ps-lg-0 pe-lg-13 text-center text-lg-start">
                  <h1 className="display-1 mb-5" style={slideInDownAnimate('600ms')}>
                    One Weekend. One Goal. Learn a new language 🙌
                  </h1>
                  <br />
                  <p className="lead fs-25 lh-sm mb-7 pe-md-10" style={slideInDownAnimate('900ms')}>
                    Start learning a language with other folks. One weekend. One cohort. With one goal. Learn a new
                    language. And by side some party 🪩 new food 🥙 and having a good time together 🍻
                  </p>

                  <div
                    className="d-flex justify-content-center justify-content-lg-start"
                    style={slideInDownAnimate('900ms')}
                  >
                    <span style={slideInDownAnimate('1200ms')}>
                      <NextLink
                        href="/german"
                        title="learn german 🇩🇪"
                        className="btn btn-lg btn-primary rounded-pill me-2"
                      />
                    </span>
                  </div>
                  <br />

                  <div
                    className="d-flex justify-content-center justify-content-lg-start"
                    style={slideInDownAnimate('900ms')}
                  >
                    <span style={slideInDownAnimate('1200ms')}>
                      <NextLink
                        href="/portuguese"
                        title="learn portuguese 🇵🇹"
                        className="btn btn-lg btn-primary rounded-pill me-2"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="wrapper bg-light position-relative mg-12">
          <div className="container py-14 py-md-16">
            <Fragment>
              <h3 className="display-4 mb-3 text-center">Start discovering new languages for yourself now!</h3>
              <p className="lead fs-lg mb-10 text-center">
                We're just launching, but awesome if you're part of it from the start 🚀👨‍🚀✨
              </p>
            </Fragment>
          </div>
        </section>
      </main>

      <Footer />
    </Fragment>
  );
};

export default LandingPage;
