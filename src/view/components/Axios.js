import axios from "axios";
import React from "react";
import { Component } from "react";
class Axios extends Component {

    // // PROMISE AND API CALL
    // makeAxiosCall=()=>{
    //     console.log("Button CLicked");
    //     let configAxios={
    //         method:'get',
    //         url:'https://api.publicapis.org/entries'
    //     }
    //     const promiseObj=axios(configAxios);
    //     promiseObj.then((res)=>{
    //         console.log(res);
    //         console.log(res.data);
    //     })
    // }
    // PROMISE API CALL AND HANDLE ERROR 
    // makeAxiosCall=()=>{
    //     console.log("Button CLicked");
    //     let configAxios={
    //         method:'get',
    //         url:'https://api.publicapis.org/entries'
    //     }
    //     const promiseObj=axios(configAxios);
    //     promiseObj.then((res)=>{
    //         console.log(res);
    //         console.log(res.data);
    //     }).catch((error)=>{
    //         console.log(error)
    //     })
    // }

    // PROMISE API CALL AND HANDLE ERROR AND make a then call to execute even if the error found or data found for both 
    // makeAxiosCall=()=>{
    //     console.log("Button CLicked");
    //     let configAxios={
    //         method:'get',
    //         url:'https://api.publicapis.org/entries'
    //     }
    //     const promiseObj=axios(configAxios);
    //     promiseObj.then((res)=>{
    //         console.log(res);
    //         console.log(res.data);
    //     }).catch((error)=>{
    //         console.log(error)
    //     }).then(()=>{
    //         console.log("clean")
    //         console.log("THis will excute for both error and data ")
    //     })
    // }

    // USING ASYNC AND AWAIT with axios 
    makeAxiosCall = async () => {
        console.log("Button CLicked");
        let configAxios = {
            method: 'get',
            url: 'https://api.publicapis.org/entries'
        }


        try {
            const promiseObj = await axios(configAxios);
            // console.log(promiseObj);
            // console.log();
            const data = promiseObj.data.entries;

            this.setState({ entries: data }, () => {
                // console.log(this.state.entries);
            });



        }
        catch (error) {
            console.log(error)
        }

    }
    componentDidUpdate() {
        // console.log("Component updated")
        // console.log(this.state.enteries)
    }
    constructor(props) {
        super(props)
        this.state = {
            entries: []
        }
    }
    render() {
        return <>

            <h3>To demonstate Further We are Making an Axios Call by the button Click</h3>
            <p>Axios gets data from the Api and turns them into JSON format.</p>
            <button type="button" class="btn btn-outline-primary" onClick={this.makeAxiosCall}>Get Data</button>
            <br></br>
            <br></br>
            <div class="table-responsive table-pagination">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Category</th>
                            <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.entries.slice(0, 5).map((entry, index) => (
                            
                            <tr>
                                <th scope="row">{index+1}</th>
                                <td>{entry.API}</td>
                                <td>{entry.Category}</td>
                                <td>{entry.Description}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>

        </>
    }
}
export default Axios