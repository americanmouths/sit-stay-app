import { injectGlobal } from 'styled-components'

/* colors
mintgreen: #95cfb7;
whitish blue: #edf7f3;
blue: #95cacf;
pinkish: #cf95ad;
*/

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Baloo+Tammudu|Lato');
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
    font-family: 'Baloo Tammudu', cursive;
    font-size: 2.5em;
  }
  .navbar-default .navbar-brand:hover {
    color: white;
  }
  .navbar-brand {
    line-height: 50px;
  }
  .navbar-default .navbar-nav>li>a {
    color: #edf7f3;
    font-size: 1.3em;
  }
  .navbar-default .navbar-nav>li>a:hover {
      color: #cf95ad;
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
    background: #cf95ad;
    color: #edf7f3;
  }
  span.glyphicon{
    color: #cf95ad;
  }
`
