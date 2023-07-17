"use client";
import React, { useEffect } from "react";
// import "bootstrap/dist/js/bootstrap.bundle"
const FrequentlyAskQuestion = () => {
  useEffect(() => {
    const collapseElements = document.querySelectorAll(
      '[data-bs-toggle="collapse"]'
    );
    const collapseList = Array.from(collapseElements);

    collapseList.forEach((element) => {
      element.addEventListener("click", () => {
        const target = document.querySelector(
          element.getAttribute("data-bs-target")
        );
        const isExpanded = target.classList.contains("show");

        // Close all other open items
        collapseList.forEach((item) => {
          const itemTarget = document.querySelector(
            item.getAttribute("data-bs-target")
          );
          if (item !== element && itemTarget.classList.contains("show")) {
            itemTarget.classList.remove("show");
          }
        });

        // Toggle the clicked item
        if (isExpanded) {
          target.classList.remove("show");
        } else {
          target.classList.add("show");
        }
      });
    });
  }, []);
  return (
    <>
      <section id="faq" class="faq">
        <div class="container" data-aos="fade-up">
          <div class="row gy-4">
            <div class="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
              <div class="content px-xl-5">
                <h3>
                  Frequently Asked <strong>Questions</strong>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Duis aute irure dolor in reprehenderit
                </p>
              </div>

              <div class="accordion accordion-flush px-xl-5" id="faqlist">
                <div
                  class="accordion-item"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <h3 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-1"
                    >
                      <i class="bi bi-question-circle question-icon"></i>
                      Do you have a concrete plan for the project?
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    class="accordion-collapse collapse"
                    data-bs-parent="#faqlist"
                  >
                    <div class="accordion-body">
                      Their plan should include: The overall goal of the project
                      The intended audience Important features/modules, not just
                      “sort of like X website/app” Approximate (achievable)
                      timelines Approximate budget Understanding the importance
                      of project management systems to help achieve timelines
                      Who’s involved in milestone sign-offs (just them or other
                      stakeholders?) Potential screen mockups or user stories
                    </div>
                  </div>
                </div>
                {/* <!-- # Faq item--> */}

                <div
                  class="accordion-item"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <h3 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-2"
                    >
                      <i class="bi bi-question-circle question-icon"></i>
                      What are the most important features of your project to
                      build an MVP?
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    class="accordion-collapse collapse"
                    data-bs-parent="#faqlist"
                  >
                    <div class="accordion-body">
                      Projects don’t always run to completion. The client runs
                      out of money, loses interest in the project, decides it’s
                      not necessary or decides to go with a ready-made product
                      instead. These things happen.
                    </div>
                  </div>
                </div>
                {/* <!-- # Faq item--> */}

                <div
                  class="accordion-item"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <h3 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-3"
                    >
                      <i class="bi bi-question-circle question-icon"></i>
                      What is your timeline for deliverables?
                    </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    class="accordion-collapse collapse"
                    data-bs-parent="#faqlist"
                  >
                    <div class="accordion-body">
                      Once you’ve got past the first hurdle, and the client has
                      properly fleshed out how their project should come
                      together, you’ll need to look at deliverables. The Agile
                      approach is best suited to freelance software development,
                      but that doesn’t mean that milestones can’t (or shouldn’t)
                      be set. This will involve mapping out a full timeline with
                      the client.
                    </div>
                  </div>
                </div>
                {/* <!-- # Faq item--> */}

                <div
                  class="accordion-item"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <h3 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-4"
                    >
                      <i class="bi bi-question-circle question-icon"></i>
                      Let’s talk money: Are we going by milestone or hourly?
                    </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    class="accordion-collapse collapse"
                    data-bs-parent="#faqlist"
                  >
                    <div class="accordion-body">
                      <i class="bi bi-question-circle question-icon"></i>
                      Getting paid is the aim of this gig, so talking about how
                      that’s going to happen is essential. Clients may be keen
                      to go with a milestone-based approach. Sure, that makes
                      sense — they’re paying for what you’re delivering. This
                      may not be an ideal choice as a dev, though. Unless the
                      project is fairly simple, you’ve done similar ones 1,000
                      times already, and you can accurately plot out how long
                      each part is going to take, it’s difficult to accurately
                      guess costs with a milestone-based approach.
                    </div>
                  </div>
                </div>
                {/* <!-- # Faq item--> */}

                <div
                  class="accordion-item"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <h3 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-5"
                    >
                      <i class="bi bi-question-circle question-icon"></i>
                      How long does it take to develop software with you?
                    </button>
                  </h3>
                  <div
                    id="faq-content-5"
                    class="accordion-collapse collapse"
                    data-bs-parent="#faqlist"
                  >
                    <div class="accordion-body">
                    We need to know your project needs first in order to tell you the exact time that is required to develop your software. To tell you, it is possible to run a project from start to finish in a couple of weeks, but it’s also possible to run a project for several years. For a more precise answer, we suggest you contact a member of our business development team. They will be able to provide you with the most accurate estimate.
                    </div>
                  </div>
                </div>
                {/* <!-- # Faq item--> */}
              </div>
            </div>

            <div
              class="col-lg-5 align-items-stretch order-1 order-lg-2 img"
              style={{ backgroundImage: `url("assets/img/about.jpg")` }}
            >
              &nbsp;
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FrequentlyAskQuestion;
