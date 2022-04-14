import { graphql, useStaticQuery } from 'gatsby';
import * as React from "react";
import { GatsbyImage as Image, getImage } from 'gatsby-plugin-image';
import IconGoogleSource from '../images/google.svg';
import IconAirbnbSource from '../images/airbnb.svg';
import IconUberEatsSource from '../images/uber-eats.svg';
import IconAmazonSource from '../images/amazon.svg';
import IconOrnamentSource from '../images/ornament.svg';
import IconPic1Source from '../images/pic1.svg';
import IconPic2Source from '../images/pic2.svg';
import IconPic3Source from '../images/pic3.svg';
import IconPic4Source from '../images/pic4.svg';
import IconPlaySource from '../images/play.svg';
import BlueBgSource from '../images/bg2.svg';
import BlueBg2Source from '../images/bg.svg';

// markup
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: {eq: "hero.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
          )
        }
      }
      bgImage: file(relativePath: {eq: "bg.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            height: 690
          )
        }
      }
      paulImage: file(relativePath: {eq: "paul.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
          )
        }
      }
      peopleImage: file(relativePath: {eq: "people.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
          )
        }
      }
      productImage: file(relativePath: {eq: "product.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
          )
        }
      }
    }
  `);

  return (
    <>
      <div className="container-md">
        <div className="row md:flex-nowrap items-center">
          <div className="col-full md:col-6">
            <h1 className="typo-h1 mt-14 md:mt-0">
              A Digital Product Agency
            </h1>
            <p className="typo-body mt-10 text-gray-300">
              Leading digital agency with solid design and development expertise. We build readymade websites, mobile
              applications, and elaborate online business services.
            </p>
            <button className="mt-8 text-xl py-5 px-10 rounded-full bg-blue-500 text-white">Contact Now</button>
          </div>
          <div className="col-full md:col-6 mt-10 md:mt-0 md:ml-1/12">
            <Image
              image={getImage(data.heroImage)}
            />
          </div>
        </div>
      </div>
      <div className="mt-20 md:mt-10">
        <div className="container-md">
          <h2 className="typo-h2">
           Our Client
          </h2>
          <div className="row flex-wrap justify-left md:justify-between items-center">
            <div className="col">
              <p className="typo-blockquote mt-4 text-gray-400 max-w-xs">
                Several selected clients, who already believe in our service.
              </p>
            </div>
            <div className="col">
              <img src={IconGoogleSource} className="mt-5 md:mt-0" alt="google icon" />
            </div>
            <div className="col">
              <img src={IconAirbnbSource} className="mt-5 md:mt-0" alt="airbnb icon" />
            </div>
            <div className="col">
              <img src={IconUberEatsSource} className="mt-5 md:mt-0" alt="uber-eats icon" />
            </div>
            <div className="col">
              <img src={IconAmazonSource} className="mt-5 md:mt-0" alt="amazon icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-32 md:mt-60 container-lg relative">
        <div className="absolute inset-0 bg-no-repeat" style={{ backgroundImage: `url(${BlueBg2Source})` }}>
        </div>
        <div className="container-md relative">
          <div className="row items-center">
            <div className="col-full lg:col-5">
              <h2 className="typo-h2">
                How can we help your Business ?
              </h2>
              <p className="typo-body mt-8 text-gray-300">
                We build readymade websites, mobile applications, and elaborate online business services.
              </p>
            </div>
            <div className="col-full lg:col-7">
              <div className="row">
                <div className="col-full md:col-6 lg:col-6 mt-8 lg:mt-0">
                  <div className="bg-white rounded-3xl text-center pt-10 pb-14 px-8 -mt-0 lg:-mt-14 border-2">
                    <img src={IconPic1Source} className="mx-auto" alt="pic1 icon" />
                    <h4 className="typo-h4 mt-8">
                      Business Idea Planning
                    </h4>
                    <p className="typo-body mt-8 text-gray-400">
                      We present you a proposal and discuss niffty-gritty like
                    </p>
                  </div>
                </div>
                <div className="col-full md:col-6 lg:col-6 mt-8 lg:mt-0">
                  <div className="bg-white rounded-3xl text-center pt-10 pb-14 px-8 -mt-0 lg:-mt-36 border-2">
                    <img src={IconPic2Source} className="mx-auto" alt="pic1 icon" />
                    <h4 className="typo-h4 mt-8">
                      Financial Planning System
                    </h4>
                    <p className="typo-body mt-8 text-gray-400">
                      Protocols apart from aengage models, pricing billing
                    </p>
                  </div>
                </div>
                <div className="col-full md:col-6 lg:col-6 mt-8">
                  <div className="bg-white rounded-3xl text-center pt-10 pb-14 px-8 border-2">
                    <img src={IconPic3Source} className="mx-auto" alt="pic1 icon" />
                    <h4 className="typo-h4 mt-8">
                      Development Website and App
                    </h4>
                    <p className="typo-body mt-8 text-gray-400">
                      Communication protocols apart from engagement models
                    </p>
                  </div>
                </div>
                <div className="col-full md:col-6 lg:col-6 mt-8 lg:mt-0">
                  <div className="bg-white rounded-3xl text-center pt-10 pb-14 px-8 -mt-0 lg:-mt-14 border-2">
                    <img src={IconPic4Source} className="mx-auto" alt="pic1 icon" />
                    <h4 className="typo-h4 mt-8">
                      Market Analysis Project
                    </h4>
                    <p className="typo-body mt-8 text-gray-400">
                      Protocols apart from aengage models, pricing billing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-32">
        <div className="container-md">
          <div className="row items-center">
            <div className="col-full md:col-6">
              <div className="relative">
                <Image
                  image={getImage(data.productImage)}
                />
                <div className="absolute inset-0 flex justify-center items-center">
                  <img src={IconPlaySource} className="mx-auto" alt="play icon" />
                </div>
              </div>
            </div>
            <div className="col-full md:col-5 md:ml-1/12">
              <h2 className="typo-h2">
                Great Digital Product Agency since 2016
              </h2>
              <p className="typo-body mt-8 text-gray-300">
                Our Business Plan is a written document describing a company's core business activites, Objectives,
                and how it plans to achieve its goals. Our goal is to provide our client high quality Product with modern
                idea accordingly their budgets and according thir reuirements.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-32">
        <div className="container-md">
          <div className="text-center">
            <h2 className="typo-h2">
              What our happy client say
            </h2>
            <p className="typo-blockquote mt-4 text-center text-gray-400">
              Several selected clients, who already believe in our service.
            </p>
          </div>
          <div className="row items-center mt-16">
            <div className="col-full md:col-6 lg:col-4">
              <Image
                image={getImage(data.paulImage)}
              />
            </div>
            <div className="col-full md:col-6 lg:col-4">
              <h4 className="typo-h4">
                Matthew Paul
              </h4>
              <p className="typo-body mt-5">
                Perfect, very good job! Thank you for the amazing design and work. Really impressed with the high
                quality and quick turnaround time. Highly recommend.
              </p>
              <div className="flex mt-10">
                <div className="h-4 w-4 bg-blue-500 rounded-full"></div>
                <div className="h-4 w-4 bg-gray-100 ml-6 rounded-full"></div>
                <div className="h-4 w-4 bg-gray-100 ml-6 rounded-full"></div>
                <div className="h-4 w-4 bg-gray-100 ml-6 rounded-full"></div>
                <div className="h-4 w-4 bg-gray-100 ml-6 rounded-full"></div>
              </div>
            </div>
            <div className="col-full md:col-6 lg:col-4 mt-14 md:mt-0">
              <Image
                image={getImage(data.peopleImage)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-md mt-24 py-14 md:py-36">
        <div className="bg-blue-100 rounded-75 relative">
          <div className="absolute inset-0 bg-no-repeat bg-right hidden md:block" style={{ backgroundImage: `url(${BlueBgSource})` }}>
          </div>
          <div className="row items-center py-24 relative">
            <div className="col text-center sm:text-left sm:ml-20 mx-auto">
              <h2 className="typo-h2">
                Subscribe Newsletter
              </h2>
              <p className="typo-blockquote mt-5 text-gray-400">
                I will update good news and promotion service not spam
              </p>
            </div>
            <div className="col mx-auto">
              <div className="sm:bg-white sm:shadow-2xl sm:rounded-full overflow-hidden sm:py-2.5 sm:pr-2.5 mt-5 md:mt-0">
                <form className="flex flex-col sm:flex-row sm:items-center">
                  <input
                    className="bg-white typo-body text-gray-500 sm:mr-4 outline-none min-w-[220px] px-10 py-5 rounded-full"
                    placeholder="Enter your email address..."
                  />
                  <button className="text-base py-5 px-10 bg-blue-500 rounded-full text-white mt-4 sm:mt-0">
                    Contact Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
