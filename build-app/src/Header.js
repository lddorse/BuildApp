import React from "react";


export const Header = (props) => {
        return(
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="google.com">{props.homeLink}</a>
                    </div>
                <ul class="nav navbar-nav">
      <li class="active"><a href="google.com">Home</a></li>
      <li><a href="google.com">Page 1</a></li>
      <li><a href="google.com">Page 2</a></li>
      <li><a href="google.com">Page 3</a></li>
    </ul>
  </div>
</nav>
  
        );
    
}

export default Header