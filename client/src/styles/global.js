import { injectGlobal } from 'styled-components'

/* colors
mintgreen: #95cfb7;
whitish blue: #edf7f3;
blue: #95cacf;
gray: #686e77;
light-gray: #757C83;
*/

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Baloo+Tammudu|Lato|Gamja+Flower');
  body {
    padding: 0;
    margin: 0;
    font-family: 'Lato', sans-serif;
    color: #686e77;
    background: #edf7f3;
  }
  .navbar-default {
    background-image: linear-gradient(#95cfb7, #edf7f3);
    border: none;
    padding-bottom: 70px;
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
    color: #757C83;
    font-size: 1em;
  }
  .navbar-default .navbar-nav>li>a:hover,
  .navbar-default .navbar-nav>li>a:focus,
  .navbar-default .navbar-nav>li>a:active{
      color: #edf7f3;
  }
  .navbar-default .navbar-toggle {
    border: none;
  }
  .navbar-default .navbar-toggle .icon-bar {
    background-color: #757C83;
    border: none;
  }
  .dropdown-menu>li>a {
    color: #757C83;
  }
  .dropdown-menu>li>a:hover {
    background: #95cacf;
  }
  .navbar-default .navbar-nav>.open>a, .navbar-default .navbar-nav>.open>a:focus, .navbar-default .navbar-nav>.open>a:hover {
    color: #edf7f3;
    background: none;
  }
  .navbar-default .navbar-nav>.active>a, .navbar-default .navbar-nav>.active>a:focus, .navbar-default .navbar-nav>.active>a:hover {
    color: #757C83;;
    background: none;
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
    margin-top: 20px;
    width: 75%;
    margin: auto;
    background: #95cfb7;
    color: #edf7f3;
    border: 1px solid #757C83;
    border-radius: 20px 20px;
  }
  span.glyphicon{
    color: #686e77;
  }
  .service-button,
  .user-button{
    margin: 10px;
  }
  input{
    background: #edf7f3;
    color: #686e77;
    border: 1px solid #686e77;
  }
  .about-jumbotron,
  .dogwalking-jumbotron{
    background: #95cacf;
    text-align: center;
  }
  .resize-photo{
    height: 100px;
    width: 100px;
    margin: 10px;
    display: inline-block;
  }
  .list-group-item{
    margin-left: 14%;
    margin-right: 14%;

  }
  .dog-walking-li{
    font-size: 1.3em;
    color: #686e77;
    text-align: left;
  }
`
