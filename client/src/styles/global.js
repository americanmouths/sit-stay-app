import { injectGlobal } from 'styled-components'

/* colors
mintgreen: #95cfb7;
whitish blue: #edf7f3;
blue: #95cacf;
pinkish: #cf95ad;
link-hover: #6c9599;
*/

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Baloo+Tammudu|Lato|Gamja+Flower');
  body {
    padding: 0;
    margin: 0;
    font-family: 'Lato', sans-serif;
    color: #cf95ad;
    background: #edf7f3;
  }
  .navbar-default {
    background: #95cfb7;;
    border-bottom: 1px solid white;
  }
  .navbar-default .navbar-brand {
    color: white;
    font-family: 'Gamja Flower', cursive;
    font-size: 2.5em;
  }
  .navbar-default .navbar-brand:hover {
    color: white;
  }
  .navbar-default .navbar-nav>li>a {
    color: #edf7f3;
    font-size: 1em;
  }
  .navbar-default .navbar-nav>li>a:hover {
      color: #6c9599;
  }
  .navbar-default .navbar-toggle {
    border-color: #95cfb7;
  }
  .navbar-default .navbar-toggle .icon-bar {
    background-color: #cf95ad;
  }
  .carousel-control{
    background-image: none;
    text-shadow: none;
  }
  .carousel-control.left,
  .carousel-control.right{
    background-image: none;
  }
  .jumbotron{
    width: 75%;
    margin: auto;
    background: #95cacf;
    color: #edf7f3;
    border-radius: 10px 70px; 
  }
  span.glyphicon{
    color: #cf95ad;
  }
`
/*  .navbar-brand {
    line-height: 50px;
  }
  */
