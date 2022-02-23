import React from "react";
import Information from "../Information";

function Homepage() {

    return (
        <div uk-filter="target: .js-filter">

            <ul class="uk-subnav uk-subnav-pill uk-flex uk-flex-center">
                <li class="uk-active" uk-filter-control=''><a href="#">All Products</a></li>
                <li uk-filter-control="[data-color='white']"><a href="#">Food</a></li>
                <li uk-filter-control="[data-color='blue']"><a href="#">Toys</a></li>
                <li uk-filter-control="[data-color='black']"><a href="#">Accessories</a></li>
                <li uk-filter-control="[data-color='Health']"><a href="#">Health</a></li>
            </ul>

            <ul class="js-filter uk-child-width-1-3 uk-child-width-1-3@m uk-text-center" uk-grid=''>
                <li data-color="white">
                    <div class="" uk-grid=''>
                        <div>
                            <div class="uk-card uk-card-default">
                                <div class="uk-card-media-top">
                                    <img src="" alt="" />
                                </div>
                                <div class="uk-card-body">
                                    <h3 class="uk-card-title">Blue Buffalo Tastefuls</h3>
                                    <p>Natural Pate Wet Cat Food</p>
                                    <a href="#Blue-Buffalo-tastefuls" uk-toggle=''>More Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li data-color="blue">
                <div class="" uk-grid=''>
                        <div>
                            <div class="uk-card uk-card-default">
                                <div class="uk-card-media-top">
                                    <img src="" alt="" />
                                </div>
                                <div class="uk-card-body">
                                    <h3 class="uk-card-title">Blue Buffalo Tastefuls</h3>
                                    <p>Natural Pate Wet Cat Food</p>
                                    <a href="#Blue-Buffalo-tastefuls" uk-toggle=''>More Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li data-color="white">
                <div class="" uk-grid=''>
                        <div>
                            <div class="uk-card uk-card-default">
                                <div class="uk-card-media-top">
                                    <img src="" alt="" />
                                </div>
                                <div class="uk-card-body">
                                    <h3 class="uk-card-title">Blue Buffalo Life</h3>
                                    <p>Natural Adult Dry Small Dog Food</p>
                                    <a href="#Blue-Buffalo-tastefuls" uk-toggle=''>More Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li data-color="white">
                <div class="" uk-grid=''>
                        <div>
                            <div class="uk-card uk-card-default">
                                <div class="uk-card-media-top">
                                    <img src="" alt="" />
                                </div>
                                <div class="uk-card-body">
                                    <h3 class="uk-card-title">Cesar Wet Dog Food</h3>
                                    <p>Variety Pack</p>
                                    <a href="#Blue-Buffalo-tastefuls" uk-toggle=''>More Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li data-color="black">
                <div class="" uk-grid=''>
                        <div>
                            <div class="uk-card uk-card-default">
                                <div class="uk-card-media-top">
                                    <img src="" alt="" />
                                </div>
                                <div class="uk-card-body">
                                    <h3 class="uk-card-title">Blue Buffalo Tastefuls</h3>
                                    <p>Natural Pate Wet Cat Food</p>
                                    <a href="#Blue-Buffalo-tastefuls" uk-toggle=''>More Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li data-color="black">
                <div class="" uk-grid=''>
                        <div>
                            <div class="uk-card uk-card-default">
                                <div class="uk-card-media-top">
                                    <img src="" alt="" />
                                </div>
                                <div class="uk-card-body">
                                    <h3 class="uk-card-title">Blue Buffalo Tastefuls</h3>
                                    <p>Natural Pate Wet Cat Food</p>
                                    <a href="#Blue-Buffalo-tastefuls" uk-toggle=''>More Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li data-color="blue">
                <div class="" uk-grid=''>
                        <div>
                            <div class="uk-card uk-card-default">
                                <div class="uk-card-media-top">
                                    <img src="" alt="" />
                                </div>
                                <div class="uk-card-body">
                                    <h3 class="uk-card-title">Blue Buffalo Tastefuls</h3>
                                    <p>Natural Pate Wet Cat Food</p>
                                    <a href="#Blue-Buffalo-tastefuls" uk-toggle=''>More Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li data-color="black">
                <div class="" uk-grid=''>
                        <div>
                            <div class="uk-card uk-card-default">
                                <div class="uk-card-media-top">
                                    <img src="" alt="" />
                                </div>
                                <div class="uk-card-body">
                                    <h3 class="uk-card-title">Blue Buffalo Tastefuls</h3>
                                    <p>Natural Pate Wet Cat Food</p>
                                    <a href="#Blue-Buffalo-tastefuls" uk-toggle=''>More Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li data-color="blue">
                <div class="" uk-grid=''>
                        <div>
                            <div class="uk-card uk-card-default">
                                <div class="uk-card-media-top">
                                    <img src="" alt="" />
                                </div>
                                <div class="uk-card-body">
                                    <h3 class="uk-card-title">Blue Buffalo Tastefuls</h3>
                                    <p>Natural Pate Wet Cat Food</p>
                                    <a href="#Blue-Buffalo-tastefuls" uk-toggle=''>More Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li data-color="white">
                <div class="" uk-grid=''>
                        <div>
                            <div class="uk-card uk-card-default">
                                <div class="uk-card-media-top">
                                    <img src="" alt="" />
                                </div>
                                <div class="uk-card-body">
                                    <h3 class="uk-card-title">Purina Friskies Gravy</h3>
                                    <p>Wet cat food Variety Pack</p>
                                    <a href="#Blue-Buffalo-tastefuls" uk-toggle=''>More Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li data-color="blue">
                <div class="" uk-grid=''>
                        <div>
                            <div class="uk-card uk-card-default">
                                <div class="uk-card-media-top">
                                    <img src="" alt="" />
                                </div>
                                <div class="uk-card-body">
                                    <h3 class="uk-card-title">Blue Buffalo Tastefuls</h3>
                                    <p>Natural Pate Wet Cat Food</p>
                                    <a href="#Blue-Buffalo-tastefuls" uk-toggle=''>More Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li data-color="black">
                <div class="" uk-grid=''>
                        <div>
                            <div class="uk-card uk-card-default">
                                <div class="uk-card-media-top">
                                    <img src="" alt="" />
                                </div>
                                <div class="uk-card-body">
                                    <h3 class="uk-card-title">Blue Buffalo Tastefuls</h3>
                                    <p>Natural Pate Wet Cat Food</p>
                                    <a href="#Blue-Buffalo-tastefuls" uk-toggle=''>More Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div id="Blue-Buffalo-tastefuls" uk-modal=''>
                <div class="uk-modal-dialog uk-modal-body">
                    <h2 class="uk-modal-title">Blue Buffalo Tastefuls</h2>
                    <p>Natural Pate Wet Cat Food</p>
                    <p class="uk-text-right">
                        <button class="uk-button uk-button-default uk-modal-close" type="button">Back</button>
                        <button class="uk-button uk-button-primary" type="button">Add To Cart</button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Homepage;