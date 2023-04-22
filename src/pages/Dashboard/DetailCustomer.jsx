import Navbar from "../../components/Navbar";

export const DetailCustomer = () => (
  <div className="dashboard-wrapper">
    <div className="dashboard-main">
      <div className="sidebar-spacer" />
      <div className="dashboard-content">
        <Navbar />
        <div className="dashboard-main-content">
          <a href="./dashboard.html">
            <img
              src="images/CaretLeft.svg"
              loading="lazy"
              alt=""
              className="image"
            />
          </a>
          <div className="dashboard-page-header">
            <h2>Reiciendis</h2>
          </div>
          <div className="container">
            <div className="_2-5-1-grid">
              <div className="module-group">
                <div className="module">
                  <div className="module-header">
                    <h3 className="module-heading">Customer Info</h3>
                  </div>
                  <div className="module-main">
                    <div className="_50-width">
                      <div className="field-label">Email</div>
                      <p>Jarred_Crona@hotmail.com</p>
                    </div>
                    <div className="_50-width">
                      <div className="field-label">Phone Number</div>
                      <p>+1 187 935 767</p>
                    </div>
                    <div className="_50-width">
                      <div className="field-label">Address</div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                      </p>
                    </div>
                    <div className="_50-width">
                      <div className="field-label">
                        Recommended solar roof size
                      </div>
                      <p>4.7kW</p>
                    </div>
                    <div className="_50-width">
                      <div className="field-label">Created</div>
                      <p>December 2021</p>
                    </div>
                  </div>
                </div>
                <div className="module">
                  <div className="module-header">
                    <h3 className="module-heading">Add a note</h3>
                  </div>
                  <div className="module-main" style={{ paddingTop: 18 }}>
                    <div className="field-block">
                      <label htmlFor="Username">Note</label>
                      <textarea
                        placeholder=""
                        maxLength={5000}
                        data-name="Field"
                        name="field"
                        id="field"
                        className="text-area full-width w-input"
                        defaultValue={""}
                      />
                    </div>
                    <input
                      type="submit"
                      defaultValue="Submit"
                      data-wait="Please wait..."
                      className="button w-button"
                    />
                  </div>
                </div>
              </div>
              <div
                id="w-node-_78978071-a043-772a-06ef-09b2a97f8681-7ff34a1a"
                className="action-group"
              >
                <a href="#" className="action-card w-inline-block">
                  <img
                    src="images/Receipt.svg"
                    loading="lazy"
                    width={22}
                    alt=""
                    className="action-icon"
                  />
                  <h3 className="module-heading">Solar savings report</h3>
                </a>
                <a href="#" className="action-card w-inline-block">
                  <img
                    src="images/PaperPlaneRight.svg"
                    loading="lazy"
                    width={22}
                    alt=""
                    className="action-icon"
                  />
                  <h3 className="module-heading">Send an email</h3>
                </a>
                <a href="#" className="action-card w-inline-block">
                  <img
                    src="images/Note.svg"
                    loading="lazy"
                    width={22}
                    alt=""
                    className="action-icon"
                  />
                  <h3 className="module-heading">Add a note</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-footer">
          <p className="paragraph-small light">
            © Dawn All Rights Reserved・&nbsp;Built by&nbsp;
            <a
              href="https://www.nikolaibain.com"
              target="_blank" rel="noreferrer"
              className="simple-link light"
            >
              Nikolai Bain
            </a>
            &nbsp;・&nbsp;Powered by{" "}
            <a
              href="https://webflow.com"
              target="_blank" rel="noreferrer"
              className="simple-link light"
            >
              Webflow
            </a>{" "}
            ・&nbsp;Template{" "}
            <a
              href="template-resources/licenses.html"
              target="_blank" rel="noreferrer"
              className="simple-link light"
            >
              License
            </a>
          </p>
        </div>
      </div>
      <div data-hover="false" data-delay={0} className="new-button w-dropdown">
        <nav className="add-menu w-dropdown-list">
          <a href="plan.html" className="add-link w-inline-block">
            <img
              src="images/Note.svg"
              loading="lazy"
              width={27}
              alt=""
              className="sidebar-icon"
            />
            <div className="sidebar-link-text">New Task</div>
          </a>
          <a href="plan.html" className="add-link w-inline-block">
            <img
              src="images/EnvelopeOpen.svg"
              loading="lazy"
              width={27}
              alt=""
              className="sidebar-icon"
            />
            <div className="sidebar-link-text">New Email</div>
          </a>
          <a href="plan.html" className="add-link w-inline-block">
            <img
              src="images/CalendarBlank.svg"
              loading="lazy"
              width={27}
              alt=""
              className="sidebar-icon"
            />
            <div className="sidebar-link-text">New Event</div>
          </a>
        </nav>
      </div>
    </div>
  </div>
);
