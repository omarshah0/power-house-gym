import React, { useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const tl = gsap.timeline()
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.from(".scroll-about", {
      scrollTrigger: {
        trigger: ".scroll-about",
        toggleActions: "play none none none",
        start: "top 80%",
        end: "+=300",
        scrub: 1,
      },
      duration: 2,
      xPercent: 100,
    })
    gsap.from(".about-image", {
      scrollTrigger: {
        trigger: ".scroll-about",
        toggleActions: "play none none none",
        start: "top 80%",
        end: "+=300",
        scrub: 1,
      },
      duration: 2,
      xPercent: -100,
    })
    gsap.from(".trainers", {
      scrollTrigger: {
        trigger: ".trainers",
        start: "10%",
        end: "+=300",
        toggleActions: "play none none none",
      },
      yPercent: 100,
      stagger: 0.3, // 0.1 seconds between when each ".box" element starts animating
    })
  }, [])
  return (
    <>
      <Layout>
        <SEO title="Power Gym" />
        <main>
          {/* <!-- Hero --> */}
          <div
            className="relative pt-16 pb-32 flex content-center items-center justify-center"
            style={{ minHeight: "95vh" }}
          >
            <div
              className="absolute top-0 w-full h-full bg-top bg-cover"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80')",
              }}
            >
              <span
                id="blackOverlay"
                className="w-full h-full absolute opacity-75 bg-black"
              ></span>
            </div>
            <div className="container relative mx-auto">
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                  <div>
                    <h1 className="text-white font-semibold text-5xl">
                      Feel The <span className="text-orange-500">Power</span>
                    </h1>
                    <p className="mt-4 text-lg text-gray-300">
                      Welcome to The Power Room. We are a fitness and training
                      center that focuses on pushing you to your absolute limit.
                      Download our complete brochure to get started today!
                    </p>
                    <a
                      href="#"
                      className="bg-transparent hover:bg-orange-500 text-orange-500 font-semibold hover:text-white p-4 border border-orange-500 hover:border-transparent rounded inline-block mt-5 cursor-pointer"
                    >
                      Download Brochure
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
              style={{ height: "70px", transform: "translateZ(0px)" }}
            >
              <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon points="2560 0 2560 100 0 100"></polygon>
              </svg>
            </div>
          </div>

          {/* <!-- About Section --> */}
          <section id="about" className="relative py-20 bg-black text-white">
            <div className="container mx-auto px-4">
              <div className="items-center flex flex-wrap">
                <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                  <img
                    alt="..."
                    className="max-w-full rounded-lg shadow-lg about-image"
                    src="https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                  />
                </div>
                <div className="w-full md:w-5/12 ml-auto mr-auto px-4 scroll-about">
                  <div className="md:pr-12 ">
                    <small className="text-orange-500">About our gym</small>
                    <h3 className="text-4xl uppercase font-bold">
                      Safe Body Building
                    </h3>
                    <p className="mt-4 text-lg leading-relaxed">
                      The extension comes with three pre-built pages to help you
                      get started faster. You can change the text and images and
                      you're good to go.
                    </p>
                    <ul className="list-none mt-6">
                      <li className="py-2">
                        <div className="flex items-center">
                          <div>
                            <span className="font-semibold inline-block py-3 mr-3 text-orange-500">
                              <i className="fas fa-dumbbell fa-2x"></i>
                            </span>
                          </div>
                          <div>
                            <h4 className="text-xl">
                              The latest & greatest gym equipment
                            </h4>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="flex items-center">
                          <div>
                            <span className="font-semibold inline-block py-3 mr-3 text-orange-500">
                              <i className="fas fa-hard-hat fa-2x"></i>
                            </span>
                          </div>
                          <div>
                            <h4 className="text-xl">
                              5-inch, quality foam floor padding
                            </h4>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="flex items-center">
                          <div>
                            <span className="font-semibold inline-block py-3 mr-3 text-orange-500">
                              <i className="fas fa-users fa-2x"></i>
                            </span>
                          </div>
                          <div>
                            <h4 className="text-xl">3 professional trainers</h4>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- Trainers Section --> */}
          <section className="pt-20 pb-48">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-center text-center mb-24">
                <div className="w-full lg:w-6/12 px-4">
                  <h2 className="text-4xl font-semibold uppercase">
                    Meet Our Trainers
                  </h2>
                  <p className="text-lg leading-relaxed m-4">
                    Our trainers are are here to dedicate the time and effort
                    that you need to get in the best shape of your life
                  </p>
                </div>
              </div>
              {/* <!-- Trainer Card Wrapper --> */}
              <div className="flex flex-wrap overflow-hidden">
                {/* <!-- Card 1 --> */}
                <div className="w-full md:w-4/12 lg:mb-0 mb-12 px-4 overflow-hidden trainers">
                  <div className="px-6">
                    <img
                      alt="..."
                      src="https://images.unsplash.com/photo-1597347343908-2937e7dcc560?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                      className="shadow-lg rounded max-w-full mx-auto"
                      style={{ maxWidth: "250px" }}
                    />
                    <div className="pt-6 text-center">
                      <h5 className="text-xl font-bold">Mr Rogers</h5>
                      <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                        Neighborhood Watchman
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- Card 2 --> */}
                <div className="w-full md:w-4/12 lg:mb-0 mb-12 px-4 trainers">
                  <div className="px-6">
                    <img
                      alt="..."
                      src="https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                      className="shadow-lg rounded max-w-full mx-auto"
                      style={{ maxWidth: "250px" }}
                    />
                    <div className="pt-6 text-center">
                      <h5 className="text-xl font-bold">
                        Strawberry Shortcake
                      </h5>
                      <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                        Cupcake Smasher
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- Card 3 --> */}
                <div className="w-full md:w-4/12 lg:mb-0 mb-12 px-4 trainers">
                  <div className="px-6">
                    <img
                      alt="..."
                      src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                      className="shadow-lg rounded max-w-full mx-auto"
                      style={{ maxWidth: "250px" }}
                    />
                    <div className="pt-6 text-center">
                      <h5 className="text-xl font-bold">Ronald McDonald</h5>
                      <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                        Double Whoopass With Cheese
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- Contact Header Section --> */}
          <section className="relative block bg-black text-white">
            <div
              className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
              style={{ height: "80px", transform: "translateZ(0px)" }}
            >
              <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon points="2560 0 2560 100 0 100"></polygon>
              </svg>
            </div>
            <div className="container mx-auto px-4 lg:pt-24 lg:pb-10 pb-20 pt-20">
              <div className="flex flex-wrap text-center justify-center">
                <div className="w-full lg:w-6/12 px-4">
                  <h2 className="text-4xl font-semibold text-white uppercase">
                    Contact Us
                  </h2>
                  <p className="text-lg leading-relaxed mt-4 mb-4">
                    Contact us to ask any questions, aquire a membership, talk
                    to our trainers or anything else
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- Contact Form --> */}
          <section className="relative block py-24 lg:pt-0 bg-black">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                    <div className="flex-auto p-5 lg:p-10 bg-orange-500 text-white">
                      <h4 className="text-2xl font-semibold">
                        Want to work with us?
                      </h4>
                      <p className="leading-relaxed mt-1 mb-4">
                        Complete this form and we will get back to you in 24
                        hours.
                      </p>
                      <div className="relative w-full mb-3 mt-8">
                        <label
                          className="block uppercase text-xs font-bold mb-2"
                          for="full-name"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="px-3 py-3 placeholder-gray-400 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                          placeholder="Full Name"
                          style={{ transition: "all 0.15s ease 0s" }}
                        />
                      </div>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-xs font-bold mb-2"
                          for="email"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          className="px-3 py-3 placeholder-gray-400 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                          placeholder="Email"
                          style={{ transition: "all 0.15s ease 0s" }}
                        />
                      </div>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-xs font-bold mb-2"
                          for="message"
                        >
                          Message
                        </label>
                        <textarea
                          rows="4"
                          cols="80"
                          className="px-3 py-3 placeholder-gray-400 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                          placeholder="Type a message..."
                        ></textarea>
                      </div>
                      <div className="text-center mt-6">
                        <button
                          className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                          type="button"
                          style={{ transition: "all 0.15s ease 0s" }}
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  )
}

export default IndexPage
