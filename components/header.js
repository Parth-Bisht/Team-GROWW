const header = () => {
    return `    <div id="navbar">
    <div id="logoLinks">
        <div id="logo">
            <img src="https://hhooww.com/wp-content/uploads/2019/03/Groww-Mutual-Fund-App-Review.jpg"
                alt="logo">
        </div>
        <div id="navlinks">
            <a href="#">Explore</a>
            <a href="#">Investments</a>
        </div>
    </div>
    <div id="searchlinks">
        <div id="searchbox">
            <input type="text" placeholder="What are you looking for today?">
        </div>
        <div id="profilelinks">
            <i class="fa-regular fa-bell leftmargin"></i>
            <i class="fa-solid fa-wallet leftmargin"></i>
            <i class="fa-brands fa-opencart leftmargin"></i>
            <div class="leftmargin" id="profile">

                <img src="https://avatars.githubusercontent.com/u/55929607?v=4" alt="">
            </div>
            <i style="font-size: 14px;margin-left: 3px;" class="fa-solid fa-chevron-down"></i>
        </div>
    </div>
</div>
<div id="facilities">
    <div>Stocks</div>
    <div class="mleft">Mutual Funds</div>
    <div class="mleft">Fixed Deposits</div>
    <div class="mleft">US Stocks</div>
</div>`
}

export default header;