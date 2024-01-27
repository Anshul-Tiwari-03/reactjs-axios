import React from "react";
export default function Home() {

    return <>
        <br></br>
        <div className="container">
            <h2>Hello welcome to the React Axios Page  </h2>

            <p>Axios is a JavScript library used to make Http  requests from node.js and XML-HTTP Requests from the browser and it supports the Promise Api that is native to ES6</p>
            <b>Start with adding this library </b><p style={{ color: "red" }}><li>npm install axios</li></p>
            <h4 style={{ color: "green" }}>Axios Config:     </h4>
            <div className="row">
                <div className="col-sm">
                    <div class="card alert-success">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"></img> */}

                        <div class="card-body">
                            <p class="card-text">
                                {"config = { "}<br></br>
                                &nbsp;&nbsp;{"method : 'method',"}<br></br>
                                &nbsp;&nbsp;{"url : 'url',"}<br></br>
                                &nbsp;&nbsp;{"data : {},"}<br></br>
                                &nbsp;&nbsp;{"responseType : 'json' "}<br></br>
                                {"}"}<br></br>

                                {"axios(config);"}<br></br>

                            </p>

                        </div>
                    </div>

                </div>
                <div className="col-sm">
                    <div class="card alert-warning" >
                        {/* <img class="card-img-top" src="..." alt="Card image cap"></img> */}

                        <div class="card-body">
                            <p class="card-text">
                                {"config = { "}<br></br>
                                &nbsp;&nbsp;{"method : 'get', //default"}<br></br>
                                &nbsp;&nbsp;{"url : '/user',"}<br></br>
                                &nbsp;&nbsp;{"baseURL : 'https://some-domain.com/api',"}<br></br>
                                &nbsp;&nbsp;{"headers : {'X-Requested-With':'XMLHttpRequest'},"}<br></br>
                                &nbsp;&nbsp;{"params : { ID:1 } "}<br></br>
                                {"}"}<br></br>

                                {"axios(config);"}<br></br>

                            </p>

                        </div>
                    </div>

                </div>
                
            </div>

            <h4 style={{ color: "green" }}>Shorthand Request Methods:     </h4>
            <div className="row">
                <div className="col-sm">
                    <div class="card alert-success">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"></img> */}

                        <div class="card-body">
                            <p class="card-text">
                            {"axios.request( config )  // configuration"}<br></br>
                            {"axios.get( url , config )  // method is get no need to specify in config"}<br></br>
                            {"axios.delete( url , config )  // delete method "}<br></br>
                            {"axios.head( url , config )  // head request"}<br></br>
                            {"axios.options( url , config )  // options request"}<br></br>
                            {"axios.post( url ,data ,config )  // post request"}<br></br>
                            {"axios.put( url , data config )  // put request"}<br></br>
                            {"axios.patch( url , data ,config )  // patch request"}<br></br>
                                
                            </p>

                        </div>
                    </div>

                </div>
                <div className="col-sm">
                    <div class="card alert-warning" >
                        {/* <img class="card-img-top" src="..." alt="Card image cap"></img> */}

                        <div class="card-body">
                            <p class="card-text">
                                {"config = { "}<br></br>
                                &nbsp;&nbsp;{"method : 'get', //default"}<br></br>
                                &nbsp;&nbsp;{"url : '/user',"}<br></br>
                                &nbsp;&nbsp;{"baseURL : 'https://some-domain.com/api',"}<br></br>
                                &nbsp;&nbsp;{"headers : {'X-Requested-With':'XMLHttpRequest'},"}<br></br>
                                &nbsp;&nbsp;{"params : { ID:1 } "}<br></br>
                                {"}"}<br></br>

                                {"axios(config);"}<br></br>

                            </p>

                        </div>
                    </div>

                </div>
                
            </div>


        </div>
    </>
}