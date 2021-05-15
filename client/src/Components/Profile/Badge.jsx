// import React, { useEffect, useRef } from 'react';
// import * as d3 from 'd3';
// import { scaleQuantize } from 'd3-scale';
// import _ from 'lodash';
// import styled from 'styled-components';




// const Badge = ({badge, badge: {author, category, date, title, type, url}}) => {

//     const badgeSize = 50;

//     //SVG
//     //Move to - drops to the x, y component
//     //line to - line to moves from where point currently is to ending point
//     //curve to - curve to px1, px2 py1, py2


//     //CATEGORY OUTER SPACE
//     const outerSpaceBP = 'M 0,0 C -10,-20 -20,-30 0,-50 C 20,-30 10,-20 0,0';

//     //CATEGORY NATURAL HISTORY
//     const naturalHistoryBP = 'M 0,0 C -10,-10 -30,-50 0,-50 C 30,-50 10,-10 0,0';

//     //CATEGORY PLANET EARTH
//     const planetEarthBP = 'M 0,0 C -10,-20 -20,-30 0,-50 C 20,-30 10,-20 0,0';

//     //CATEGORY GENERAL
//     const generalBP = 'M0,0 C-1,-17 -29,-20 -8,-58 C-16,-22 24,-3 7,-50 C25,-30 1,-15 0,0';

//     //CATEGORY daily challenge
//     const dailyChallengeBP = 'M0,0 C-1,-15 -25,-30 -10,-50 C-10,-40 10,-40 10,-50 C25,-30 1,-15 0,0';


//     let badgeGrouping = () => {
//         if (category === "Planet Earth") {
//             return planetEarthBP
//         } else if (category === "Outer Space") {
//             return outerSpaceBP
//         } else if (category === "Natural History") {
//             return naturalHistoryBP
//         } else if (category === "science") {
//             return generalBP
//         } else {
//             return dailyChallengeBP;
//     }}

//     let badgeColor = () => {
//         let colorArticle = ' red';
//         let colorDoc =' cornflowerblue';
//         let dailyChallenge =' goldenrod';

//         if (type === "article") {
//             return colorArticle
//         } else if (type === "documentary") {
//             return colorDoc
//         } else if (title === "trophy"){
//             return dailyChallenge;
//         }
//     }


//     const minMax = [0, title.length];
//     let sizeScale = d3.scaleLinear().domain(minMax).range([0.1, 0.5]);

//     let quantize = d3.scaleQuantize();
//     let datePetals = date.slice(8, 10); //RETURNING DATE DAY
//     let numPetalScale = d3.scaleQuantize().domain(minMax).range([5, 4, 23, 19, 17]);



//     const d = badge;
//     const numPetals = numPetalScale(datePetals);
//     const sizePetals = sizeScale(numPetals);
//     const petPath = badgeGrouping(category);
//     // console.log(petPath, 'petPath');
//     const badgeType = {
//         sizePetals,
//         petals: _.times(numPetals, i => {
//             return {
//                 angle: 360 * i / numPetals,
//                 petPath
//             }
//         }),
//     };

//     // console.log(badgeType, 'BADGE TYPE');
//     let colorScale = d3.scaleOrdinal()
//     .domain(d3.extent(minMax))
//     .range(["#CBC2DD", "#A393C0", "#4E2A84", "white"]);

//     var svg = document.getElementsByTagName('svg')[0];

//     const badges = d3.select(svg)
//         .selectAll('g')
//         .data([badge])
//         .enter()
//         .append('g')
//         .attr('transform', d => `translate(${badgeSize}, ${badgeSize})scale(${d.sizePetals})`)
//         .attr('transform', d => `rotate(${petPath})`);

//         console.log(badges, 'BADGES D3');




//     return (

//         <div>
//         <svg width={badgeSize} height={badgeSize}><path transform="translate(25,50)" d={petPath}/>
//         </svg>



//         </div>

//     );
// }

// export default Badge;