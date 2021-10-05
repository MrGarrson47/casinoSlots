import lineClasses from "./PaylinesOverlay_lines.module.css";
import flashAnimationClasses from "./PaylinesOverlay_flash_animations.module.css";
import matchAnimationClasses from "./PaylinesOverlay_match_animations.module.css";
import numberClasses from "./PaylinesOverlay_numbers.module.css";



export const getAllPaylineClasses = (showPaylines, paylineMatches, amountOfLines)=>{

    let {payline1MatchDouble, payline1MatchTriple, payline2MatchDouble, payline2MatchTriple, payline3MatchDouble, payline3MatchTriple, payline4MatchDouble, payline4MatchTriple, payline5MatchDouble, payline5MatchTriple, payline6MatchDouble, payline6MatchTriple, payline7MatchDouble, payline7MatchTriple} = paylineMatches;
   
    let payline1Classes = [lineClasses["payline-top-line"], lineClasses["brighten-paylines"], flashAnimationClasses["payline-flash-animation"]].join(" ");
  let payline2Classes = [lineClasses["payline-middle-line"], lineClasses["brighten-paylines"], flashAnimationClasses["payline-flash-animation"]].join(" ");
  let payline3Classes = [lineClasses["payline-bottom-line"], lineClasses["brighten-paylines"], flashAnimationClasses["payline-flash-animation"]].join(" ");
  let payline4Classes = lineClasses["payline-top-left-bottom-right-line"];
  let payline5Classes = lineClasses["payline-top-right-bottom-left-line"];
  let payline6Section1Classes = lineClasses["payline-middle-left-top-center-middle-right-line-section1"];
  let payline6Section2Classes = lineClasses["payline-middle-left-top-center-middle-right-line-section2"];
  let payline6Section3Classes = lineClasses["payline-middle-left-top-center-middle-right-line-section3"];
  let payline6Section4Classes = lineClasses["payline-middle-left-top-center-middle-right-line-section4"];
  let payline6Section5Classes = lineClasses["payline-middle-left-top-center-middle-right-line-section5"];
  let payline7Section1Classes = lineClasses["payline-middle-left-bottom-center-middle-right-line-section1"];
  let payline7Section2Classes = lineClasses["payline-middle-left-bottom-center-middle-right-line-section2"];
  let payline7Section3Classes = lineClasses["payline-middle-left-bottom-center-middle-right-line-section3"];
  let payline7Section4Classes = lineClasses["payline-middle-left-bottom-center-middle-right-line-section4"];
  let payline7Section5Classes = lineClasses["payline-middle-left-bottom-center-middle-right-line-section5"];
  let paylineNumber6RightSideClasses = numberClasses["number-6-right"];
  let paylineNumber7RightSideClasses = numberClasses["number-7-right"];
  let paylineOpacityClasses =  showPaylines ? lineClasses["brighten-paylines"] : lineClasses["dim-paylines"];

  // decide which paylines to show visually based on the amount of paylines selected by user
  if(amountOfLines === "3"){
    payline1Classes = [lineClasses["payline-top-line"], paylineOpacityClasses, flashAnimationClasses["payline-flash-animation"]].join(" ");
    payline2Classes = [lineClasses["payline-middle-line"], paylineOpacityClasses, flashAnimationClasses["payline-flash-animation"]].join(" ");
    payline3Classes = [lineClasses["payline-bottom-line"], paylineOpacityClasses, flashAnimationClasses["payline-flash-animation"]].join(" ");
  }else if(amountOfLines === "5"){
    payline1Classes = [lineClasses["payline-top-line"], paylineOpacityClasses, flashAnimationClasses["payline-flash-animation-copy1"]].join(" ");
    payline2Classes = [lineClasses["payline-middle-line"], paylineOpacityClasses, flashAnimationClasses["payline-flash-animation-copy1"]].join(" ");
    payline3Classes = [lineClasses["payline-bottom-line"], paylineOpacityClasses, flashAnimationClasses["payline-flash-animation-copy1"]].join(" ");
    payline4Classes = [lineClasses["payline-top-left-bottom-right-line"], paylineOpacityClasses, flashAnimationClasses["payline4-flash-animation"]].join(" ");
    payline5Classes = [lineClasses["payline-top-right-bottom-left-line"], paylineOpacityClasses, flashAnimationClasses["payline5-flash-animation"]].join(" ");
  }else if(amountOfLines === "7"){
    payline1Classes = [lineClasses["payline-top-line"], paylineOpacityClasses, flashAnimationClasses["payline-flash-animation-copy2"]].join(" ");
    payline2Classes = [lineClasses["payline-middle-line"], paylineOpacityClasses, flashAnimationClasses["payline-flash-animation-copy2"]].join(" ");
    payline3Classes = [lineClasses["payline-bottom-line"], paylineOpacityClasses, flashAnimationClasses["payline-flash-animation-copy2"]].join(" ");
    payline4Classes = [lineClasses["payline-top-left-bottom-right-line"], paylineOpacityClasses, flashAnimationClasses["payline4-flash-animation-copy1"]].join(" ");
    payline5Classes = [lineClasses["payline-top-right-bottom-left-line"], paylineOpacityClasses, flashAnimationClasses["payline5-flash-animation-copy1"]].join(" ");
    payline6Section1Classes = [lineClasses["payline-middle-left-top-center-middle-right-line-section1"], paylineOpacityClasses, flashAnimationClasses["payline6-Section1-flash-animation"]].join(" ");
    payline6Section2Classes = [lineClasses["payline-middle-left-top-center-middle-right-line-section2"], paylineOpacityClasses, flashAnimationClasses["payline6-Section2-flash-animation"]].join(" ");
    payline6Section3Classes = [lineClasses["payline-middle-left-top-center-middle-right-line-section3"], paylineOpacityClasses, flashAnimationClasses["payline6-Section3-flash-animation"]].join(" ");
    payline6Section4Classes = [lineClasses["payline-middle-left-top-center-middle-right-line-section4"], paylineOpacityClasses, flashAnimationClasses["payline6-Section4-flash-animation"]].join(" ");
    payline6Section5Classes = [lineClasses["payline-middle-left-top-center-middle-right-line-section5"], paylineOpacityClasses, flashAnimationClasses["payline6-Section5-flash-animation"]].join(" ");
    payline7Section1Classes = [lineClasses["payline-middle-left-bottom-center-middle-right-line-section1"], paylineOpacityClasses, flashAnimationClasses["payline7-Section1-flash-animation"]].join(" ");
    payline7Section2Classes = [lineClasses["payline-middle-left-bottom-center-middle-right-line-section2"], paylineOpacityClasses, flashAnimationClasses["payline7-Section2-flash-animation"]].join(" ");
    payline7Section3Classes = [lineClasses["payline-middle-left-bottom-center-middle-right-line-section3"], paylineOpacityClasses, flashAnimationClasses["payline7-Section3-flash-animation"]].join(" ");
    payline7Section4Classes = [lineClasses["payline-middle-left-bottom-center-middle-right-line-section4"], paylineOpacityClasses, flashAnimationClasses["payline7-Section4-flash-animation"]].join(" ");
    payline7Section5Classes = [lineClasses["payline-middle-left-bottom-center-middle-right-line-section5"], paylineOpacityClasses, flashAnimationClasses["payline7-Section5-flash-animation"]].join(" ");
  }

   // animate payline if match is found, depending on type of match
   if(payline1MatchDouble && !payline1MatchTriple){
    payline1Classes = matchAnimationClasses["payline1-match-double-animation"];
  }
  if(payline2MatchDouble && !payline2MatchTriple){
    payline2Classes = matchAnimationClasses["payline2-match-double-animation"];
  }
  if(payline3MatchDouble && !payline3MatchTriple){
    payline3Classes = matchAnimationClasses["payline3-match-double-animation"];
  }
  if(payline4MatchDouble && !payline4MatchTriple){
    payline4Classes = matchAnimationClasses["payline4-match-double-animation"];
  }
  if(payline5MatchDouble && !payline5MatchTriple){
    payline5Classes = matchAnimationClasses["payline5-match-double-animation"];
  }
  if(payline1MatchTriple){
    payline1Classes = matchAnimationClasses["payline1-match-triple-animation"];
  }
  if(payline2MatchTriple){
    payline2Classes = matchAnimationClasses["payline2-match-triple-animation"];
  }
  if(payline3MatchTriple){
    payline3Classes = matchAnimationClasses["payline3-match-triple-animation"];
  }
  if(payline4MatchTriple){
    payline4Classes = matchAnimationClasses["payline4-match-triple-animation"];
  }
  if(payline5MatchTriple){
    payline5Classes = matchAnimationClasses["payline5-match-triple-animation"];
  }
  if(payline6MatchDouble && !payline6MatchTriple){
    payline6Section1Classes = matchAnimationClasses["payline6-section1-match-double-animation"];
    payline6Section2Classes = matchAnimationClasses["payline6-section2-match-double-animation"];
    payline6Section3Classes = matchAnimationClasses["payline6-section3-match-double-animation"];
  }
  if(payline6MatchTriple){
    payline6Section1Classes = matchAnimationClasses["payline6-section1-match-triple-animation"];
    payline6Section2Classes = matchAnimationClasses["payline6-section2-match-triple-animation"];
    payline6Section3Classes = matchAnimationClasses["payline6-section3-match-triple-animation"];
    payline6Section4Classes = matchAnimationClasses["payline6-section4-match-triple-animation"];
    payline6Section5Classes = matchAnimationClasses["payline6-section5-match-triple-animation"];
  }
  if(payline7MatchDouble && !payline7MatchTriple){
    payline7Section1Classes = matchAnimationClasses["payline7-section1-match-double-animation"];
    payline7Section2Classes = matchAnimationClasses["payline7-section2-match-double-animation"];
    payline7Section3Classes = matchAnimationClasses["payline7-section3-match-double-animation"];
  }
  if(payline7MatchTriple){
    payline7Section1Classes = matchAnimationClasses["payline7-section1-match-triple-animation"];
    payline7Section2Classes = matchAnimationClasses["payline7-section2-match-triple-animation"];
    payline7Section3Classes = matchAnimationClasses["payline7-section3-match-triple-animation"];
    payline7Section4Classes = matchAnimationClasses["payline7-section4-match-triple-animation"];
    payline7Section5Classes = matchAnimationClasses["payline7-section5-match-triple-animation"];
  }
  return {
    payline1Classes,
    payline2Classes,
    payline3Classes,
    payline4Classes,
    payline5Classes,
    payline6Section1Classes,
    payline6Section2Classes,
    payline6Section3Classes,
    payline6Section4Classes,
    payline6Section5Classes,
    payline7Section1Classes,
    payline7Section2Classes,
    payline7Section3Classes,
    payline7Section4Classes,
    payline7Section5Classes,
    paylineNumber6RightSideClasses,
    paylineNumber7RightSideClasses
}
}