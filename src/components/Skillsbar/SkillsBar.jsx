import React from "react";
import "./SkillsBar.css";


function SkillsBar () {
   return (
       <div className="container border-2 border-blue-900 shadow-2xl shadow-blue-900">

           <div className="skill-box">
               <span className="title"> HTML</span>
               <div className="skill-bar">
                   <span className="skill-per html">
                       <span className="tooltip">95%</span>
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">CSS</span>
               <div className="skill-bar">
                   <span className="skill-per css">
                       <span className="tooltip">80%</span>
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">JavaScript</span>
               <div className="skill-bar">
                   <span className="skill-per javascript">
                       <span className="tooltip">75%</span>
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">NodeJS</span>
               <div className="skill-bar">
                   <span className="skill-per nodejs">
                       <span className="tooltip">50%</span>
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">ReactJS</span>
               <div className="skill-bar">
                   <span className="skill-per reactjs">
                       <span className="tooltip">70%</span>
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">ExpressJS</span>
               <div className="skill-bar">
                   <span className="skill-per expressjs">
                       <span className="tooltip">75%</span>
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">WordPress</span>
               <div className="skill-bar">
                   <span className="skill-per wordpress">
                       <span className="tooltip">80%</span>
                   </span>
               </div>
           </div>
       </div>
   )
}

export default SkillsBar;