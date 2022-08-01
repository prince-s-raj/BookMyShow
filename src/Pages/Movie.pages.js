import React from "react";

const launchRazorPay = () =>{
    let options = {
        key: "rzp_test_huwkW2iDUynfpV",
        amount: 20000,
        currency: "LKR",
        name: "BMS",
        decription: "Movies online purchase",
        image: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190913114721/Logo-Bookmyshow.png",
        handler: () =>{ 
            alert("Payment Done"); 
        },
        theme: {color: "#c4242d"}
    };

    let rzp = new window.Razorpay(options)
    rzp.open();
};

const Movie = () =>{
    return(
        <>
            <div className="w-full h-full">
                <img className="w-full h-full" src = "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/valimai-et00132669-13-07-2021-02-12-59.jpg"/>
            </div>
            <button onClick = {launchRazorPay} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Book Now
            </button> 
        </>
    )
};

export default Movie;