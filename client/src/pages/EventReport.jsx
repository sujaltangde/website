import React from "react";

const EventReport = React.memo(() => {
  return (
    <main className="min-h-screen bg-gray-900 pt-20">
      <h1 className="event-heading-component">Event Report</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="event-container-all">
          <img src="/assets/event1.svg" alt="not" />
          <div className="event-component-text">
            <h1 className="event-head">
              Cloud 101: Beginners Guide to AWS Cloud Computing
            </h1>
            <p
              style={{ textAlign: "justify", color: "#ffffff" }}
              className="name-event"
            >
              DevOps is the combination of cultural philosophies, practices, and
              tools that increases an organization’s ability to deliver
              applications and services at high velocity: evolving and improving
              products at a faster pace than organizations using traditional
              software development and infrastructure.
            </p>
            <button className="event-bn">Read More ⟶</button>
          </div>
        </div>
      </div>
    </main>
  );
});

EventReport.displayName = "EventReport";

export default EventReport;
