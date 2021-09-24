import React from "react";

const AboutCard = ({ title, desc, color }) => {
  return (
    <>
      <div className='about-card body-large'>
        <div className={`card-title ${color}`}>{title}</div>
        {desc}
      </div>
      <style jsx>
        {`
          .about-card{
              width: 30rem;
              background: var(--prussion);
              padding: 40px;
              color : var(--dove);
              margin-right:40px;
          }
          .about-card .card-title.yellow{
              background: var(--amber);
          }
          .about-card .card-title{
              font-size:32px;
              padding:6px 16px;
              background:var(--flamingo);
              margin-bottom:24px;
              width: fit-content;
          }
          @media only screen and (max-device-width: 760px) {
              .about-card{
                  width: 100%;
                  margin-bottom:2rem;
              }
          }
            `}
      </style>
    </>
  )
}

export default AboutCard