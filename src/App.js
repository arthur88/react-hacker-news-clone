import React from "react";

import Header from "./global/Header";
import Footer from "./global/Footer";

import Main from "./pages/Main";


const App = () => {

  return(

    <React.Fragment>
     <Header />
     <main>
     <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Main />
          </div>
        </div>
    </div>
    </main>
    <Footer />
    </React.Fragment>
  );


}

export default App;